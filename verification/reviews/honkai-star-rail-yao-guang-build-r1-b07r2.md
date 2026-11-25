# Failed-claims report: honkai-star-rail-yao-guang-build (r1)

Reviewer: fresh Tier 3 agent (Claude), 2026-11-25. Scope: sections added today (kit overview, stat targets, Rotation, Traces and skill priority, Eidolons table) in /home/claude/maxcrit/src/content/hub/honkai-star-rail-yao-guang-build.md, plus the materials spec gap. Earlier reviewed sections not re-checked. hsr.gachabase.net not used.

**Verdict: REVISION REQUIRED**

**Depth gate: FAIL** - every new fact checks out, but the Rotation is one generic paragraph for five teams across three archetypes (with Aeon ★ Aha, without it, SP-spending Sparxie) and leaves out verified, decision-relevant mechanics (Technique opener, Zone timing, RES PEN window, A4 SP refund). Fix is a paste-in below; no factual block.

Sources opened in this review:
- IV = Icy Veins Yao Guang profile (last updated 12 Feb 2026), https://www.icy-veins.com/honkai-star-rail/yao-guang-profile
- PR = Prydwen Yao Guang (profile updated 31/May/2026, last major build update Patch 4.0), https://www.prydwen.gg/star-rail/characters/yao-guang
- IVA = Icy Veins Yao Guang materials article (2026-01-06, mirror), https://wp-prod.icy-veins.com/yao-guangs-ascension-traces-and-skill-materials-in-honkai-star-rail/

## Verified

| # | Claim | Status | Evidence |
|---|---|---|---|
| V1 | Basic ATK Whistlebolt Sings Joy: blast Physical DMG, 30 Energy | VERIFIED | IV: 90% ATK to target, 30% adjacent, Energy 30; PR: "The energy recovered by this Basic ATK is always 30." |
| V2 | Skill Decalight Unveils All: 3-turn Zone, allies' Elation up by a share of hers; Basic ATK and Skill each give 3 Punchline | VERIFIED | IV: Zone 3 turns, "20.0% of Yao Guang's Elation", "After Basic ATK or Skill, gains 3 Punchline"; PR: "Using either ... Basic ATK or Skill will gain 3 Punchline." |
| V3 | Ultimate Hexagram of Feathered Fortune: 180 Energy, Punchline, extra Aha turn, team All-Type RES PEN | VERIFIED | IV: cost 180, gains 5 Punchline, Aha extra turn with fixed 20 Punchline, does not consume Punchline, RES PEN 20% for 3 turns; PR same on Punchline |
| V4 | Rotation: fixed 20 Punchline without spending the pool | VERIFIED | IV and PR: "This turn does not consume Punchline." |
| V5 | Talent: Great Boon on allied attacks while she holds Certified Banger; her Elation used if the attacker's is lower | VERIFIED | IV Talent text |
| V6 | Elation Skill: AoE, Woe's Whisper, extra hits on one random enemy | VERIFIED | IV: Woe's Whisper (DMG taken +16%, 3 turns), 100% AoE then five 20% hits on one random enemy |
| V7 | Prydwen stat targets (160-200 SPD, 100% CR in combat, 100% CD pre-combat, 3,000-4,000 HP, 1,000-1,100 DEF) and substat order SPD > CR > CD | VERIFIED | PR verbatim targets, live page dated 31/May/2026 |
| V8 | Skill priority: Prydwen Skill = Ultimate > Talent > Basic | VERIFIED | PR: "Skill = Ultimate > Talent > Basic" |
| V9 | "Level the Ultimate first if materials are short" | VERIFIED-premise INTERPRETATION | Ultimate is joint top in PR and top in the in-game order kept from the earlier verified version |
| V10 | Major Traces: A2 Amaze-In Grace (30% Elation at 120 SPD, +1% per SPD above 120, up to 200 excess SPD), A4 Poised and Sated (+60% CRIT DMG, 1 SP after Elation Skill), A6 Felicity Ensemble (+1 turn Certified Banger) | VERIFIED | IV and PR agree; cap is 200 SPD above 120 (IV "up to 200 excess SPD counted"; PR "counts SPD up to 200"), matching the page's "(up to 200 extra)" |
| V11 | Trace priority A4 > A2 > A6 | VERIFIED | PR: "Poised and Sated (A4) > Amaze-In Grace (A2) > Felicity Ensemble (A6)" |
| V12 | "the only major Trace that returns Skill Points" | VERIFIED | Only A4 text mentions SP (IV, PR) |
| V13 | E1-E6 names and effects (E1 40 Punchline and 20% DEF ignore; E2 12% SPD and 16% Elation in Zone; E3 Skill +2, Basic +1, Elation Skill +1; E4 Elation Skill DMG 150% in Aha's Ultimate turn; E5 Ultimate +2, Talent +2, Elation Skill +1; E6 25% Merrymake, Elation Skill multiplier +100%) | VERIFIED | IV and PR agree on all six |
| V14 | "she plays well at E0 and that no Eidolon is required" | VERIFIED | PR: "you do not need Eidolons in order to have a good time"; "a complete character already, at E0" |
| V15 | Eidolon value reading (E1 and E2 change play, E4/E6 raw damage) | VERIFIED-premise INTERPRETATION | Labelled as interpretation in text; premises V13 |
| V16 | Arithmetic | VERIFIED (reproduced) | 10,000 / 160 = 62.5; 10,000 / 200 = 50; 150 / 50 = 3 actions |
| V17 | Archer / Sparkle note | VERIFIED | PR: "Yao Guang can fit with the newly buffed Sparkle very well in an Archer team." |

## Failed claims

| # | Severity | Status | Claim | Evidence | Impact | Exact fix |
|---|---|---|---|---|---|---|
| F1 | Major | Depth gate | Rotation is one generic paragraph for three archetypes | Verified mechanics left out: Technique casts her Skill at battle start without SP (IV); Zone ticks down at the start of her turn (IV); Ultimate RES PEN lasts 3 turns (IV); A4 refunds 1 SP after Elation Skill (IV, PR); SP-consuming attacks trigger Great Boon one more time (IV) | Fails "practical rotation per primary team archetype" and "mistakes to avoid" | Replace the Rotation section with the paste-in below |
| F2 | Minor | UNSUPPORTED (interpretation) | E6 row: "Stacks with E4 for very high numbers" | E4 sets Elation Skill DMG to 150% during Aha's Ultimate turn; E6 raises Elation DMG and her Elation Skill multiplier. How they combine and the size of the result is not documented | Unsupported magnitude claim | Change the cell to "Adds team Elation DMG and doubles her own Elation Skill multiplier" |
| F3 | Minor | INTERPRETATION needs label | Eidolon sentence "they matter only once the first two copies are in place" | Pull-order judgement; it sits inside the sentence labelled "(interpretation)", so acceptable | None if label stays | No change, keep the label |
| F4 | Minor | Materials | spec_omit: materials | IVA lists ascension (Credits 308,000; Invasive Clot 65; Whimsy Wax 15; Dreamweave Steel 15; Lucid Awl 15) and Traces (Credits 3,000,000; Tracks of Destiny 10; The Fluffy Hand-drawn Storyboards 18; The Fluffy Serialization Memorial Issue 69; The Fluffy Collector's Edition 139; "Unknown Material" 15; Whimsy Wax 41; Dreamweave Steel 56; Lucid Awl 50). IV profile repeats the ascension list (same outlet, not independent). Weekly boss item unnamed ("Unknown Material"), and Lucid Awl 50 breaks the 41/56/58 pattern of the other tiers, so it may be a typo. No second independent source found (Prydwen has no materials) | Spec section 9 stays open; she is on the current banner, so pre-farm value is real | Keep `spec_omit: [materials]`. Record in verification: one outlet only, weekly boss name missing, Lucid Awl figure disputed. Fill in after a HoYoLAB wiki or in-game confirmation |

## Paste-ins

### Rotation (replaces the whole "## Rotation and how to play" section)

```markdown
## Rotation and how to play

Use her Technique before a fight. The next battle then starts with her Skill already cast and no Skill Point spent, so the Zone is up for the carry's first turn.

1. Keep the Zone running. It lasts 3 turns and ticks down at the start of her turn, so recast the Skill on the turn it would expire. The carry's big turns should land while it is up, because Great Boon uses her shared Elation at that moment.
2. Use Basic ATK on her other turns. It regenerates 30 Energy and gives 3 Punchline without spending a Skill Point.
3. Cast the Ultimate at 180 Energy. Aha takes an extra turn counting a fixed 20 Punchline without spending the existing pool, and every ally gets 20% All-Type RES PEN for 3 turns. Line up the carry's next attacks inside that window.
4. Her Elation Skill returns 1 Skill Point to the team through Poised and Sated, which helps pay for Zone refreshes.

With Sparxie or another carry whose attacks spend Skill Points, each such attack triggers Great Boon one more time. Save Skill Points for those attacks and refresh the Zone only when it is about to expire.

Common mistakes: letting the Zone lapse just before the carry acts, spending Skill Points on early Zone refreshes, and firing the Ultimate when the carry has no attack coming in the next 3 turns.
```

Sources for the paste-in are already listed (Icy Veins profile, Prydwen). The "Common mistakes" line and the Skill Point advice are VERIFIED-premise INTERPRETATION (premises: Zone duration, Great Boon rules, A4, RES PEN duration).

### Skill priority heading

Already present as "## Traces and skill priority"; no change.

### Materials

Not verifiable by two independent sources today. Keep:

```yaml
spec_omit:
- materials
```

Candidate table for later, only after a second confirmation of every row (do not paste yet):

```markdown
## Ascension and Trace materials

| Material | Ascension | Traces | Total |
|---|---:|---:|---:|
| Credits | 308,000 | 3,000,000 | 3,308,000 |
| Whimsy Wax | 15 | 41 | 56 |
| Dreamweave Steel | 15 | 56 | 71 |
| Lucid Awl | 15 | 50 (to confirm) | 65 |
| Invasive Clot | 65 | 0 | 65 |
| The Fluffy Hand-drawn Storyboards | 0 | 18 | 18 |
| The Fluffy Serialization Memorial Issue | 0 | 69 | 69 |
| The Fluffy Collector's Edition | 0 | 139 | 139 |
| Weekly boss item (name to confirm) | 0 | 15 | 15 |
| Tracks of Destiny | 0 | 10 | 10 |
```

Source line if it is ever used:

```yaml
- title: Icy Veins Yao Guang ascension, Traces and skill materials
  url: https://wp-prod.icy-veins.com/yao-guangs-ascension-traces-and-skill-materials-in-honkai-star-rail/
```
