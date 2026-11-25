# MaxCrit batch 03: consolidated review (r1)
Reviewer: Claude · 2026-11-25

| Article | Tier | Verdict | Blockers | Major | Minor |
|---|---|---|---|---|---|
| HSR Aeon ★ Aha build | 3 | REVISION REQUIRED | 0 | 2 (Evanescia team missing; Waveflair rule vague) | 3 |
| HSR Warp pity / Stellar Jade | 3 | REVISION REQUIRED | 0 | 1 (Celestial Invitation, 62.5% case) | 2 |
| WuWa Echo / Tuner efficiency | 3 | REVISION REQUIRED | 1 (Fandom source, banned by check.js) | 1 (EXP refund figure disputed) | 3 |
| ZZZ Agent vs W-Engine | 3 | REVISION REQUIRED | 0 | 2 (Rescreening / Reverberation channels missing; The Vault example misleading) | 2 |
| WuWa Starpath Reverbs II | 2 | BLOCKED | 1 (no official notice for pool or deadline) | 1 (50/50 rule missing) | 1 |

## What held up
Every calculation re-run correctly. Banner windows, SPD thresholds, set names, pity ceilings, shared counters and the 3.8 patch-note claims all trace to official notices or two specialist copies.

## Recurring weaknesses (for the tracker)
1. **Special-banner exceptions keep getting missed:** HSR Celestial Invitation, ZZZ Rescreening and Reverberation, WuWa Reverb 50/50. Proposed safeguard: every pull or pity guide includes a "banner variants in this game" check.
2. **Completeness of team archetypes:** Evanescia was missed again, after the batch-02 safeguard.
3. **Banned sources:** Fandom slipped in. Please run check.js's BANNED list before handoff.

## Originality
`lib/originality.py` found 0 flags on all five articles against the downloadable sources: StarGuide, WuWaBuild, Yoveya, WuWa Today and the Prydwen cloudfront copy. Prydwen, Icy Veins and Fandom return 403, so they were checked by hand from search snippets. One close phrase was found in the Aha build, matching BuffBuff, which isn't a listed source.

## Useful evidence for revisions
- **HSR 4.7 Phase I notice:** HoYoLAB 47385253.
- **HSR 4.3 Phase I notice:** HoYoLAB 45275874, with the Celestial Invitation odds.
- **Aha kit:** HoYoLAB 47441887.
- **Kuro JSON feed, readable when the site is JS-only:** `https://hw-media-cdn-mingchao.kurogame.com/akiwebsite/website2.0/json/G152/en/article/<id>.json`.
  - Article index: `.../en/ArticleMenu.json`
  - 3.8 patch notes: article 5783
  - Starpath Reverbs (3.5) rules: article 5065
