# Failed-claims report: zenless-zone-zero-zhao-build (r1)

Reviewer: Claude (fresh adversarial Tier 3 agent), 2026-11-25. Draft not edited.

**Verdict: REVISION REQUIRED**

**Depth gate: FAIL as drafted, PASS once Paste-ins 3, 4 and 5 are applied.** The page has a character-specific build, HP threshold maths, gauge mechanics, W-Engine and disc tradeoffs, Mindscape priorities and failure modes, with interpretation mostly kept apart. It misses a practical rotation and gear for the Anomaly archetype (F4) and the established Ye Shunguang variants (F5), and its rotation teaches a gauge source that doesn't exist (F2).

Sources re-opened this round: Prydwen Zhao (live, updated 27 May 2026, Core Passive shown at Lv. 1 in the profile, maxed values in the review), Mobalytics Zhao build (live), Mobalytics Zhao character page (live copy now shows headings only, so R2's cached excerpt can't be re-read), official 2.5 Update Details via the content API (iInfoId 161728), official 3.3 notice (iInfoId 166963: no Zhao changes), Icy Veins Bunny in Wonderland set page, Icy Veins 2.7 Drive Discs article, genshin.gg Zhao, genshin-builds Zhao, Fragster materials pre-farm.

## Verified

| Claim | Status | Evidence |
|---|---|---|
| Ice Defense S-Rank, Wellspring via Frostbite | VERIFIED | Official 2.5 Update Details: "S-Rank Agent Zhao (Ice - Defense) ... Zhao can consume Frostbite to activate Ether Veil: Wellspring" |
| Free limited Agent in 2.5 benefits event | VERIFIED | S4 excerpt "claim the new limited S-Rank Agent Zhao"; official 2.5 notice also lists "Priceless Heart" Signal Search |
| Half-Sugar Bunny is her signature S-Rank Defense engine | VERIFIED | Official 2.5: "S-Rank W-Engine Half-Sugar Bunny (Defense) ... 'Dazzling Choir' Signal Search"; Mobalytics "Best in Slot" |
| 100 Frostbite on entry, cap 100, 180s Investigation Zone cooldown, 6 points per hit at most once every 3s | VERIFIED (single live source, see F14) | Prydwen Core Passive |
| Switch-in at full gauge triggers Entry Skill, consumes points, sets Wellspring and a Quick Assist | VERIFIED | Prydwen Entry Skill "Burst of Frost" |
| Veil 40s, +5% Max HP; ATK buff 50s; re-activation replaces the previous Veil | VERIFIED | Prydwen Core Passive |
| 1,000 ATK at full Core investment | VERIFIED | Mobalytics excerpt (evidence R2) and Prydwen review "team-wide 1000 Combat Attack"; Prydwen profile shows 100 at Lv. 1, so "at full Core investment" is required and present |
| Crystallization: 10% base, +1 pp per 400 initial HP above 15,000, cap 40% at 27,000; Attack, Anomaly or Support teammate; Zhao within an Ether Veil | VERIFIED | Prydwen, Mobalytics build |
| HP table 19k/23k/25k/27k = 20/30/35/40% | VERIFIED | Reproduced: 10+(HP-15000)/400 gives 20, 30, 35, 40 |
| 30% is three quarters of 40% | VERIFIED | 30/40 = 0.75 |
| 1.95 to 2.00 is about 2.56% | VERIFIED (arithmetic) | 2/1.95-1 = 0.02564; assumptions stated in text |
| Passive-only refill 48 to 51s, 17 triggers | VERIFIED (arithmetic) | 16x6 = 96 < 100, 17x6 = 102; 16 intervals x 3s = 48s, plus up to 3s before the first trigger = 51s |
| CRIT Rate from initial HP, 35 pp at 25,000 | VERIFIED premise, needs qualifier (F8) | Prydwen review 1.4% per 1,000 (maxed); profile 0.8% at Lv. 1; 25x1.4 = 35 |
| Disc 4 HP%, Disc 5 HP%, Disc 6 Energy Regen; HP% then flat HP substats | VERIFIED | Prydwen, Mobalytics |
| Yunkui Tales, Swing Jazz, Moonlight Lullaby as 2-pieces | VERIFIED | Prydwen ("Moonlight Lullaby or Swing Jazz (recommended), or Yunkui Tales"), Mobalytics (Yunkui Tales) |
| Tusks of Fury: Daze and squad DMG, no HP stat so the target is harder | VERIFIED | Mobalytics: 18% Impact, squad DMG Bonus, 12% Daze; needs HP% D6 |
| Original Transmorpher has useful HP stats | VERIFIED | Mobalytics: 25% HP and Combat Max HP effect, "F2P" pick at P5 |
| Bunny in Wonderland 2-piece HP, 4-piece team DMG from EX Special or squad Defensive/Evasive Assist | VERIFIED | Icy Veins set page: "HP +10%"; "all squad members' DMG increases by 6%, stacking up to 3 times, lasting 25s", equipper must be Defense |
| Bunny in Wonderland as Zhao's main 4-piece | VERIFIED once sources are added (F1) | Icy Veins 2.7 Drive Discs article names Zhao: "if this is not a sign that it is Zhao's Best-in-slot, I do not know what is"; genshin-builds Zhao: Bunny in Wonderland 4-piece + Yunkui Tales 2-piece. Prydwen (tracks 2.5) and Mobalytics predate the set and list Astral Voice / Proto Punk |
| EX Special +20, Ultimate +20, Chain Attack +5 Frostbite | VERIFIED | Prydwen and genshin-builds agree |
| Ye Shunguang, Dialyn, Zhao | VERIFIED | Prydwen top team in Shiyu Defense and Deadly Assault; Mobalytics strongest team at release; S5 |
| Alice, Yuzuha, Zhao | INTERPRETATION (VERIFIED premise) | Mobalytics Zhao: "pretty much any Alice team"; Yuzuha is the established Alice support in the batch's Alice evidence |
| Ellen, Soukaku, Zhao | INTERPRETATION (VERIFIED premise) | Mobalytics Zhao: "She'd slot in with Ellen"; Prydwen lists Miyabi, Soukaku, Zhao |
| M1, M4, M6 descriptions | VERIFIED | Prydwen Mindscapes (M1 15% All-Attribute RES ignore 50s off-field; M4 250 Decibels per Veil, +40% CRIT DMG to Ultimate/Chain/Final Verdict; M6 Core CRIT x1.25, Final Verdict charge x1.4) |
| Final Verdict charge continues off-field | VERIFIED | Prydwen Basic Attack |
| Core Skill first in skill priority | VERIFIED | Mobalytics "by far and away the most important skill to max" |
| No Zhao changes in 3.3 | VERIFIED | Official 3.3 notice contains no Zhao entry |

## Failed claims

| # | Severity | Status | Claim | Evidence | Impact | Exact fix |
|---|---|---|---|---|---|---|
| F1 | Major | UNSUPPORTED as sourced | "Four-piece Bunny in Wonderland is the default support set"; TL;DR 3; "Astral Voice ... Quick Assist cadence makes its maximum stack uptime harder to maintain alone" | The recommendation is supported by Icy Veins (2.7 Drive Discs article names Zhao as the set's best user) and genshin-builds (BiW 4 + Yunkui 2), but neither is in `sources`. Prydwen and Mobalytics predate the set and still list Astral Voice (Attack teams) and Proto Punk (Anomaly / dual-DPS teams); the draft never mentions Proto Punk. The Astral Voice stack claim is unsourced for Zhao (Icy Veins says it of Pan Yinhu). | Gear recommendation can't be traced; alternatives incomplete | Add the three sources in the Paste-in 3 YAML; replace the disc paragraph with Paste-in 3; delete the Astral Voice stack-uptime sentence and, in the paragraph "Bunny in Wonderland is designed around team utility", the last two sentences about Astral Voice stacks |
| F2 | Critical | CONTRADICTED | "Build Frostbite Points with Defensive Assist, EX Special and Chain Attack opportunities"; "Defensive Assists, EX Specials and the Ultimate are the natural ways to bridge that gap" | Prydwen and genshin-builds both: EX Special +20, Ultimate +20, Chain Attack +5; Defensive Assist and Assist Follow-Up list no gain, and the Assist Follow-Up consumes a full gauge to activate Wellspring. Prydwen review: her Dodges don't generate points. | Rotation teaches a gauge source that doesn't exist and misses the Assist Follow-Up activation path | Paste-in 4 for the rotation opening; in "Repeatable Veil maintenance" change "Defensive Assists, EX Specials and the Ultimate" to "EX Specials and Ultimates (20 points each) and Chain Attacks (5 points)" |
| F3 | Major | UNSUPPORTED | Original Transmorpher is "craftable" (table, summary, rotation section "a craftable engine") | No source says it's crafted; Mobalytics labels it the F2P A-Rank pick at P5 | False acquisition claim | Table: "A-Rank option with useful HP stats; the usual F2P pick at P5." Summary: "craftable W-Engines" becomes "A-Rank W-Engines" (143 chars). Rotation: "a craftable engine" becomes "Original Transmorpher". In "Choose discs": "without another limited banner" stays. |
| F4 | Major | Completeness | No Anomaly archetype rotation guidance; Proto Punk missing | Mobalytics shells "Attacker / Filler / Zhao" and "Anomaly / Anomaly / Zhao", Proto Punk for Anomaly teams, ER D6 "the way" for Anomaly teams | Depth gate: rotation and gear per primary archetype | Paste-in 3 covers gear; Paste-in 5 adds the Anomaly rotation paragraph (INTERPRETATION, Mira owns it) |
| F5 | Major | Completeness | Teams table omits the established Ye Shunguang variants with Astra Yao or Trigger | Prydwen "frequently listed teams include Ye Shunguang + Astra Yao + Zhao, and Ye Shunguang + Trigger + Zhao" | Reader without Dialyn gets no listed fallback for the primary team | Add the two rows in Paste-in 5 |
| F6 | Major | Banned filler | "If you missed that event, check current acquisition channels before planning around her." | House rule: no "check the game" filler. Official 2.5 notice gives the banner | Style gate fail | Replace with: "She was also available on the Version 2.5 Priceless Heart Signal Search." |
| F7 | Minor | Wrong term | "Half-Sugar Bunny (S1)", "Tusks of Fury (S1)" | ZZZ refinement is shown as P1 to P5 (Mobalytics "P1", "P5") | Terminology | Use P1 for both and add "(P5)" to Original Transmorpher |
| F8 | Minor | Needs qualifier | "1.4 percentage points per 1,000 HP" | Prydwen profile 0.8% at Lv. 1, review 1.4% at maximum | Low-level readers overestimate | "at maximum Core Skill level, 1.4 percentage points per 1,000 initial HP" |
| F9 | Minor | UNSUPPORTED | "Energy Regen comes from eligible main stats, set effects and W-Engines, so avoid wasting time looking for ordinary Energy Regen substat rolls." | Not in either guide's substat list; Z4 says ER substats were omitted, yet the sentence stayed | Unsourced mechanic | Replace with: "Both specialist guides rank HP% first and flat HP second, with CRIT Rate and CRIT DMG after the HP target." |
| F10 | Minor | Imprecise | "M2 adds ATK buffs when she recovers HP, including a 15% bonus for other squad members." | Prydwen M2: healing raises Zhao's ATK by 20% and the rest of the squad's by 15% for 50s | Trigger wording | "M2 ties to her healing: it raises Zhao's ATK by 20% and the other squad members' ATK by 15% for 50 seconds." |
| F11 | Minor | Style | "instead of" used 3 times in the last third (lines 105, 133, 135), the same habit as "rather than" | House style | Rhythm | Rephrase at least two, for example "Watch the on-screen prompt before you swap." and "check the actual buff state before assuming Veils stack." |
| F12 | Minor | Spec | stylecheck ERROR: missing skill priority and materials sections | `lib/stylecheck.py` output | Checker fail | Paste-in 1 and 2 |
| F14 | Major | Evidence gap | Z5 kit values (Veil 40s and 5% HP, 180s cooldown, 1.4% CRIT at max Core, M1/M2/M4/M6 values) | Evidence file has one excerpt for all of Z5, and the Mobalytics character page it cites now shows headings only, so the cached copy can't be re-read. This review confirmed them on live Prydwen only (profile Lv. 1 plus review). 1,000 ATK has two sources (Mobalytics excerpt, Prydwen review). | Tier 3 two-source rule not met for these values | Mira adds a second excerpt per value (official in-game text, Icy Veins or genshin-builds kit page) to the evidence file; no article text change unless a value differs |
| F13 | Info | Process | `published_at` set to a placeholder; no image proposed | stylecheck INFO | Publication | Remove `published_at`; Claude adds the image |

## Paste-ins

### 1. Skill priority (insert in "## Wellspring rotation", replacing the paragraph "Max her Core Skill before investing heavily...")

```markdown
### Skill priority

Max the Core Skill first, because it carries the team ATK buff and the HP-based CRIT Rate. After that the two specialist guides differ. Prydwen ranks Special Attack first, then Chain Attack, then Basic Attack, with Assist and Dodge last. Mobalytics puts Basic Attack and EX Special right after the Core Skill, Assist and Ultimate next, and leaves Dodge at level 1. Special Attack is near the top of both lists, so level it next.

In practice, get the support loop working with Original Transmorpher and HP discs first. Pull for the signature only if buff uptime or the HP budget is still the team's problem.
```

### 2. Materials: spec_omit

Front matter:

```yaml
spec_omit:
- materials
```

Verification record line:

```markdown
- spec_omit materials: the only Zhao-specific cost source found (Fragster pre-farm guide, 2025-12-03) predates release and lists the Core Skill and boss materials as unknown; Mobalytics marks materials TBD; Prydwen, Mobalytics build and genshin.gg don't list them. No two independent sources confirm the weekly boss material, so the section is left out until a sourced table is available.
```

### 3. Drive Discs (replaces "Four-piece Bunny in Wonderland is the default support set..." paragraph)

```markdown
Four-piece Bunny in Wonderland is the set built for Zhao's role. Its two-piece gives 10% HP, and its four-piece gives the squad 6% DMG per stack, up to 3 stacks for 25 seconds, triggered by a Defense equipper's EX Special or a squad member's Defensive or Evasive Assist. Pair it with two-piece Yunkui Tales when HP is short, or Swing Jazz or Moonlight Lullaby for Energy Regen.

Before Bunny in Wonderland arrived, the standard choices were four-piece Astral Voice in Attack teams and four-piece Proto Punk in Anomaly or double damage-dealer teams. Both still work if you already have good pieces, and Proto Punk is the closer match to what Bunny in Wonderland does.
```

Source YAML:

```yaml
- title: Icy Veins Bunny in Wonderland
  url: https://www.icy-veins.com/zenless-zone-zero/drive-discs/33700
- title: Icy Veins 2.7 Drive Discs
  url: https://www.icy-veins.com/zenless-zone-zero/news/who-benefits-from-the-new-zenless-zone-zero-2-7-drive-discs/
- title: Genshin-Builds Zhao
  url: https://genshin-builds.com/en/zenless/characters/zhao
```

### 4. Rotation opening (replaces the first paragraph of "## Wellspring rotation")

```markdown
Frostbite Points come from EX Special and Ultimate (20 points each), Chain Attacks (5) and the passive 6 points every 3 seconds while the active Agent hits. Once the gauge is full, switch Zhao in during combat to trigger her Entry Skill and activate Ether Veil: Wellspring. An Assist Follow-Up also activates it from a full gauge. A Defensive Assist switch-in doesn't trigger the Entry Skill. Take the Quick Assist back into the damage dealer; Final Verdict keeps charging while Zhao is off-field. Plan the next swap around the main damage window and the Veil duration.
```

### 5. Teams (add rows to the table and one paragraph after the Alice paragraph)

```markdown
| Ye Shunguang, Astra Yao, Zhao | Frequently listed Ye Shunguang variant. |
| Ye Shunguang, Trigger, Zhao | Frequently listed Ye Shunguang variant. |
```

Source: Prydwen Zhao (already listed): "Other frequently listed teams include Ye Shunguang + Astra Yao + Zhao, and Ye Shunguang + Trigger + Zhao." Miyabi, Soukaku, Zhao appears on Prydwen at rank 85 only, too thin to add.

INTERPRETATION paragraph for Mira to own and review (premises: Mobalytics "Anomaly / Anomaly / Zhao" shell with ER D6, Prydwen Entry Skill and gauge values):

```markdown
In Anomaly teams, give Zhao an Energy Regen Disc 6 so the Veil comes back on time. Open with her Entry Skill, take the Quick Assist into the Anomaly driver, and let the passive hits rebuild Frostbite during the second Anomaly Agent's field time. When the gauge is short before the next Anomaly trigger, bring Zhao in for an EX Special.
```

### 6. TL;DR bullet 3 (replace)

```yaml
- Use Bunny in Wonderland; Astral Voice or Proto Punk still work if already farmed.
```

### 7. Summary (replace)

```yaml
summary: Build Zhao for 27,000 initial HP, Ether Veil uptime and team buffs. Compare Half-Sugar Bunny, A-Rank W-Engines and practical Drive Disc setups.
```
