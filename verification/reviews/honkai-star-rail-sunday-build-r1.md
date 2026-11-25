# Failed-claims report: honkai-star-rail-sunday-build (r1)

**Verdict: PASS** (once the MINOR paste-ins below are applied; nothing goes back to the editor)

Reviewer: fresh adversarial fact-check agent, 2026-11-25. Sunday's kit, gear, Light Cone effects and SPD maths all verify. The gaps are fixed with verified paste-ins:

- The primary source can't be reproduced.
- The "candidate" Himeko • Nova lineup has no supporting source.
- The current top Phainon lineup is missing.
- The specialists' caveat on the hyperspeed setup is missing.
- The Penacony and Broken Keel conditions are missing.
- The relic alternatives and the 4.7 custom relic are missing.
- Several "X, not Y" frames.

None of these changes the article's conclusions.

## Final directory metadata

```yaml
character: Sunday
build_meta:
  path: Harmony
  type: Imaginary
  role: Support
game_version: '4.7'
```

- **Name, Path, Type and role**: from the HoYoLAB 2.7 notes: "5-Star character Sunday (Harmony: Imaginary) Sunday is a support character...".
- **No `banner_ends` or `banner_name`**: Sunday is not in the 4.7 Phase I Warp notice, which covers Aeon ★ Aha, Silver Wolf LV.999, Sparxie and Yao Guang.

## Method and access

- **HoYoLAB**: the 2.7 notes (post 35356638) and the 4.7 notes and Phase I notice, read through the API.
- **Gachabase** (in-game data): the 4.7.0 release page for Sunday (character 1313) and the in-game Build Guide, opened directly. The Build Guide gives recommended Light Cones, sets, main stats, substats, Skill Upgrade Priority and four official teams.
- **HSR Build** (hsr-build.com, Version 4.7): opened directly.
- **Prydwen**: WebFetch returned a profile dated February 15, 2025, with MoC stats from December 1, 2025.
- **Icy Veins**: WebFetch returned a copy dated July 7, 2025.
- **hoyoverse.com/en-us/news/125757**: renders only through JavaScript, so its content could not be read (#1).

## Verified

| Claim | Status | Evidence |
|---|---|---|
| Imaginary Harmony support whose Skill gives one ally and its summon an immediate turn | VERIFIED | HoYoLAB 2.7 notes; in-game Skill: "Enables one designated ally character and their summon to immediately take action" |
| The Skill can't advance another Harmony character | VERIFIED | In-game Skill: "When Sunday uses this ability on characters following the Path of Harmony, cannot trigger the "immediate action" effect" |
| Slower-than-carry setup with the carry at 135 and Sunday at 134 | VERIFIED | Prydwen: "134 or 1 SPD slower than the carry"; Icy Veins: "have 1 less SPD than your main DPS" |
| 10,000/135 = 74.07 AV and 10,000/134 = 74.63 AV, so the carry acts first | VERIFIED (calculated) | Arithmetic is correct. The assumption (no action modifiers) is stated, and the text names summons, memosprites, buffs and advance as exceptions. Reviewer check: the carry acts at 74.07, Sunday at 74.63 sends it again, and the carry's next natural turn (74.63 + 74.07 = 148.70) still comes before Sunday's (149.26). The order holds from cycle to cycle. |
| Hyperspeed: Sunday at 160+ | VERIFIED | Prydwen: "160+ or as fast as possible", and "Sunday will always act before his target"; Icy Veins: "at least 161 SPD". The caveats are missing (#3). |
| Aglaea needs tuning around her own Speed changes | VERIFIED | Icy Veins Aglaea excerpt (S5): "maintaining that Aglaea outspeeds Sunday" |
| 4-piece Sacerdos' Relived Ordeal | VERIFIED | In-game set text (target CRIT DMG +18%, stacks twice); Prydwen: about 96% usage; Icy Veins: "Sunday's best Relic Set" |
| Body CRIT DMG, Feet SPD, Sphere HP% or DEF%, Rope ERR | VERIFIED | In-game: "CRIT DMG", "SPD", "HP% > DEF%", "Energy Regeneration Rate"; HSR Build "HP% = DEF%" |
| Mix two-piece SPD sets to hit the planned order | VERIFIED | Icy Veins: "2pc-2pc instead" |
| Lushaka: put the ATK-scaling carry in the first slot | VERIFIED | In-game set text; HSR Build: "Supporting a single ATK-scaling DPS" |
| A Grounded Ascent supports frequent Ultimates and restores SP | VERIFIED | In-game: 6 Energy per Skill or Ultimate on one ally, and "After every 2 instance(s) of Skill or Ultimate ... recovers 1 Skill Point" |
| But the Battle Isn't Over: a one-turn damage buff and weaker Energy economy | VERIFIED / INTERPRETATION | In-game: ERR 10%, SP on Ultimate once per 2 uses, and the next ally deals 30% more DMG "for 1 turn(s)" |
| Past and Future is a Forgotten Hall option with no Energy help | VERIFIED | Icy Veins sources: "Echo of War, Forgotten Hall Store, Mission Reward"; in-game effect: next ally +16%–32% DMG, nothing else |
| Dance! Dance! Dance! is a situational team advance | VERIFIED / INTERPRETATION | HSR Build and Icy Veins list it as an alternative. Icy Veins source: "Stellar Warp". |
| A three-action Ultimate cycle is easier with the signature | INTERPRETATION on verified premises | In-game: Ultimate costs 130 Energy; Skill gives 30 Energy and Ultimate gives 5; A Grounded Ascent adds 6 per Skill or Ultimate; Exalted Sweep gives 25 at battle start |
| Aglaea / Tribbie / Huohuo | VERIFIED | HSR Build (S4, verbatim) |
| Jing Yuan / Robin / Huohuo: advance Jing Yuan and Lightning-Lord | INTERPRETATION on verified premises | The in-game Skill gives the summon an immediate turn plus "an additional 50%" DMG boost. The in-game team is Jing Yuan / Tribbie / Dan Heng • Permansor Terrae (see #2). |
| Acheron E2 / Jiaoqiu / Gallagher with Sunday; an E0 Acheron needs two other Nihility characters | VERIFIED | Batch 05 Acheron r2 evidence (StarGuide Harmony Flex; Prydwen's Acheron top team with Jiaoqiu and Sunday); Acheron E2 text |
| Ultimate on the carry keeps The Beatified up and makes later Skills SP-efficient | VERIFIED | In-game: The Beatified applies only to the latest Ultimate target, and "After using Skill on The Beatified, recovers 1 Skill Point" |
| Skill, Ultimate and Talent first, Basic ATK last | VERIFIED | Prydwen and HSR Build: "Skill = Ultimate = Talent > Basic". In-game: Ultimate > Skill = Talent > Basic ATK. |
| Major Traces give Energy and debuff removal | VERIFIED | Rest Day's Longing (minimum 40 Energy restored), Exalted Sweep (25 Energy at battle start), Haven in Palm (dispels 1 debuff) |

## Failed claims

| # | Severity | Status | Claim / gap | Evidence | Downstream impact | Fix (paste-in) |
|---|---|---|---|---|---|---|
| 1 | MINOR | ACCESS BLOCKED (primary) | The primary source is "HoYoverse Version 2.7 announcement" at hoyoverse.com/en-us/news/125757. | The page renders only through JavaScript, so neither curl nor WebFetch could read any text from it. The official HoYoLAB 2.7 notes (post 35356638) are readable and state the identity verbatim. | The checker's one primary source can't be verified. | Replace the first `sources` entry with: "- title: HoYoverse Version 2.7 update details" / "  url: https://www.hoyolab.com/article/35356638" / "  primary: true". Make the same change in `sources.json` and evidence S1 (excerpt: "Sunday is a support character that allows ally characters and their summons to immediately take action."). |
| 2 | MINOR | UNSUPPORTED (Himeko • Nova row) / UNSUPPORTED (completeness) / CONTRADICTED (name) | The team table has a "Candidate hypercarry composition based on Sunday's documented Himeko Nova synergy" and leaves out Phainon. | The retrieved Prydwen copy says Sunday's synergies are "currently missing", so the "documented" synergy can't be reproduced. The in-game Recommended Teams are: Sunday / Himeko • Nova / Mortenax Blade / Dan Heng • Permansor Terrae; Sunday / Phainon / Cerydra / Dan Heng • Permansor Terrae; Sunday / Aglaea / Robin / Dan Heng • Permansor Terrae; Sunday / Jing Yuan / Tribbie / Dan Heng • Permansor Terrae. Prydwen MoC (Dec 2025): the most-used team is "Phainon, Cerydra, Sunday, and Dan Heng • Permansor Terrae". The official name is "Himeko • Nova" (Gachabase index). Phainon is Destruction, so Sunday can advance him. Cerydra is Harmony, so she is a fellow buffer and not a Skill target. | The guide misses the current headline archetype, and one row rests on an unsupported synergy. | Replace the Himeko row with: "| Himeko • Nova / Sunday / Mortenax Blade / Dan Heng • Permansor Terrae | Official in-game lineup; Sunday's Skill and Ultimate target Himeko • Nova, with Mortenax Blade as the Nihility amplifier. |". Add the row: "| Phainon / Sunday / Cerydra / Dan Heng • Permansor Terrae | Official in-game lineup and Prydwen's most-used MoC team; Sunday advances Phainon, while Cerydra, a Harmony character, buffs alongside him. |". Add after the table: "The in-game Build Guide pairs Jing Yuan with Tribbie and Dan Heng • Permansor Terrae, and Aglaea with Robin and Dan Heng • Permansor Terrae; either Harmony partner works in those lineups." |
| 3 | MINOR | UNSUPPORTED (completeness) | The hyperspeed setup is presented as an equal choice. | Prydwen calls hyperspeed "a niche build that often trails -1 Speed". Icy Veins "advises against them unless you're sure they fit your team". | It overstates hyperspeed. | Add after the Speed table: "Prydwen treats hyperspeed as a niche build that usually trails the slower-than-carry setup, and Icy Veins recommends it only when the team is built for it." |
| 4 | MINOR | UNSUPPORTED (conditions) / Style | The planar row lists Penacony with no condition, and the line "Broken Keel is a team CRIT option, not a source of Energy Regeneration." is an "X, not Y" frame. | Icy Veins on Penacony: "Increases DMG by 10.0% for all other allies that are of the same Type as the wearer", "only usable with Imaginary DPS", and "We suggest building Lushaka, the Sunken Seas over this". HSR Build lists Penacony as "Also works". Broken Keel in-game: 10% Effect RES, and all allies get 10% CRIT DMG at 30% Effect RES. Sunday's minor Traces give 18% Effect RES (in-game breakdown). Effect RES is in the in-game substat list. | Players may run Penacony with non-Imaginary carries. | Planar row: "| Planars | Lushaka, the Sunken Seas; Penacony, Land of the Dreams with Imaginary carries; Broken Keel at 30% Effect RES |". Replace the Broken Keel sentence with: "Penacony only boosts allies of Sunday's Type, so use it with Imaginary carries. Broken Keel gives all allies 10% CRIT DMG once Sunday reaches 30% Effect RES; his minor Traces and the set's own 10% cover most of that, and Effect RES substats close the gap. Lushaka and Sprightly Vonwacq also add 5% Energy Regeneration, which Broken Keel lacks." |
| 5 | MINOR | UNSUPPORTED (completeness) | There is no 4-piece relic alternative, and the 4.7 custom relic isn't mentioned. | The in-game Build Guide lists Messenger Traversing Hackerspace (all allies get 12% SPD after an Ultimate on an ally) and Eagle of Twilight Line (25% advance after an Ultimate). HoYoLAB 4.7: "Asat Pramad's Gift", "one custom max-level 5-star Relic (only Relics from Version 4.7 and earlier can be customized)", claimed during 4.7 through Grab Your Opening Gifts. | The relic section is incomplete. | Add after the equipment paragraph: "The in-game Build Guide also lists Messenger Traversing Hackerspace and Eagle of Twilight Line. Both change turn order, so retune Speed after equipping either. During Version 4.7, Grab Your Opening Gifts includes Asat Pramad's Gift, which creates one custom max-level 5-star Relic from sets released up to 4.7; Sacerdos' Relived Ordeal SPD boots make his Speed tuning easier." |
| 6 | MINOR | Style (house rule) | "X, not Y" frames and a curly apostrophe. | MaxCrit CLAUDE.md lists both as AI tells. | Style gate. | TL;DR: "Tune the carry's Speed and Sunday's Speed together." TL;DR: "Sacerdos' Relived Ordeal is a strong default." Intro: "Get that order right before chasing CRIT DMG." Speed section: "Treat this as a starting example: summons, memosprite mechanics, buffs and action advance can change the sequence." Teams: "The Acheron lineup is specifically for E2; an E0 Acheron needs two other Nihility characters to fully activate The Abyss. Acheron gains nothing from Sunday's Energy restoration and uses his immediate action and CRIT buffs instead." |

## Evidence authenticity

| Excerpt | Result |
|---|---|
| S1 hoyoverse.com "featuring the debut of two new playable characters, Sunday and Fugue" | Not reproducible (JavaScript-only page). Replace it with the HoYoLAB 2.7 notes (#1). |
| S2 Prydwen "Make sure to play Sunday in the -1 Speed setup" | Consistent with the retrieved copy (-1 SPD build, 134). The exact sentence was not quoted back. |
| S3 "After every 2 instance(s) of Skill or Ultimate the wearer uses on one ally character, recovers 1 Skill Point." | Authentic, verbatim. It matches the in-game A Grounded Ascent text. |
| S4 "Sunday plays Action advance in the Aglaea team, alongside Aglaea, Tribbie and Huohuo." | Authentic, verbatim (HSR Build) |
| S5 Icy Veins Aglaea "maintaining that Aglaea outspeeds Sunday" | Not fetched. It is consistent with Icy Veins' Sunday advice. |

There are no banned sources, damage figures, hands-on claims or "the source doesn't say" filler. There are no em dashes, and no bold in running text.
