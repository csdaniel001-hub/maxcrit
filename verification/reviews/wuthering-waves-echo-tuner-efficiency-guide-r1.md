# Failed-claims report: wuthering-waves-echo-tuner-efficiency-guide (r1)
Reviewer: Claude · 2026-11-25 · Tier 3
**Verdict: REVISION REQUIRED (one BLOCKER)**

## Verified
- EXP bands 4,400 / 12,100 / 23,100 / 39,500 / 63,500 (cumulative 142,600) and 10 Tuners per tune: WuWaBuild.
- Arithmetic: 63,500 / 142,600 = 44.5%; the first 15 levels take 39,600 EXP, less than the final band; the +10 reveal costs 16,500 EXP and 20 Tuners.
- 3.8 claims: official patch notes (Kuro article 5783, read from Kuro's JSON feed) confirm Batch Management filter logic ("Changing filter options will now clear any currently selected Echoes"), default sort by Rarity, and the Ascension Planner Overview tab with a Recommended Lineup section "currently in testing".
- "Premium Tuner" is a real item name (Tuner synthesis chain).

## Failed claims
| # | Severity | Claim / gap | Evidence | Downstream impact | Fix |
|---|---|---|---|---|---|
| 1 | BLOCKER (source rules) | Fandom wiki listed as a source. | `fandom.com` is on check.js's BANNED list; CLAUDE.md excludes general wikis. | The build fails. | Remove it; carry C02/C05 on WuWaBuild plus a second specialist copy. |
| 2 | MAJOR (disputed figure) | Recycling returns 75% EXP and 30% Tuners. | WuWaBuild: 75% (rounded down to 500) and 30%, but its own +20 example (60,500 from 79,100) is about 76.5%. GameWith lists 30% Tuners but 60–80% for EXP. A community test (Reddit, unusable as a source) says 75%. | The rule says a disputed figure is left out, or confirmed by a second reliable copy. | Find a second clean copy for 75% or soften it to "most of the EXP". 30% Tuners has two copies and can stay. |
| 3 | MINOR | "Approximately 106,950 EXP before tube rounding". | WuWaBuild: the refund rounds down to the nearest 500, giving 106,500. | Small inaccuracy. | Give 106,500 and show the rounding in the record (only if #2 survives). |
| 4 | MINOR (single source, inconsistent) | Shell Credit totals (24,260 at +25). | WuWaBuild's formula (0.1 per EXP + 2,000 per tune) gives 24,260, but the same page also says 14,260. | An odd-looking figure with one copy. | Second copy, or drop the Shell Credit column. |
| 5 | MINOR (headline match) | Title and summary say "Echo farming", but the body has no farming content (Tacet Fields, Data Bank, Waveplates). | — | Search-intent mismatch. | Retitle around upgrade and Tuner efficiency, or add a sourced farming section. |

## Originality
0 flags against WuWaBuild. Fandom and Prydwen return 403.
