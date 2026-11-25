# Failed-claims report: honkai-star-rail-speed-tuning-guide (r1)

**Verdict: REVISION REQUIRED**

Reviewer: fresh adversarial agent, 2026-11-25. Tier 2 with numbers. Draft not edited.
Method: ran `tests/check_speed_math.py` (4 tests OK), recomputed rows by hand with exact fractions, re-opened KQM and Icy Veins pages live, cross-checked MaxCrit's accepted Sunday, Yao Guang and Silver Wolf LV.999 build pages and verification records. WebFetch on the draft's own source URLs needed approval and was not granted, so hoyoverse.com, Prydwen and HoYoLAB pages were not re-opened live; those rows rely on the package excerpts plus MaxCrit's accepted records. `lib/stylecheck.py`: 0 errors, 0 warnings. No em dashes in the draft.

## Verified

| Claim | Status | Evidence |
|---|---|---|
| Base AV = 10,000 / SPD; gauge 10,000 | VERIFIED | KQM speed guide (live): "Base AV = Default AG / Speed , Default AG = 10000" |
| Advance Forward removes % of the full 10,000 gauge, floored at 0 | VERIFIED | KQM (live): "New Action Gauge = max(0 , Current Action Gauge – 10000 * (Advance Forward% – Action Delay%))"; KQM SRL turn-order page (live) gives the same formula |
| SPD change rescales remaining AV | VERIFIED | KQM (live): "New AV = Current AV * Current SPD / New SPD"; KQM SRL (live) same |
| AA example 125 SPD, 50 AV left, 25% advance gives 30 AV; 10 AV left gives 0 | VERIFIED (calculated) | 6250 - 2500 = 3750, /125 = 30; 1250 - 2500 floors at 0 |
| SPD buff example 100 to 150 SPD, 60 AV left gives 40 AV | VERIFIED (calculated) | 60 x 100 / 150 = 40 |
| AV display exists in settings | VERIFIED, wording fix in F7 | KQM (live): option "Whether to display the character's action value during a battle", under Other Settings; displayed AV "is rounded up" |
| Breakpoint table, all 27 cells, strict-before convention | VERIFIED (calculated) | count = ceil(SPD x budget / 10,000) - 1. Hand checks: 134 x 150 = 2.01 gives 2; 160 x 250 = 4.00 tie gives 3; 161 x 250 = 4.025 gives 4; 143 x 350 = 5.005 gives 5; 200 x 150 = 3.00 tie gives 2; 201 x 350 = 7.035 gives 7. Convention preserved. |
| Threshold method 20,000 / 150 = 133.33 and 50,000 / 350 = 142.86 | VERIFIED (calculated) | exact fractions |
| 134 SPD for +1 turn in the 150 AV opening; Sunday 1 SPD below the carry | VERIFIED (two specialist sources) | Icy Veins Sunday guide (live): "The most common way to gear Sunday is to have 1 less SPD than your main DPS"; "134 SPD (+1 Turn in 150 AV)". KQM (live): "134 Speed for two turns in one cycle in Memory of Chaos". Prydwen S5 excerpt (cached) "135/134 SPD setup" |
| Sunday Skill makes an ally and its summon act immediately (V2.7) | VERIFIED, source swap in F2 | MaxCrit Sunday verification record: HoYoLAB V2.7 article 35356638, "allows ally characters and their summons to immediately take action" |
| 135/134 timeline (74.07, 74.63, 148.70, 149.25; four carry turns before 150 AV) | VERIFIED (calculated) | 10,000/135 = 74.074; 10,000/134 = 74.627; 74.627 + 74.074 = 148.70; 2 x 74.627 = 149.25. Test passes |
| Hyperspeed timeline 161/100 (62.11, 124.22, 186.34, 248.45; 2 granted before 150, 4 before 250) | VERIFIED (calculated) | multiples of 62.112; carry natural turn always sits 100 AV after each grant, so it never arrives first |
| Yao Guang Amaze-In Grace: 30% at 120 SPD, +1% per SPD, cap 200 excess | VERIFIED (cached Prydwen S6; matches MaxCrit's accepted Yao Guang build record from trace text) | live re-check not possible this round |
| Silver Wolf LV.999 False Ending Speedrun: 50% at 160 SPD, +2% per SPD, cap 100 excess | VERIFIED (cached Prydwen S7; matches MaxCrit's accepted Silver Wolf LV.999 build) | same |
| Elation table, all 16 cells | VERIFIED (calculated) | e.g. SW 180: 50 + 2 x 20 = 90; SW 320: capped 50 + 200 = 250; YG 320: 30 + 200 = 230 |
| Aeon ★ Aha playable from V4.7 | VERIFIED | S8 HoYoLAB excerpt; consistent with MaxCrit's 4.7 patch notes page |
| Internal links /hub/events/honkai-star-rail-events.html and /hub/banners/honkai-star-rail-banners.html | VERIFIED | both exist in `_site/hub/` |
| Duplicate check | VERIFIED | no existing MaxCrit speed or AV guide in `src/content/hub/` |

## Failed claims

| # | Severity | Status | Claim | Evidence | Exact fix with paste-in text |
|---|---|---|---|---|---|
| F1 | Critical | UNSUPPORTED (only source is Fandom, banned) | "The opening cycle of a Memory of Chaos wave has a budget of 150 AV. Subsequent cycles within that wave have 100 AV each. A new wave can change the timing" | The only source is S4 Fandom. KQM, KQM SRL, Icy Veins MoC, Icy Veins combat basics, Prydwen game modes and the KQM Bronya proofs PDF all lack the 150/100 rule and the per-wave rule. Indirect support: Icy Veins "134 SPD (+1 Turn in 150 AV)" and hyperspeed "at least 161 SPD" match 150 then 100 under strict counting. Nothing allowed supports "per wave". | (a) Mira supplies an allowed explicit source: an in-game MoC rules screenshot or text (official) is best, or a KQM/Prydwen/Icy Veins page that states 150 then 100. (b) Until then, replace the paragraph's first three sentences with: "In Memory of Chaos, the opening cycle lasts 150 AV and each later cycle lasts 100 AV. Icy Veins lists 134 SPD as the breakpoint for an extra turn in 150 AV, and KQM gives 134 SPD for two turns in one cycle. The table below models one uninterrupted fight with no SPD changes, action advance, delays or extra turns." Drop the "per wave" wording everywhere (heading text, table lead-in and "If a wave ends at 180 AV" becomes "If the fight ends at 180 AV"). Record the derivation in the verification record as a VERIFIED-premise INTERPRETATION if (a) is not met. |
| F2 | Major | ACCESS BLOCKED | Primary source https://www.hoyoverse.com/en-us/news/125757 | MaxCrit's Sunday verification record: the hoyoverse.com page renders only through JavaScript and could not be verified; the primary was swapped to HoYoLAB article 35356638, full text "Sunday is a support character that allows ally characters and their summons to immediately take action." | Swap the primary (YAML below). Body text unchanged. |
| F3 | Major | CONTRADICTED (name) | "Himeko Nova" (7 times) | Icy Veins Himeko guide (live): official name "Himeko • Nova"; MaxCrit Sunday build uses "Himeko • Nova" from the in-game lineup. The draft already writes "Silver Wolf • LV.999" with the dot. | Replace every "Himeko Nova" with "Himeko • Nova", including the summary. |
| F4 | Major | CONTRADICTED (internal) | summary: "choose 134 or 160 SPD" | Under the draft's own strict table, 160 SPD gives 2/3/5, the same as 143. The next gain is 161 (4 turns before 250 AV). Icy Veins: hyperspeed Sunday "at least 161 SPD". | summary: "Calculate Action Value, choose 134 or 161 SPD, tune Sunday and Himeko • Nova, and see why Elation characters gain from even higher Speed." (137 characters) |
| F5 | Major | INTERPRETATION overstated | "build Sunday at approximately 160 SPD or higher" and the hyperspeed section's even framing ("Prydwen lists both approaches") | Icy Veins (live): hyperspeed "is a more niche way of gearing Sunday and usually involves building him to at least 161 SPD"; MaxCrit Sunday record: Prydwen calls it "a niche build that often trails -1 Speed". "Prydwen lists both approaches for Himeko • Nova" could not be re-opened (ACCESS BLOCKED); S5 excerpt supports it only as a paraphrase. | Replace "approximately 160 SPD or higher" with "at least 161 SPD". After "Prydwen lists both approaches for Himeko • Nova." insert: "Prydwen describes hyperspeed as a niche build that often trails the -1 SPD setup, and Icy Veins also calls it the more niche option." Mira adds a verbatim Prydwen excerpt for the Himeko • Nova line to the evidence file. |
| F6 | Major | CONTRADICTED (cross-site) | Draft: at exactly 200 SPD the third action is a tie and is not counted in 150 AV | MaxCrit's published Yao Guang build, line 94: "50 AV at 200 SPD, which allows three natural actions in 150 AV". The two pages give readers opposite answers. | Claude edits the Yao Guang build (not this draft): replace "which allows three natural actions in 150 AV" with "which puts her third natural action exactly on the 150 AV boundary, so 201 SPD is the safe target for three actions in that window". Log it in that build's verification record. |
| F7 | Minor | CONTRADICTED (wording) | "Enable the Action Value display in the game's battle settings." | KQM (live): the option is in Other Settings in the Settings menu; displayed AV is rounded up. | "Turn on the action value display under Other Settings in the Settings menu. The numbers next to the portraits in the action order show remaining AV, rounded up." |
| F8 | Minor | UNSUPPORTED (Fandom only) | "Avoid treating every advance, extra turn and immediate-action effect as interchangeable, especially after an enemy has delayed the target." | The delay distinction rests on S4 Fandom. KQM SRL lacks it. | Replace the paragraph with: "Effects that make a target act immediately follow their own Skill text. Read that text before treating one as a 100% advance in your timeline." |
| F9 | Minor | Calculated, value | Table row 174 SPD | The strict threshold for 6 turns before 350 AV is 172 (6 x 10,000 / 350 = 171.43). 174 is not a breakpoint, so readers overbuild by 2 SPD. | Change the row to: "\| 172 \| 58.14 \| 2 \| 4 \| 6 \|". Add the row to `test_table` (172: (2,4,6)). |
| F10 | Minor | Reader value | Section "Why Action Advance can beat extra SPD" never says when it does | The maths in the section supports a decision rule. | Add at the end of the section: "With constant SPD, a 25% advance saves 2,500 / SPD in AV, which is 20 AV at 125 SPD, as long as the target has at least that much left. Use it soon after the target's turn. A SPD buff saves time in proportion to the AV still remaining, and keeps doing so for its whole duration, so it is worth more across a multi-turn window and less on a unit that is about to act." |
| F11 | Minor | Style ("X, not Y") | "The very high numbers are mathematical caps, not recommended relic targets." | House style | "The highest rows only show where each Trace stops scaling." |
| F12 | Minor | Style (repetition) | "A character's SPD is a separate stat." then the paragraph "SPD and AV describe different things. SPD is a stat; AV is the remaining distance in combat time. An effect that changes one can influence the other without adding an entire turn." | Same point said twice in a row | Delete "A character's SPD is a separate stat." Keep the next paragraph. |
| F13 | Minor | Style (steering / adjectives) | "That fourth turn is the payoff." and "the slower-than-carry setup offers a compelling opening" | House style | "The carry gets a fourth turn before 150 AV." and "the slower-than-carry setup gives more carry turns in the opening." |
| F14 | Minor | INTERPRETATION, unsourced | "The commonly used 160 SPD and 200 SPD shorthand refers to those exact thresholds; players should check actual turn order." | No source for how players use the shorthand; Icy Veins uses 161. | "Guides that list 160 or 200 SPD mean these exact ties. Build 161 or 201 to stay clear of the boundary." |
| F15 | Process | n/a | `published_at: '2026-11-25T18:11:00Z'` set in the package; no image | Clarification 2026-11-25: Claude sets `published_at` at publication; no image, no publication | Remove `published_at` from the package; Claude adds it and the image at publication. |

## Source YAML

Remove:

```yaml
- title: HoYoverse Version 2.7 announcement (Sunday mechanic)
  url: https://www.hoyoverse.com/en-us/news/125757
  primary: true
- title: Honkai Star Rail Wiki Speed
  url: https://honkai-star-rail.fandom.com/wiki/Speed
```

Add:

```yaml
- title: HoYoLAB Version 2.7 update details (Sunday)
  url: https://www.hoyolab.com/article/35356638
  primary: true
- title: Icy Veins Sunday build guide (SPD tuning, hyperspeed)
  url: https://www.icy-veins.com/honkai-star-rail/sunday-guide-best-builds
- title: Icy Veins Himeko • Nova build guide
  url: https://www.icy-veins.com/honkai-star-rail/himeko-nova-guide-best-builds
```

Plus, for F1(a), the allowed source that states the 150 AV / 100 AV cycle rule (in-game MoC rules screenshot preferred).

Update `sources.json` the same way. Evidence file: replace S4 with the Icy Veins and KQM excerpts quoted under F1 and F5, and the KQM Other Settings excerpt under F7.

## Downstream impact

- F1 is the base for the 250 and 350 AV columns, the TL;DR's second bullet and the 161 hyperspeed figures. If an allowed explicit source shows a different later-cycle length, the table, F4 and F9 must be recomputed.
- F6 changes a published page (Yao Guang build). Do it in the same push so the two pages agree.
- After the fixes: re-run `tests/check_speed_math.py` with the 172 row, `lib/stylecheck.py` and `check.js`.
