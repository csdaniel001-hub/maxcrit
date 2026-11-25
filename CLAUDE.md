# MaxCrit (maxcrit.com): editorial and build rules

Read this at the start of every session. `lib/check.js` enforces the measurable rules; the rest is written here.

MaxCrit is an English mobile gaming site with two halves:
- **News**: what changed, from official sources, newest first.
- **Player Hub**: evergreen pages kept up to date (patch trackers, tier lists, redeem codes, guides). Every hub page shows a "last checked" date.

Built with Eleventy 3 on the latest Geekzone design (`gz.css`, the "magazin-szerkezet" version from 2026-11-23: top bar with popular games, split hero, dark Latest panel, section banners). `src/assets/css/mc.css` holds the few MaxCrit additions; never edit `gz.css` for MaxCrit-only needs.

## 1. Accuracy (not negotiable)
- Every fact comes from a source listed in `sources`. The **primary** source must be official: the developer's or publisher's own site, patch notes, press release (a press-wire copy of their release is fine) or official social account. Never another news site or wiki (`check.js` blocks the common ones).
- **Copies of in-game patch notes (2026-11-24, Daniel's decision).** Some publishers publish full patch notes only inside the game. In that case a published copy (Liquipedia, a dedicated patch-notes site such as MLBBHub) may be listed as a secondary source. Rules: the official source (store release notes, official site or social post) stays `primary`; the copy is titled as a copy ("copy of the in-game patch notes"); one reliable copy is enough when it is consistent with the official source on the points both cover (date, patch number, named changes), so articles should carry the full, useful detail including numbers; a second copy is worth checking when a figure looks odd or the copies disagree, and a disputed figure is left out; news sites and general wikis (Fandom, Wikipedia) stay excluded.
- **No "we don't know" sentences (2026-11-24, Daniel's decision).** Never write that a source doesn't give something, that a date or detail isn't known, or that readers should check the game for what the notes left out. Write what is known. If a story has too little to say without that padding, find a fuller official or copied source, or the story stays a draft.
- If it is not in a source, it is not in the article. No guesses, no "TBA" filler, no explaining terms the source does not explain.
- Leaks and rumours: only when already a major story, with `status: reported` and the headline saying so.
- No hands-on impressions unless someone actually played (`hands_on: true`).
- Every claim about the present (dates, prices, who publishes what) is looked up, not recalled.

## 2. Names
- Characters, modes, items, events, systems and places keep the exact official spelling from the primary source. Collect the proper names from the source before writing.
- Player terms stay as players say them (banner, pity, meta, buff, nerf, Hypercharge, Buffie). Don't "explain" them unless the source does.

## 3. Article standard
- Length follows the facts. News: 300–1100 words of prose (tables don't count). `type: short` news: from 150 words, no subheads or TL;DR needed. Hub pages: from 250 words plus their tables.
- Non-short pieces need 2+ H2 subheads and a 2–5 point `tldr`.
- Write for a player deciding something: what changed, what it means for them, what to do. Cut anything that only restates the press release's adjectives.
- House style: no em dashes, no stock phrases (list in `check.js`), plain verbs, numbers as numerals.
- **Avoid the typical AI tells** (Daniel, 2026-11-23):
  - No bold in running text, not even for names. Bold is only for list-item labels ("- **Label**: ...") and at most one key fact per TL;DR bullet.
  - No reader-steering frames: "if you only read one line", "the part worth acting on", "here's why", "the key point", "worth flagging", "changes the math", "the sensible middle ground".
  - No "X, not Y" contrast as a habit, no "not just X, but Y", no stacked triads for rhythm.
  - Headlines and subheads are plain sentences. At most one colon-built subhead per article; titles only use a colon when it's part of a game's name or for hub pages ("...: full list").
  - Don't repeat a point in consecutive sentences; say it once.
- Required front matter: `title`, `seo_title` (30–60 chars), `summary` (120–160), `keyword`, `published_at` (UTC), `genres` (one main genre from `genreNav.yml`; only multi-game roundups such as store awards set `roundup: true` and may leave it empty), `platforms` (from `platformNav.yml`, only what the source confirms), `titles` (game slugs from `games.yml`), `sources`, image fields. Hub pages also need `hub_type` (from `hubTypes.yml`).
- **Topics** (`topicNav.yml`) are sections that cut across genres. `topics: [gacha]` goes on every article about a game whose core monetisation is a gacha (banners, pulls, pity), whatever its genre. A game with only occasional random rewards is not tagged.
- Dates on the site are shown in UTC.

## 4. Images (no image, no publication)
Articles without `image` are dropped from the build automatically. Order of preference:
1. **The announcement's own image** (press kit, og:image of the source page): `node lib/images/fetch.js <slug> <image-url> "<Rights holder>" <source-page> "<alt>"`.
2. **Official App Store screenshots**: `node lib/images/appstore.js <slug> <app-store-id> "<Rights holder>" [index]`. Uses Apple's public lookup API, keeps landscape shots only (portrait phone screenshots cropped to a header look broken), saves the best at 1600x900 and the rest in `img-candidates/<slug>/`.
- Minimum 1000 px wide. Credit the rights holder, never the site the image was found on.
- Never generate or draw a stand-in image. No fan art, no photos of real people.
- New images arrive as `image_status: candidate`. Only a human sets `approved` after looking at them.

## 5. Menus and data
- Sidebar: Home, Latest news, Games A–Z, Player Hub (hub types), Genres. A hub type or genre only appears in the menu once it has content, so the site never shows empty sections.
- Top bar: games that have coverage (`games.yml` + `titles`).
- `games.yml` holds official store links for the "Get the game" box. Store URLs must be the real listings.

## 6. Before every push
`npx @11ty/eleventy && node lib/check.js` must end with `0 errors`. It also fails on broken internal links and on any Hungarian text left over from the template.

## Redeem-code pages (Daniel, 2026-11-24)
Codes pages (`hub_type: codes`) may use public code trackers as sources; no official primary source is required. Every codes page must say near the top that some codes may already be deactivated, used up or region-locked. Images still have to be official. Unconfirmed or disputed codes are left out, and a game with no reported active code gets no page.

## Editorial standard (Daniel, 2026-11-25)
The full text is in `docs/editorial-standard.md`, with the operational amendments in `docs/editorial-standard-amendments.md`. The amendments win where they differ. In short:
- **Priorities:** accuracy, then original value, then usefulness to players, then expertise, writing, SEO/GEO, and speed last. Every article must give the reader something the announcement alone doesn't: practical consequences, comparisons, normalised dates, a decision they can make.
- **Information types:** keep confirmed facts, calculated findings, editorial interpretation and unverified claims visibly apart. Never present one as another.
- **Tiers:**
  - Tier 1, news: research, official sources, practical context, a fact review and `check.js`.
  - Tier 2, analysis (patch impact, event guides): adds historical context, original analysis and an independent review where possible.
  - Tier 3, authority content (builds, banner/pull guides, tier lists, meta): source triangulation, an adversarial fact check by a fresh agent, managing-editor sign-off by Claude with the evidence (Daniel approves the push), `tier: 3`, `review_by` and a verification record in `verification/<slug>.md`. `check.js` enforces this, and builds are Tier 3 automatically.
- **Gates are pass/fail, not scores.** Consequential claims must be traceable, numbers sourced or reproducible, and names, versions and dates exact. Unsupported claims, fabricated testing, plagiarism or close paraphrase, and false certainty block publication.
- **Numbers:** reward, currency, cost and patch-difference maths is encouraged, with the method shown in the verification record. Damage or DPS figures only with validated formulas and documented assumptions, never as measured results.
- **Length:** no minimums beyond the `check.js` floors. When something can't be verified, narrow the scope or set an update trigger. The 2026-11-24 rule still applies to article text, so no "the source doesn't say" sentences. Record the omission in the verification record instead, unless leaving it out would mislead the reader.
- **Maintenance:** event triggers (banner end, patch, rework) and `review_by` dates. `check.js` warns when a review is due. Keep URLs, and only update dates for substantive changes.
- **Originality:** competitor pages are for spotting gaps, never for paraphrasing. Write in our own structure and words, and credit specialist analysis by name.
- **Working with Mira (Daniel's ChatGPT editor, agreed 2026-11-25):** Mira owns the Tier 2 and 3 packages. Claude owns Tier 1, codes, routine events, hardware news, implementation and publishing. Claude reviews Mira's packages adversarially: searching independently, checking completeness as well as correctness, and returning a failed-claims report (PASS / REVISION REQUIRED / BLOCKED, with severity, evidence and downstream impact). Claude fixes formatting and unambiguous facts directly; anything touching conclusions goes back to Mira. After two rounds, Daniel decides, and factual uncertainty can't be overruled into fact.
- **Clarifications with Mira (2026-11-25):**
  - `primary: true` marks the one official source the checker needs. Other official sources are listed normally and still count as primary evidence.
  - Decision-relevant uncertainty is stated in the article, in plain terms of what it means for the player (for example "if you can't reach the next 5-star before December 15, the guarantee is lost"). Only "the source doesn't say" filler stays banned.
  - `published_at` is set by Claude at actual publication.
  - Failed-claims reports are kept in `verification/reviews/<slug>-r<n>.md` so recurring weaknesses can be tracked.
