# Failed-claims report: diablo-immortal-f2p-legendary-gem-guide (r2)

**Verdict: PASS** (once the minor edits below are applied; none of them changes a conclusion). Publication still needs an official image, since the package has none and the build drops imageless articles.

Reviewer: fresh agent, 2026-11-25. Targeted round 2 review. Draft not edited.

## Method
- news.blizzard.com opened directly with WebFetch this time (no approval block): S1, S2, S3, S11, S14, S15, S16 and S21 were re-read live. The S1 Auxiliary section was checked line by line against the live page.
- I did not re-research R1 VERIFIED items that are unchanged.
- stylecheck.py: 0 errors, 0 warnings (INFO: no image proposed). I also read the full text by hand.
- Banned-domain grep over the article and evidence: no hits. Em dash grep: none. Bold in running text: none.
- Internal links: both targets exist (`src/content/hub/diablo-immortal-events.md`, hub_type events; `src/content/hub/diablo-immortal-november-18-2026-patch-notes.md`, hub_type patch-trackers). The anchors "events calendar" and "November 18 update coverage" match their targets.

## R1 findings

| # | Status | Evidence |
|---|---|---|
| F1 | RESOLVED | The "31 / add 15" figure is gone. No rank-cost numbers remain anywhere. |
| F2 | RESOLVED | The legacy 16 / 225 / 1-4-32 figures and the Wowhead cost-table source are removed, and the closing filler is gone. A planning-sheet method replaces them (lines 104-106). |
| F3 | RESOLVED | Live S1 confirms all six caps verbatim ("A 1-Star Auxiliary Gem can have a max Rank of 5" through "5/5-Star ... max Rank of 9"). It also confirms the dormant rule ("can still have a Rank 1 Auxiliary Gem"), the primary-rank ceiling, the Gem Power rule ("still do not contribute Gem Power to empowering the socketed Legendary Gem") and the Haunt Coil / Blessing of the Worthy example. Date window: maintenance Nov 3-4, 2026, patch 5.1.3, so "early-November" is correct. |
| F4 | RESOLVED | Live S15 puts Berserker's Eye in the "One-Star" list and Mother's Lament and Pain Clasp in the "Two-Star" list. Live S16 says "Fervent Fang Two-Star Legendary Gem". R1's recollection that Pain Clasp and Fervent Fang are 1-star was wrong, so the original table stands. |
| F5 | RESOLVED | Reddit and Diablo.tv are removed. The table intro (line 83) claims no consensus and no ranking. |
| F6 | RESOLVED | The rank-ten Awakening clause and the "check Platinum price" filler are removed. The S11 line "purchased for 10,000 Platinum" was re-read live; the article states no price. |
| F7 | RESOLVED | The word "crossover" is gone. "certain progressive upgrades" (line 139) is consistent with S9. |
| F8 | RESOLVED | Line 141 dates the choice to May 2025 and doesn't present it as a reward of the current pass. |
| F9 | RESOLVED | The intro and the H2 lead use "early-November". The tracker anchor reads "November 18 update coverage". |
| F10 | RESOLVED | Every listed filler sentence is gone. The auxiliary replacement text is in place (line 135). |
| F11 | RESOLVED | The market/fees paragraph is removed. The duplicate-reserve sentence is kept (line 143). |
| F12 | RESOLVED | Live S21 (June 17, 2026): "a new Legendary Gem drop pool will be available in Elder Rifts." Line 139 makes no claim about odds. |
| F13 | RESOLVED | "original" is removed (line 92). |
| F14 | RESOLVED | Both phrases are removed (lines 69 and 102). |

## New or changed claims

| # | Claim | Status | Evidence |
|---|---|---|---|
| N1 | Extraction/Transfer extended to 1- and 2-star gems "in its December 2024 update" (line 79) | VERIFIED | Live S3: the line is present, and the article schedules maintenance for December 12-13 (Season 34 pass from Dec 19). |
| N2 | March 2026 progressive upgrades for 1/2-star "bringing their progression in line with five-star gems" (line 102) | VERIFIED | Live S2: "starting from Rank 4 to Rank 5", "aligning with 5-Star Gem progression". Go-live is the March 18-19 maintenance; R1's forum mirror dates it to 2026. |
| N3 | Gem Resonance slot unlock level "reduced ... by one" in March 2026 (line 112) | VERIFIED | Live S2: "The level required to unlock Gem Resonance Slots on all Gems has been reduced by 1." |
| N4 | Dawning Echoes for Platinum "in 2024", Resonance to rank four "later that year" (line 112) | VERIFIED | S11 schedules maintenance for June 12-13. Its article ID 24096023 sits between 2024 IDs and the Dec 2024 S3 (24164206), so June 2024 by ordering. S3 (Dec 2024): "The Gem Resonance system now unlocks at Rank 4". |
| N5 | November update lets Auxiliary Gems work "above rank one" (line 120) | VERIFIED, evidence gap | S1 doesn't say this. The original S14 (Nov 2023) does: "The primary Gem's affix will be replaced by the new Auxiliary Gem at Rank 1." That line is missing from the S14 evidence entry (see M2). |
| N6 | "Combat Rating can matter for access to and effectiveness in higher-difficulty PvE" (line 110) | INTERPRETATION (non-critical) | No excerpt supports it. General framing that no decision rests on, so it doesn't block. |
| N7 | Berserker's Eye trade-off, Mother's Lament timed crit buff, Fervent Fang same-target stacking | VERIFIED | S17, S18, S19 and S24 excerpts. No numbers in the article. |

No critical or major failures.

## Minor fixes Claude can apply directly (evidence-backed, conclusions unchanged)

- **M1 (style, repetition), line 131.** Delete the sentence "The primary provides the relevant Resonance and Combat Rating; the auxiliary supplies its effect." It repeats the sentence before it.
- **M2 (evidence file), S14.** Append: `Original rule (2023): "The primary Gem's affix will be replaced by the new Auxiliary Gem at Rank 1." Supports "above rank one" in the guide. Re-read live 2026-11-25.` Also add to S1: `Re-read live 2026-11-25 by R2 reviewer: all six cap lines, dormant rule, primary-rank ceiling, Gem Power developer note and Haunt Coil example confirmed verbatim.`
- **M3 (hedge), line 147.** Replace "Where the game permits, compare two candidate effects using the Auxiliary Gem system." with "Compare two compatible candidate effects using the Auxiliary Gem system."
- **M4 (meta reference to omitted content), line 106.** Replace "This makes the opportunity cost visible without relying on obsolete rank-cost tables." with "This makes the opportunity cost visible."
- **M5 (optional, "X, not Y" habit), line 83.** Replace "The recommendations below follow from their activation conditions and drawbacks; they are not a comparative damage ranking." with "The recommendations below follow from their activation conditions and drawbacks, and the table is unranked." Keep the deduction label on line 133 as it is: it is the required separation of calculated findings from confirmed facts.

## Before publishing (not a fact issue)
- Add an image. None was supplied, and `check.js` drops imageless articles. Use `node lib/images/appstore.js diablo-immortal-f2p-legendary-gem-guide <app-store-id> "Blizzard Entertainment"` or an official og:image from S1. The image arrives as `image_status: candidate`, and Daniel approves it.
- Set `published_at` at publication. Run `npx @11ty/eleventy && node lib/check.js` and get 0 errors.
- Record M1-M5 and the R2 live re-reads in `verification/diablo-immortal-f2p-legendary-gem-guide.md`.
