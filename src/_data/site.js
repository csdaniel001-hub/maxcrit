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
  today: new Date().toISOString().slice(0, 10),
  publisher: "[PUBLISHER NAME]",
  editor: "[EDITOR IN CHIEF]",
  email: "editors@maxcrit.com",
};
