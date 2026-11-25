# Failed-claims report: cod-mobile-battle-royale-perks-field-assets-guide (r2)

**Verdict: REVISION REQUIRED**

All remaining items are exact-text fixes the coordinator can apply directly; no conclusion goes back to the editor. Once rows 1 to 3 are applied, nothing BLOCKER or MAJOR remains.

Reviewer: fresh adversarial fact-check agent, 2026-11-25. Source S01 re-opened directly in this round (HTTP 200, unchanged from r1): https://www.callofduty.com/blog/2026/11/call-of-duty-mobile-season-10-7th-anniversary . No alternative verification was needed; no URL was blocked. Drafts not edited.

## r1 findings: resolution
| r1 # | Finding | Status in r2 |
|---|---|---|
| 1 | Signal 50 "semi-auto" claim | Resolved (link removed), but replaced with a banned disclaimer sentence; see row 1 |
| 2 | Tracking Ammo squad utility | Resolved as a claim, but replaced with a banned "unconfirmed" sentence; see row 1 |
| 3 | Check-the-interface slots / station prices | Instructions removed; replaced with a banned "outside the scope" sentence; see row 2 |
| 4 | Gulag redeployment missing from budget | Resolved, matches S01 |
| 5 | Aerial asset outdoors/building inference | Resolved (removed) |
| 6 | Tier 3 triangulation | Resolved by rescoping to Tier 2; single official source is acceptable and supports every remaining factual claim |
| 7 | "horizontal spread" | Resolved ("horizontal recoil"; table says "Lateral recoil reduction") |
| 8 | Shoulder-bash doors | Resolved (sentence removed) |
| 9 | Slide Reload spread density | Resolved ("Denser spread") |
| 10 | "targeting interface" | Resolved ("scope mechanism") |
| 11 | Verdansk-only scope | Resolved (BR-wide framing; Gulag tied to Verdansk) |
| 12 | "cash" currency term | Resolved ("resources") |
| 13 | image fields, published_at | Open, assigned to Claude at implementation (published_at now removed; image still missing). Not a fact-check gate |

## Verified
| Claim | Status | Evidence |
|---|---|---|
| Wildcards renamed Perks and Scorestreaks renamed Field Assets in Battle Royale | VERIFIED | https://www.callofduty.com/blog/2026/11/call-of-duty-mobile-season-10-7th-anniversary ("Field Assets", "Perks") |
| Perks are found in matches and can be equipped to loadouts, accessed at Loadout Drops and Buy Stations | VERIFIED | https://www.callofduty.com/blog/2026/11/call-of-duty-mobile-season-10-7th-anniversary ("Perks") |
| All 14 Perk names, spelled exactly, and the effect summaries in the table (except failed-claims row 3 wording) | VERIFIED | https://www.callofduty.com/blog/2026/11/call-of-duty-mobile-season-10-7th-anniversary ("Perks" list) |
| Tracking Ammo: tighter ADS spread, temporary mark on a hit enemy, 30-second cooldown | VERIFIED | https://www.callofduty.com/blog/2026/11/call-of-duty-mobile-season-10-7th-anniversary ("Perks") |
| Sniper Expert lets semi-automatic sniper rifles fire continuously | VERIFIED | https://www.callofduty.com/blog/2026/11/call-of-duty-mobile-season-10-7th-anniversary ("Perks") |
| Hunter's Rhythm faster aiming applies for a short time after a kill | VERIFIED | https://www.callofduty.com/blog/2026/11/call-of-duty-mobile-season-10-7th-anniversary ("Perks") |
| Field Assets can be in loadouts or bought at Buy Stations; costs changed | VERIFIED | https://www.callofduty.com/blog/2026/11/call-of-duty-mobile-season-10-7th-anniversary ("Field Assets") |
| New Field Assets Death Machine and EMP Systems; new scope mechanism for Strafing Run and Stealth Chopper | VERIFIED | https://www.callofduty.com/blog/2026/11/call-of-duty-mobile-season-10-7th-anniversary ("Field Assets") |
| Gulag: on the first elimination on Verdansk, a win redeploys you; after a loss you are out until a teammate buys your redeployment at a Buy Station | VERIFIED | https://www.callofduty.com/blog/2026/11/call-of-duty-mobile-season-10-7th-anniversary ("Fight For Your Life in the Gulag") |
| "When to prioritize it" column and the three decision paragraphs (Wild Hip Fire / Slide Reload / Reload Rush for close range; ADS Movement Speed vs Flinch Reduction; Ballistic Calibration for moving targets) | INTERPRETATION on verified premises (labelled as such in text) | https://www.callofduty.com/blog/2026/11/call-of-duty-mobile-season-10-7th-anniversary ("Perks") |
| Reserve resources for redeployment before optional purchases; one squad member tracks it | INTERPRETATION on verified premises | https://www.callofduty.com/blog/2026/11/call-of-duty-mobile-season-10-7th-anniversary (Gulag section) |
| Sourcing: one official Activision source, primary: true, no banned domains | VERIFIED | front matter |
| Internal links /hub/patch-trackers/call-of-duty-mobile-season-10-2026-patch-notes.html and /hub/events/call-of-duty-mobile-events.html resolve | VERIFIED | /home/claude/maxcrit/_site |
| House style: no em dashes, no bold in running text, no "X, not Y" frames; seo_title 42 chars, summary 147 chars, about 430 words of prose | VERIFIED | grep / length count on draft |

## Failed claims
| # | Severity | Claim / gap | Evidence (URL + short paraphrase, no long quotes) | Downstream impact | Fix |
|---|---|---|---|---|---|
| 1 | MAJOR | Ranged paragraph: "this guide makes no assumption about the Signal 50's fire mode" and "Teammate visibility of that mark is unconfirmed, so do not build a squad around shared marks." | Banned by the 2026-11-24 rule (no sentences saying a detail is unknown or unconfirmed). The 2026-11-25 clarification does not cover these: they only announce gaps in the source and don't state a player consequence that follows from the official rules. The earlier unsourced claims are already gone, so the disclaimers have nothing left to qualify. | House-rule violation; reads as filler. | Replace the whole paragraph with: "For ranged fights, Ballistic Calibration is the candidate when projectile travel makes a moving target difficult to hit. Sniper Expert suits semi-automatic sniper rifles, because it lets them fire continuously. Tracking Ammo tightens your spread while aiming and marks an enemy you hit for a short time." |
| 2 | MAJOR | "Exact prices and slot limits are outside the scope of this guide. Our recommendations concern individual Perks and spending decisions." | Same banned category (announcing what the guide doesn't cover because the source lacks it). Record the omission in the verification record instead, which already notes it. | House-rule violation. | Delete both sentences (the whole paragraph). |
| 3 | MINOR | Table row: Wild Hip Fire "Hip accuracy improves further on hit" | https://www.callofduty.com/blog/2026/11/call-of-duty-mobile-season-10-7th-anniversary: greatly increases hip-fire accuracy, and further increases it for a short time after a hit. The row drops the base effect. | Undersells the main effect. | Replace the cell with: "Higher hip-fire accuracy, rising further for a short time after a hit" |
