# Failed-claims report: asphalt-legends-f2p-car-progression-touchdrive-guide (r2)

**Verdict: PASS** (once the MINOR fixes below are applied; MINOR 1 is a house rule and must be applied before publishing)

Reviewer: fresh adversarial fact-check agent, 2026-11-25. Tier 2 scope (seasonal Blueprint strategy). Counts: 0 BLOCKER, 0 MAJOR, 8 MINOR.

Verification method: I opened all three front-matter sources directly on 2026-11-25. asphaltlegends.com/news/ferrari-season returns 200 and is dated Nov 10, 2026. asphaltlegends.com/en/news/club-series returns 200 and is dated Sep 10, 2026. gameloft.helpshift.com/hc/en/15-asphalt-legends/faq/611-how-can-i-unlock-cars/ returns 200. All three URLs exist as written.

## r1 findings

| r1 # | Status |
|---|---|
| 1 Car roles | Resolved by removing them |
| 2 F2P path / Trion Nemesis | Resolved: the named-car table is gone, and Cyber Monday is listed without a reward claim |
| 3 TouchDrive mechanics | Resolved by removing them. The title no longer promises TouchDrive, but the slug still does (MINOR 7). |
| 4 Club TLE | Resolved; the attribution is tightened in MINOR 3 |
| 5 Milestone halves | Resolved |
| 6 20-member example | Resolved (15-member example, labeled) |
| 7 Tickets | Resolved by removing the claim |
| 8 Pack drop rates | Optional; dropped |
| 9 Ledger | Resolved; the record now says who opened what |
| 10 "X, not Y" | Not resolved; there are new instances (MINOR 1 and 2) |
| 11 Image, 12 published_at | Pending at implementation |

## Verified

| Claim | Status | Evidence |
|---|---|---|
| Mazda Furai Car Hunt Nov 25 to Dec 8; VLF Force 1 V10 Car Hunt Dec 4 to 17; overlap Dec 4 to 8; the VLF hunt runs past the Furai window | VERIFIED | Ferrari Season notes, "Car Hunts" |
| Club TLE Dec 4 to 7, "easy credits and Blueprints of the season cars"; it falls inside both hunts | VERIFIED | Ferrari Season notes, "Club TLE" |
| Cyber Monday Nov 30 to Dec 5 features the Trion Nemesis and Icona Vulcano Titanium | VERIFIED | Ferrari Season notes |
| Milestones go from 24 to 28; total stays 6,000,000 Reputation; first half has Blueprints for season cars, second half their EIPs | VERIFIED | Ferrari Season notes, "Club Milestones". "Epic Import Parts" expands the source's "EIPs" (MINOR 4). |
| Full Club Series rewards need 15 members | VERIFIED for the Sep 2026 Club Series; INTERPRETATION that it still applies in December (MINOR 3) | Club Series post: "Get 15 members involved and you'll unlock the full rewards"; the event "will return during the last weekend of each Season ... the rewards will update" |
| Key-only event cars can't be unlocked with Blueprints | VERIFIED | FAQ 611: "unique cars ... can only be unlocked with a special car key ... can't be unlocked with Blueprints" |
| 6,000,000 / 15 = 400,000; 20 / 40 = 0.5 | VERIFIED (calculation), labeled as examples | Arithmetic correct |
| Prioritising and scheduling advice (Club TLE first, then Furai, then VLF) | INTERPRETATION on verified dates | Labeled as "our planning recommendation" |
| Internal links | VERIFIED | /home/claude/maxcrit/src/content/news/asphalt-legends-ferrari-season-events-calendar.md, /home/claude/maxcrit/src/content/hub/december-2026-mobile-games-calendar.md |
| Front matter and style | VERIFIED | seo_title 50, summary 144, 4 H2s, 4-point tldr, no em dashes, no bold, none of the check.js stock phrases. The 6 en dashes are in date ranges, which check.js allows. |

## Failed claims

| # | Severity | Claim / gap | Evidence | Downstream impact | Fix |
|---|---|---|---|---|---|
| 1 | MINOR (house rule; apply before publishing) | Banned "the source doesn't say" filler: "They do not establish an unlock guarantee or exact Blueprint drop rate for the Car Hunts. The Cyber Monday listing identifies the two featured cars; it does not establish a Blueprint reward." | CLAUDE.md rule of 2026-11-24 (no "we don't know" sentences) | Breaks the house rule | Replace the paragraph with: "Gameloft's November 10 notes provide the dates above." Delete the other two sentences. |
| 2 | MINOR | "X, not Y" and disclaimer frames: "This arithmetic is an example, not an observed drop rate."; "Fifteen is the Club Series full-reward participation threshold; it is not a claim about maximum club size or a requirement for each individual milestone."; "rather than relying on one member to complete the shared objective" | House style (AI tells) | Style | (a) Replace with "Treat this as a planning pace for your own runs." (b) Delete the "Fifteen is ..." sentence (MINOR 3 covers its meaning). (c) Replace the third sentence with "Coordinate participation with your clubmates before the event ends." |
| 3 | MINOR | "Gameloft's Club Series announcement says full rewards require participation from 15 members" reads as a current rule. The 15-member condition was stated for the September Club Series, and Gameloft said the rewards would update. | Club Series post (Sep 10, 2026) | A December participation rule is inferred from September | Replace with: "When Gameloft introduced the Club Series in September, full rewards required 15 participating members, and Gameloft said the event returns on the last weekend of each Season." In the example paragraph, replace "by 15 equally contributing players" with "by 15 equally contributing players (the September full-reward threshold)". |
| 4 | MINOR | "Epic Import Parts" expands a term the source abbreviates ("EIPs") | Ferrari Season notes: "The second half will include the EIPs for those cars" | Naming rule | Replace "while the second contains their Epic Import Parts" with "while the second half contains their EIPs". |
| 5 | MINOR | The table heading "Blueprint opportunities this season" covers Cyber Monday, which has no Blueprint reward in the source | Ferrari Season notes | The header implies a reward | Rename the H2 to "Ferrari Season events to plan around". |
| 6 | MINOR | "Players who already own a fully upgraded Furai can start the second target earlier." "Fully upgraded" (Credits upgrades) is a different thing from not needing Blueprints | FAQ 612 (upgrades use Credits; Blueprints star up) | Wrong condition | Replace with: "Players who need no more Furai Blueprints can start the VLF hunt earlier." |
| 7 | MINOR | The slug and file names still say "touchdrive" after that content was removed | Draft scope change | The URL no longer matches the content | Rename the slug, article file and verification file to `asphalt-legends-ferrari-season-f2p-blueprint-guide`. It's unpublished, so nothing needs redirecting. |
| 8 | MINOR | Time-sensitive: the Furai hunt is already running (Nov 25) and everything ends Dec 17 | Notes dates | Stale advice if it publishes late | Publish by Dec 4 or hold. Set `review_by: '2026-12-08'` (already set) and archive or update after Dec 17. |

Still pending at implementation (doesn't affect the verdict): official image fields with credit, `published_at` at publication, check.js, and the originality check (Tier 2).
