# Failed-claims report: wuthering-waves-the-shorekeeper-build (r1)
Reviewer: Claude (fresh adversarial check) · 2026-11-25 · Tier 3
**Verdict: REVISION REQUIRED**

One critical claim is CONTRADICTED: the skill priority (#1). It is a one-sentence fix on an otherwise verified core, so the verdict is REVISION REQUIRED rather than BLOCKED. The article can't publish until #1 to #3 are resolved.

Retrieval this round:
- Kuro JSON feed, read live: ArticleMenu.json, articles 1454 (1.3 patch notes), 1419 (Profile Reveal), 3132 and 2466 (Resonator Reviews). The official card image was viewed.
- Prydwen, two WebFetch passes. Cloudflare blocks curl, so these are fetch summaries, not quotes.
- Read directly: Wutheringlab Shorekeeper build, WuWaBuild Shorekeeper best-teams (3.8, updated 2026-11-12), Lootbar Shorekeeper guide, GamesFuze (Call of the Abyss).
- Sportskeeda craftable-weapons page, read as a WebFetch summary.
- Mobalytics and wuwaguide.kurogames.com stay blocked. Their claims are now covered by Prydwen and Wutheringlab.

## Verified
| Claim | Status | Evidence |
|---|---|---|
| Shorekeeper is a 5-Star Spectro Rectifier. Kuro lists her combat roles as "Support and Healer, Traction, DMG Amplification" | VERIFIED | Kuro 1454 ("5-Star Resonator: Shorekeeper (Spectro)", Combat Roles line); official card in 1419 (Attribute Spectro, Weapon Rectifier) |
| Inner Stellarealm: 0.01% CRIT Rate per 0.2% ER, up to 12.5%. Supernal Stellarealm: 0.01% CRIT DMG per 0.1% ER, up to 25%. Both caps land at 250% ER | VERIFIED | Wutheringlab kit text (lines on Inner/Supernal Stellarealm); Prydwen summary. Arithmetic: 12.5/0.01×0.2 = 250; 25/0.01×0.1 = 250 |
| Each upgrade needs a party member's Intro Skill (Outer to Inner, then Inner to Supernal), so two Intros after Liberation | VERIFIED | Wutheringlab kit text; Prydwen summary |
| Self Gravitation gives +10% ER while the active Resonator is inside a Stellarealm. Fallacy of No Return gives +10% ER on its Echo Skill | VERIFIED | Wutheringlab kit text; Prydwen summary ("passive and Echo each add 10%"); Lootbar |
| Targets: 230% with Fallacy and passive active, 240% with a different main Echo, 250% during the buff window | VERIFIED (calculated) | Prydwen summary ("230% (Before Echo/Passive)"; "about 240%" without Fallacy). Matches evidence S2. Arithmetic is correct |
| 5-piece Rejuvenating Glow (15% team ATK for 30s on healing); Fallacy main Echo (10% team ATK); Bell-Borne Geochelone as survivability alternative | VERIFIED | Prydwen summary; Lootbar ("Bell-Borne Geochelone or Fallacy of No Return"); Wutheringlab set text |
| 3-cost ER until target; 1-cost HP% | VERIFIED | Wutheringlab ("32.0% Energy Regen * 2"); Prydwen summary |
| Stellar Symphony is the signature: 77% ER, Concerto on Liberation, team ATK on healing Skill | VERIFIED | Wutheringlab (77% ER); Prydwen summary (412 ATK, 77% ER); WuWaBuild passive text (its stat block is wrong, see note) |
| Variation: ER secondary plus Concerto on Resonance Skill | VERIFIED | Prydwen summary; Lootbar (R5: 16 Concerto on Skill) |
| Rectifier#25 is craftable | VERIFIED, weakly | Sportskeeda ("one of the five craftable weapons", fetch summary); Prydwen's crafted entry sits next to a note comparing against Rectifier#25. Lootbar labels it "(Gacha Weapon)", so this conflicts. Keep the claim and note the conflict in the record |
| Call of the Abyss is free: its recipe is a Rinascita exploration-quest reward, then you craft it. Its passive gives Healing Bonus on Liberation | VERIFIED | Prydwen summary ("free via an Exploration quest in Rinascita", 16% Healing Bonus); GamesFuze (recipe reward, then craft); WuWaBuild passive |
| Without Variation S1 or the signature, the opener needs extra Concerto (more Basic Attacks or a Dodge Counter) | VERIFIED | Prydwen summary (rotations need roughly 6 to 8 extra Concerto) |
| Rotation order: Basic Attacks and Heavy Attack, Resonance Skill, Echo (Fallacy), Liberation, Outro | VERIFIED | Prydwen summary (opener sequence) |
| Camellya / Sanhua / Shorekeeper; Zani / Phoebe / Shorekeeper; Sigrika / Qiuyuan / Shorekeeper | VERIFIED | WuWaBuild best-teams (team #2; ToA ratings Zani T2, Sigrika T0.5); Prydwen team headers (Camellya, Zani); evidence S5 |
| Her CRIT buffs are capped, so ER beyond 250% only helps energy | INTERPRETATION (on verified premises) | Caps verified above |
| Evidence spot-check: S1 excerpt matches the live feed exactly. S2 "230% (Before Echo/Passive)" matches Prydwen | VERIFIED | Kuro 1454; Prydwen summary |

## Failed claims
| # | Severity | Status | Claim / gap | Evidence | Downstream impact | Fix |
|---|---|---|---|---|---|---|
| 1 | MAJOR (critical: skill priority) | CONTRADICTED | "Level Liberation and Skill for support functions, and invest in Intro damage only after the party's healing and uptime are comfortable." This puts Intro last. | Wutheringlab: "prioritize upgrading the Intro Skill. Next is her Liberation, as Shorekeeper's primary healing method is her Liberation." Prydwen summary: Intro > Resonance Skill > Basic Attack > Forte Circuit > Resonance Liberation. Both put Intro first. They disagree on what comes second. | The investment advice sends players the wrong way. | Back to the editor. Put Intro Skill first, then follow one named source for the rest, or say the sources split on Liberation versus Skill. Wutheringlab's reason is that Discernment is a guaranteed crit. |
| 2 | MAJOR (critical: mechanics / rotation) | CONTRADICTED by omission | "On the return to Shorekeeper, use her enhanced Intro while the upgraded field remains available." The article assumes S0, and the draft doesn't name the skill. | Wutheringlab kit text: Discernment replaces her first Intro once a Supernal Stellarealm exists, and "Casting Discernment ends the current Stellarealm". Removing that is S1's main effect ("after Intro Skill – Discernment, it doesn't end Stellarealm"). | At S0, following the line as written ends the field. The team loses the CRIT Rate and CRIT DMG buffs the whole article is built around. | Back to the editor. Name Intro Skill Discernment. State that at S0 it ends the current Stellarealm, so time her return for the end of the field window. |
| 3 | MAJOR (completeness) | UNSUPPORTED as coverage | The team table has three examples. Two of them are rated low in the 3.8 sources: Camellya is T3 and Zani is T2. It misses the established archetypes she is rated highest in. | WuWaBuild ToA (3.8) lists Shorekeeper in: Hsin / Suoming Unison (T0), Jingran / Iuno (T0), Aemeath / Lynae (T0.5), Luuk Herssen / Denia (T0.5), Sigrika / Qiuyuan (T0.5), Augusta / Iuno (T1), Carlotta / Lynae (T1.5). Prydwen's team headers are Augusta, Carlotta, Zani and Camellya. Lily (3.8) is now a direct alternative in Unison and Echo Skill teams (WuWaBuild Lily teams; don't reproduce its beta DPR figures). | Breaks the completeness safeguard. Readers with current carries get no lineup. | Back to the editor. Add at least the Hsin / Suoming Unison and the Iuno-based hypercarry archetypes, each judged as a full system. Optionally add one line saying Lily is the alternative healer for Unison and Echo Skill teams. |
| 4 | MINOR | INTERPRETATION, partly unsupported | 4-cost row: "Healing Bonus or HP% for comfort; CRIT DMG for personal Intro damage" | Prydwen summary: 4-cost CRIT DMG. Wutheringlab: Healing Bonus for survivability, CRIT DMG for damage. HP% is only for an S6 Shorekeeper. | Small gearing error | Replace the row with: `\| 4-cost \| Healing Bonus for comfort or CRIT DMG for Intro damage (Prydwen's pick) \|` |
| 5 | MINOR | VERIFIED, wording | "crafted Rectifier#25 or the quest reward Call of the Abyss" | Call of the Abyss's quest gives a crafting recipe (GamesFuze), from a Rinascita exploration quest (Prydwen summary) | Readers may look for a direct quest drop | Replace with: "If neither is available, the craftable Rectifier#25 or Call of the Abyss, whose recipe is a Rinascita exploration quest reward, can serve as no-gacha alternatives." |
| 6 | MINOR | VERIFIED, mislabeled | Primary source is titled "Kuro Games Shorekeeper release notice" | Article 1454 is "Version 1.3: To the Shore's End Patch Notes" | Source list accuracy | Retitle: `title: Kuro Games Version 1.3: To the Shore's End patch notes`. Also add `title: Kuro Games Profile Reveal: Euphonic Chrysalis, The Shorekeeper`, url `https://wutheringwaves.kurogames.com/en/main/news/detail/1419` |
| 7 | MINOR | Completeness | Only one Echo set is given | Prydwen lists an Energy Regen special set with Impermanence Heron as main Echo. Per the summary, it gives +10% ER at 2-piece and boosts the next Resonator's ATK after Outro at 5-piece. | Missing an established alternative | Editor: add one line using the exact set name from Prydwen. The fetch summary didn't give the name, so no text is supplied here. |
| 8 | MINOR | Style | "X, not Y" frames: "is not automatically a better build", "not necessarily on the out-of-combat stat screen", "These are example teams, not a tier ranking.", "not just the displayed ER number" | CLAUDE.md §3 (AI tells) | House style | Replace with, in order: "A build with more healing or personal damage is a worse build if it delays her Resonance Liberation or keeps the team from receiving its full CRIT buffs." / "Reaching the full bonus requires 250% Energy Regen while the field is active. The out-of-combat stat screen can show less." / "These are example teams without a tier ranking." / "Compare rotations by whether the next Liberation is available on time. The displayed ER number alone can mislead." |
| 9 | MINOR | Record | The verification record cites only blocked pages (S3, S4) for the ER target and says the "full source snapshot [is from] July 30" | Wutheringlab (live) and Prydwen (live summary) both confirm it | Record accuracy | Add Wutheringlab and the live Prydwen check to C01, C02 and C06. Add the Rectifier#25 conflict (Sportskeeda vs Lootbar) to the limitations. |

Notes:
- WuWaBuild's weapon database is unreliable for stats. It lists Stellar Symphony with a CRIT DMG secondary, Variation as 5-star, and the rectifier25 page is titled "Originite: Type V". Use its team pages only.
- Name usage: Kuro's 1.3 notes, convene titles and card say "Shorekeeper". The profile and review titles say "The Shorekeeper". The article mixes both, which matches Kuro.

## Directory metadata
- `character: "Shorekeeper"`. Basis: the official card, the 1.3 patch notes and the convene banners. "The Shorekeeper" appears only in profile and review titles.
- `build_meta: { attribute: Spectro, weapon: Rectifier, role: Support }`. Kuro's combat roles are "Support and Healer, Traction, DMG Amplification".
- `game_version: "3.8"`
- `banner_ends` / `banner_name`: leave unset. She isn't on a 3.8 Phase I banner (Kuro 5754).
