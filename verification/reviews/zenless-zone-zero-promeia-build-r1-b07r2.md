# Failed-claims report: zenless-zone-zero-promeia-build (r1)

Reviewer: fresh adversarial agent (Claude), 2026-11-25. Sources re-opened: official notice 163804 (getContent API: title plus images only, 212 characters of text), Prydwen Promeia (returned a pre-release stub with no kit), Prydwen Remielle, Mobalytics Promeia build, Icy Veins Promeia profile, Icy Veins Promeia guide, BuffBuff and LootBar materials pages. WebFetch returns model summaries; tags rely on quoted fragments where returned.

Source basis change: the evidence file leans on Prydwen Promeia for the Core conversion and Mindscapes, but that page served only a stub. Prydwen Promeia is ACCESS BLOCKED for this review. The critical kit claims are instead verified by two independent specialists that agree: Mobalytics Promeia build and Icy Veins Promeia profile. Icy Veins must be added to `sources`.

**Verdict: REVISION REQUIRED**

**Depth gate: PASS.** The two verified archetypes (Vivian / Yuzuha double Anomaly, Nangong Yu / Yuzuha Stun) each have a practical rotation. The page explains Corrosive Chill and Trial by Cold with worked budgets, the AM 150 conversion with a table, a rotation per team, W-Engine and Mindscape investment, and failure modes (capping the gauge, spending charges before Stun). Two of its four team plans are currently unsourced (F2, F3), and it lacks a materials section (paste-in below).

## Verified

| Claim | Status | Evidence |
|---|---|---|
| S-Rank Ice Anomaly Agent | VERIFIED | Official 2.8 notice excerpt (evidence S2); official mechanics intro title 163804 |
| Corrosive Chill: 50 converts to 1 Trial by Cold, max 2 charges, starts with 2 | VERIFIED | Mobalytics ("When 50 of it is built, it is automatically consumed to generate a Trial by Cold point", cap 2, starts with 2); Icy Veins (same) |
| +5 Chill for squad Freeze, Disorder, Vortex; +15 for teammate Ablooms | VERIFIED | Mobalytics verbatim: "15 Corrosive Chill when squad members other than Promeia trigger Ablooms." Icy Veins summary says "each squad member's Abloom"; Mobalytics is the more specific wording and matches M4 giving her own Ablooms 5 Chill |
| Arithmetic 4×5 + 2×15 = 50; 35 + 15 = 50 | VERIFIED (reproduced) | Own calculation |
| Core: initial AM above 150 gives 1.5 AP and 0.35% squad Abloom DMG per point | VERIFIED | Icy Veins: "If Promeia's initial Anomaly Mastery exceeds 150, each additional point increases her Anomaly Proficiency by 1.5"; Mobalytics agrees |
| Table rows 170 / 190 / 210 → 30 / 60 / 90 AP and 7 / 14 / 21% | VERIFIED (reproduced) | (AM−150)×1.5 and ×0.35 |
| Additional Ability: EX Special applies Presumption of Guilt, Abloom DEF ignore, needs Anomaly or Support teammate | VERIFIED | Icy Veins (Vessel of Ice, 30 s, "ignores 40% of the target's DEF"); Mobalytics (condition) |
| Execution - Merciless Judgment from Basic 5 or enhanced Specials; Dodge Counter shortcuts to Basic 5 | VERIFIED | Mobalytics; spelling "Judgment" per Icy Veins (Mobalytics writes "Judgement"; keep the draft's spelling, confirm in client) |
| M1: Trial by Cold after Ultimate, +20% DEF ignore on marked targets | VERIFIED | Mobalytics verbatim: "1 Trial by Cold point after Promeia uses her Ultimate", "20% increase to her Additional Ability's teamwide DEF Ignore"; Icy Veins confirms the extra 20% DEF ignore (its summary did not restate the charge grant) |
| M2: +40 AP | VERIFIED | Mobalytics "40 Anomaly Proficiency"; Icy Veins +40 AP |
| M4: 5 Chill per own Abloom, 0.5 s cooldown | VERIFIED | Mobalytics and Icy Veins agree |
| Notes From the Chained 4 + Phaethon's Melody 2; Freedom Blues alternative 2-piece | VERIFIED | Mobalytics (4pc Notes, 2pc Phaethon); Icy Veins (Phaethon "fractionally better", Freedom Blues listed) |
| Disc 4 AP, Disc 6 AM, substats AP > ATK% > PEN | VERIFIED | Mobalytics; Icy Veins Disc 5 Ice DMG then ATK% |
| W-Engines: Frostfall Sickle signature (AM, Ice DMG after Specials, Abloom DMG); Fusion Compiler PEN main stat; Angel in the Shell AM stat stick; Weeping Gemini craftable, weaker with a Stunner (stack-reset mechanism itself not read, see F12); Electro-Lip Gloss Battle Pass | VERIFIED | Mobalytics; Icy Veins (Angel in the Shell 30% AM, Weeping Gemini best F2P A-rank) |
| Teams Promeia/Vivian/Yuzuha and Promeia/Nangong Yu/Yuzuha | VERIFIED | Mobalytics "Best: Nangong Yu and Yuzuha ... Vivian and Yuzuha"; Icy Veins test team Promeia, Nangong Yu, Yuzuha |
| Rotation advice, Disc 5 discussion, charge-spending section | INTERPRETATION (verified premises) | Built on the mechanics above |
| Front matter: seo_title 41 chars, summary 146 chars | VERIFIED | Measured |

## Failed claims

| # | Severity | Status | Claim | Evidence | Impact | Exact fix |
|---|---|---|---|---|---|---|
| F1 | Major | CONTRADICTED | Line 136: "Max Core Skill, then Special Attack, Chain Attack and Basic Attack" | Mobalytics: Core Passive, then Basic Attack / EX Special, then Ultimate, then Dodge, then Assist. Icy Veins: Core Skill first, because only its level affects her Ablooms | Basic Attack placed last against the only readable priority list | Replace with: "Max Core Skill first, since its level raises her Abloom damage. Then raise Basic Attack and EX Special Attack, followed by the skill that holds her Ultimate. Dodge and Assist come last." (Uses the source labels; Mira or Claude maps "Ultimate" to the in-game skill tab name from the client.) |
| F2 | Major | UNSUPPORTED | Line 118, 128: Promeia / Remielle / Velina "triple-Anomaly option using sustained application and Refringe synergy" | The cited Prydwen Remielle page could not be reproduced here (the fetch returned a thin page with no team data, like the Promeia stub). The package's own excerpt ("Promeia + Frostfall Sickle") names neither Velina nor Refringe. Mobalytics and Icy Veins Promeia pages do not list the team. Mobalytics Alice lists Alice / Velina / Remielle, a different team | A recommendation for three limited units with no source | Back to Mira: source it or remove the table row and the paragraph at line 128 |
| F3 | Major | UNSUPPORTED | Line 120, 130: budget Promeia / Piper / Lucy | Verification P3 says it came from the "original Gemini brief". Neither specialist lists Piper or Lucy; Mobalytics lists Astra Yao, Nicole, Zhao, Lycaon, Burnice as other options | Unsourced recommendation | Back to Mira: replace with a listed partner (for example Astra Yao or Nicole with Yuzuha, per Mobalytics) with a sourced rotation, or remove the sentence and paragraph |
| F4 | Major | UNSUPPORTED | Line 83: Notes From the Chained "rewards Freeze and Abloom; arrange an early Abloom to activate its AP effect" | Icy Veins summarises the set only as 48 AP and 16% Attribute Anomaly and Disorder DMG; trigger conditions were not readable in any source | Drive Disc effect is a critical claim; rotation advice depends on it | Replace with: "Notes From the Chained supplies Anomaly Proficiency and Attribute Anomaly and Disorder DMG, and both specialist guides treat it as her set." Mira may restore the trigger advice with the set text as evidence |
| F5 | Minor | UNSUPPORTED | Line 106: Angel in the Shell "if the player already has Aria's engine" | No source names whose signature it is | Possible wrong attribution | Delete "and can be useful if the player already has Aria's engine available for reuse"; end the sentence after "with Mastery" and add "and AP." |
| F6 | Minor | CONTRADICTED (partly) | Line 88: Disc 5 "PEN Ratio depending on team" | Mobalytics: PEN Ratio only with Fusion Compiler; Icy Veins: Ice DMG then ATK% | Readers may pick PEN with the signature | Table cell: "Ice DMG or ATK%; PEN Ratio only with Fusion Compiler" |
| F7 | Minor | Wording | Line 62: "The five-point gain fills Corrosive Chill." | Garbled sentence with no meaning | Readability | Delete the sentence |
| F8 | Minor | Wording | Line 60: "Ablooms from a squad member provide 15 when the listed trigger conditions are satisfied" | Mobalytics: Ablooms by squad members other than Promeia | Vague condition | "Ablooms triggered by her teammates provide 15." |
| F9 | Major | CONTRADICTED (disputed figure) | Line 146: M2 "raises the Abloom multiplier of attacks that consume Trial by Cold by 120% according to the listed skill multiplier wording" | Icy Veins: the multiplier "increases by 120%". Mobalytics verbatim: "20% increase to ... Core Passive's Abloom multipliers". The two may describe the same effect (multiplier raised to 120% of its value) but the figure is disputed | A wrong figure would overstate M2 sixfold | Leave the figure out: "M2 adds 40 AP and raises the Abloom multiplier of attacks that consume Trial by Cold." Record the conflict in the verification record. Also on line 146: "M1 grants one Trial by Cold charge after her Ultimate and adds 20% DEF ignore for Ablooms against marked targets." (removes "under the stated resource condition") |
| F12 | Minor | UNSUPPORTED | Lines 99, 110: Weeping Gemini "stacks can reset around Stun" / "may not all persist into the Stun burst" | Only Mobalytics: "Weak when paired with a Stunner" (same finding as Alice F3) | Small | "Craftable AP option; specialist guides rate it weaker in Stun teams." and "It is rated weaker alongside a Stunner, so it may give less in the Stun burst." |
| F10 | Minor | Sources | `sources` lacks the second specialist that carries the kit | Prydwen Promeia stub | Traceability | Add Icy Veins YAML below; keep Prydwen only if its full page can be re-read |
| F13 | Minor | UNSUPPORTED | Line 97: Fusion Compiler "Standard S-rank alternative" | No reopened source states its banner (same finding as Alice F4) | Low | "S-rank alternative that works with repeated Special-type attacks." |
| F11 | Spec gap | Missing | No materials section | See paste-in A | Spec requirement | See paste-in A and its condition |

## Paste-ins

### A. Materials (insert before "## Mindscape Cinema and upgrade priorities")

Evidence: BuffBuff (Promeia Materials Guide, 2026-05-08) and LootBar agree on every row. Seals 4 / 32 / 30, Freeze Chips 25 / 75 / 250, Hamster Cage Pass 5, Marrow-Draining Thorn 9 (LootBar labels it the weekly boss material), Higher Dimensional Data: Toxic Edge 60, Denny 800,000 + 2,905,000 = 3,705,000. The totals have the same structure as Alice's two-source verified S-rank Anomaly totals. Condition: both are top-up shop blogs, so they are weak as "reputable specialist" sources and may not be independent. The batch also found a datamine entry for Marrow-Draining Thorn on zzz.gachabase.net (2.8 beta). Publish this block only if Claude confirms the rows against one specialist datamine or guide (Mobalytics kit page, which failed to load here, Hakush or Gachabase) by GitHub Action or browser fetch. If that check fails, set `spec_omit: [materials]`.

```markdown
## Promotion and skill materials

These totals take Promeia from level 1 to 60, all five combat skills to level 12 and her Core Skill to its last level.

| Material | Use | Total |
|---|---|---:|
| Basic Anomaly Certification Seal | Promotion | 4 |
| Advanced Anomaly Certification Seal | Promotion | 32 |
| Controller Certification Seal | Promotion | 30 |
| Basic Freeze Chip | Skills | 25 |
| Advanced Freeze Chip | Skills | 75 |
| Specialized Freeze Chip | Skills | 250 |
| Hamster Cage Pass | Skills (level 12) | 5 |
| Marrow-Draining Thorn (weekly boss) | Core Skill | 9 |
| Higher Dimensional Data: Toxic Edge (elite boss) | Core Skill | 60 |
| Denny | Promotion 800,000, skills 2,905,000 | 3,705,000 |

Her Core Skill level raises her Abloom damage, so the 9 Marrow-Draining Thorn are the materials to collect first.
```

Source YAML lines. Required now (F10):

```yaml
- title: Icy Veins Promeia profile, skills and Mindscapes
  url: https://www.icy-veins.com/zenless-zone-zero/promeia-profile-skills-mindscapes
- title: Icy Veins Promeia build guide
  url: https://icy-veins.com/zenless-zone-zero/promeia-guide-best-builds
```

Only with the materials block, after the confirming check (add the confirming specialist source too):

```yaml
- title: BuffBuff Promeia materials
  url: https://buffbuff.com/blog/promeia-materials
- title: LootBar Promeia materials
  url: https://lootbar.gg/blog/en/zenless-zone-zero-promeia-materials.html
```

Fallback front matter if the materials check fails:

```yaml
spec_omit:
- materials
```

### B. Skill priority

The heading "## Rotation and skill priority" already exists. Apply the F1 text fix only.
