# Failed-claims report: zenless-zone-zero-alice-build (r1)

Reviewer: fresh adversarial agent (Claude), 2026-11-25. Sources re-opened: Prydwen Alice, Mobalytics Alice build (twice), Mobalytics Alice kit, official notice 158277 (getContent API), Icy Veins forum materials post, Sportskeeda materials post. WebFetch returns model summaries; tags below rely on quoted fragments where the tool returned them.

**Verdict: REVISION REQUIRED**

**Depth gate: PASS** with one completeness failure (F1). The page explains Blade Etiquette, the Mystery Hunt conversion with worked numbers, gives a rotation per listed team, covers W-Engine and Mindscape investment and failure modes, and keeps interpretation apart. It misses the established Velina + Remielle and Trigger lineups (F1), and it lacks a materials section and an explicit skill priority heading (paste-ins below).

## Verified

| Claim | Status | Evidence |
|---|---|---|
| Limited S-Rank Agent, Anomaly, Physical; Practiced Perfection is her limited W-Engine | VERIFIED | Official 158277 text: "limited S-Rank W-Engine Practiced Perfection (Anomaly)"; evidence S1 |
| Full name Alice Thymefield | VERIFIED (low risk, one specialist) | Icy Veins forum topic title "Alice Thymefield's promotion and skill upgrade materials" |
| Blade Etiquette max 300, three 100-point bars | VERIFIED | Prydwen: "maximum of 300, with each 100 being 1 bar" |
| +10 per Assault from buildup, +30 per squad Disorder with Mystery Hunt | VERIFIED | Prydwen; Mobalytics kit: "When any squad member triggers Disorder, Alice gains 30 Blade Etiquette" |
| Additional Ability name Mystery Hunt; condition is another Anomaly or Support squad member | VERIFIED | Mobalytics build and kit: "Additional Ability: Mystery Hunt", "When another character in your squad is an Anomaly or Support character" |
| Only the finishing hit of a full three-stage Starshine Waltz triggers Polarized Assault; partial charge still attacks | VERIFIED | Prydwen (Polarized Assault only from the three-stage Finishing Move; release below 1 bar still slashes) |
| Polarized Assault can Disorder with a regular Assault (line 56, 123) | VERIFIED | Mobalytics build: cannot Disorder with itself, can Disorder with regular Assault, 3s cooldown |
| Core Passive adds Physical Anomaly DoT and scales Disorder with remaining duration | VERIFIED | Prydwen: 2.5% of original Physical Anomaly DMG each 0.95s; Disorder DMG up to 180% |
| AM above 140 gives 1.6 AP per point | VERIFIED | Prydwen, evidence S2 |
| Arithmetic: (184−140)×1.6 = 70.4; (244−140)×1.6 = 166.4; difference 96; 60×1.6 = 96; 20×1.6 = 32 | VERIFIED (reproduced) | Own calculation |
| Disc 4 AP, Disc 5 PEN Ratio / Physical DMG / ATK%, Disc 6 AM; substats AP > ATK% > PEN | VERIFIED | Prydwen and Mobalytics build agree |
| 4-piece Fanged Metal, 12 s window after a squad Assault; 2-piece Phaethon's Melody default, Freedom Blues alternative | VERIFIED | Prydwen ("35% increased damage to Assault-inflicted enemies for 12s"); Mobalytics build (Fanged Metal "best 4-piece by far", Phaethon's default, Freedom Blues or Chaos Jazz alternative) |
| W-Engine list: Practiced Perfection (60 AM), Sharpened Stinger, Fusion Compiler, Weeping Gemini, Electro-Lip Gloss | VERIFIED | Mobalytics build (all five, Practiced Perfection "60 AM"); Prydwen (signature, Jane's signature with Dodge Counters, 24% PEN engine needing Special uptime, Weeping Gemini) |
| Electro-Lip Gloss is a Battle Pass engine | VERIFIED (one specialist) | Mobalytics Promeia build: "Battle Pass option" |
| Teams Alice/Vivian/Yuzuha and Alice/Yuzuha/Nicole | VERIFIED | Prydwen Deadly Assault teams; Mobalytics "Alice / Nicole / Yuzuha" |
| Team Alice/Jane/Yuzuha, partner Assault before Polarized Assault | VERIFIED | Evidence S5 excerpt "trigger Assault before the Polarity Assault lands" |
| M1 +25 Blade Etiquette on Polarized Assault, 20% DEF reduction after Assault; 25 = a quarter bar | VERIFIED | Prydwen and Mobalytics agree |
| M2 Ultimate finisher triggers Polarized Assault plus Assault and Disorder DMG bonuses | VERIFIED | Prydwen and Mobalytics (they differ on the percentages; the draft rightly gives none) |
| M4 10% Physical RES ignore, more buildup on enhanced Celestial Overture only | VERIFIED | Prydwen and Mobalytics agree |
| Skill priority (line 125): Core first, then Basic Attack, then Chain Attack and Special Attack | VERIFIED | Mobalytics: Core Passive, Basic Attack, EX Special or Ultimate, Dodge, Assist; Prydwen (no Core Skill in its list): Basic, Chain, Special, Dodge, Assist. The orders agree on Basic Attack first among combat skills |
| Version 3.3 context | VERIFIED | Evidence S8 |
| Timing advice, Disc 5 comparison, troubleshooting section | INTERPRETATION (verified premises) | Built on the verified mechanics above |
| Front matter: seo_title 39 chars, summary 144 chars | VERIFIED | Measured |

Line 58 "A partial charge does not give you this defining interaction": this states a game mechanic that Prydwen confirms. It is not banned "the source doesn't say" filler. Optional positive rewrite in Paste-ins.

## Failed claims

| # | Severity | Status | Claim | Evidence | Impact | Exact fix |
|---|---|---|---|---|---|---|
| F0 | Note | ACCESS BLOCKED (none critical) | Official Alice mechanics text | Official 158277 is a banner notice; mechanics intros are image posts. Kit claims rest on Prydwen + Mobalytics agreeing | None | Record method in verification file |
| F1 | Major | UNSUPPORTED (completeness) | Team section presents three lineups as the established set | Mobalytics build: "Alice / Velina / Remielle Dan team is by far the best pairing"; also lists Alice / Astra Yao / Yuzuha. Prydwen lists Alice / Trigger / Yuzuha in Deadly Assault | Readers miss the lineup two specialist sites lead with; violates the batch 02 completeness safeguard | Back to Mira (conclusions). Add a Velina + Remielle row and a Trigger / Yuzuha or Astra Yao / Yuzuha row, each with a short rotation. Confirm the official spelling "Remielle" (official news titles use "Remielle"; Mobalytics writes "Remielle Dan"). Note for Mira: the same Mobalytics page also says "Velina isn't that great a partner for Alice", so re-read the source to frame the Velina + Remielle row correctly |
| F2 | Major | CONTRADICTED | Line 73: "the special charged Assault should not be assumed to trigger every effect attached to a normal Assault" | Mobalytics build: Polarized Assault "Activates item and buff effects (e.g. Fanged Metal 4-piece, Artful, etc.)"; it does not count for effects tied to buildup-triggered Anomalies, such as the 10 Blade Etiquette gain. The evidence file's S3 quote "It does not trigger item on-hit effects" comes from the page's Damage Over Time section and was misapplied (verification A2 repeats the error) | Undercuts the 4-piece recommendation the page itself makes | Replace the sentence with: "Polarized Assault counts as an Assault for Fanged Metal's four-piece effect. It does not add the 10 Blade Etiquette that a buildup Assault gives." Correct verification A2 |
| F3 | Minor | UNSUPPORTED | Line 93, 99: Weeping Gemini "resets when enemies enter or leave Stun" | Only Mobalytics Promeia: "Weak when paired with a Stunner". Nothing found for "leave Stun" | Small rotation misdirection | Line 93: "A player using Weeping Gemini should expect it to perform worse in teams built around a Stunner." Line 99: "its stacks are harder to keep in Stun teams" |
| F4 | Minor | UNSUPPORTED | Line 89 "Standard S-rank option" for Fusion Compiler | No reopened source states its banner | Low | Change to "S-rank option; plan Special Attacks around its conditional bonuses." |
| F5 | Minor | INTERPRETATION, premise unsourced | Line 81 Anomaly damage and CRIT | Specialist substat lists exclude CRIT (Prydwen, Mobalytics), which supports the advice, but neither reopened page states the mechanic | Low | Rephrase: "Both specialist guides leave CRIT out of her substat priority. Save highly rolled CRIT pieces for Agents who can exploit them." |
| F6 | Minor | Wording | Line 129 "does not guarantee of an instant second charged attack" | Typo | Readability | "and does not guarantee an instant second charged attack" |
| F7 | Minor | Wording | Line 129 "applies 20% DEF reduction after Alice triggers Assault" | Prydwen and Mobalytics phrase it as "after an Assault" / "Assault reduces the target's DEF" | Possible scope error | "applies 20% DEF reduction to the target after an Assault" |
| F8 | Spec gap | Missing | No materials section | See Paste-ins | Spec requirement | Insert paste-in A |
| F9 | Spec gap | Missing | No skill priority heading | Content exists at line 125 | Spec requirement | Insert paste-in B |

## Paste-ins

### A. Materials (insert before "## Mindscape Cinema and pull value")

Two sources agree on the counts: Mobalytics Alice kit (current page, totals including 3,705,000 Denny) and the Icy Veins promotion table plus talent totals (800,000 + 2,905,000 Denny = 3,705,000; seals 4 / 32 / 30; chips 25 / 75 / 250; 5 Hamster Cage Pass; 9 Sycophant's Refinement). Promotion steps reproduce: 4; 12 + 20 = 32; 10 + 20 = 30; Denny 24,000 + 56,000 + 120,000 + 200,000 + 400,000 = 800,000. Skill chips reproduce per skill × 5 skills (Sportskeeda step table): 5 × 5 = 25, 15 × 5 = 75, 50 × 5 = 250. Core Skill: 2 + 3 + 4 = 9 weekly; 2 + 4 + 9 + 15 + 30 = 60 elite. Disclosures: Icy Veins and Sportskeeda both derive from the same 2.1 beta datamine (Hakush), so they count as one source between them. The Mobalytics summary named the Basic chips Physical but the Advanced and Specialized chips Ether, which is likely a summarisation error (Alice is Physical, and Icy Veins and Sportskeeda say Physical for all three) but was not resolved. Publish conditions: (1) confirm the chip attribute is Physical for all three tiers in the client or on the Mobalytics kit page; (2) the elite material name "Toxic Edge" comes from Mobalytics only (Icy Veins wrote it before the name was public). Claude should confirm the full in-game name "Higher Dimensional Data: Toxic Edge" (the name BuffBuff and LootBar give for the same item on Promeia) before publishing, or the row reads "Elite boss material" with the count only.

```markdown
## Promotion and skill materials

These totals take Alice from level 1 to 60, all five combat skills to level 12 and her Core Skill to its last level.

| Material | Use | Total |
|---|---|---:|
| Basic Anomaly Certification Seal | Promotion | 4 |
| Advanced Anomaly Certification Seal | Promotion | 32 |
| Controller Certification Seal | Promotion | 30 |
| Basic Physical Chip | Skills | 25 |
| Advanced Physical Chip | Skills | 75 |
| Specialized Physical Chip | Skills | 250 |
| Hamster Cage Pass | Skills (level 12) | 5 |
| Sycophant's Refinement (weekly boss) | Core Skill | 9 |
| Higher Dimensional Data: Toxic Edge (elite boss) | Core Skill | 60 |
| Denny | Promotion 800,000, skills 2,905,000 | 3,705,000 |

Mobalytics puts Core Skill first in its skill order, and the 9 Sycophant's Refinement are needed for it.
```

Source YAML lines:

```yaml
- title: Mobalytics Alice kit and materials
  url: https://mobalytics.gg/zzz/characters/alice
- title: Icy Veins Alice Thymefield promotion and skill upgrade materials
  url: https://www.icy-veins.com/forums/topic/84124-alice-thymefields-promotion-and-skill-upgrade-materials
```

(Mobalytics Alice kit is already listed; retitle it or add only the Icy Veins line.)

If Toxic Edge cannot be confirmed, recommend `spec_omit: [materials]` only if the elite row cannot be published as "Elite boss material | Core Skill | 60". The other rows are two-source verified.

### B. Skill priority heading (insert directly above line 125, "Max Core Skill first, ...")

```markdown
### Skill priority
```

### C. Optional line 58 rewrite (not required)

```markdown
Only the finishing hit of a three-bar Starshine Waltz triggers Polarized Assault, whatever the state of the normal buildup gauge. Releasing early still produces a shorter series of slashes, so in an encounter where you need to dodge often, keep the full charge for an opening where the finishing hit can connect.
```
(This replaces the last three sentences of the paragraph, from "The finishing hit of a fully charged Starshine Waltz" to the end.)

### D. Line 73 replacement (F2)

```markdown
Fanged Metal's four-piece damage bonus lasts 12 seconds following Assault from a squad member. Polarized Assault counts as an Assault for this effect. It does not add the 10 Blade Etiquette that a buildup Assault gives, so keep ordinary Assaults occurring regularly.
```
