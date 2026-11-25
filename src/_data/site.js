import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
// Cache-buster: a hash of the stylesheet and script sources, so pages only change when the CSS does.
const cssHash = createHash("sha1").update(["css/gz.css", "css/mc.css", "css/mc-light.css", "css/fx.css", "js/site.js"].map((f) => readFileSync(`src/assets/${f}`)).join("")).digest("hex").slice(0, 8);
// Site settings. `today` is computed at build time (UTC), so "Today / Yesterday" labels never go stale.
export default {
  name: "MaxCrit",
  wordA: "MAX",
  wordB: "CRIT",
  tagline: "Mobile gaming news and player hub",
  url: "https://maxcrit.com",
  description: "Mobile gaming news from official sources, plus patch trackers, tier lists and guides for the iOS and Android games people actually play.",
  lang: "en",
  locale: "en_US",
  // Top bar: the six games with app icons, in order.
  hot: ["pokemon-go", "pubg-mobile", "clash-of-clans", "brawl-stars", "marvel-snap", "clash-royale"],
  build: cssHash,
  theme: process.env.MC_THEME || "",
  today: new Date().toISOString().slice(0, 10),
  publisher: "Dániel Csáki",
  editor: "Dániel Csáki",
  // Legal notice (Hungarian Ekertv. 4. §, GDPR Art. 13). Fill in before launch; lib/check.js warns while any "[...]" remains.
  legal: {
    // false while the site earns nothing (no ads, affiliate links or paid content): a simple operator box, no address.
    // Set to true when monetising: the full legal notice (Ekertv. 4. §) with address, registration and tax number appears.
    commercial: false,
    operator: "Dániel Csáki (private individual)",
    address: "[REGISTERED ADDRESS]",
    registry: "", // only for a company or sole trader
    tax: "", // only for a company or sole trader
    host: { name: "Rackhost Zrt.", address: "6722 Szeged, Tisza Lajos körút 41., Hungary", email: "info@rackhost.hu" },
    logDays: 30, // how long the host keeps server logs; confirm with the host
    updated: "2026-11-24",
  },
  // Analytics IDs. A tag is only output once its ID is filled in.
  //  - Cloudflare Web Analytics: cookieless, runs for everyone (token from the Cloudflare dashboard)
  //  - Google Analytics 4: sets cookies, so it loads only after the visitor accepts (Measurement ID "G-...")
  analytics: { cloudflare: "ca97cd5a05dc41198769fd1c1493bd1d", ga4: "[GA4 MEASUREMENT ID]", gaMonths: 14 },
  // Services that need consent. The banner appears when at least one is set.
  consent: {
    analytics: { name: "Google Analytics 4", purpose: "see which pages are read and how people find the site", privacy: "https://policies.google.com/privacy" },
    ads: null,
  },
  email: "info@maxcrit.com",
};
