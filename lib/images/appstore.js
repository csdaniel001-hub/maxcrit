// App Store image source: official store screenshots for a mobile game article.
//   node lib/images/appstore.js <article-slug> <app-store-id> "<Rights holder>" [screenshot-index]
// Looks the app up through Apple's public iTunes Lookup API, requests every landscape
// screenshot at full size, rejects anything under 1000 px wide or visually empty, and saves
// the best one (or the index you pick) as the article's lead image. The rest go to
// img-candidates/<slug>/ for review. Portrait-only listings fail on purpose: a phone-shaped
// screenshot cropped to a wide header looks broken.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const [slug, appId, credit, pick] = process.argv.slice(2);
if (!slug || !appId || !credit) { console.error('Usage: node lib/images/appstore.js <slug> <app-store-id> "<Rights holder>" [index]'); process.exit(1); }
const file = ["src/content/news", "src/content/hub"].map((d) => path.join(ROOT, d, slug + ".md")).find((f) => fs.existsSync(f));
if (!file) { console.error("no such article:", slug); process.exit(1); }

const r = await fetch(`https://itunes.apple.com/lookup?id=${appId}&country=${process.env.MC_COUNTRY || "us"}`);
const app = ((await r.json()).results || [])[0];
if (!app) { console.error("app not found:", appId); process.exit(1); }
// Thumbnail URLs end in /<w>x<h>bb.<ext>; the original size is encoded in the file name or
// can be requested by asking for a large box. We ask for 2600 px wide.
const full = (u) => u.replace(/\/\d+x\d+bb\.(jpg|png|webp)$/, "/2600x2600bb.$1");
const urls = [...(app.screenshotUrls || []), ...(app.ipadScreenshotUrls || [])];
const cand = path.join(ROOT, "img-candidates", slug); fs.mkdirSync(cand, { recursive: true });
const scored = [];
for (const [i, u] of urls.entries()) {
  try {
    const res = await fetch(full(u)); if (!res.ok) { console.log("skipped", res.status, u); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    const meta = await sharp(buf).metadata(); const st = await sharp(buf).greyscale().stats();
    const mean = st.channels[0].mean, sd = st.channels[0].stdev, ratio = meta.width / meta.height;
    if (meta.width < 1000 || ratio < 1.3 || mean < 22 || mean > 238 || sd < 22) { console.log(`rejected #${i}: ${meta.width}x${meta.height}, ratio ${ratio.toFixed(2)}, light ${mean.toFixed(0)}, spread ${sd.toFixed(0)}`); continue; }
    const out = path.join(cand, `appstore-${i}.jpg`);
    await sharp(buf).resize(1600, 900, { fit: "cover", position: "attention" }).jpeg({ quality: 84, mozjpeg: true }).toFile(out);
    scored.push({ i, u: full(u), out, score: st.entropy * 10 + sd - Math.abs(mean - 110) / 4 });
  } catch (e) { console.log("error", u, e.message); }
}
if (!scored.length) { console.error("no usable landscape screenshot (portrait-only listing?)"); process.exit(2); }
scored.sort((a, b) => b.score - a.score);
// "r2" picks the third-best screenshot, so codes, events and banner pages for one game get different images
const best = pick === undefined ? scored[0] : /^r\d+$/.test(pick) ? scored[Number(pick.slice(1)) % scored.length] : scored.find((s) => s.i === Number(pick)) || scored[0];
fs.copyFileSync(best.out, path.join(ROOT, "src/assets/img", slug + ".jpg"));
const raw = fs.readFileSync(file, "utf8"); const end = raw.indexOf("\n---", 3);
const name = app.trackName;
const fields = { image: `/assets/img/${slug}.jpg`, image_url: best.u, image_source: app.trackViewUrl.replace(/\?.*$/, ""), image_credit: credit, image_alt: `Official App Store screenshot of ${name}`, image_status: "candidate" };
const head = raw.slice(0, end).split("\n").filter((l) => !Object.keys(fields).some((k) => l.startsWith(k + ":")));
for (const [k, v] of Object.entries(fields)) head.push(`${k}: ${JSON.stringify(v)}`);
fs.writeFileSync(file, head.join("\n") + raw.slice(end));
console.log(`appstore.js: ${slug} <- screenshot #${best.i} of ${scored.length} usable (${name})`);
