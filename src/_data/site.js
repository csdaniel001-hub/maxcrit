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
  email: "editors@maxcrit.com",
};
