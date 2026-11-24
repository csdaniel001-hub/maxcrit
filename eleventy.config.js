import { buildImages, WIDTHS } from "./lib/build/images.js";
import { buildCss } from "./lib/build/css.js";
import { inlineIcons } from "./lib/build/preview-inline.js";
import * as yaml from "js-yaml";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const MON = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// All dates are shown in UTC: the audience is global and publisher announcements are usually in UTC or PT.
const parts = (d) => {
  const x = new Date(d);
  return { y: x.getUTCFullYear(), m: x.getUTCMonth(), d: x.getUTCDate(), wd: x.getUTCDay(), hh: String(x.getUTCHours()).padStart(2, "0"), mm: String(x.getUTCMinutes()).padStart(2, "0"), key: x.toISOString().slice(0, 10) };
};
const slugify = (t) => String(t).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/<[^>]+>/g, "").replace(/&[a-z]+;/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension("yml,yaml", (contents) => yaml.load(contents));
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  // One stylesheet per page: joined, unused rules removed, minified (lib/build/css.js)
  eleventyConfig.on("eleventy.after", async ({ dir }) => {
    const made = await buildImages(dir.output);
    if (made) console.log(`[img] encoded ${made} responsive images`);
    const r = await buildCss(dir.output);
    console.log(`[css] site.css ${Math.round(r.before / 1024)} KB -> ${Math.round(r.after / 1024)} KB`);
    if (process.env.MC_PREVIEW) console.log(`[preview] inlined game icons in ${inlineIcons(dir.output)} pages`);
  });

  // Relative links, so the built site works from any folder (preview or host root)
  eleventyConfig.addFilter("rel", function (target) {
    const from = (this.page && this.page.url) || "/";
    const depth = from.split("/").length - 2;
    return (depth > 0 ? "../".repeat(depth) : "") + String(target).replace(/^\//, "");
  });
  eleventyConfig.addFilter("relp", (target, pre) => (pre || "") + String(target).replace(/^\//, ""));

  // Dates
  eleventyConfig.addFilter("longDate", (d) => { const p = parts(d); return `${MONTHS[p.m]} ${p.d}, ${p.y}`; });
  eleventyConfig.addFilter("shortDate", (d) => { const p = parts(d); return `${MON[p.m]} ${p.d}`; });
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());
  eleventyConfig.addFilter("rfc822", (d) => new Date(d).toUTCString());
  eleventyConfig.addFilter("utcTime", (d) => { const p = parts(d); return `${p.hh}:${p.mm}`; });
  eleventyConfig.addFilter("dayLabel", (d, today) => {
    const key = parts(d).key; const y = new Date(new Date(today + "T12:00:00Z").getTime() - 864e5).toISOString().slice(0, 10);
    if (key === today) return "Today"; if (key === y) return "Yesterday"; const p = parts(d); return `${MONTHS[p.m]} ${p.d}`;
  });
  // News river grouped by UTC day
  eleventyConfig.addFilter("byDay", (arr, today) => {
    const y = new Date(new Date(today + "T12:00:00Z").getTime() - 864e5).toISOString().slice(0, 10);
    const out = [];
    for (const n of arr || []) {
      const p = parts(n.data.published_at);
      let g = out[out.length - 1];
      if (!g || g.key !== p.key) { g = { key: p.key, day: p.d, month: MON[p.m], weekday: WEEKDAYS[p.wd], label: p.key === today ? "Today" : p.key === y ? "Yesterday" : "", items: [] }; out.push(g); }
      g.items.push(n);
    }
    return out;
  });

  // Lists
  // Responsive article images (see lib/build/images.js)
  const wbase = (img) => String(img || "").replace(/^\/assets\/img\//, "/assets/img/w/").replace(/\.[^.]+$/, "");
  eleventyConfig.addFilter("wsrc", (img, w) => `${wbase(img)}-${WIDTHS.find((x) => x >= (w || 960)) || WIDTHS.at(-1)}.webp`);
  eleventyConfig.addFilter("srcset", function (img) { return WIDTHS.map((w) => `${eleventyConfig.getFilter("rel").call(this, wbase(img) + "-" + w + ".webp")} ${w}w`).join(", "); });
  // Stable pick from a list by page URL (character heads at article ends)
  eleventyConfig.addFilter("pick", (url, list) => { let h = 0; for (const c of String(url)) h = (h * 31 + c.charCodeAt(0)) >>> 0; return list[h % list.length]; });
  // Undo entity escaping done by computed front matter, so titles are escaped exactly once
  eleventyConfig.addFilter("unent", (v) => String(v ?? "").replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">"));
  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));
  eleventyConfig.addFilter("exclude", (arr, url) => (arr || []).filter((x) => x.url !== url));
  eleventyConfig.addFilter("notIn", (arr, others) => { const u = new Set((others || []).map((x) => x.url)); return (arr || []).filter((x) => !u.has(x.url)); });
  eleventyConfig.addFilter("byGenre", (arr, g) => (arr || []).filter((n) => (n.data.genres || []).includes(g)));
  eleventyConfig.addFilter("byPlatform", (arr, p) => (arr || []).filter((n) => (n.data.platforms || []).includes(p)));
  eleventyConfig.addFilter("byTopic", (arr, t) => (arr || []).filter((n) => (n.data.topics || []).includes(t)));
  eleventyConfig.addFilter("byGame", (arr, g) => (arr || []).filter((n) => (n.data.titles || []).includes(g)));
  // Best picture for a game tile: newest piece about that game alone, not a multi-game roundup
  eleventyConfig.addFilter("gamePic", (arr, g) => { const l = (arr || []).filter((n) => (n.data.titles || []).includes(g) && n.data.image); const solo = l.find((n) => !n.data.roundup && (n.data.titles || []).length <= 2); return (solo || l[0] || {}).data?.image; });
  // Stories about one game: single-game pieces first, multi-game roundups only as a fallback
  const soloOf = (arr, g) => { const l = (arr || []).filter((n) => (n.data.titles || []).includes(g)); const solo = l.filter((n) => !n.data.roundup && (n.data.titles || []).length <= 2); return solo.length ? solo : l; };
  eleventyConfig.addFilter("soloByGame", soloOf);
  // Game page helpers: own stories vs roundups that only mention the game, main genre, platforms
  const own = (arr, g) => (arr || []).filter((n) => (n.data.titles || []).includes(g) && !n.data.roundup && (n.data.titles || []).length <= 2);
  eleventyConfig.addFilter("ownByGame", own);
  eleventyConfig.addFilter("mentionsGame", (arr, g) => { const o = new Set(own(arr, g).map((n) => n.url)); return (arr || []).filter((n) => (n.data.titles || []).includes(g) && !o.has(n.url)); });
  const tally = (list) => { const c = {}; list.forEach((x) => { c[x] = (c[x] || 0) + 1; }); return Object.keys(c).sort((a, b) => c[b] - c[a]); };
  eleventyConfig.addFilter("gameGenre", (arr, g) => tally(own(arr, g).flatMap((n) => (n.data.genres || []).slice(0, 1)))[0] || "");
  eleventyConfig.addFilter("gamePlatforms", (arr, g) => tally(own(arr, g).flatMap((n) => n.data.platforms || [])));
  eleventyConfig.addFilter("gameGacha", (arr, g) => (arr || []).some((n) => (n.data.titles || []).includes(g) && (n.data.topics || []).includes("gacha")));
  eleventyConfig.addFilter("gamesInGenre", (games, arr, genre, not) => Object.keys(games || {}).filter((s) => s !== not && genre && tally(own(arr, s).flatMap((n) => (n.data.genres || []).slice(0, 1)))[0] === genre));
  // Game slugs ordered by how many stories they have
  eleventyConfig.addFilter("gameRank", (games, arr) => Object.keys(games || {}).map((g) => ({ slug: g, n: soloOf(arr, g).length })).filter((x) => x.n).sort((x, y) => y.n - x.n));
  eleventyConfig.addFilter("byHub", (arr) => (arr || []).filter((n) => n.data.hub_type));
  eleventyConfig.addFilter("notHub", (arr) => (arr || []).filter((n) => !n.data.hub_type));
  eleventyConfig.addFilter("byHubType", (arr, t) => (arr || []).filter((n) => n.data.hub_type === t));
  // Lead slider: the newest five items that have a real image
  eleventyConfig.addFilter("featured", (arr) => (arr || []).filter((x) => x.data.image).slice(0, 5));
  eleventyConfig.addFilter("find", (arr, key, val) => (arr || []).find((x) => x[key] === val) || {});
  eleventyConfig.addFilter("jsonify", (v) => JSON.stringify(v));
  eleventyConfig.addFilter("wordcount", (html) => String(html || "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length);
  eleventyConfig.addFilter("anchors", (html) => String(html || "").replace(/<h([23])>(.*?)<\/h\1>/g, (m, l, t) => `<h${l} id="${slugify(t)}">${t}</h${l}>`));
  eleventyConfig.addFilter("toc", (html) => [...String(html || "").matchAll(/<h2>(.*?)<\/h2>/g)].map((m) => ({ id: slugify(m[1]), text: m[1].replace(/<[^>]+>/g, "") })));

  // An article only goes live with a real image: anything without one stays a draft.
  eleventyConfig.addPreprocessor("no-image-no-publish", "md", (data) => {
    const inp = (data.page && data.page.inputPath) || "";
    if (/src\/content\/(news|hub)\//.test(inp) && !data.image) return false;
  });

  const newest = (a, b) => new Date(b.data.updated_at || b.data.published_at) - new Date(a.data.updated_at || a.data.published_at);
  eleventyConfig.addCollection("news", (api) => api.getFilteredByGlob("src/content/news/*.md").sort((a, b) => new Date(b.data.published_at) - new Date(a.data.published_at)));
  eleventyConfig.addCollection("hub", (api) => api.getFilteredByGlob("src/content/hub/*.md").sort(newest));
  eleventyConfig.addCollection("everything", (api) => api.getFilteredByGlob("src/content/{news,hub}/*.md").sort(newest));
  // Feeds, homepage, genre and platform pages leave out redeem-code and live-event pages, so dozens of schedule pages do not bury the news (2026-11-24)
  eleventyConfig.addCollection("stories", (api) => api.getFilteredByGlob("src/content/{news,hub}/*.md").filter((n) => !["codes", "events"].includes(n.data.hub_type)).sort(newest));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
