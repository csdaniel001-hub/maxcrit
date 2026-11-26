# MaxCrit (maxcrit.com): editorial and build rules

Read this at the start of every session. `lib/check.js` enforces the measurable rules; the rest is written here.

MaxCrit is an English mobile gaming site with two halves:
- **News**: what changed, from official sources, newest first.
- **Player Hub**: evergreen pages kept up to date (patch trackers, tier lists, redeem codes, guides). Every hub page shows a "last checked" date.

Built with Eleventy 3 on the latest Geekzone design (`gz.css`, the "magazin-szerkezet" version from 2026-11-23: top bar with popular games, split hero, dark Latest panel, section banners). `src/assets/css/mc.css` holds the few MaxCrit additions; never edit `gz.css` for MaxCrit-only needs.

## 1. Accuracy (not negotiable)
- Every fact comes from a source listed in `sources`. The **primary** source must be official: the developer's or publisher's own site, patch notes, press release (a press-wire copy of their release is fine) or official social account. **Supplementary sources (Daniel, 2026-11-26):** reliable secondary publications (established gaming outlets, specialist trackers) may be listed alongside the official source. Prioritise the original; don't exclude a source just because it is another gaming publication. Open wikis, forums, Reddit and content farms are still not sources. `check.js` only blocks news sites and wikis as the primary.
- **Copies of in-game patch notes (2026-11-24, Daniel's decision).** Some publishers publish full patch notes only inside the game. In that case a published copy (Liquipedia, a dedicated patch-notes site such as MLBBHub) may be listed as a secondary source. Rules: the official source (store release notes, official site or social post) stays `primary`; the copy is titled as a copy ("copy of the in-game patch notes"); one reliable copy is enough when it is consistent with the official source on the points both cover (date, patch number, named changes), so articles should carry the full, useful detail including numbers; a second copy is worth checking when a figure looks odd or the copies disagree, and a disputed figure is left out; news sites and general wikis (Fandom, Wikipedia) stay excluded.
- **Uncertainty (Daniel, 2026-11-26, replaces the 2026-11-24 rule).** Remove redundant hedging, filler and internal research commentary ("the accessible text doesn't include", "check the game for what the notes left out"). Keep a qualification when it affects a player's decision, reward eligibility, availability or a gameplay recommendation, and say it plainly in terms of what it means for the player. Accuracy beats sounding confident. If a story has too little to say once filler is gone, find a fuller source or keep it a draft.
- If it is not in a source, it is not in the article. No guesses, no "TBA" filler, no explaining terms the source does not explain.
- Leaks and rumours: only when already a major story, with `status: reported` and the headline saying so.
- No hands-on impressions unless someone actually played (`hands_on: true`).
- Every claim about the present (dates, prices, who publishes what) is looked up, not recalled.

## 2. Names
- Characters, modes, items, events, systems and places keep the exact official spelling from the primary source. Collect the proper names from the source before writing.
- Player terms stay as players say them (banner, pity, meta, buff, nerf, Hypercharge, Buffie). Don't "explain" them unless the source does.

## 3. Article standard
- Length follows the facts. News: 300–1100 words of prose (tables don't count). `type: short` news: from 150 words, no subheads or TL;DR needed. Hub pages: from 250 words plus their tables.
- Hub pages and news of 500+ words need 2+ H2 subheads and a 2–5 point `tldr`. News under 500 words may skip both (Daniel, 2026-11-25): its first two sentences must carry the key facts (what changed, for which game, when). Tables in news only for schedules, server times, numbers and codes. Voice and desk styles: `docs/voice-guide.md`.
- Write for a player deciding something: what changed, what it means for them, what to do. Cut anything that only restates the press release's adjectives.
- House style: no em dashes, no stock phrases (list in `check.js`), plain verbs, numbers as numerals.
- **Avoid the typical AI tells** (Daniel, 2026-11-23):
  - No bold in running text, not even for names. Bold is only for list-item labels ("- **Label**: ...") and at most one key fact per TL;DR bullet.
  - No reader-steering frames: "if you only read one line", "the part worth acting on", "here's why", "the key point", "worth flagging", "changes the math", "the sensible middle ground".
  - No "X, not Y" contrast as a habit, no "not just X, but Y", no stacked triads for rhythm.
  - **Attribution (Daniel, 2026-11-26, replaces the 2026-11-25 rule):** natural journalistic attribution is fine when it establishes where a claim comes from or how far to trust it ("NEOWIZ says", "announced on its X account", quotes, reported or disputed claims, codes from trackers). Avoid repeating it; routine official facts can stand plainly because the sources box carries them. `stylecheck.py` warns at 3+ attribution sentences in one article.
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
- **Length:** no minimums beyond the `check.js` floors. When something can't be verified, narrow the scope or set an update trigger. Gaps that don't change a player's decision go in the verification record, not the article.
- **Maintenance:** event triggers (banner end, patch, rework) and `review_by` dates. `check.js` warns when a review is due. Keep URLs, and only update dates for substantive changes.
- **Originality:** competitor pages are for spotting gaps, never for paraphrasing. Write in our own structure and words, and credit specialist analysis by name.
- **Working with Mira (Daniel's ChatGPT editor, agreed 2026-11-25):** Mira owns the Tier 2 and 3 packages. Claude owns Tier 1, codes, routine events, hardware news, implementation and publishing. Claude reviews Mira's packages adversarially: searching independently, checking completeness as well as correctness, and returning a failed-claims report (PASS / REVISION REQUIRED / BLOCKED, with severity, evidence and downstream impact). Claude fixes formatting and unambiguous facts directly; anything touching conclusions goes back to Mira. After two rounds, Daniel decides, and factual uncertainty can't be overruled into fact. Standing approval (Daniel, 2026-11-25): Claude resolves minor, evidence-backed editorial corrections directly, including after the second review round, and records them in the verification record; only substantive factual disagreements or unresolved verification issues go to Daniel.
- **Clarifications with Mira (2026-11-25):**
  - `primary: true` marks the one official source the checker needs. Other official sources are listed normally and still count as primary evidence.
  - Decision-relevant uncertainty is stated in the article, in plain terms of what it means for the player (for example "on the Chronicled Wish, if you can't reach the next 5-star before December 15, the Fate Point is lost"; always name the specific wish system). Redundant hedging and research commentary are cut.
  - `published_at` is set by Claude at actual publication.
  - Failed-claims reports are kept in `verification/reviews/<slug>-r<n>.md` so recurring weaknesses can be tracked.
- **Safeguards from pilot 01 (Mira and Claude, 2026-11-25):**
  - A numerical recommendation must keep the assumptions of its method, above all when they interact with the recommended build (for example, energy figures calculated without a set that the article recommends).
  - Team recommendations are judged as a complete mechanical system: element interactions, auras and every slot. Individual character compatibility isn't enough.
- **Originality gate (Daniel and Mira, 2026-11-25):** a fact check doesn't prove originality. Before publishing a Tier 2 or 3 piece, download its non-official source pages and run `python3 lib/originality.py <folder> <article.md>`. Any shared 10-word run, or more than 15 shared 6-word runs with one source, gets rewritten. Matches on official game text (ability or set descriptions) are judged by eye. Specialist analysis is credited by name in the text when an article relies on it.
- **Completeness safeguard (batch 02):** character recommendations must cover the established alternative teams and archetypes, not just the current banner's headline pairing. Any original team proposal needs an explicit mechanical justification.

## Editorial principles (Daniel, 2026-11-26)
Mira and Claude apply these consistently. MaxCrit is a professional gaming publication: when a mechanical rule or checker warning would make an article worse, editorial quality wins and the warning is noted, not obeyed blindly.
1. **Sources:** original first; reliable secondary publications are acceptable as supplementary sources.
2. **Uncertainty:** cut filler and hedging; keep qualifications that affect decisions, eligibility, availability or recommendations.
3. **Attribution:** natural attribution where it establishes origin or credibility; avoid repetition, not attribution.

## Review efficiency (Daniel and Mira, 2026-11-25)
Full rules: `docs/editorial-standard-amendments.md` section 10. In short:
- Mira runs `lib/stylecheck.py` before delivery (the file is standalone: send her the current copy whenever it changes); packages arrive with 0 errors. `check.js` runs the same file and warns on filler, steering frames, "Step N:" subheads and "X, not Y" habits.
- Evidence files carry a URL plus a short excerpt or locator for every critical claim, so review is reading, not re-research.
- Fresh-agent review for Tier 3 and for Tier 2 with numbers or recommendations. Routine Tier 2 how-to and hardware guides are checked by Claude directly against the evidence, re-opening the source for each critical claim.
- Reviews check the claims in the package. New sections or brands are added only when leaving them out would mislead; other gaps go to Mira or the `review_by` pass.
- Mira proposes one official image per article (no photographed people, including people on product-shot screens).

## Workflow with Mira (Daniel and Mira, 2026-11-26, replaces conflicting review rules above)
- Packages follow `docs/package-format.md`: repo front matter, an evidence record (URL + short exact quote) for every consequential claim, image URL with credit and alt, duplicate check, game registration data when needed.
- Verification: fresh-agent review for Tier 3 only. Tier 1 and Tier 2 get targeted direct checks: Claude spot-checks the critical claims (dates, numbers, names, rewards, recommendations) against the quoted sources, and widens the check only when something doesn't match.
- A draft that fails is returned to Mira with the failed claim or missing information. Claude doesn't rewrite it. Minor wording and formatting fixes are still done directly.
- One build, commit and push per batch; check the live site once after the deploy, no repeated polling.
- An automated publisher was assessed (2026-11-26) and parked: feasible, but not built for now.

## Builds directory metadata (2026-11-25)
`/hub/builds.html` is generated from each build's own front matter; there is no separate dataset. Every `hub_type: builds` page sets `character`, `build_meta` (game-specific labels taken from the article's verified text, e.g. element / weapon / role for Genshin, path / combat type / role for HSR), `game_version`, and, only when the official wish notice confirms it, `banner_ends` (UTC, the earliest server's end) and `banner_name`. The game filter appears with builds for 2+ games; a game's own hub (`/hub/builds/<game>.html`) appears with 2+ games and 5+ builds for that game. The featured banner strip only shows when it is a subset of the directory.

## Build completeness spec (Daniel, 2026-11-25)
Every build page covers nine sections: kit overview, stats with targets, weapons (incl. a free option), sets, teams, rotation, skill priority, duplicates (Constellations/Eidolons/Sequences/Mindscapes) and materials. Full rules and game terms: `docs/build-page-spec.md`. `check.js` and `stylecheck.py` enforce it: errors for new builds and builds marked `build_spec: 1` when expanded, warnings for older builds. Unverifiable sections are declared with `spec_omit` and explained in the verification record, never padded.

## Verification statuses (Daniel, 2026-11-25)
Reviews tag each consequential claim VERIFIED, ACCESS BLOCKED, UNSUPPORTED, CONTRADICTED or INTERPRETATION (full rules: `docs/editorial-standard-amendments.md` section 9). A blocked URL never rejects an article on its own: verify the claim another way (official mirror such as a Steam announcement, archive, browser or GitHub Action fetch, excerpts or screenshots in the package, other official docs, or two independent reputable sources) and record the method. Ask for evidence claim by claim. Critical claims (dates, costs, rewards, mechanics, recommendations, risk rules) must be VERIFIED or a VERIFIED-premise INTERPRETATION before publishing; UNSUPPORTED or CONTRADICTED critical claims are fixed or removed. BLOCKED verdicts are reserved for contradicted critical claims or a core that can't be verified by any method.
