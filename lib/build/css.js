// Builds _site/assets/css/site.css: fonts + gz + mc + mc-light joined in cascade order,
// unused selectors removed (checked against every built page and site.js), then minified.
import fs from "node:fs";
import path from "node:path";
import { PurgeCSS } from "purgecss";
import { transform } from "lightningcss";

export async function buildCss(outDir) {
  const src = "src/assets";
  const fonts = fs.readFileSync(`${src}/fonts/fonts.css`, "utf8").replace(/url\(\.\//g, "url(../fonts/");
  const joined = [fonts, ...["gz.css", "mc.css", "mc-light.css", "fx.css"].map((f) => fs.readFileSync(`${src}/css/${f}`, "utf8")).map((c) => c.replace(/(border(?:-top|-bottom|-left|-right)?(?:-color)?:[^;}]*?)#243066/g, "$1rgba(225,232,255,.22)")).map((c) => c.replace(/kit\/bg1(-m)?\.webp/g, `kit/bg-${process.env.MC_BG || "ice"}$1.webp`))].join("\n");
  const html = [];
  const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p); else if (p.endsWith(".html")) html.push(p);
  });
  walk(outDir);
  const [res] = await new PurgeCSS().purge({
    content: [...html, `${src}/js/site.js`],
    css: [{ raw: joined }],
    // classes switched on by scripts or browser state
    safelist: { standard: [/^kx-/, /^on$/, /^out/, /^in-up$/, /^hidden$/, /^open$/, /^is-/, /^show$/], greedy: [/\[href/, /\[aria-/, /\[data-(?!gz)/, /\[hidden/] },
    variables: false,
  });
  const { code } = transform({ filename: "site.css", code: Buffer.from(res.css), minify: true, targets: { chrome: 100 << 16, safari: 15 << 16, firefox: 100 << 16 } });
  fs.mkdirSync(`${outDir}/assets/css`, { recursive: true });
  fs.writeFileSync(`${outDir}/assets/css/site.css`, code);
  return { before: Buffer.byteLength(joined), after: code.length };
}
