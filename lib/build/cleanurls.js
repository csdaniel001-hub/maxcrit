// Clean URLs for the live site: links, canonicals, sitemaps and feeds point at /news instead of /news.html.
// Files stay as .html on disk; .htaccess serves /news from news.html and 301-redirects old .html addresses.
// Skipped in MC_PREVIEW builds, where pages are opened as plain files and need the .html extension.
import fs from "node:fs";
import path from "node:path";

const SITE = "https://maxcrit.com";
const relClean = (u) => {
  if (/^(https?:|mailto:|data:|#|\/\/)/.test(u)) return u;
  const m = u.match(/^([^?#]*)([?#].*)?$/);
  let p = m[1], rest = m[2] || "";
  if (!p.endsWith(".html")) return u;
  if (/(^|\/)index\.html$/.test(p)) p = p.replace(/index\.html$/, "") || "./";
  else p = p.slice(0, -5);
  return p + rest;
};
const absClean = (s) =>
  s.replace(/https:\/\/maxcrit\.com(\/[^"'\s<>)\]]*?)\.html(?=[#?"'\s<>)\]]|$)/g, (all, p) =>
    SITE + (p.endsWith("/index") ? p.slice(0, -5) : p));

export function cleanUrls(outDir) {
  let n = 0;
  const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
    const p = path.join(d, e.name);
    if (e.isDirectory()) { if (!p.endsWith(path.join("assets"))) walk(p); return; }
    if (!/\.(html|xml|txt)$/.test(p)) return;
    let s = fs.readFileSync(p, "utf8"), o = s;
    s = absClean(s);
    if (p.endsWith(".html")) {
      s = s.replace(/\b(href|action)="([^"]*)"/g, (a, k, u) => `${k}="${relClean(u)}"`);
      s = s.replace(/"u":"([^"]*)"/g, (a, u) => `"u":"${relClean(u)}"`);
    }
    if (s !== o) { fs.writeFileSync(p, s); n++; }
  });
  walk(outDir);
  return n;
}
