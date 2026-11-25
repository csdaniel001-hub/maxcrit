# Failed-claims report: honkai-star-rail-silver-wolf-lv999-build (r2)

**Verdict: PASS** (after the MINOR fixes below are pasted)

Reviewer: independent fact-check agent, 2026-11-25. All 10 r1 findings are resolved, and every new or changed claim verifies against the official HoYoLAB 4.7 notes and the Gachabase 4.7.0 release data, re-opened directly this round. Three MINOR fixes remain: one ambiguous character name, two stale entries in the source list and a curly apostrophe. They are paste-ready and change no recommendation.

## Final directory metadata (confirmed, already in the front matter)

```yaml
character: Silver Wolf LV.999
build_meta:
  path: Elation
  type: Imaginary
  role: DPS
game_version: '4.7'
banner_ends: '2026-12-02T03:59:00Z'
banner_name: 'Indelible Coterie: Silver Wolf LV.999'
```

The banner end comes from the HoYoLAB 4.7 Phase I notice: "2026/12/02 11:59 (server time)". On the earliest server, UTC+8, that is 03:59 UTC. The convention matches the existing Aeon ★ Aha build.

## r1 findings

| r1 # | Status in r2 | Note |
|---|---|---|
| 1 Prydwen/Icy Veins attribution | RESOLVED | The text now credits the in-game Build Guide and HSRZone, and the Gachabase pages are in `sources`. |
| 2 Evidence scope notes | RESOLVED | The r2 evidence update says the r1 report supersedes the disputed notes. |
| 3 Aeon ★ Aha trace | RESOLVED | The new section has the E0 values and states that E2 is needed for 999 and 40%. Verified below. |
| 4 See You at the World's End! | RESOLVED | Row added, and the TL;DR updated. Verified below. |
| 5 Gallagher flagged as an example | RESOLVED | "Gallagher is an example sustain; another built sustain can fill that slot." |
| 6 Official names | RESOLVED | Trailblazer (Elation: Lightning), Top Loot Box, and straight apostrophes in the TL;DR. |
| 7 Godmode Player ending | RESOLVED | "At E0 without effects that grant extra uses, the state ends after her third Enhanced Basic ATK." This is correct, because E2 regains uses. |
| 8 "200 target" | RESOLVED | Replaced with the point that SPD keeps helping up to the Trace cap. |
| 9 "X, not Y" frames | RESOLVED | None remain. |
| 10 Banner metadata | RESOLVED | `banner_ends` and `banner_name` added. |

## Verified (new or changed claims)

| Claim | Status | Evidence |
|---|---|---|
| Faces of Elation ★ Holographic Mirage was added in 4.7 and works when the Path of Elation ascends | VERIFIED | The Gachabase 4.6.0 to 4.7.0 release diff (the URL in `sources`) shows the trace as new. The HoYoLAB 4.7 notes say Aeon ★ Aha grants ascension to the Path of Elation and lets Elation characters "obtain Innate Traces". |
| At Aha E0: overflow up to 360, +40% CRIT DMG, Hidden MMR equal to 20% of each Party Trick gained | VERIFIED | Gachabase 4.7.0 release text, verbatim: "At Aeon ★ Aha E0 ... overflow up to 360 ... Increases CRIT DMG by 40% ... equal to 20% of that amount" |
| The 999 limit and the 40% conversion need Aha E2 | VERIFIED | Same text: "At Aeon ★ Aha E2 ... overflow up to 999 ... equal to 40% of that amount" |
| The higher ceiling makes the CRIT DMG conversion more relevant, so keep Speed | INTERPRETATION on verified premises | Talent overflow text, plus the Trace above |
| See You at the World's End! is a free S5 reward for the 4.7 Trailblaze Mission | VERIFIED | HoYoLAB 4.7 notes: "Complete the Version 4.7 Trailblaze Mission to obtain the Superimposition Lv. 5 Light Cone "See You at the World's End! (Elation)" ×1." |
| Its CRIT DMG scales with Elation characters, with more while Aha is on the field | VERIFIED | Gachabase 4.7.0: "For every Elation character on the team, increase the wearer's CRIT DMG by 6%–10%. When Aeon ★ Aha is on the field ... additionally increases by 12%–20%". It is also in the in-game recommended Light Cones. |
| Silver Wolf LV.999 is a separate character from Silver Wolf (Nihility: Quantum) | VERIFIED | HoYoLAB 4.2 notes list "Silver Wolf (Nihility: Quantum)" and "Silver Wolf LV.999 (Elation: Imaginary)" separately |
| The in-game guide also lists Sparxie / Yao Guang / Pearl | VERIFIED | Gachabase 4.7.0 in-game Recommended Teams: Silver Wolf LV.999, Sparxie, Yao Guang, Pearl. Pearl (Elation: Ice) appears in the HoYoLAB 4.7 notes. |
| A Top Loot Box picks one of three effects, so Skill Point recovery is conditional | VERIFIED | In-game Ultimate text |
| Trace contribution reaches its cap; the signature eases higher SPD | VERIFIED | A2 counts at most 100 excess SPD; the signature gives 18% SPD at S1 |
| All r1-verified claims (kit, 160 SPD maths, gear, main stats, Light Cones, trace order, teams) | VERIFIED, unchanged | See the r1 report |

No "the source doesn't say" or "check the game" filler, no "X, not Y" frames, no em dashes, no bold in running text, no damage figures and no hands-on claims.

## Failed claims

| # | Severity | Status | Claim / gap | Evidence (URL + short paraphrase) | Downstream impact | Fix |
|---|---|---|---|---|---|---|
| 1 | MINOR | CONTRADICTED (name) | "The in-game guide also lists Silver Wolf / Sparxie / Yao Guang / Pearl" | The in-game team lists Silver Wolf LV.999. The article's own intro separates her from Silver Wolf (Nihility: Quantum). | "Silver Wolf" alone reads as the other character. | Replace with: "The in-game guide also lists Silver Wolf LV.999 / Sparxie / Yao Guang / Pearl as an Elation-focused lineup." |
| 2 | MINOR | ACCESS BLOCKED (sources list) | `sources` still lists "Prydwen Silver Wolf • Lv. 999" and "Prydwen Aha". | Neither could be retrieved with current content in r1 or r2. The article text no longer relies on either. Every fact they carried is covered by Gachabase, HSRZone or HoYoLAB. | The source list includes pages a reader can't use to check claims. | Delete these two entries from the front matter and from `sources.json`. Keep "Icy Veins Silver Wolf LV.999 build", which still supports the set names. |
| 3 | MINOR | Style (house rule) | The "Trace’s" curly apostrophe in "These figures measure the Trace’s Elation contribution." | Every other apostrophe in the article is straight. | Typographic consistency only. | "These figures measure the Trace's Elation contribution." |

Evidence note: the r2 evidence file keeps the r1 records as history and points to the r1 report. The two new Gachabase URLs (the 4.7.0 release page and the 4.6 to 4.7 diff) both opened directly this round, returned HTTP 200 and contain the cited text verbatim.
