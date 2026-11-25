# Failed-claims report: wuthering-waves-lily-build (r2)
Reviewer: Claude (independent check) · 2026-11-25 · Tier 3
**Verdict: PASS**

All ten r1 findings are resolved. One MINOR wording fix remains: the skill-priority sentence needs both sources named. That fix corrects my own r1 replacement text, which leaned on TimeSaver; TimeSaver has since been withdrawn. A second MINOR fix is to the verification record. Both can be applied at implementation.

Retrieval this round:
- Kuro 5725 kit image, read in r1. The r2 rotation text was re-checked against it line by line.
- Read live: WuWaBuild Lily build page and WuWaBuild Lily teams.
- From r1: Wutheringlab, WutheringPity, Pity.gg.
- TimeSaver and GameHub are gone from `sources` and from the text.
- Wutheringlab's footer says its "Echo and team recommendations [are] cross-checked with Game8 and GameWith". That is a cross-check, and its kit data comes from game data. Every Echo and team pick it supports also has a non-Game8 source: WuWaBuild build and teams pages, and Pity.gg. So no remaining claim depends on Game8.

## r1 findings
| r1 # | Status now | Evidence |
|---|---|---|
| 1 Rotation mechanics | RESOLVED, VERIFIED | Draft: finisher grants Sillage, then Liberation, then Outro within 6s for Silvered Dream (active Resonator); teammate Intros during Cradle Lullaby for up to 4 Dream Aroma; swapping Lily in removes Cradle Lullaby and Dream Aroma; Eternal Bloom ends Slumberland; return near the end of the 25s window. All of this matches the Kuro 5725 text exactly. The Outro is named correctly (Blooming Fragrance, 25% All DMG Amplification for 30s) |
| 2 190% threshold | RESOLVED, VERIFIED | "at 190% or below, their ER-dependent team bonuses are zero"; "Her ordinary Outro amplification still applies independently". Matches Kuro 5725 |
| 3 260% sourcing | RESOLVED, VERIFIED | Now attributed to the official kit; TimeSaver removed |
| 4 GameHub | RESOLVED | Removed |
| 5 Echo-dependent arithmetic | RESOLVED, VERIFIED | 100 + 51.84 + 32 + 32 = 215.84; 260 − 215.84 = 44.16; with Formrender's 10%, the gap is 34.16, and 34.16 / 5 = 6.832; without it, 44.16 / 5 = 8.832. Formrender is a 3-cost and can carry one of the two ER main stats, so the layout holds (Wutheringlab: "100 + 77.04 + 32 + 32 + 10"). Fallacy's 10% is correctly treated as conditional |
| 6 Static Mist | RESOLVED | The replacement row is applied; no disputed figure is given. WuWaBuild build page: "Without it, Cadenza are the next picks" |
| 7 Banned filler | RESOLVED; wording follow-up in #1 below | The filler sentence is gone |
| 8 Galbrena teams | RESOLVED, VERIFIED | WuWaBuild Lily teams #5 (Galbrena / Lucilla) and #6 (Galbrena / Qiuyuan) |
| 9 Style frames | RESOLVED | All "X, not Y" frames are gone |
| 10 Record | PARTLY RESOLVED | See #2 below |

## Verified (new or changed claims)
| Claim | Status | Evidence |
|---|---|---|
| "each stack grants up to 7% team ATK at 260% ER" | VERIFIED | Kuro 5725 (Dream Aroma: 0.1% per 1% above 190%, up to 7%, 4 stacks) |
| Rejuvenating Glow plus Fallacy (general); Flower of Tinged Yearning plus Formrender (Unison); HP% or Healing Bonus, ER, HP% | VERIFIED | WuWaBuild build page (Rejuvenating Glow, Fallacy, Flower of Tinged Yearning, Formrender; "4-cost HP%, 3-cost Energy Regen"); Wutheringlab; Pity.gg (Flower of Tinged Yearning for Hsin / Suoming) |
| Cadenza as the budget weapon | VERIFIED | WuWaBuild build page ("Cadenza is the strongest budget pick"); Wutheringlab |
| Fixed buff percentages don't scale with skill levels | VERIFIED | Kuro 5725 (fixed values); Wutheringlab |
| Style | VERIFIED | No em dashes, no bold in running text, no stock phrases, no "X, not Y" frames |

## Failed claims
| # | Severity | Status | Claim / gap | Evidence | Downstream impact | Fix |
|---|---|---|---|---|---|---|
| 1 | MINOR (skill priority) | VERIFIED (one source); sources disagree | "Level Forte Circuit and Resonance Liberation first for healing." | Wutheringlab: "For a healing-focused build: Forte Circuit > Resonance Liberation > Intro Skill". The current WuWaBuild build page: "Forte Circuit > Intro Skill > Basic Attack > Res. Skill > Res. Liberation". Both put Forte Circuit first; they split on what comes second. (My r1 replacement text relied on TimeSaver, now withdrawn, for Liberation.) | Liberation-first reads as consensus when it isn't | Replace with: "Level Forte Circuit first. For extra healing, Wutheringlab puts Resonance Liberation next, while WuWaBuild puts Intro Skill next and Liberation last." Add `title: WuWaBuild Lily build`, url `https://www.wuwabuild.com/resonators/lily/build` to `sources`. |
| 2 | MINOR | N/A (record) | The record points to the r1 report instead of carrying its own claim map. It doesn't mention Wutheringlab's Game8 cross-check. Its title has an em dash. | This review | Traceability | Add the WuWaBuild build page and the skill-priority split to the mapping. Add a line: "Wutheringlab cross-checks Echo/team picks with Game8; every such pick is independently supported by WuWaBuild or Pity.gg." Replace the em dash in the title with a colon. |

## Final directory metadata (confirmed, matches the draft's front matter)
- `character: "Lily"`
- `build_meta: { attribute: Spectro, weapon: Pistols, role: Support }`
- `game_version: "3.8"`
- No `banner_ends` / `banner_name`. The official Phase I notice (5754) doesn't list her banner, so the convention still isn't met.
