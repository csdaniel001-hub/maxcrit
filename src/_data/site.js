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
  build: Date.now().toString(36),
  today: new Date().toISOString().slice(0, 10),
  publisher: "[PUBLISHER NAME]",
  editor: "[EDITOR IN CHIEF]",
  // Legal notice (Hungarian Ekertv. 4. §, GDPR Art. 13). Fill in before launch; lib/check.js warns while any "[...]" remains.
  legal: {
    operator: "[OPERATOR: full name, or company name and legal form]",
    address: "[REGISTERED ADDRESS]",
    registry: "[COMPANY REGISTRY NO. or SOLE TRADER REGISTRY NO.]",
    tax: "[TAX NUMBER]",
    host: { name: "[HOSTING PROVIDER]", address: "[HOSTING PROVIDER ADDRESS]", email: "[HOSTING PROVIDER EMAIL]" },
    logDays: 30, // how long the host keeps server logs; confirm with the host
    updated: "2026-11-24",
  },
  // Non-essential services that need consent. Leave null until one is actually added; the banner only appears when at least one is set.
  // Example: analytics: { name: "Plausible", purpose: "count visits", privacy: "https://plausible.io/privacy" }
  consent: { analytics: null, ads: null },
  email: "editors@maxcrit.com",
};
