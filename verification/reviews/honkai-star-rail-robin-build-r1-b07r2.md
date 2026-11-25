# Failed-claims report: honkai-star-rail-robin-build (r1)

Reviewer: fresh Tier 3 agent (Claude), 2026-11-25. Sources re-opened directly because the evidence file holds one excerpt per source and every kit number hangs on a single Icy Veins line. No gameplay testing. hsr.gachabase.net not used.

**Verdict: REVISION REQUIRED**

**Depth gate: FAIL** - kit, stats and Eidolon analysis are strong, but the team section misses established archetypes (DoT, hypercarry), one of four team rows is unsupported, and three of the four rotations rest on unsourced teammate mechanics.

Sources opened in this review:
- IV = Icy Veins Robin profile (changelog "Page and Skills for Robin added", 20 Jun 2025), https://www.icy-veins.com/honkai-star-rail/robin-profile
- PR = Prydwen Robin (last updated 31/May/2026), https://www.prydwen.gg/star-rail/characters/robin
- MB = Mobalytics Robin guide (undated, mentions Sept 2024 rerun), https://mobalytics.gg/blog/honkai-star-rail/robin-guide/
- PH = Prydwen Hyacine, https://www.prydwen.gg/star-rail/characters/hyacine
- IVM = Icy Veins Mortenax Blade best teams (created 05 May 2026), https://www.icy-veins.com/honkai-star-rail/mortenax-blade-best-teams
- GB = GenshinBuilds Sprightly Vonwacq, https://genshin-builds.com/en/hsr/relics/sprightly_vonwacq
- CI = Charlie INTEL Robin materials (7 Apr 2024, leak-based), https://charlieintel.com/honkai-star-rail/honkai-star-rail-robin-ascension-traces-level-up-materials-316436
- EG = esports.gg Robin materials (undated, "thanks to insiders"), https://esports.gg/guides/honkai-star-rail/all-robin-ascension-and-trace-materials-honkai-star-rail/

## Verified

| # | Claim | Status | Evidence |
|---|---|---|---|
| V1 | Physical Harmony, introduced 2.2 | VERIFIED | S1 excerpt; IV profile "Physical element ... Path of Harmony" |
| V2 | Skill: 50% DMG for 3 turns, duration ticks on her turns | VERIFIED | IV: "Increase DMG dealt by all allies by 50.0%, lasting for 3 turn(s). This duration decreases by 1 at the start of Robin's every turn." |
| V3 | Talent: 20% CRIT DMG, 2 Energy per ally attack | VERIFIED | IV: "Increase all allies' CRIT DMG by 20.0%" / "after allies attack enemy targets, Robin additionally regenerates 2 Energy" |
| V4 | Ultimate 160 Energy, ATK = 22.8% of hers + 200 | VERIFIED | IV: Energy cost 160; "increases all allies' ATK by 22.8% of Robin's ATK plus 200" |
| V5 | Additional DMG once per ally attack, fixed 100% CR / 150% CD | VERIFIED | IV: "after every attack by ally targets ... for 1 time ... fixed CRIT Rate ... 100% and fixed CRIT DMG ... 150.0%"; PR same |
| V6 | Countdown fixed 90 SPD | VERIFIED | IV: "The countdown has its own fixed SPD of 90"; PR: "fixed SPD of 90 with absolutely no way of affecting this" |
| V7 | Ultimate advances the other allies; Robin takes no turns during Concerto | VERIFIED | MB: "Advance Forward the entire team by 100%" / "cannot enter her turn or take action until Concerto state ends" |
| V8 | Impromptu Flourish +25% CRIT DMG on follow-ups during Concerto | VERIFIED | IV A4 text |
| V9 | 25% opening advance from a Trace | VERIFIED | IV A2 Coloratura Cadenza: "action advances this character by 25.0%" |
| V10 | E1 24% All-Type RES PEN; E2 16% SPD and Talent Energy +1; E4 CC dispel on Ultimate and Effect RES during Concerto | VERIFIED | IV and PR Eidolon text (E4 Effect RES is 50%) |
| V11 | E6 premise (more CRIT DMG on her additional hits, limited count) | VERIFIED-premise INTERPRETATION | IV: "+450.0%" CRIT DMG, "up to 8 time(s)", resets on each Ultimate |
| V12 | Skill priority Ultimate, Skill, Talent ahead of Basic | VERIFIED | PR: "Ultimate > Skill > Talent > Basic" |
| V13 | ERR rope, ATK main stats, 120 SPD target | VERIFIED | PR: "SPD: 120+ (get a bit more if Robin isn't the first to act ...)", ERR 19.44%+; MB: Body/Feet/Orb Attack, Rope ERR, "around 120" |
| V14 | Musketeer + Prisoner 2+2, Sprightly Vonwacq | VERIFIED | MB: "Any 2+2 combination of Prisoner in Deep Confinement, The Wind-Soaring Valorous, or Musketeer of Wild Wheat"; planars include Sprightly Vonwacq |
| V15 | Vonwacq: +5% ERR, 120 SPD gives opening advance | VERIFIED | GB: "Increases the wearer's Energy Regeneration Rate by 5%" / "SPD reaches 120 ... Advanced Forward by 40%"; MB lists the set with the 120 target |
| V16 | Light Cone sources: signature, standard 5-star, event, gacha | VERIFIED | MB labels: Flowing Nightglow (Signature), But the Battle Isn't Over (Standard 5-Star, ERR 10-18%), For Tomorrow's Journey (Event, ATK 16-32%), Poised to Bloom (Gacha, same-Path condition) |
| V17 | Feixiao / Topaz / Robin / Aventurine follow-up team | VERIFIED | PR synergy: Feixiao, Dr. Ratio, Topaz, Aventurine; MB "Robin Standard Follow Up Team" |
| V18 | Arithmetic | VERIFIED (reproduced) | 0.228 x 3000/3500/4000/4500 + 200 = 884/998/1112/1226; 114 / 3998 = 2.85%; 10000/120 = 83.33, x 0.75 = 62.5; 10000/160 = 62.5; 40 x 1.1944 = 47.78; 40 x 1.2444 = 49.78; E2 10 attacks x 1 = 10; AV example 3 x 10 = 30, 3 x 70 = 210 |
| V19 | No SP generation from Robin during Concerto | VERIFIED-premise INTERPRETATION | follows from V7 (no turns) |

## Failed claims

| # | Severity | Status | Claim | Evidence | Impact | Exact fix |
|---|---|---|---|---|---|---|
| F1 | Critical | UNSUPPORTED | Team row "Ashveil, Mortenax Blade, Robin, Hyacine" and S4 excerpt "Robin can convert HP buffs into ATK for Ashveil" | PH re-opened: Robin, Ashveil and Mortenax Blade are not on the page; no such sentence. IVM lists Ashveil with Mortenax Blade (with Feixiao/Gallagher, Tribbie/Huohuo, Sunday/Huohuo) but no team with Robin. Name spelling also differs: IV "Mortenax Blade", Prydwen "Blade • Mortenax" | Evidence excerpt does not match its source; a recommended team has no support. Recurring weakness: excerpt attributed to the wrong page | Delete the row and remove the Prydwen Hyacine source. Mira may re-propose with a source that names Robin in that team and the official name spelling from HoYoverse |
| F2 | Major | UNSUPPORTED | Rows "Feixiao, Hunt March 7th, Robin, Gallagher" and "Herta, Himeko, Robin, Gallagher" and their rotation paragraphs (Topaz "establish her target", March "Shifu", Himeko needs Weakness Breaks, Herta HP trigger, Gallagher Basics) | None of these teammate mechanics is in the evidence file. MB only says Topaz "can be replaced by Moze or March 7th"; no source names Gallagher or the Herta/Himeko pair with Robin | Team mechanics are critical claims; three of four rotations unsourced | Mira adds official or two-specialist excerpts for each teammate mechanic used (Topaz, March 7th Shifu, Himeko, Herta, Gallagher) and a source naming each lineup with Robin, or cuts the rows and paragraphs |
| F3 | Major | Completeness | Teams omit established archetypes | PR synergy lists the Kafka and Black Swan DoT team, Huohuo as sustain, Clara, Asta; MB lists a "Standard Hyper Carry Team" (Yunli or Feixiao with Bronya or Tingyun). The draft instead discourages "a slow hypercarry with two non-attacking supports" | Reader with a DoT or hypercarry account gets no guidance and an implied negative; batch 02 completeness rule fails | Mira adds a DoT row (Kafka / Black Swan) and a hypercarry row (Yunli or Feixiao with a second Harmony) with one practical rotation each, sourced; reword the hypercarry sentence so it does not contradict MB |
| F4 | Major | UNSUPPORTED | Planar "Fleet of the Ageless for ATK teams" | PR names no planars in text (graphics only); MB lists Sprightly Vonwacq, Space Sealing Station, Lushaka's Waterscape | Recommendation without readable source | Replace with "Sprightly Vonwacq; Space Sealing Station or Lushaka's Waterscape as alternatives" (MB) or add a readable source for Fleet |
| F5 | Major | UNSUPPORTED | Light Cone effects: Flowing Nightglow "Energy support, ATK and team DMG buffs"; For Tomorrow's Journey "boosts ... Robin's own damage" | MB quotes only Cantillation stacks per ally attack (Nightglow) and ATK 16-32% (FTJ). No excerpt in the evidence file for the ATK/team DMG or FTJ damage part | Light Cone effects are critical | Mira adds the official Light Cone text (HoYoLAB 2.2 notes or two specialist pages) for both cones to the evidence file |
| F6 | Minor | CONTRADICTED (wording) | Poised to Bloom "useful with two damage dealers sharing a Path" | MB: "if two or more characters follow the same Path" (any characters) | Slight misstatement of the condition | Change to "Useful when two or more characters share a Path, such as double Hunt." Add a source for Feixiao and Topaz both being Hunt |
| F7 | Minor | Style / R4 conflict | "For Tomorrow's Journey was originally distributed through an event. Check current acquisition options before budgeting currency." | Verification record R4 says the acquisition claim was omitted; MB supports "Event"; second sentence is "check the game" filler | Banned filler | Keep the first sentence with the MB source, delete the second |
| F8 | Minor | UNSUPPORTED | "a fashionable 134 or 160 SPD target used by other Harmony supports" | No source; "fashionable" is an unsourced meta judgement | Unsupported meta framing | Replace with "There is little reason to give up more ATK for SPD once the opening order works." |
| F9 | Minor | UNSUPPORTED (spelling) | "Robin • Summeretto is a separate character" | Icy Veins news title writes "Robin Summeretto"; official spelling not checked | Name rule (exact official spelling) | Confirm spelling on HoYoLAB or drop the sentence |
| F10 | Minor | Spec gap | No skill priority heading; no materials section | check.js "skill priority" regex needs talent/trace/skill/upgrade in an H2/H3; content sits in the last paragraph of "Concerto timing" | check.js warning; spec section 7 and 9 | Paste-ins below |
| F11 | Minor | Process | Evidence file lacks excerpts for most critical claims (Light Cones, relic sets, teams, Traces) | Only one excerpt per source | Review had to re-research | Mira adds URL plus excerpt per critical claim (amendments section 10) |

## Paste-ins

### Skill priority (move the last paragraph of "Concerto timing" here; place before "Eidolons and pull priorities")

```markdown
## Traces and skill priority

Level her Ultimate first, then Skill, then Talent, and leave Basic ATK for last. This is Prydwen's order, and it follows the kit: the Ultimate carries the ATK buff and the additional hits, and the Skill carries the 50% DMG buff.

| Major Trace | Effect | Priority |
|---|---|---|
| Coloratura Cadenza (A2) | Advances her action by 25% at the start of battle | 1 |
| Impromptu Flourish (A4) | During Concerto, allies' follow-up attacks deal 25% more CRIT DMG | 2 |
| Sequential Passage (A6) | Her Skill regenerates 5 extra Energy | 3 |

Prydwen ranks the Traces in this order. Unlock all three and make the opening turn order consistent before chasing additional ATK rolls. If auto-battle spends the Ultimate before your damage dealers act, play the opening manually.
```

Then delete from "Concerto timing" the paragraph beginning "Upgrade Ultimate, Skill and Talent ahead of Basic ATK."

### Materials

Status: ascension totals VERIFIED by two independent sources (IV post-release profile and CI; EG agrees). Trace totals and the weekly boss item appear only in CI and EG, both pre-release leak articles that likely share one origin, so they are not independent. Farming locations are single-source (EG).

Recommendation: paste the section only after one post-release confirmation of the Trace rows (HoYoLAB wiki through a browser or GitHub Action fetch, or a screenshot of the in-game Trace screen in the package). Until then set `spec_omit: [materials]` and record the reason in verification. Robin is not on a current banner, so pre-farm urgency is low.

```markdown
## Ascension and Trace materials

Totals to reach level 80 and raise every Trace to its maximum level.

| Material | Ascension | Traces | Total |
|---|---:|---:|---:|
| Credits | 308,000 | 3,000,000 | 3,308,000 |
| Dream Collection Component | 15 | 41 | 56 |
| Dream Flow Valve | 15 | 56 | 71 |
| Dream Making Engine | 15 | 58 | 73 |
| IPC Work Permit | 65 | 0 | 65 |
| Firmament Note | 0 | 18 | 18 |
| Celestial Section | 0 | 69 | 69 |
| Heavenly Melody | 0 | 139 | 139 |
| Past Evils of the Borehole Planet Disaster (weekly boss) | 0 | 12 | 12 |
| Tracks of Destiny | 0 | 8 | 8 |

The Dream Collection Component, Dream Flow Valve and Dream Making Engine drop from Dreamjolt Troupe elites. IPC Work Permit comes from a Stagnant Shadow in Clock Studios Theme Park.
```

Arithmetic: 15 + 41 = 56; 15 + 56 = 71; 15 + 58 = 73; 308,000 + 3,000,000 = 3,308,000.

Source YAML:

```yaml
- title: Charlie INTEL Robin ascension and Trace materials
  url: https://charlieintel.com/honkai-star-rail/honkai-star-rail-robin-ascension-traces-level-up-materials-316436
- title: esports.gg Robin ascension and Trace materials
  url: https://esports.gg/guides/honkai-star-rail/all-robin-ascension-and-trace-materials-honkai-star-rail/
- title: Mobalytics Robin guide
  url: https://mobalytics.gg/blog/honkai-star-rail/robin-guide/
```

(Icy Veins Robin profile is already listed and carries the ascension totals. Mobalytics is for F4, F6, F7 and the team additions.)

If spec_omit is used, add to front matter:

```yaml
spec_omit:
- materials
```
