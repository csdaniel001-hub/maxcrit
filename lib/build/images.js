// Responsive WebP copies of article images: _site/assets/img/w/<name>-<width>.webp
// Cached in .cache/img so only new or changed images are encoded.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import crypto from "node:crypto";

// MC_PREVIEW=1 builds the Claude preview artifact, which has a 512-file cap: it keeps only the 960 px copies.
export const WIDTHS = process.env.MC_PREVIEW ? [960] : [480, 960, 1600];

export async function buildImages(outDir) {
  const src = "src/assets/img", cache = ".cache/img", out = `${outDir}/assets/img/w`;
  fs.mkdirSync(cache, { recursive: true }); fs.mkdirSync(out, { recursive: true });
  let made = 0;
  for (const f of fs.readdirSync(src).filter((x) => /\.(jpe?g|png)$/i.test(x))) {
    // Cache keyed by content hash (not mtime), so a fresh CI checkout can reuse the restored cache.
    const base = f.replace(/\.[^.]+$/, ""), h = crypto.createHash("md5").update(fs.readFileSync(`${src}/${f}`)).digest("hex").slice(0, 10);
    for (const w of WIDTHS) {
      const name = `${base}-${w}.webp`, c = `${cache}/${base}-${w}-${h}.webp`;
      if (!fs.existsSync(c)) {
        await sharp(`${src}/${f}`).resize({ width: w, withoutEnlargement: true }).webp({ quality: w > 1000 ? 74 : 72 }).toFile(c);
        made++;
      }
      fs.copyFileSync(c, `${out}/${name}`);
    }
  }
  return made;
}
