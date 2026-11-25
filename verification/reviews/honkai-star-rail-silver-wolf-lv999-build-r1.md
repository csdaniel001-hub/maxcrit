# Failed-claims report: honkai-star-rail-silver-wolf-lv999-build (r1)

**Verdict: REVISION REQUIRED**

Reviewer: fresh adversarial fact-check agent, 2026-11-25. No contradicted critical claim was found. The kit mechanics, the 160 SPD maths, the core gear and the Light Cone effects all verify against official HoYoLAB text and the in-game data. The draft fails on two counts. Two attributions can't be reproduced. It also misses three decision-relevant parts of Version 4.7: the trace Silver Wolf LV.999 gets from Aeon ★ Aha, the free See You at the World's End! Light Cone, and the confirmed banner end date.

## Directory metadata to use

```yaml
character: "Silver Wolf LV.999"
build_meta:
  path: Elation
  type: Imaginary
  role: DPS
game_version: "4.7"
banner_ends: "2026-12-02T03:59:00Z"
banner_name: "Indelible Coterie: Silver Wolf LV.999"
```

- Name, Path and Type come from the official 4.2 notes ("5-Star Silver Wolf LV.999 (Elation: Imaginary)"). The role comes from the same notes: "a damage-dealing character".
- `banner_ends` comes from the official 4.7 Phase I notice, which runs the rerun "2026/11/11 – 2026/12/02 11:59 (server time)". The earliest server is UTC+8, so the end is 03:59 UTC. This is the same convention as the existing Aeon ★ Aha build, which uses 15:00 server time = 07:00Z.

## Verification method and access

- **Official HoYoLAB posts** were read in full through the API (`getPostFull`, `x-rpc-language: en-us`):
  - 44742273, the 4.2 notes
  - 47385253, the 4.7 Phase I Warp notice
  - 47394097, the 4.7 notes
- **Gachabase**, `hsr.gachabase.net/characters/1506/silver-wolf-lv999`, opened directly.
  - It is a datamine of the live client. It includes the in-game Build Guide: recommended Light Cones, sets, main stats, Skill Upgrade Priority and a recommended team.
  - In this report it is called "in-game data".
- **HSRZone** was opened directly. The page is dated September 13, 2026, for Version 4.5.
- **Prydwen**: curl returned 403. WebFetch returned a stale cache that showed the character as unreleased, so its build sections were empty. Treat Prydwen as ACCESS BLOCKED, not as evidence against anything.
- **Icy Veins**: curl returned 403. WebFetch returned a version last updated March 23, 2026, which is pre-release: its signature text differs from the live data, and its stat graphic was garbled. Treat it as stale. It is not evidence for or against the planar main stats.

## Verified

| Claim | Status | Evidence |
|---|---|---|
| Imaginary Elation damage dealer, transforms into "Godmode Player" | VERIFIED | HoYoLAB 4.2 notes, New Characters: "damage-dealing character who can transform into "Godmode Player"" |
| Ultimate available at 60 Hidden MMR | VERIFIED | In-game data, Talent "I Carry, We Win": "After "Hidden MMR" reaches 60, can activate Ultimate" |
| Hidden MMR gives CRIT Rate, then CRIT DMG once CRIT Rate reaches 100% | VERIFIED | Same Talent: 0.40% CRIT Rate per point, then 0.80% CRIT DMG per point |
| Three Enhanced Basic ATKs, then she exits Godmode Player | VERIFIED | Same Talent: "After fully using Enhanced Basic ATK 3 time(s), she exits" |
| Skill builds Punchline outside Godmode Player | VERIFIED | In-game data, Skill "Trigger Happy": "Gains 5 Punchline point(s)" |
| Loot box outcomes vary (Skill Point refund is one of three random effects) | VERIFIED | In-game data, Ultimate: "randomly triggers 1 of the following effects", with "Kaboom Eggsplosion" recovering 2 Skill Points |
| False Ending Speedrun gives 50% Elation at 160 SPD, plus 2% per extra point, counting up to 100 extra SPD | VERIFIED | In-game data, A2 Trace text |
| 180 SPD gives 90% and 200 SPD gives 130% | VERIFIED (calculated) | 50 + 2 × (SPD − 160); the method is stated in the verification record |
| 4-piece Ever-Glorious Magical Girl + 2-piece Punklorde Stage Zero | VERIFIED | In-game Build Guide (Cavern Relics: Ever-Glorious Magical Girl first; Planar: Punklorde Stage Zero first); HSRZone; Icy Veins (stale, but lists the same sets) |
| Body CRIT Rate, Feet SPD | VERIFIED | In-game Build Guide: "CRIT Rate > CRIT DMG", "SPD"; HSRZone |
| Planar Sphere and Link Rope HP% or DEF% | VERIFIED | In-game Build Guide: Sphere "HP% > DEF%", Rope "DEF% > HP%"; HSRZone: "defensive planar mains" |
| Diviner of Distant Reach as a Speed-dependent alternative | VERIFIED | HSRZone: "At 120/160 SPD, its 4pc grants 10%/18% CRIT Rate" (Gachabase relic data confirms the 120/160 SPD thresholds); HSRZone: "a real alternative only when its Speed and CRIT value crosses a meaningful threshold" |
| Welcome to the Cosmic City: 18% SPD at S1, Elation DEF ignore, Punchline on Ultimate | VERIFIED | In-game data: SPD 18%, Elation DMG ignores 20% DEF, 20 Punchline when using Ultimate on self. This matches the live client. The Icy Veins text is pre-release. |
| Mushy Shroomy's Adventures: free, with Elation vulnerability that helps the team | VERIFIED | HSRZone: "guaranteed, repeatable F2P recommendation from the Forgotten Hall/Memory of Chaos Light Cone shop"; Icy Veins effect: "increases Elation DMG taken by all enemies" |
| Today's Good Luck: paid Battle Pass cone, offensive stats, no SPD | VERIFIED | In-game data: CRIT Rate 12% and Elation on Elation Skill; HSRZone: "Strong paid Battle Pass option" |
| Trace order Basic ATK, Ultimate, Talent, Elation Skill | VERIFIED | In-game Build Guide, Skill Upgrade Priority: Basic ATK, Ultimate, Talent, Elation Skill |
| Keep at least one other Elation character | VERIFIED | HSRZone: "wants at least one other Elation character; three is the ideal premium shell" |
| Team 2: Sparxie + Yao Guang Elation shell | VERIFIED / INTERPRETATION | In-game recommended team: Silver Wolf LV.999, Sparxie, Yao Guang, Pearl; HSRZone lists the Sparxie + Yao Guang core |
| Team 3: Trailblazer (Elation: Lightning) + Asta budget team | VERIFIED / INTERPRETATION | HSRZone: "Silver Wolf Lv.999 + Trailblazer (Elation) + Asta + Natasha (or another sustain you own)" |
| Team 1: Aeon ★ Aha with Silver Wolf LV.999 | VERIFIED (synergy exists) | In-game data, trace "Faces of Elation ★ Holographic Mirage", active when the Path of Elation ascends. The article does not describe it; see #3. |
| She is a 4.7 Phase I rate-up | VERIFIED | HoYoLAB 4.7 Phase I notice: "Indelible Coterie: Silver Wolf LV.999", until 2026/12/02 11:59 server time |
| Banner schedule link | VERIFIED | `/hub/banners/honkai-star-rail-banners.html` exists in the maxcrit repo |

## Failed claims

| # | Severity | Status | Claim / gap | Evidence (URL + short paraphrase) | Downstream impact | Fix |
|---|---|---|---|---|---|---|
| 1 | MINOR | ACCESS BLOCKED | "Prydwen and Icy Veins agree on the core set." | prydwen.gg/star-rail/characters/silver-wolf-lv-999 is blocked or served stale, so no build data can be retrieved. The Icy Veins copy is from before release. The same sets are confirmed by the in-game Build Guide (hsr.gachabase.net/characters/1506/silver-wolf-lv999) and by HSRZone. | The core set is correct, but the attribution can't be reproduced. | Replace with: "The in-game Build Guide and HSRZone both recommend this set." Add the Gachabase character page to `sources` (title: "Gachabase Silver Wolf LV.999 in-game data"). Keep Prydwen only if a live copy can be re-retrieved. |
| 2 | MINOR | ACCESS BLOCKED (evidence record) | Evidence S2 and S3 scope notes can't be fully reproduced. | S3: the quoted excerpt is authentic. It is the 4-piece Ever-Glorious Magical Girl text, which matches the note's "Magical Girl and Punklorde" item. The note's "Signature SPD 18%, DEF ignore 20%" and "HP/DEF planars" items couldn't be seen in the only Icy Veins copy available, a pre-release copy. S2: the Prydwen "May 31, 2026 snapshot" can't be reproduced. All the facts involved verify elsewhere. | The record leans on sources a reviewer can't currently reach. | In C01, C02 and C03, add the in-game data (Gachabase character page) and HSRZone as evidence. In S3, add "excerpt: Ever-Glorious Magical Girl 4-piece". |
| 3 | MAJOR | UNSUPPORTED (completeness) | Team 1 includes Aeon ★ Aha but never explains the Aha-specific trace. This is the main 4.7 change to her build. | In-game data, trace "Faces of Elation ★ Holographic Mirage". At Aeon ★ Aha E0, when the Path of Elation ascends: Hidden MMR can overflow up to 360, CRIT DMG +40%, and 20% of each Party Trick gained is also granted as Hidden MMR. The 999 overflow (and 40% conversion) needs Aeon ★ Aha E2. The HoYoLAB 4.7 notes say Aha "grant[s] ascension to the Path of Elation, allowing Elation characters to obtain Innate Traces and unlock brand-new abilities". | Players can't judge the Aha pull, which runs on the same Phase I banner, against the build. The CRIT and overflow advice in "Relics and planar ornaments" ignores the higher overflow cap. | Back to the editor: add the E0 trace values, and state that the 999 cap needs Aeon ★ Aha E2. Re-check the CRIT/overflow paragraph with the Aha case. |
| 4 | MAJOR | UNSUPPORTED (completeness) | The Light Cone table leaves out the free 4.7 option. | HoYoLAB 4.7 notes: completing the 4.7 Trailblaze Mission gives "See You at the World's End! (Elation)" at Superimposition 5. The in-game Build Guide lists it among her recommended Light Cones. Its effect is 6%–10% CRIT DMG per Elation character on the team, plus 12%–20% more CRIT DMG while Aeon ★ Aha is on the field. | The accessible recommendation is incomplete for the current version. | Back to the editor: add a row and update the accessible-choice sentence (Mushy Shroomy's Adventures or See You at the World's End!). Don't import any relative-DPS figures. |
| 5 | MINOR | INTERPRETATION (unflagged) | Gallagher appears as the fixed sustain in all three teams. | No source pairs Gallagher with her. HSRZone uses Huohuo and Natasha "(or another sustain you own)". The in-game team uses Pearl (Elation: Ice). The verification record itself calls Gallagher "an editorial sustain choice". | Readers may think Gallagher is required. | Add after the team table: "Gallagher is our example sustain. Any sustain you have built can take that slot." |
| 6 | MINOR | CONTRADICTED (names) | "Elation Trailblazer" (table and line 81) and "the loot boxes" (line 85). | Official names: "Trailblazer (Elation: Lightning)" (HoYoLAB 4.2 notes) and "Top Loot Box" (in-game Ultimate text). The TL;DR uses a curly apostrophe in "Mushy Shroomy’s" while the table uses a straight one. | Breaks the exact-name rule. | Table row: "Silver Wolf LV.999 / Trailblazer (Elation: Lightning) / Asta / Gallagher". Line 81: "Trailblazer (Elation: Lightning) is the accessible starting point when the limited supports are missing." Line 85: "Do not assume a Top Loot Box always refunds Skill Points: it triggers one of three random effects." TL;DR: "Mushy Shroomy's Adventures is an accessible Light Cone." |
| 7 | MINOR | CONTRADICTED (minor wording) | "use her three Enhanced Basic ATKs before the state ends" | In-game Talent: the state ends because she has used the three Enhanced Basic ATKs. Nothing else ends it. | It implies a timer that does not exist. | "Enter Godmode Player when your team can feed the damage window. The state ends after her third Enhanced Basic ATK." |
| 8 | MINOR | UNSUPPORTED | "The 200 target is aspirational, particularly without her signature." No 200 target is set anywhere in the article. | HSRZone warns against "treating 200 as a magical universal breakpoint". | Readers may take 200 as a recommended target. | "Above 160, every point still adds Elation, so extra SPD keeps paying off; the signature's 18% SPD makes higher totals much easier to reach." |
| 9 | MINOR | Style (house rule) | "X, not Y" frames on lines 42, 57 and 73. | House style (MaxCrit CLAUDE.md, AI tells). | Style gate. | Line 42: "Silver Wolf LV.999 is an Imaginary Elation damage dealer and a separate character from the original Silver Wolf (Nihility: Quantum)." Line 57: "These are trace bonuses to Elation; they say nothing about total damage." Line 73: "These are example compositions built from documented synergies, without performance rankings." |
| 10 | MINOR | VERIFIED, missing from record | The verification record says "exact rerun deadline omitted". | HoYoLAB 4.7 Phase I notice: "2026/11/11 – 2026/12/02 11:59 (server time)". | The directory banner strip has no data. | Add the `banner_ends` and `banner_name` given above, and record the source in C05. `review_by: 2026-12-02` already matches. |

## Evidence authenticity (spot-check)

| Excerpt | Result |
|---|---|
| S1 HoYoLAB 4.2 "can transform into "Godmode Player" to use powerful abilities" | Authentic, verbatim (API full text) |
| S2 Prydwen "each remaining point of "Hidden MMR" switches to increasing CRIT DMG" | Not reproducible (blocked or stale). The same fact is verified in the in-game Talent text. |
| S3 Icy Veins "The Elation DMG dealt by the wearer and their memosprites ignores 10.0% of targets' DEF." | Authentic, verbatim. It is the 4-piece Ever-Glorious Magical Girl text. The signature and planar items in the scope note couldn't be checked on this source (#2). |
| S4 HoYoLAB 4.7 Phase I "Silver Wolf LV.999 (Elation: Imaginary)" | Authentic, verbatim. The deadline is in the same post. |
| S5 Prydwen Aha "Increases Hidden MMR cap to 999" | Not reproducible (fetch failed). The in-game trace confirms 999 only at Aeon ★ Aha E2 (360 at E0). |
| S6 HSRZone "with a CRIT body, SPD boots, and defensive planar mains" | Authentic, verbatim |

No banned sources are used. No damage or DPS figures, no hands-on claims and no "the source doesn't say" filler were found. There are no em dashes and no bold in running text.
