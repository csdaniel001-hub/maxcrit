# Failed-claims report: honkai-star-rail-acheron-build (r1)

**Verdict: REVISION REQUIRED**

Reviewer: fresh adversarial fact-check agent, 2026-11-25. No critical claim is contradicted. The kit numbers, the E1/E2 effects, Izumo Gensei and Takama Divine Realm, the ATK rope and the Light Cone effects all verify. Pioneer Diver of Dead Waters is only verified as a long-established choice (#4). The draft fails on team completeness and on Version 4.7 coverage:

- The headline "premium" team runs The Abyss at its lower tier, and the article doesn't say so.
- The Affinitive Eidolon is left out "pending evidence", but its effect can be verified in two independent sources.
- Established Jiaoqiu-based and double-Nihility archetypes are missing.

## Directory metadata to use

```yaml
character: "Acheron"
build_meta:
  path: Nihility
  type: Lightning
  role: DPS
game_version: "4.7"
```

- The name, Path and Type come from the HoYoLAB 2.1 and 4.7 notes ("Acheron (Nihility: Lightning)"). The role comes from the 2.1 notes: "Acheron is a DPS character".
- There is no `banner_ends` or `banner_name`. Acheron has no Event Warp in 4.7 Phase I. The 4.7 "Magic Invitation" and "Affinitive Starveil" items are event rewards, and no wish notice covers them.

## Verification method and access

- **Official HoYoLAB posts** were read in full through the API (`getPostFull`, `x-rpc-language: en-us`):
  - 26377561, the 2.1 notes
  - 47394097, the 4.7 notes
- **Gachabase**, `hsr.gachabase.net/characters/1308/acheron/release/4.7.0/...`, opened directly with HTTP 200. The evidence record says it was blocked. In this report it is called "in-game data".
- **Gachabase relic data** was used for the Pioneer Diver of Dead Waters and Eagle of Twilight Line set texts.
- **StarGuide** was opened directly.
- **Prydwen** was retrieved through WebFetch. The copy was stale: the profile was last updated April 7, 2025, with MoC statistics from December 30, 2025. Treat it as ACCESS BLOCKED for anything current. It still supports the long-standing points: Pioneer as the top set, the main stats, the skill and trace order, and Good Night and Sleep Well as the best 4-star.
- **Icy Veins**: the Acheron page returned 403. The Izumo set text was read on the Icy Veins Silver Wolf LV.999 page through WebFetch.
- **Mortenax Blade's Path** was checked in Gachabase's character index (path_id 5 = Nihility, the same as Acheron and Jiaoqiu). Ashveil is The Hunt, both in the index and in the HoYoLAB 4.7 notes ("Ashveil (The Hunt: Lightning)"). Hyacine is Remembrance in the HoYoLAB 4.7 notes ("Hyacine (Remembrance: Wind)").

## Verified

| Claim | Status | Evidence |
|---|---|---|
| Acheron builds charges from debuffs instead of Energy | VERIFIED | HoYoLAB 2.1 notes: "accumulates charges by inflicting debuffs on enemies to unleash her Ultimate"; StarGuide: Energy and ERR "provide zero value" |
| 9 Slashed Dream to use the Ultimate | VERIFIED | In-game Talent: "When Slashed Dream reaches 9 point(s), the Ultimate can be activated"; StarGuide: "(9 to activate)" |
| The Abyss: 115% with one other Nihility teammate, 160% with two | VERIFIED (with a note) | StarGuide: 160% with two, "115%" with one. Prydwen evidence S3 also covers the trace. Gachabase shows the Basic ATK, Skill and Ultimate bonus as "114% or 160%", probably float rounding of 1.15. Before publishing, confirm with a second text source (a live Prydwen or Icy Veins copy, or the HoYoLAB character post), because Gachabase is in the article's own source list. |
| E2 lowers the Nihility requirement by 1 | VERIFIED | In-game E2 "Mute Thunder in Still Tempest" |
| E1: +18% CRIT Rate against debuffed enemies | VERIFIED | In-game E1 "Silenced Sky Spake Sooth" |
| Izumo Gensei and Takama Divine Realm: 12% CRIT Rate with a same-Path ally | VERIFIED | Icy Veins planar text (WebFetch on the Icy Veins Silver Wolf LV.999 page; the Icy Veins Acheron page returned 403): "if at least one teammate follows the same Path as the wearer, then the wearer's CRIT Rate increases by 12.0%"; HoYoLAB 2.1 introduces the set |
| 4-piece Pioneer Diver of Dead Waters | VERIFIED as long-established; current ranking not verified | Prydwen (stale copy): the top set, about 97% usage (the 2-piece DMG vs debuffed enemies + 4-piece CRIT set); Gachabase set text. StarGuide, the only current source reached, ranks Eagle of Twilight Line first (#4). |
| Body CRIT Rate or CRIT DMG; Feet ATK% or SPD; Sphere ATK% or Lightning DMG; Rope ATK% | VERIFIED | Prydwen: Body both valid, Feet "ATK% preferred over Speed", Sphere ATK% > Lightning, Rope ATK%. StarGuide: Body CRIT Rate > CRIT DMG, Feet ATK% > SPD, Sphere Lightning > ATK%, Rope ATK%. |
| CRIT maths: 65 + 12 + 18 = 95 and 65 + 12 = 77 | VERIFIED (calculated) | Arithmetic is correct; the method's assumptions are incomplete (#6) |
| Along the Passing Shore adds a debuff and improves the Ultimate | VERIFIED | HoYoLAB 2.1 (name); StarGuide: the Mirage Fizzle debuff on every attack, "significant Ultimate DMG bonus" |
| Good Night and Sleep Well: damage per debuff, applies no debuff itself | VERIFIED | Prydwen: best 4-star, depends on debuff stacking; StarGuide: "Cannot apply debuffs itself" |
| Boundless Choreo: CRIT against Slowed or DEF-reduced enemies | VERIFIED | StarGuide: permanent CRIT Rate, plus bonus CRIT DMG against Slowed or DEF-reduced enemies |
| The 4-star cones come from Warps | VERIFIED | StarGuide: Good Night and Sleep Well is "Limited banner rate-up only", and Boundless Choreo is in the standard pool |
| Acheron / Pela / Guinaifen / Gallagher: two Nihility at E0 | VERIFIED / INTERPRETATION | Pela and Guinaifen are both Nihility in the Gachabase index; StarGuide lists Gallagher as a "natural debuffer" sustain |
| Acheron E2 / Jiaoqiu / Sunday / Gallagher | VERIFIED / INTERPRETATION | StarGuide "Harmony Flex" for E2 lists Sunday; Prydwen's top MoC teams include Acheron + Jiaoqiu + Sunday |
| Hyacine's signature adds debuff access | VERIFIED | StarGuide: "natural debuffers like Gallagher and Hyacine with signature" |
| Skill order Ultimate, then Skill and Talent; unlock The Abyss and Thunder Core | VERIFIED | Prydwen: "Ultimate > Skill = Talent > Basic"; major traces "The Abyss (A4) > Thunder Core (A6) > Red Oni (A2)" |
| Target enemies with Crimson Knot during the Ultimate | VERIFIED | In-game Ultimate and Thunder Core text; StarGuide's targeting note |
| Affinitive Eidolons in 4.7 for Acheron, Dan Heng • Imbibitor Lunae and Jing Yuan, chosen through Affinitive Starveil | VERIFIED | HoYoLAB 4.7 notes, "Grab Your Opening Gifts" and System sections |
| Banner schedule link | VERIFIED | `/hub/banners/honkai-star-rail-banners.html` exists in the maxcrit repo |

## Failed claims

| # | Severity | Status | Claim / gap | Evidence (URL + short paraphrase) | Downstream impact | Fix |
|---|---|---|---|---|---|---|
| 1 | MAJOR | INTERPRETATION on an incomplete premise | Team 1, "Acheron / Mortenax Blade / Ashveil / Hyacine", is presented as the premium core with no mention of The Abyss tier. | Mortenax Blade is Nihility, Ashveil is The Hunt (HoYoLAB 4.7 notes), and Hyacine is Remembrance. At E0 the team has only one other Nihility character, so The Abyss sits at 115%. StarGuide calls this the "Ashveil Dual Carry", where Ashveil "replaces the second dedicated Nihility debuffer as a sub-DPS", and lists the double-Nihility "Acheron, Mortenax Blade, Cipher, Hyacine" separately. | The article conflicts with its own TL;DR ("two other Nihility allies maximize The Abyss"). Readers may assume the premium team gets the 160% tier. This fails the rule that teams are judged as whole systems. | Back to the editor: either state that this team runs The Abyss at 115% at E0 and explain what Ashveil adds instead (DEF reduction, sub-DPS damage, per StarGuide), or swap it for a double-Nihility premium team. Re-check the TL;DR wording against the final table. |
| 2 | MAJOR | UNSUPPORTED (record) / completeness | "this guide does not assume that upgrade", with the record saying the exact mechanics are "pending direct confirmation". Line 85 also says "If you own Acheron, consider that opportunity before committing premium currency to ordinary Eidolons." | In-game data, Affinitive Eidolon "A Glance Through Rime to Bone": after a teammate attacks a Crimson Knot target, Acheron launches a Follow-Up ATK. The hit counts as Ultimate DMG, gains 1 Slashed Dream and The Abyss applies to it. It can trigger once per turn, and the count resets at the start of Acheron's turn. StarGuide confirms it independently: the Affinitive Eidolon "does not reduce the Nihility requirement (A4 stays at 115% below E2)", and each extra Acheron turn gives "another follow-up". HoYoLAB 4.7 notes: it works "regardless of the character's original Eidolon Level". It is claimable during 4.7 by choosing one of three characters in Affinitive Starveil (Grab Your Opening Gifts), or through Myriad Symphony by spending passes. The same event's "Magic Invitation" lets players choose Acheron herself (one of three). | It changes team logic (teammate attacks and extra turns gain value) and the E2 decision, during the version the article targets. The line-85 framing is wrong: the Starveil choice is an event reward, so no premium currency is involved. Players without Acheron are not told about Magic Invitation. | Back to the editor: write an Affinitive Eidolon section from the verified text, stating that it does not change the Nihility requirement. Replace the line-85 advice with how to obtain it in 4.7. Don't assume every reader picks Acheron. Assign no damage figure. |
| 3 | MAJOR | UNSUPPORTED (completeness) | The team section leaves out established archetypes. Jiaoqiu only appears in the E2 team, and there are no Cipher or Silver Wolf debuff cores and no Dan Heng • Permansor Terrae or Aventurine sustain options. | StarGuide: "Without Jiaoqiu, stack generation slows significantly in modern endgame". It lists double-Nihility teams with Cipher, Silver Wolf, Welt, Pela and Jiaoqiu, and rates Dan Heng • Permansor Terrae as an S-tier sustain. Prydwen (stale): top teams are Jiaoqiu / Sunday / Dan Heng • Permansor Terrae and Cipher / Silver Wolf / Dan Heng • Permansor Terrae. HoYoLAB 4.7 notes: Jiaoqiu (Nihility: Fire) and Those Many Springs are "available for exchange in the "Stellar Convergence" Store". | Fails the completeness rule. The current Jiaoqiu availability is decision-relevant for Acheron owners. | Back to the editor: add at least an E0 double-Nihility team with Jiaoqiu, and a sustain alternative. Mention the 4.7 store availability of Jiaoqiu. Don't claim the free Golden Companion Spirit covers him: the notes only say it buys "a character" in that store. |
| 4 | MAJOR | UNSUPPORTED (current ranking) | Relics give a single "reliable starting choice" with no alternative set. | StarGuide recommends 4-piece Eagle of Twilight Line (Gachabase: the 4-piece advances action by 25% after the Ultimate). Prydwen lists Pioneer Diver of Dead Waters at about 97% usage. | The two sources disagree on the top set, and the one current source disagrees with the article. The TL;DR "Start with Pioneer Diver of Dead Waters and Izumo" depends on how this is resolved. The reasoning about Ultimate frequency and extra turns also connects to #2. | Back to the editor: reconcile Pioneer Diver of Dead Waters and Eagle of Twilight Line with a current source, then present the result (for example, both sets with the mechanical reason for each). Update the TL;DR to match. Import no percentage comparisons. |
| 5 | MINOR | ACCESS BLOCKED | "Mortenax Blade is highlighted by Prydwen's November update as a particularly strong partner." | The retrieved Prydwen copy is stale and doesn't mention him. Evidence S3's "Nov 11 indexed excerpt" can't be reproduced. StarGuide rates him "Mortenax Blade (S+)" among amplifiers. | The attribution can't be reproduced. | "StarGuide rates Mortenax Blade as one of her strongest amplifiers." |
| 6 | MAJOR | INTERPRETATION on an incomplete premise | The CRIT example (95% at E1, 77% at E0) sits next to a Pioneer Diver of Dead Waters recommendation, but leaves out that set's in-combat CRIT Rate increase. | Gachabase set text: the 4-piece gives 4% CRIT Rate, and "After the wearer inflicts a debuff on enemy targets, the aforementioned effects increase by 100%" for 1 turn, which makes it 8%. Whether the character screen's displayed CRIT Rate already includes the base 4% isn't verified. | This is a numerical recommendation whose method leaves out a set the article itself recommends (pilot-01 safeguard). Readers may overbuild CRIT Rate. | Back to the editor: either state the assumption ("assumes no Pioneer Diver of Dead Waters bonus; its 4-piece 4% CRIT Rate doubles to 8% for 1 turn after Acheron inflicts a debuff"), or recompute with a verified account of what the stat screen includes. Keep this consistent with how #4 is resolved, and record the method in C04. |
| 7 | MINOR | CONTRADICTED (minor wording) | "Her Red Oni Trace allows up to three overflow points" | In-game Red Oni: Slashed Dream above the cap becomes Quadrivalent Ascendance, "up to 3 time(s)". Each stack gives 1 Slashed Dream and 1 Crimson Knot after her Ultimate. Red Oni also grants 5 Slashed Dream at battle start. | The mechanic is described imprecisely. | "Her Red Oni Trace starts each battle with 5 Slashed Dream and stores up to 3 overflow points as Quadrivalent Ascendance, which returns that Slashed Dream after her Ultimate, so a short delay around a wave transition costs little, while a long one wastes stack generation." |
| 8 | MINOR | UNSUPPORTED (completeness) | Incessant Rain is missing from the table. | Prydwen ranks it third. StarGuide lists it, noting that its Aether Code debuff generates Slashed Dream but is unreliable, and that its EHR stat is wasted. | The cone list is thin for players without the signature. | Optional row: "Incessant Rain | Alternative whose Aether Code debuff can add Slashed Dream, with unreliable application". |
| 9 | MINOR | Style (house rule) | "X, not Y" frames on lines 22, 55, 67, 71 and 79. | House style (MaxCrit CLAUDE.md, AI tells). | Style gate. | TL;DR line 22: "Use an ATK% rope; Energy Regeneration Rate does nothing for her Ultimate." Line 55: "Pioneer Diver of Dead Waters is the long-established debuff set for her." Line 67: "The four-star options come from Warps." Line 71: "These are kit multipliers and say nothing about final team damage." Line 79: "Treat the budget team as a starting composition." |
| 10 | MINOR | UNSUPPORTED (vague) | "Version 4.7 adds an Affinitive Eidolon opportunity." | See #2. | Too vague to act on. | After #2 is fixed: "Version 4.7 lets you claim one Affinitive Eidolon, and Acheron is one of the three choices." |
| 11 | MINOR | VERIFIED, understated in record | S6 is marked "direct fetch blocked; exact new effect not established". | The URL returned HTTP 200 and contains the full Affinitive Eidolon text. | The record understates the available evidence. | Update S6 with the "A Glance Through Rime to Bone" effect, and add StarGuide as the second independent source. |

## Evidence authenticity (spot-check)

| Excerpt | Result |
|---|---|
| S1 HoYoLAB 4.7 "Acheron, Dan Heng • Imbibitor Lunae, and Jing Yuan will be able to activate the Affinitive Eidolon" | Authentic, verbatim (API full text) |
| S2 HoYoLAB 2.1 "accumulates charges by inflicting debuffs on enemies to unleash her Ultimate" | Authentic, verbatim |
| S3 Prydwen "the number of Nihility characters required for the Trace "The Abyss"" | Can't be reproduced on Prydwen (stale fetch). The wording matches the in-game E2 text. The Nov 11 Mortenax Blade excerpt can't be reproduced. |
| S4 Icy Veins "For every debuff the target enemy has, the DMG dealt by the wearer increases" | Not checked (403). The wording matches the known Good Night and Sleep Well text, and StarGuide supports the effect. |
| S5 StarGuide "Slashed Dream points (9 to activate)" | Authentic, verbatim. The Ashveil / Mortenax Blade / Hyacine team is present. |
| S6 Gachabase "Affinitive Eidolon" | Authentic, and the page is reachable. It holds the full effect (#11). |

No banned sources are used. No damage or DPS figures, no hands-on claims and no "the source doesn't say" filler were found. There are no em dashes and no bold in running text.
