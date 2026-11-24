// MC_PREVIEW only: the Claude preview artifact has a 512-file cap, so game icons are inlined
// into the HTML as data URIs and the icon files are left out of the preview build.
import fs from "node:fs";
import path from "node:path";

export function inlineIcons(out) {
  const dir = path.join(out, "assets/img/icons");
  if (!fs.existsSync(dir)) return 0;
  const cache = {};
  const uri = (f) => (cache[f] ??= "data:image/webp;base64," + fs.readFileSync(path.join(dir, f)).toString("base64"));
  let pages = 0;
  const walk = (d) => {
    for (const x of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, x.name);
      if (x.isDirectory()) walk(p);
      else if (p.endsWith(".html")) {
        const html = fs.readFileSync(p, "utf8");
        const next = html.replace(/(?:\.\.\/|\.\/)*assets\/img\/icons\/([a-z0-9-]+\.webp)/g, (m, f) => (fs.existsSync(path.join(dir, f)) ? uri(f) : m));
        if (next !== html) { fs.writeFileSync(p, next); pages++; }
      }
    }
  };
  walk(out);
  fs.rmSync(dir, { recursive: true });
  return pages;
}
