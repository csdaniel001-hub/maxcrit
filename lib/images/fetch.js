// Official image from a known URL (press kit, og:image of the announcement page).
//   node lib/images/fetch.js <article-slug> <image-url> "<Rights holder>" <page-it-came-from> ["alt text"]
// Saves at most 1600 px wide without upscaling. The page must be one of the article's own
// sources: an image from the announcement is guaranteed to be about the announcement.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const [slug, url, credit, page, alt] = process.argv.slice(2);
if (!slug || !url || !credit || !page) { console.error('Usage: node lib/images/fetch.js <slug> <url> "<Rights holder>" <source-page> ["alt"]'); process.exit(1); }
const file = ["src/content/news", "src/content/hub"].map((d) => path.join(ROOT, d, slug + ".md")).find((f) => fs.existsSync(f));
if (!file) { console.error("no such article:", slug); process.exit(1); }
const res = await fetch(url); if (!res.ok) { console.error("download failed", res.status); process.exit(2); }
const buf = Buffer.from(await res.arrayBuffer());
const meta = await sharp(buf).metadata();
if (meta.width < 1000) { console.error(`too small: ${meta.width}px (minimum 1000)`); process.exit(2); }
await sharp(buf).resize({ width: Math.min(1600, meta.width), withoutEnlargement: true }).jpeg({ quality: 86, mozjpeg: true }).toFile(path.join(ROOT, "src/assets/img", slug + ".jpg"));
const raw = fs.readFileSync(file, "utf8"); const end = raw.indexOf("\n---", 3);
const fields = { image: `/assets/img/${slug}.jpg`, image_url: url, image_source: page, image_credit: credit, image_alt: alt || "Official image", image_status: "candidate" };
const head = raw.slice(0, end).split("\n").filter((l) => !Object.keys(fields).some((k) => l.startsWith(k + ":")));
for (const [k, v] of Object.entries(fields)) head.push(`${k}: ${JSON.stringify(v)}`);
fs.writeFileSync(file, head.join("\n") + raw.slice(end));
console.log(`fetch.js: ${slug} <- ${meta.width}x${meta.height}`);
