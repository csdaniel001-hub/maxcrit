# Failed-claims report: honkai-star-rail-yao-guang-build (r1)

**Verdict: PASS** (once the MINOR paste-ins below are applied; nothing goes back to the editor)

Reviewer: fresh adversarial fact-check agent, 2026-11-25. No critical claim is contradicted or unsupported in a way that changes the article's conclusions. The kit, the gear, the 4.7 Aha E0 interaction, the free 4.7 Light Cone and the SPD maths all verify. Under Daniel's new policy, the gaps below are fixed directly with verified paste-in text:

- the Speed threshold of her A2 Trace (Amaze-In Grace)
- the Aha E2 values
- the official in-game team that is missing
- the alternative relic and planar options
- what See You at the World's End! actually does for her
- the trace order
- names and style
- banner metadata

## Final directory metadata

```yaml
character: Yao Guang
build_meta:
  path: Elation
  type: Physical
  role: Support
game_version: '4.7'
banner_ends: '2026-12-02T03:59:00Z'
banner_name: 'Indelible Coterie: Yao Guang'
```

- **Name, Path and Type**: from the HoYoLAB 4.7 Phase I notice, which lists Yao Guang (Elation: Physical).
- **Role**: every ability in the in-game data is tagged [Support]. The HSR Build site lists her as a "Sub DPS".
- **Banner fields**: from the HoYoLAB 4.7 Phase I notice: "Indelible Coterie: Yao Guang", running "2026/11/11 – 2026/12/02 11:59 (server time)". On the earliest server, UTC+8, that end is 03:59 UTC. This follows the same convention as the published Aeon ★ Aha build and the batch 05 Silver Wolf LV.999 build. The banner is still running today.

## Method and access

- **HoYoLAB**: 4.7 notes (post 47394097) and the 4.7 Phase I notice (post 47385253), read in full through the API.
- **Gachabase**: the 4.7.0 release page for Yao Guang (character 1502), the 4.6-to-4.7 diff and the in-game Build Guide data, all opened directly (HTTP 200). This includes the Build Guide's recommended Light Cones, sets, main stats, substats, Skill Upgrade Priority and teams. The Pearl kit and the character index were used to check names, Paths and roles.
- **HSR Build** (hsr-build.com, updated November 8, 2026): opened directly.
- **Prydwen**: WebFetch returned a copy updated May 31, 2026 (build at Patch 4.0), which predates 4.7. It is used only for older, stable points.
- **Icy Veins**: not reached for this character.

## Verified

| Claim | Status | Evidence |
|---|---|---|
| Yao Guang is Elation: Physical and is on a 4.7 Phase I rate-up ending 2026/12/02 11:59 server time | VERIFIED | HoYoLAB 4.7 Phase I notice |
| Prioritize SPD and Energy Regeneration over ATK | VERIFIED | In-game Build Guide: Feet SPD, Rope Energy Regeneration Rate, substats "SPD / CRIT DMG / CRIT Rate"; HSR Build: "For Elation units, ATK does not affect Elation DMG" |
| 4-piece Diviner of Distant Reach supports the whole Elation team | VERIFIED | In-game set text: "When the wearer uses Elation Skill for the first time in each battle, increases all allies' Elation by 10%"; it is the in-game guide's first Cavern Relic |
| Lushaka, the Sunken Seas or Sprightly Vonwacq | VERIFIED | In-game Build Guide planar list; HSR Build |
| Body CRIT DMG or CRIT Rate; Feet SPD; Sphere HP% or DEF%; Rope ERR | VERIFIED | In-game: "CRIT DMG > CRIT Rate", "SPD", "HP% > DEF%", "Energy Regeneration Rate" |
| Substat order SPD, then CRIT Rate and CRIT DMG | VERIFIED | HSR Build and Prydwen: "SPD > CRIT Rate > CRIT DMG". The in-game guide puts CRIT DMG before CRIT Rate; both orders are sourced. |
| A defensive Sphere, because Elation DMG does not scale with ATK | VERIFIED | HSR Build note quoted above. The kit lists her Elation Skill as "100% Physical Elation DMG" with no ATK term, while her Basic ATK is "% of Yao Guang's ATK". |
| Lushaka's first-slot ATK buff is not an Elation bonus | VERIFIED | Lushaka set text (ATK for the first character in the lineup); HSR Build note |
| 160 SPD as a practical goal; 200 SPD gives 3 actions in 150 AV | VERIFIED (calculated) | 10,000/160 = 62.5 and 10,000/200 = 50, with no action modifiers (stated). Prydwen: "Aim to reach 200 SPD for 3 turns in 150 AV". |
| Aha's turn timing depends on other Elation allies | VERIFIED, pre-4.7 | Prydwen: the 134 SPD Aha breakpoint "requires a second Elation ally". HoYoLAB 4.7 now says Aeon ★ Aha increases the Aha Instant's base SPD (see #1). |
| When She Decided to See: SPD, team CRIT and Energy economy | VERIFIED | In-game: SPD 18%; while "Great Fortune" is active, all allies get 10% CRIT Rate and 30% CRIT DMG, the wearer gets 12% ERR, and she gains 15 fixed Energy each wave |
| Mushy Shroomy's Adventures is a Forgotten Hall shop option | VERIFIED | It is in the in-game Build Guide's Light Cone list. The batch 05 review verified the shop on HSRZone: "Forgotten Hall/Memory of Chaos Light Cone shop". The Prydwen excerpt in S2 could not be reproduced (#9). |
| See You at the World's End! is a free S5 reward from the 4.7 Trailblaze Mission | VERIFIED | HoYoLAB 4.7 notes, New Light Cones |
| Skill deploys a Zone that shares her Elation; Basic ATK builds Punchline and conserves SP | VERIFIED | In-game Skill text (3-turn Zone, allies gain 20% of her Elation, 3 Punchline after Basic ATK or Skill); Basic ATK gives +1 SP |
| Her 180-Energy Ultimate gives Aha an extra turn with a fixed 20 Punchline, without spending the pool | VERIFIED | In-game Ultimate text: "a fixed amount of 20 Punchline ... This turn does not consume Punchline"; Energy Cost 180 |
| Great Boon triggers an extra time on attacks that spend SP | VERIFIED | In-game Talent: "If this attack consumes Skill Points, then additionally triggers "Great Boon" 1 time" |
| Aha E0: Great Boon multiplier +20% of its original value, 12 fixed Energy and 10 Bliss after the Ultimate | VERIFIED | Gachabase 4.7.0 trace text, new in the 4.6-to-4.7 diff |
| Teams with Silver Wolf LV.999, Sparxie, Evanescia, Aeon ★ Aha and Pearl | VERIFIED / INTERPRETATION | In-game teams: Silver Wolf LV.999 / Aeon ★ Aha / Pearl and Evanescia / Aeon ★ Aha / Pearl. Sparxie is an Elation SP spender, which fits the Great Boon text. Pearl is a sustain: her Skill "restores HP for all ally targets". |
| Budget team with Trailblazer (Elation: Lightning) and Gallagher | INTERPRETATION on verified premises | Batch 05 evidence (HSRZone budget Elation teams) |

## Failed claims

| # | Severity | Status | Claim / gap | Evidence | Downstream impact | Fix (paste-in) |
|---|---|---|---|---|---|---|
| 1 | MINOR | UNSUPPORTED (completeness) / outdated | The SPD paragraph leaves out her own 120 SPD Trace threshold. It says "200 SPD is an advanced investment target, not a requirement" ("X, not Y"). Its Aha timing note predates 4.7. | In-game A2 "Amaze-In Grace": "When Yao Guang's SPD is 120 or higher, increases this unit's Elation by 30%. For every 1 SPD exceeded, increases this unit's Elation by 1%. Up to a max of 200 excess SPD". Diviner 4-piece: 10%/18% CRIT Rate at 120/160 SPD. Sprightly Vonwacq: 40% advance at 120 SPD. HoYoLAB 4.7: Aeon ★ Aha increases the Aha Instant's "base SPD". Prydwen: 200 SPD "requires her Signature Light Cone". | It misses the most important breakpoint, which also explains why SPD is her top stat. | Replace the whole paragraph starting "A practical goal is 160 SPD" with: "Amaze-In Grace adds 30% Elation at 120 SPD and another 1% for every point above 120, counting up to 200 extra SPD, so Speed past 120 also raises her Elation. Diviner of Distant Reach and Sprightly Vonwacq also check 120 SPD, and Diviner's larger CRIT Rate bonus checks 160. A practical goal is 160 SPD. Prydwen's best-in-slot target is 200 SPD, which needs her signature. With no action advance or delay, action value is 10,000 / SPD: 62.5 AV at 160 SPD and 50 AV at 200 SPD, which allows three natural actions in 150 AV. Prydwen also tunes Aha to 134 SPD, a breakpoint that needs a second Elation ally, and Version 4.7 raises the Aha Instant's base SPD when Aeon ★ Aha is in the team. Keep a working four-piece set unless a Speed change reaches one of these breakpoints." |
| 2 | MINOR | UNSUPPORTED (completeness) | The relic and planar tables offer one option each. | In-game Build Guide: Cavern Relics "Diviner of Distant Reach", then "Messenger Traversing Hackerspace". Planar Ornaments: Lushaka, the Sunken Seas, Sprightly Vonwacq, Broken Keel. HSR Build: "Run Diviner of Distant Reach on Yao Guang, with Messenger Traversing Hackerspace behind it". Broken Keel: all allies get 10% CRIT DMG once the wearer has 30% Effect RES. | Players without Diviner have no listed fallback. | Relics row: "| Relics | 4-piece Diviner of Distant Reach; Messenger Traversing Hackerspace as the alternative |". Planar row: "| Planar ornaments | Lushaka, the Sunken Seas or Sprightly Vonwacq; Broken Keel once she reaches 30% Effect RES |". |
| 3 | MINOR | CONTRADICTED (order) | "Prioritize Ultimate, Talent and Elation Skill upgrades, then Skill and Basic ATK" | In-game Skill Upgrade Priority: Ultimate = Elation Skill > Skill = Talent > Basic ATK. HSR Build and Prydwen: "Skill = Ultimate > Talent > Basic". No source puts Talent above Skill. | The upgrade order is wrong. | "Level Ultimate and Elation Skill first, then Skill and Talent, with Basic ATK last, as the in-game Build Guide recommends." |
| 4 | MINOR | INTERPRETATION (thin) | See You at the World's End! is described as "an accessible Elation cone to consider if the shop option is unavailable". | In-game effect: "For every Elation character on the team, increase the wearer's CRIT DMG by 6%–10%. When Aeon ★ Aha is on the field, the wearer's CRIT DMG additionally increases by 12%–20%". It gives no SPD, Energy or team buff. It is missing from her in-game Light Cone list. | Readers can't judge it against the shop cone. | Row: "| See You at the World's End! (S5) | Free from the 4.7 Trailblaze Mission; raises only her own CRIT DMG (10% per Elation character at S5, plus 20% while Aeon ★ Aha is on the field), with no SPD, Energy or team buff. |" Also replace "The signature is an investment in smoother rotations rather than a prerequisite." with "The signature smooths her rotation, and the build works without it." |
| 5 | MINOR | UNSUPPORTED (completeness) | The Aha section covers only E0, doesn't name the Trace, and ends with "an additional team interaction, not a permanent change" ("X, not Y"). | Gachabase 4.7.0, "Faces of Elation ★ Mind Reading" (new in the 4.6-to-4.7 diff). At Aeon ★ Aha E0: Great Boon +20% of its original multiplier, 12 fixed Energy and 10 Bliss after her Ultimate. At Aeon ★ Aha E2: +40% of its original multiplier, 30 fixed Energy and 10 Bliss. | It misses the E2 Energy jump, which matters for her 180-Energy Ultimate. | Replace the whole last paragraph with: "Version 4.7 adds Faces of Elation ★ Mind Reading, active when Aeon ★ Aha makes the Path of Elation ascend. At Aha E0, Great Boon's DMG multiplier rises by 20% of its original value, and after her Ultimate Yao Guang regenerates a fixed 12 Energy and gains 10 Bliss. At Aha E2 those become 40% and 30 Energy, with the same 10 Bliss. The fixed Energy refund shortens the wait for her 180-Energy Ultimate, so Aha's Eidolons affect her Ultimate economy as well as her damage. Avoid an ATK-only build, and don't spend all your SP refreshing her Zone early." |
| 6 | MINOR | UNSUPPORTED (completeness) / CONTRADICTED (names) | The team table leaves out the third official in-game team. It uses "Elation Trailblazer" and ends the budget row with "not a fully free roster" ("X, not Y"). | In-game Recommended Teams, Team 3: Yao Guang / Aventurine • Waveflair / Aeon ★ Aha / Pearl. Aventurine • Waveflair is Elation: Quantum (Gachabase index; HoYoLAB 4.7 notes). Official name: "Trailblazer (Elation: Lightning)" (HoYoLAB 4.2). Prydwen: "Yao Guang can fit with the newly buffed Sparkle very well in an Archer team". | A current official lineup and a non-Elation archetype are missing. | Add the row: "| Aventurine • Waveflair / Yao Guang / Aeon ★ Aha / Pearl | Official in-game lineup: three Elation characters sharing her Zone and Great Boon, with Pearl healing the team. |". Rows 3 and 4: change "Elation Trailblazer" to "Trailblazer (Elation: Lightning)". Row 4 purpose: "Budget support and sustain options; Silver Wolf LV.999 remains a limited character." After the table add: "Outside Elation, Prydwen notes that she fits an Archer team with Sparkle." |
| 7 | MINOR | UNSUPPORTED (completeness, 4.7) | The draft doesn't mention the 4.7 custom relic. | HoYoLAB 4.7 notes: "Adds the custom Relic item "Asat Pramad's Gift." Use to obtain one custom max-level 5-star Relic (only Relics from Version 4.7 and earlier can be customized)", claimed during 4.7 through "Grab Your Opening Gifts". | It misses a free gear shortcut for her top stat. | Add after the relic paragraph: "During Version 4.7, Grab Your Opening Gifts includes Asat Pramad's Gift, which creates one custom max-level 5-star Relic from sets released up to 4.7. Diviner of Distant Reach SPD boots are the most direct use for her." |
| 8 | MINOR | Style / name | TL;DR "Mushy Shroomy’s" uses a curly apostrophe. The summary writes "Aeon Aha". | Official name "Aeon ★ Aha". The 146-character summary stays inside 120–160. | Name rule. | TL;DR: "Mushy Shroomy's Adventures is a shop alternative." Summary: "Build Yao Guang for frequent Ultimates, Elation buffs and reliable Speed tuning. Compare Light Cones, Relics and teams with or without Aeon ★ Aha." |
| 9 | MINOR | ACCESS BLOCKED (record) | Evidence S2 (Prydwen Forgotten Hall excerpt); the verification record leaves out the banner end. | The retrieved Prydwen copy doesn't mention Mushy Shroomy's Adventures. The banner end is confirmed (see metadata). | The record leans on a source that can't be reproduced. | Add to `sources`: "- title: HSRZone Silver Wolf LV.999 build (Mushy Shroomy's Adventures shop)" with url "https://www.hsrzone.com/characters/silver-wolf-lv-999-build/". In verification row 01, replace "banner end omitted from metadata until server convention confirmed" with "banner_ends 2026-12-02T03:59:00Z (11:59 server time on the UTC+8 server, the published Aha build convention)". |

## Evidence authenticity

| Excerpt | Result |
|---|---|
| S1 "2026/12/02 11:59 (server time)" | Authentic (HoYoLAB API) |
| S2 Prydwen "The only F2P Light Cone obtainable from the Forgotten Hall store..." | Not reproducible (the retrieved copy doesn't mention it). The fact itself verifies elsewhere. |
| S3 "After using Ultimate, Yao Guang regenerates a fixed amount of 12 Energy and gains 10 Bliss." | Authentic, verbatim (Gachabase 4.7.0) |
| S4 Icy Veins on Poised and Sated | Not fetched. The fact matches the in-game A4 text: "After using Elation Skill, recovers 1 Skill Point(s) for the team". |
| S5 "When She Decided to See with Diviner of Distant Reach" | Authentic, verbatim (HSR Build, updated November 8, 2026) |
| S6 "Superimposition Lv. 5 Light Cone "See You at the World's End!" | Authentic (HoYoLAB API) |

There are no banned sources, damage figures, hands-on claims or "the source doesn't say" filler. There are no em dashes, and no bold in running text. The paste-ins remove the three "X, not Y" frames.
