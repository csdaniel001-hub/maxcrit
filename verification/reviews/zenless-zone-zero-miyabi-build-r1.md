# Failed-claims report: zenless-zone-zero-miyabi-build (r1)
Reviewer: Claude (fresh adversarial check) · 2026-11-25 · Tier 3
**Verdict: REVISION REQUIRED**

The core build checks out, with one MAJOR completeness gap in the teams and several MINOR fixes.

Retrieval this round:
- Official intro (iInfoId 127429, 2024-12-17), read through the HoYoverse content API. Its Agent Intro and Additional Ability images were viewed.
- Icy Veins and Prydwen, two WebFetch passes. curl returns 403, so these are fetch summaries, not quotes.
- Source age: the Prydwen build and teams are dated Patch 2.1. Icy Veins was reviewed for Patch 3.1. The live game is 3.3, and 3.4 launches December 2.

## Verified
| Claim | Status | Evidence |
|---|---|---|
| Hoshimi Miyabi: S-Rank, Frost attribute, Anomaly specialty, Hollow Special Operations Section 6. Frost has its own Anomaly Buildup gauge | VERIFIED | Official intro image ("unique Frost attribute and an independent Attribute Anomaly Buildup gauge") |
| Bask in Frost: needs a Support agent or a Section 6 teammate. Each Disorder gives 2 Fallen Frost | VERIFIED | Official intro image (Additional Ability text) |
| Yanagi (Section 6), Yuzuha, Soukaku and Lucy (Support) all meet the condition. Soukaku shares her faction | VERIFIED | Official condition; Prydwen team list |
| Fallen Frost: starts at 3, max 6. EX Special +2, Ultimate +3, Disorder +2, Frostburn - Break +1 (once every 10s). A level-3 Shimotsuki costs 6 | VERIFIED | Prydwen summary |
| Gauge arithmetic: 5 + 3 → 2 wasted; 4 + 2 = 6 | VERIFIED (calculated) | Correct |
| The Core Passive converts CRIT Rate into Frost Anomaly Buildup Rate, up to 80%. CRIT Rate above 80% still helps crits | VERIFIED | Prydwen summary ("100% of ... CRIT Rate, up to a maximum increase of 80%"); Icy Veins (at least 80%, "as close to 100% as possible") |
| Branch & Blade Song: CRIT DMG +30% at 115 or more Anomaly Mastery; +12% CRIT Rate for 15s when the squad applies Freeze or triggers Shatter | VERIFIED | Icy Veins (verbatim set text); Prydwen summary |
| 70 + 12 = 82% example | VERIFIED arithmetic; INTERPRETATION premise | The article states the trigger condition. Icy Veins says to account for the set's CRIT Rate when building. No source fetched says whether her Frost anomaly itself counts as Freeze. Record this as an assumption |
| 2-piece Woodpecker Electro or Polar Metal; Disc 6 ATK% | VERIFIED | Icy Veins; Prydwen summary |
| Hailstorm Shrine (limited signature); Fusion Compiler (standard S-Rank); Rainforest Gourmet and Weeping Gemini (craftable A-Rank) with the stated conditions | VERIFIED | Icy Veins summary (acquisition and effects) |
| Skill priority: Core Skill and Basic Attack, then Ultimate | VERIFIED | Icy Veins ("Core Skill, Basic Attack, Ultimate and EX Special Attacks, in that order") |
| Miyabi / Yanagi / Yuzuha; Miyabi / Lycaon / Soukaku | VERIFIED | Prydwen popular Shiyu Defense teams |
| Miyabi / Piper / Lucy | VERIFIED, with caveat | Prydwen's Sons of Calydon note: "Lighter is preferred over Piper" |
| Evidence spot-check: the S1 excerpt matches the API's sIntro. The S3 excerpt matches Icy Veins verbatim. S2's Additional Ability wording matches the official text in substance | VERIFIED | Live retrieval |

## Failed claims
| # | Severity | Status | Claim / gap | Evidence | Downstream impact | Fix |
|---|---|---|---|---|---|---|
| 1 | MAJOR (completeness) | UNSUPPORTED as coverage | The team table leaves out the Vivian and Astra Yao archetypes. The evidence pack itself lists Vivian as a current synergy (S5: "Yanagi Vivian Burnice Piper"). | Prydwen's popular teams include Miyabi / Vivian / Astra Yao, Miyabi / Vivian / Yuzuha, Miyabi / Yanagi / Astra Yao, Miyabi / Yuzuha / Soukaku and Miyabi / Burnice / Yuzuha, plus a Double Support archetype. Both specialist sources predate 3.2 and 3.3. | Breaks the completeness safeguard. The most common lineups aren't covered, and post-3.1 partners are unchecked. | Back to the editor. Add a Vivian lineup and a double-Support (Astra Yao) lineup, each judged as a full system: Disorder source, Bask in Frost condition, buffs. Re-check team coverage against a source updated for 3.3, or set an update trigger for 3.4 (December 2). Note that Prydwen prefers Lighter to Piper in the Sons of Calydon team. |
| 2 | MINOR (critical: main stat) | UNSUPPORTED | Disc 5: "Ice DMG%, ATK% or PEN Ratio" | Icy Veins: ATK% and Ice DMG, equal. Prydwen: Ice DMG. Neither lists PEN Ratio. | Gearing error | Replace the row with: `\| Disc 5 \| Ice DMG Bonus or ATK% \|` |
| 3 | MINOR | INTERPRETATION, contradicted order | Disc 4: "CRIT Rate or CRIT DMG" | Both sources put CRIT Rate first: Icy Veins has CRIT Rate, then CRIT DMG and ATK% equal | Weakens the 80% target the article builds toward | Replace the row with: `\| Disc 4 \| CRIT Rate, or CRIT DMG once her CRIT Rate is comfortable \|` |
| 4 | MINOR | UNSUPPORTED | "swap to refresh teammate buffs once the animation is committed if you can do so safely" | No source fetched supports swapping out during Shimotsuki | An unsourced mechanic in the rotation | Replace that sentence with: "Use the charged attack during a useful damage window." and keep "Don't force a long combo while the enemy is moving away." |
| 5 | MINOR (completeness) | Gap | Electro-Lip Gloss is missing from the W-Engine table | Icy Veins lists it (Battle Pass) as roughly equal to an S1 Fusion Compiler at S5 | An accessible option is missing | Add the row: `\| Electro-Lip Gloss \| Battle Pass W-Engine; Icy Veins rates it at S5 close to an S1 Fusion Compiler \|` |
| 6 | MINOR | Duplicate source | "Prydwen Miyabi current indexed listing" has the same URL as "Prydwen Miyabi" | sources.json; the record itself says S5 isn't independent | Inflates the source count | Delete the second Prydwen entry from `sources` and fold its synergy note into S2 in the record. |
| 7 | MINOR | Style | "X, not Y" frames: "This cap applies to the buildup bonus, not to her chance to deal a critical hit. Higher CRIT Rate can still increase her direct attack consistency."; "... rather than counting it twice."; "These examples describe resource accounting, not a fixed rotation that ignores enemies or buff windows." | CLAUDE.md §3 | House style | Replace with, in order: "The cap applies only to the buildup bonus. CRIT Rate above 80% still makes her critical hits more consistent, and Icy Veins suggests getting as close to 100% as practical." / "Choose your Disc 4 around how consistently you keep the buff active, and count it once." / "These examples describe resource accounting. Adjust the order to enemy movement and buff windows." |
| 8 | MINOR | Record | The 82% example's premise | The trigger needs the squad to apply Freeze or Shatter. Whether her Frost anomaly qualifies wasn't confirmed. | Numerical-assumption safeguard | Add the assumption to the record's C03. No article change needed, since the text already states the condition. |

## Directory metadata
- `character: "Hoshimi Miyabi"` (official intro card)
- `build_meta: { attribute: Frost, specialty: Anomaly, role: DPS }`. Attribute and specialty come from the official card. The role comes from Prydwen and Icy Veins, which treat her as the main damage dealer.
- `game_version: "3.3"`. This is the live version, but the sources are older: the official intro is from December 2024 (1.4), Prydwen's build and teams are from 2.1, and Icy Veins was reviewed for 3.1. Keep `review_by: 2026-12-02` tied to the 3.4 launch.
- `banner_ends` / `banner_name`: leave unset. No current Miyabi channel was checked or claimed.
