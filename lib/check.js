// check.js: the measurable rules from CLAUDE.md. Run after a build: npx @11ty/eleventy && node lib/check.js
// Exits with code 1 on any error, so nothing broken gets pushed.
import fs from "node:fs";
import path from "node:path";
import * as yaml from "js-yaml";
import sharp from "sharp";

const errors = [];
const warn = [];
const load = (f) => yaml.load(fs.readFileSync(f, "utf8"));
const genres = new Set(load("src/_data/genreNav.yml").map((g) => g.slug));
const platforms = new Set(load("src/_data/platformNav.yml").map((p) => p.slug));
const hubTypes = new Set(load("src/_data/hubTypes.yml").map((h) => h.slug));
const games = load("src/_data/games.yml");
const topics = new Set(load("src/_data/topicNav.yml").map((t) => t.slug));

// Stock phrases that make copy read as generated filler (see CLAUDE.md, "Writing")
const SLOP = ["in the ever-evolving", "ever-changing world", "it's worth noting", "it is worth noting", "it's important to note", "delve into", "dive into", "game-changer", "game changer", "takes it to the next level", "next level", "elevate your", "unleash", "embark on", "a testament to", "whether you're a seasoned", "seasoned veteran or", "something for everyone", "only time will tell", "stay tuned", "without further ado", "in conclusion", "all in all", "buckle up", "look no further", "breathtaking", "jaw-dropping", "immersive experience", "unforgettable experience", "rich tapestry", "boasts", "a must-play", "fans will be thrilled", "exciting times",
  "if you only read", "the part worth", "worth flagging", "worth watching", "changes the math", "the key point", "middle ground", "here's why", "the bottom line", "in short,", "let's ", "whether you're", "it's not just", "not just about", "more than just", "at the end of the day", "the real story", "here's the thing", "make no mistake", "needless to say", "in a nutshell", "the good news is", "the bad news is"];
const hostOf = (u) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return ""; } };

for (const dir of ["src/content/news", "src/content/hub"]) {
  const defaults = JSON.parse(fs.readFileSync(path.join(dir, path.basename(dir) + ".11tydata.json"), "utf8"));
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".md"))) {
    const src = fs.readFileSync(path.join(dir, f), "utf8");
    const [, head, ...rest] = src.split(/^---$/m);
    const fm = { ...defaults, ...yaml.load(head) };
    const body = rest.join("---");
    const isHub = dir.endsWith("hub");
    const e = (m) => errors.push(`${dir.split("/").pop()}/${f}: ${m}`);

    // Front matter
    if (!fm.title) e("missing title");
    if (!fm.seo_title || fm.seo_title.length < 30 || fm.seo_title.length > 60) e(`seo_title must be 30–60 characters (now ${(fm.seo_title || "").length})`);
    if (!fm.summary || fm.summary.length < 120 || fm.summary.length > 160) e(`summary must be 120–160 characters (now ${(fm.summary || "").length})`);
    if (!fm.keyword) e("missing keyword");
    if (!fm.published_at || isNaN(new Date(fm.published_at))) e("missing or invalid published_at");
    if (new Date(fm.published_at) > new Date(Date.now() + 36e5)) e("published_at is in the future");
    if (!["confirmed", "reported"].includes(fm.status)) e("status must be confirmed or reported");
    if (fm.status === "reported" && !/reported|rumou?r|leak/i.test(fm.title)) e("reported story: the headline must say it is unconfirmed");
    // roundup: true (store awards, multi-game lists) may leave genres empty; any genre given must still be valid
    if ((!fm.roundup && !(fm.genres || []).length) || (fm.genres || []).some((g) => !genres.has(g))) e(`genres must be from genreNav.yml (got ${JSON.stringify(fm.genres)})`);
    if (!(fm.platforms || []).length || fm.platforms.some((p) => !platforms.has(p))) e(`platforms must be from platformNav.yml (got ${JSON.stringify(fm.platforms)})`);
    for (const t of fm.topics || []) if (!topics.has(t)) e(`unknown topic "${t}": must be in topicNav.yml`);
    for (const t of fm.titles || []) if (!games[t]) e(`unknown game "${t}": add it to games.yml first`);
    if (isHub && !hubTypes.has(fm.hub_type)) e(`hub_type must be from hubTypes.yml (got ${fm.hub_type})`);

        // No "we don't know" filler (2026-11-24)
    { const UNK = /\b(?:notes?|release|announcement|post|press release|patch notes)\b[^.]{0,40}\b(?:don't|doesn't|do not|does not)\s+(?:give|say|list|name|include|mention|explain|break down|put)|\bhas(?:n't| not) (?:said|announced|given|listed|confirmed)|\bno word on\b|\bnot (?:yet )?(?:dated|announced) in\b/i;
      const m = body.match(UNK); if (m) e(`"we don't know" filler: "${m[0]}". Write what is known, or keep the story as a draft`); }

// Sources: at least one primary, official source
    const prim = (fm.sources || []).filter((s) => s.primary && /^https?:\/\//.test(s.url));
    if (!prim.length) e("no primary source");
    const BANNED = ["pocketgamer.com", "gamingonphone.com", "dotesports.com", "gematsu.com", "siliconera.com", "ign.com", "gamerant.com", "screenrant.com", "thegamer.com", "game8.co", "fandom.com", "wikipedia.org", "reddit.com", "bluestacks.com", "pockettactics.com", "insider-gaming.com", "polygon.com", "kotaku.com"];
    for (const s of prim) if (BANNED.some((b) => hostOf(s.url).endsWith(b))) e(`primary source is a news site or wiki, not an official source: ${hostOf(s.url)}`);

    // Image: real, credited, big enough
    if (!fm.image) e("no image: this article will not be published");
    else {
      if (!fm.image_credit || !fm.image_source || !fm.image_alt) e("image needs image_credit, image_source and image_alt");
      const file = path.join("src", fm.image);
      if (!fs.existsSync(file)) e(`image file missing: ${file}`);
      else { const m = await sharp(file).metadata(); if (m.width < 1000) e(`image is ${m.width}px wide (minimum 1000)`); }
      if (fm.image_status === "candidate") warn.push(`${f}: image is an unreviewed candidate (image_status: candidate)`);
    }

    // Body
    const text = body.replace(/\{%[\s\S]*?%\}|\{\{[\s\S]*?\}\}/g, " ").replace(/<[^>]+>/g, " ");
    const prose = text.split("\n").filter((l) => !/^\s*\|/.test(l)).join("\n"); // tables don't count as words
    const words = prose.replace(/[#*_>`|-]/g, " ").split(/\s+/).filter(Boolean).length;
    const h2 = (body.match(/^## /gm) || []).length;
    const short = fm.type === "short";
    const min = isHub ? 250 : short ? 150 : 300;
    if (words < min) e(`too short: ${words} words of prose (minimum ${min} for ${isHub ? "a hub page" : short ? "a short story" : "a news story"})`);
    if (!isHub && !short && words > 1100) e(`too long for news: ${words} words (split it or make it a hub page)`);
    if (!short && h2 < 2) e(`needs at least 2 H2 subheadings (has ${h2})`);
    if (!short && (!fm.tldr || fm.tldr.length < 2 || fm.tldr.length > 5)) e("tldr needs 2–5 points");
    if (fm.faq && fm.faq.length === 1) e("faq with a single question: drop it or add real ones");
    const all = (fm.title + " " + fm.summary + " " + (fm.tldr || []).join(" ") + " " + body);
    if (all.includes("—")) e("em dash found: rewrite the sentence (house style: no em dashes)");
    const low = all.toLowerCase();
    // allow_phrases: official names that contain a listed phrase (e.g. the event "LEGO Unleashed")
    for (const ph of SLOP) if (low.includes(ph) && !(fm.allow_phrases || []).includes(ph)) e(`stock phrase: "${ph}"`);
    // Bold: only for list-item labels ("- **Label**: ...") and at most one per TL;DR bullet.
    for (const line of body.split("\n")) {
      if (/^\s*\|/.test(line)) continue;
      const label = line.match(/^- \*\*[^*]+\*\*/);
      const rest = label ? line.slice(label[0].length) : line;
      if (/\*\*[^*]+\*\*|<b>|<strong>/.test(rest)) { e(`bold inside running text (bold is only for list labels): "${rest.trim().slice(0, 60)}"`); break; }
    }
    for (const t of fm.tldr || []) if ((t.match(/<b>/g) || []).length > 1) e(`more than one bold phrase in a TL;DR bullet: "${t.slice(0, 50)}"`);
    if (/\bnot (just|only|merely) [^.]{1,60}, but\b/i.test(body)) e('"not just X, but Y" construction');
    // a colon inside an official game name ("Honkai: Star Rail", "Reverse: 1999") is not a colon-built subhead
    const colonNames = Object.values(games).map((g) => g.name).filter((n) => n && n.includes(":"));
    const colonHeads = (body.match(/^## .*$/gm) || []).filter((h) => colonNames.reduce((x, n) => x.split(n).join(""), h).includes(":"));
    if (colonHeads.length > 1) e("more than one subheading built around a colon");
    if (/\b(we played|in our playthrough|hands-on|we tested)\b/i.test(body) && !fm.hands_on) e("hands-on claim without hands_on: true (we only write impressions of games we actually played)");
  }
}

// Built site: every internal link resolves, and no Hungarian leaked from the template
if (!fs.existsSync("_site")) errors.push("_site missing: run npx @11ty/eleventy first");
else {
  const htmlFiles = [];
  const walk = (d) => { for (const x of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, x.name); if (x.isDirectory()) walk(p); else if (p.endsWith(".html")) htmlFiles.push(p); } };
  walk("_site");
  const HU = /[őűŐŰ]|\b(hírek|összes|főoldal|rovat|műfaj|forrás|szerkesztő|megjelent|olvasási|kép:)\b/i;
  for (const p of htmlFiles) {
    const html = fs.readFileSync(p, "utf8");
    for (const m of html.matchAll(/href="([^"#?]+)/g)) {
      const h = m[1];
      if (/^(https?:|mailto:|data:)/.test(h) || /['+]/.test(h)) continue; // external, or a link built in inline JS
      const target = path.normalize(path.join(path.dirname(p), h));
      if (!fs.existsSync(target)) errors.push(`${p}: broken link ${h}`);
    }
    const visible = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>/g, " ");
    const hit = visible.match(HU);
    if (hit) errors.push(`${p}: Hungarian text left over from the template: "${hit[0]}"`);
  }
}

// Legal notice placeholders must be filled before launch
{ const site = fs.readFileSync("src/_data/site.js", "utf8"); const commercial = /commercial:\s*true/.test(site); const ph = (site.match(/"\[[A-Z][^"\]]*\]"/g) || []).filter((x) => commercial || !/ADDRESS\]/.test(x)); if (ph.length === 0) {} else warn.push(`site.js: legal details still placeholders (${ph.length}): ${ph.join(", ")}. Fill them in before launch.`); }
if (warn.length) console.log("check.js warnings:\n  " + warn.join("\n  "));
if (errors.length) { console.error("check.js: " + errors.length + " error(s)\n  " + errors.join("\n  ")); process.exit(1); }
console.log("check.js: 0 errors");
