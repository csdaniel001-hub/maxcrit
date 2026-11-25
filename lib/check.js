// check.js: the measurable rules from CLAUDE.md. Run after a build: npx @11ty/eleventy && node lib/check.js
// Exits with code 1 on any error, so nothing broken gets pushed.
import fs from "node:fs";
import path from "node:path";
import * as yaml from "js-yaml";
import sharp from "sharp";
import { spawnSync } from "node:child_process";

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
    if ((fm.tldr || []).some((x) => String(x).includes("**"))) e("tldr uses **markdown bold**, which is not rendered there: use <b>...</b>");
    for (const t of fm.titles || []) if (!games[t]) e(`unknown game "${t}": add it to games.yml first`);
    if (isHub && !hubTypes.has(fm.hub_type)) e(`hub_type must be from hubTypes.yml (got ${fm.hub_type})`);

        // No "we don't know" filler (2026-11-24)
    { const UNK = /\b(?:notes?|release|announcement|post|press release|patch notes)\b[^.]{0,40}\b(?:don't|doesn't|do not|does not)\s+(?:give|say|list|name|include|mention|explain|break down|put)|\bhas(?:n't| not) (?:said|announced|given|listed|confirmed)|\bno word on\b|\bnot (?:yet )?(?:dated|announced) in\b/i;
      const m = body.match(UNK); if (m) e(`"we don't know" filler: "${m[0]}". Write what is known, or keep the story as a draft`); }

// Sources: at least one primary, official source
    const prim = (fm.sources || []).filter((s) => s.primary && /^https?:\/\//.test(s.url));
    // Redeem-code pages (Daniel, 2026-11-24): codes come from public code trackers, so no official primary source is required,
    // but the page must list its sources and carry the "codes may not work" note.
    const isCodes = isHub && fm.hub_type === "codes";
    if (isCodes) { if (!(fm.sources || []).length) e("codes page needs its sources"); if (!/may (already )?(be|have been) deactivated|may not work/i.test(body)) e("codes page needs the note that some codes may not work"); }
    else if (!prim.length) e("no primary source");
    const BANNED = ["pocketgamer.com", "gamingonphone.com", "dotesports.com", "gematsu.com", "siliconera.com", "ign.com", "gamerant.com", "screenrant.com", "thegamer.com", "game8.co", "fandom.com", "wikipedia.org", "reddit.com", "bluestacks.com", "pockettactics.com", "insider-gaming.com", "polygon.com", "kotaku.com"];
    // a product's own support site (support.bluestacks.com) is an official source for guides about that product
    for (const s of prim) if (!hostOf(s.url).startsWith("support.") && BANNED.some((b) => hostOf(s.url).endsWith(b))) e(`primary source is a news site or wiki, not an official source: ${hostOf(s.url)}`);

    // Image: real, credited, big enough
    if (!fm.image) e("no image: this article will not be published");
    else {
      if (!fm.image_credit || !fm.image_source || !fm.image_alt) e("image needs image_credit, image_source and image_alt");
      const file = path.join("src", fm.image);
      if (!fs.existsSync(file)) e(`image file missing: ${file}`);
      else { const m = await sharp(file).metadata(); if (m.width < 1000) e(`image is ${m.width}px wide (minimum 1000)`); }
      // Editorial standard: Tier 3 pages (builds, or tier: 3) need a review date and a verification record
      const slug = f.replace(/\.md$/, "");
      const tier3 = fm.tier === 3 || (isHub && fm.hub_type === "builds");
      if (tier3 && !fm.review_by) e("tier 3 page needs review_by (date or event-based review)");
      if (tier3 && !fs.existsSync(`verification/${slug}.md`)) e(`tier 3 page needs a verification record: verification/${slug}.md`);
      if (fm.review_by && new Date(fm.review_by) < new Date()) warn.push(`${f}: review due since ${new Date(fm.review_by).toISOString().slice(0, 10)}`);
      if (fm.image_status === "candidate") warn.push(`${f}: image is an unreviewed candidate (image_status: candidate)`);
    }

    // Body
    const text = body.replace(/\{%[\s\S]*?%\}|\{\{[\s\S]*?\}\}/g, " ").replace(/<[^>]+>/g, " ");
    // tables don't count as words, except on patch trackers, where the change tables are the content
    const prose = (isHub && ["patch-trackers", "events", "banners"].includes(fm.hub_type)) ? text : text.split("\n").filter((l) => !/^\s*\|/.test(l)).join("\n");
    const words = prose.replace(/[#*_>`|-]/g, " ").split(/\s+/).filter(Boolean).length;
    const h2 = (body.match(/^## /gm) || []).length;
    const short = fm.type === "short";
    const min = isHub ? (["patch-trackers", "events", "banners"].includes(fm.hub_type) ? 200 : 250) : short ? 150 : 300; // patch trackers: compact change lists, no padding
    if (words < min) e(`too short: ${words} words of prose (minimum ${min} for ${isHub ? "a hub page" : short ? "a short story" : "a news story"})`);
    // Build completeness spec (docs/build-page-spec.md, 2026-11-25): warn on existing builds, fail new ones
    if (isHub && fm.hub_type === "builds") {
      const heads = (body.match(/^## .*$/gm) || []).join("\n").toLowerCase();
      const need = { "kit overview": /how .* (plays|works|deals|fights|supports|heals)|kit|playstyle|what .* does/, stats: /stat/, weapons: /weapon|light cone|w-engine|rectifier|bow|claymore|catalyst|sword|polearm/, sets: /artifact|relic|echo|drive disc|ornament/, teams: /team/, rotation: /rotation|how to play|gameplay|turn order/, "skill priority": /talent|trace|forte|skill/, duplicates: /constellation|eidolon|sequence|resonance chain|mindscape/, materials: /material|ascension|farm/ };
      const omit = (fm.spec_omit || []).map((x) => String(x).toLowerCase());
      const miss = Object.entries(need).filter(([k, rx]) => !rx.test(heads) && !omit.includes(k)).map(([k]) => k);
      // Hard failure only for builds written to the spec (new, or marked build_spec: 1 when expanded), so routine edits to old builds never block a deploy
      const isNew = new Date(fm.published_at) > new Date("2026-11-25T16:00:00Z") || fm.build_spec === 1;
      const msgs = [];
      if (miss.length) msgs.push(`build missing spec sections: ${miss.join(", ")}`);
      if (words < 700) msgs.push(`build has ${words} words of prose (spec target 900+, floor 700)`);
      for (const m of msgs) (isNew ? e : (x) => warn.push(`${dir.split("/").pop()}/${f}: ${x}`))(m);
    }
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
for (const [s, g] of Object.entries(games)) if (!g.noicon && !fs.existsSync(`src/assets/img/icons/${s}.webp`)) errors.push(`games.yml: ${s} has no icon (src/assets/img/icons/${s}.webp); add the official app icon or set noicon: true`);
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
      let target = path.normalize(h.startsWith("/") ? path.join("_site", h) : path.join(path.dirname(p), h));
      if (h.endsWith("/") || h === "." || h === "./") target = path.join(target, "index.html");
      else if (!path.extname(target) && fs.existsSync(target + ".html")) target += ".html";
      if (!fs.existsSync(target)) errors.push(`${p}: broken link ${h}`);
    }
    const visible = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>/g, " ");
    const hit = visible.match(HU);
    if (hit) errors.push(`${p}: Hungarian text left over from the template: "${hit[0]}"`);
  }
}


// Homepage and feed regression checks (2026-11-25): news surfaces may only link news, the ticker only full news,
// and the featured carousel must spread across games.
if (fs.existsSync("_site/index.html")) {
  const shorts = new Set(fs.readdirSync("src/content/news").filter((f) => /\ntype:\s*short\s*\n/.test(fs.readFileSync("src/content/news/" + f, "utf8"))).map((f) => f.replace(/\.md$/, "")));
  const hrefs = (html) => [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]).filter((h) => !/^(https?:|#|mailto:)/.test(h));
  const isNews = (h) => /(^|\/)news\/[^/.]+(\.html)?$/.test(h);
  const slugOf = (h) => h.replace(/^.*\//, "").replace(/\.html$/, "");
  const grab = (html, re) => { const m = html.match(re); return m ? m[1] : null; };
  const home = fs.readFileSync("_site/index.html", "utf8");
  const zones = {
    "headline ticker": grab(home, /<div class="gz-marq"[^>]*>([\s\S]*?)<\/div><\/div>/),
    "featured carousel": grab(home, /<div class="hz-stage">([\s\S]*?)<\/div>\s*<div class="hz-ctl">/),
    "Latest news panel": grab(home, /<aside class="cc-news[^"]*"[^>]*>([\s\S]*?)<\/aside>/),
    "Latest news feed": grab(home, /<ol id="gzAll">([\s\S]*?)<\/ol>/),
  };
  for (const [zone, html] of Object.entries(zones)) {
    if (html === null) { errors.push(`index.html: could not find the ${zone} (homepage markup changed? update lib/check.js)`); continue; }
    const links = hrefs(html).filter((h) => !/(^|\/)news(\.html)?$/.test(h));
    const bad = links.filter((h) => !isNews(h));
    if (bad.length) errors.push(`index.html: ${zone} links non-news pages: ${bad.slice(0, 3).join(", ")}`);
    if (zone === "headline ticker") { const s = links.filter((h) => shorts.has(slugOf(h))); if (s.length) errors.push(`index.html: headline ticker shows short news: ${s.slice(0, 3).join(", ")}`); }
  }
  const slides = [...(zones["featured carousel"] || "").matchAll(/class="hz-slide[^"]*" href="([^"]+)"/g)].map((m) => slugOf(m[1]));
  const gamesOf = new Set(slides.map((s) => { const f = "src/content/news/" + s + ".md"; return fs.existsSync(f) ? (fs.readFileSync(f, "utf8").match(/\ntitles:\s*\n-\s*(\S+)/) || [])[1] || s : s; }));
  if (slides.length > 1 && gamesOf.size < Math.min(3, slides.length)) errors.push(`index.html: featured carousel covers only ${gamesOf.size} game(s) across ${slides.length} slides`);
  for (const f of ["_site/news.html", "_site/feed.xml"]) {
    if (!fs.existsSync(f)) continue;
    const html = fs.readFileSync(f, "utf8");
    const items = f.endsWith(".xml") ? [...html.matchAll(/<link>([^<]+)<\/link>/g)].map((m) => m[1]).slice(1) : hrefs(grab(html, /<div class="lr-main">([\s\S]*?)<\/section>/) || html);
    const bad = items.filter((h) => /(^|\/)hub\/[a-z-]+\/[^/]+/.test(h));
    if (bad.length) errors.push(`${f}: news archive or feed lists hub pages: ${bad.slice(0, 3).join(", ")}`);
  }
}


// Facebook / Open Graph regression checks (2026-11-25): every article needs a title, description, canonical og:url,
// and an absolute HTTPS og:image that exists locally with the declared size.
{
  const dims = (f) => { const b = fs.readFileSync(f); if (b[0] === 0x89) return [b.readUInt32BE(16), b.readUInt32BE(20)]; let i = 2; while (i < b.length && b[i] === 0xff) { const m = b[i + 1], l = b.readUInt16BE(i + 2); if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)]; i += 2 + l; } return null; };
  const pages = [];
  const walkOg = (d) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walkOg(p); else if (/^_site\/(news|hub\/[a-z-]+)\/[^/]+\.html$/.test(p)) pages.push(p); } };
  if (fs.existsSync("_site/news")) { walkOg("_site/news"); walkOg("_site/hub"); }
  let ogBad = 0;
  for (const p of pages) {
    const h = fs.readFileSync(p, "utf8");
    const meta = (k) => (h.match(new RegExp(`<meta property="${k}" content="([^"]*)"`)) || [])[1];
    const canon = (h.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
    const problems = [];
    if (!meta("og:title")) problems.push("no og:title");
    if (!meta("og:description") || meta("og:description").length < 50) problems.push("og:description missing or too short");
    if (!canon || !/^https:\/\/maxcrit\.com\//.test(canon) || /\.html$/.test(canon)) problems.push(`bad canonical ${canon}`);
    if (meta("og:url") !== canon) problems.push("og:url differs from canonical");
    const img = meta("og:image");
    if (!img || !/^https:\/\/maxcrit\.com\/assets\//.test(img)) problems.push(`og:image not an absolute HTTPS site URL: ${img}`);
    else {
      const local = path.join("_site", img.replace("https://maxcrit.com/", ""));
      if (!fs.existsSync(local)) problems.push(`og:image file missing: ${local}`);
      else { const d = dims(local); if (!d || String(d[0]) !== meta("og:image:width") || String(d[1]) !== meta("og:image:height")) problems.push(`og:image size declared ${meta("og:image:width")}x${meta("og:image:height")}, actual ${d}`); else if (d[0] < 600 || d[1] < 315) problems.push(`og:image too small for a large Facebook preview (${d})`); else if (d[0] / d[1] < 1.3) warn.push(`${p}: og:image is ${d[0]}x${d[1]}; Facebook will crop it to 1.91:1`); }
    }
    if (problems.length) { ogBad++; errors.push(`${p}: Open Graph: ${problems.join("; ")}`); }
  }
}

// Legal notice placeholders must be filled before launch
{ const site = fs.readFileSync("src/_data/site.js", "utf8"); const commercial = /commercial:\s*true/.test(site); const ph = (site.match(/"\[[A-Z][^"\]]*\]"/g) || []).filter((x) => commercial || !/ADDRESS\]/.test(x)); if (ph.length === 0) {} else warn.push(`site.js: legal details still placeholders (${ph.length}): ${ph.join(", ")}. Fill them in before launch.`); }
// Style habits from lib/stylecheck.py (the same file Mira runs before delivery). Warnings only:
// filler, steering frames, "Step N:" subheads and articles where "X, not Y" has become a habit.
{
  const r = spawnSync("python3", ["-I", "lib/stylecheck.py", "--json", "src/content/news", "src/content/hub"], { encoding: "utf8" });
  if (r.status !== 0 || !r.stdout) warn.push("stylecheck.py did not run (python3 missing?): style habit warnings skipped");
  else for (const it of JSON.parse(r.stdout)) {
    if (it.level !== "WARN" || !/filler|steering|Step N|habit|review_by/.test(it.msg)) continue;
    warn.push(`${it.file.replace(/^src\/content\//, "")}${it.line ? ":" + it.line : ""}: ${it.msg}`);
  }
}
if (warn.length) console.log("check.js warnings:\n  " + warn.join("\n  "));
if (errors.length) { console.error("check.js: " + errors.length + " error(s)\n  " + errors.join("\n  ")); process.exit(1); }
console.log("check.js: 0 errors");
