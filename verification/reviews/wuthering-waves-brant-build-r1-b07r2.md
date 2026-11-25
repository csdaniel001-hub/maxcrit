# Failed-claims report: wuthering-waves-brant-build (r1)

Reviewer: Claude (fresh adversarial Tier 3 agent), 2026-11-25. Draft not edited. No live-client testing.

**Verdict: REVISION REQUIRED**

**Depth gate: FAIL** because the draft has one generic Brant-only sequence and no team-level rotation for either primary archetype (mono-Fusion with Lupa, Changli/Shorekeeper quickswap). It also leaves out established teams (Lupa/Brant/Changli, Shorekeeper/Lupa/Brant with Brant as main DPS, Brant as sub-DPS for a Resonance Skill carry such as Carlotta) and established swords (Red Spring, Blazing Brilliance). The kit mechanics, ER arithmetic and investment and failure-mode sections are good. The mechanical core agrees across two independent sources, so the draft is not BLOCKED.

Sources used in review:
- O1: official Kuro JSON, article 2154 (2.1 patch notes): "5-Star Resonator: Brant (Fusion)" and "Combat Roles: Support and Healer, Basic Attack DMG, Fusion DMG Amplification, Resonance Skill DMG Amplification". Unflickering Valor (Sword) listed as a featured weapon.
- O2: official Kuro JSON, article 2381 (2.2 patch notes): "5-Star Weapon: Bloodpact's Pledge (Sword) ... Complete [Main Quest] Chapter II Act IV "The Maiden, The Defier, The Death Crier" to obtain."
- O3: official ArticleMenu.json: 5783 "Patch Notes for Version 3.8: Lilies in a Dying Dream" (2026-11-11). 3.8 is the current version.
- O4: official Brant Resonator Review (3049) and Profile Reveal (2192). The kit text is image-only, so these cannot be machine-read. That is why the kit is verified through two specialist sources.
- P: Prydwen Brant (https://www.prydwen.gg/wuthering-waves/characters/brant). Review last updated in Patch 2.6, build/calcs in 2.5, profile 2025-09-16.
- G: genshin-builds Brant (https://genshin-builds.com/eN/wuthering-waves/characters/brant). A game-data database, independent of P.
- PL: Prydwen Lupa (https://www.prydwen.gg/wuthering-waves/characters/lupa), updated 2026-11-12 (review Patch 3.7).
- D: Destructoid Brant materials guide (general gaming press), used only as a cross-check on materials.

## Verified

| Claim | Status | Evidence |
|---|---|---|
| Brant is a 5-star Fusion Resonator. His roles include Support and Healer, Basic Attack DMG, Fusion and Resonance Skill DMG Amplification | VERIFIED | O1 |
| Bravo max 100, gained from Normal Attack, Intro and Resonance Skill hits | VERIFIED | P, G |
| Mid-air attacks build Bravo | VERIFIED | P: "the massive Forte Gauge build-up is found in his Mid-Air Basic Attacks" |
| Team healing at 25/50/75/100 Bravo ("quarter-gauge milestones") | VERIFIED | G, R2 evidence (P) |
| Returned from Ashes consumes Bravo, deals Fusion DMG counted as Basic Attack DMG, gives a shield, replaces Anchors Aweigh! at full Bravo | VERIFIED | P, G |
| Ocean Odyssey is the Forte Circuit name | VERIFIED (single specialist) | P: appears directly under the Forte Circuit heading. G places it under a general skills heading, so it does not confirm this |
| Base conversion: 12 ATK per 1% ER over 150%, up to 1560 (so the cap is reached at 280%: 1560/12 = 130 points) | VERIFIED | P, G |
| Aflame conversion: 20 ATK per 1% ER over 150%, up to 2600 (2600/20 = 130, so also 280%). It replaces the base conversion during Aflame | VERIFIED | P, G. G verbatim: "Meanwhile, Forte Circuit Theatrical Moment is replaced by \"My\" Moment." |
| Liberation heals before Aflame. Bravo gain from Normal Attacks and Anchors Aweigh! +100% in Aflame. Returned from Ashes ends Aflame after it finishes | VERIFIED | G, P |
| Base table: 200% gives 50 x 12 = 600; 240% gives 90 x 12 = 1,080; 250% gives 1,200; 270% gives 1,440; 280% gives 1,560 | VERIFIED (arithmetic) | reproduced |
| Aflame table: 225% gives 75 x 20 = 1,500 (base 900); 250% gives 2,000 (1,200); 265% gives 115 x 20 = 2,300 (1,380); 280% gives 2,600 (1,560) | VERIFIED (arithmetic) | reproduced |
| From 250% to 280% Aflame adds 2,600 - 2,000 = 600 ATK. A 10-point roll at 250% adds 200. At 278% only 2 points count, so 40 | VERIFIED (arithmetic) | reproduced |
| Crit factors 0.3 + 0.7 x 2.3 = 1.91 and 0.2 + 0.8 x 2.1 = 1.88 | VERIFIED (arithmetic, labelled illustrative) | reproduced |
| Tidebreaking Courage: 250% ER for +30% all Attribute DMG. ER counted as the total stat | VERIFIED | S4 excerpt (verbatim), P and G (paraphrased by the fetch tool: P total ER 250%, G about 250%) |
| ER ceiling: "No more than 280% in menu or 180% from Echoes/Weapons" | VERIFIED | P. Matches the draft's "including the base 100%" |
| Dragon of Dirge main Echo for Tidebreaking. Molten Rift with Nightmare: Inferno Rider as the fallback | VERIFIED | P, G |
| Echo mains: 4-cost CRIT, 3-cost ER or Fusion DMG, 1-cost ATK% | VERIFIED | P |
| Outro The Course is Set!: incoming Resonator gets 20% Fusion and 25% Resonance Skill DMG Amplification for 14 s or until switched out | VERIFIED | P, G, O1 role tags |
| S1 stagnation on Returned from Ashes plus a DMG buff. S3 +42% Returned from Ashes multiplier. S4 shield/heal, S5 Basic Attack DMG, S6 Mid-air multiplier | VERIFIED | P, G |
| S2: +30% CRIT Rate on Mid-air Attack and Returned from Ashes casts, plus an Outro explosion when the incoming Resonator's Resonance Skill hits within 20 s (440% ATK, max 2) | VERIFIED | P (full text), G |
| Unflickering Valor is Brant's signature, with ER, Basic Attack DMG and small CRIT Rate effects | VERIFIED (effects single specialist) | O1 (weapon exists, Sword), P ("The massive Energy Regen, Basic ATK DMG and small CRIT Rate boosts the weapon offers"). G names it only as the way to reach 250% |
| Bloodpact's Pledge is a 5-star Sword obtained free from Main Quest Chapter II Act IV | VERIFIED | O2 |
| Bloodpact's Pledge has an ER stat (ATK 588 / ER 38.9% at Lv 90) and its passive does nothing for Brant | VERIFIED (single specialist) | P: "Aero Rover's Signature weapon is actually very much usable on Brant", "unable to make use of this weapon's passive effects". G does not mention it. See failed #6 |
| Emerald of Genesis paired with Molten Rift as a baseline option | VERIFIED | P: "baseline S0 level with Emerald of Genesis on Molten Rift". G lists it as an alternative |
| Overture as a budget ER option | VERIFIED | P: "one of the only weapons Brant can use to reasonably satisfy Tidebreaking Courages requirements" (ER 51.8% at Lv 90, single specialist for the stat). G names it as a free-to-play option |
| Standard rotation shape (Intro, Liberation, Mid-air sequence, Returned from Ashes, Outro) | VERIFIED | P "Standard Rotation" |
| Brant, Changli, Shorekeeper team | VERIFIED | G "Premium Dual DPS Team" |
| Brant, Lupa, Galbrena | VERIFIED (single specialist, current) | PL: Lupa's team "was expanded upon ... with Galbrena, alongside Brant or Changli" |
| Brant, Lupa, Encore | INTERPRETATION (verified premises) | S5 (Encore uses both of Brant's Outro amplifications), PL (Lupa best in slot second for Brant and for Encore separately). No source lists all three together |
| Brant can fill the sustain slot | INTERPRETATION (verified premise) | O1 "Support and Healer". G Lupa/Brant/Changli team has no other healer |
| Version 3.8 | VERIFIED | O3 |

## Failed claims

| # | Severity | Status | Claim | Evidence | Impact | Exact fix |
|---|---|---|---|---|---|---|
| 1 | Major | UNSUPPORTED | Depth gate needs a practical rotation for each primary team archetype | The draft has one Brant-only sequence. PL: Lupa's Outro should buff "only his Anchor Forte Skills" for Brant, while "Aemeath, Galbrena, Jingran, and Encore need their full rotations buffed" | Readers get no team order for either archetype. The PL excerpt suggests the routing of Lupa's Outro differs by teammate, so the order can't be guessed | Back to Mira. Add a sourced team order for (a) the mono-Fusion Lupa core (with Changli or Galbrena) and (b) the Shorekeeper quickswap team. Each step needs an evidence excerpt, and the order must account for the PL excerpt above |
| 2 | Major | UNSUPPORTED | The team table leaves out established teams | G lists Lupa/Brant/Changli ("High Synergy Mono Fusion"), Shorekeeper/Lupa/Brant ("Main DPS") and Shorekeeper/Brant/Carlotta ("Sub-DPS"). P (paraphrase) lists Outro synergy with Changli, Chixia, Encore, Carlotta and Jinhsi | Readers come away thinking Brant only fits Fusion teams. His Resonance Skill DMG Amplification also supports off-element carries. This breaks the batch 02 completeness rule | Back to Mira. Add Lupa/Brant/Changli, Shorekeeper/Lupa/Brant (Brant as main DPS) and a sub-DPS row for a Resonance Skill carry such as Carlotta, each with its mechanical reason. Keep the main-DPS and sub-DPS archetypes separate |
| 3 | Moderate | UNSUPPORTED | Galbrena row: "Premium mono-Fusion option" | PL supports the pairing only ("expanded upon ... with Galbrena, alongside Brant or Changli"). "Premium" is an unsourced ranking | Meta-ranking language without a source | Change the cell to "Lupa team core with Galbrena. Brant supplies healing, shield and his Outro." |
| 4 | Moderate | UNSUPPORTED | The weapon list leaves out Red Spring and Blazing Brilliance | G: "limited 5-star weapons like Red Spring and Blazing Brilliance are strong alternatives." P (paraphrase) calls Camellya's signature strong but short on Energy Regen | Owners of those swords get no guidance on the ER versus Tidebreaking tradeoff | Back to Mira. Add Red Spring with the ER tradeoff, and add Blazing Brilliance, each with a stat excerpt in evidence |
| 5 | Moderate | UNSUPPORTED | Emerald of Genesis: "Permanent option with useful CRIT Rate" | P gives no stats. G gives none either. No fetched text confirms its main stat or that it is permanent | Unsourced weapon stat claim | Change the cell to "Works as a baseline S0 option on Molten Rift when ER is short." |
| 6 | Moderate | UNSUPPORTED | Bloodpact's Pledge: "its Rover-specific passive does not benefit Brant", plus its base ATK and ER | Only P ("unable to make use of this weapon's passive effects"). O2 confirms only how to get it. G does not mention it | Weapon effects are critical claims and rest on one specialist | Add a second specialist excerpt for the stat and passive. Keep the caveat, since it is the reader's main decision point. If no second source turns up, keep the row as "Free five-star Sword from Main Quest Chapter II Act IV" and add P to the evidence verbatim for the ER stat and the passive |
| 7 | Minor | CONTRADICTED | "Prioritize Forte Circuit, Basic Attack and Resonance Liberation" | P Skill Priority: "Forte Circuit", "Res. Liberation", "Basic Attack", "Intro Skill", "Res. Skill" | The order differs from the only source | Change to "Level Forte Circuit first, then Resonance Liberation and Basic Attack. Intro Skill and the ordinary Resonance Skill come last." |
| 8 | Minor | UNSUPPORTED | "In Wuthering Waves the displayed CRIT DMG includes the base damage" | No fetched source states it | The crit example depends on it | Add a source excerpt, or cut the sentence and label the 1.91/1.88 example "using the displayed CRIT DMG as the multiplier" |
| 9 | Minor | CONTRADICTED | build_meta `role: Hybrid` | O1 Combat Roles: "Support and Healer, Basic Attack DMG, Fusion DMG Amplification, Resonance Skill DMG Amplification". G lists both main-DPS and sub-DPS teams | Directory label not taken from the verified text | Use `role: Support and Healer` (official), or "Support / Main DPS" if Mira cites G's team archetypes |
| 10 | Minor | CONTRADICTED | Source 2154 titled "Kuro Games Brant announcement" | O1: article 2154 is "Patch Notes for Version 2.1: Waves Sing, and the Cerulean Bird Calls" | Mislabelled primary source | Retitle to "Kuro Games Version 2.1 patch notes". Optionally add 2381 as an official source for Bloodpact's Pledge, which is already listed |
| 11 | Minor | INTERPRETATION | Moonlit Clouds with Impermanence Heron is missing as a support-build variant | P: Heron is "Supportive Echo that can be run at the cost of a sizeable chunk of damage". G lists Moonlit Clouds third | The sub-DPS archetype from #2 has no matching Echo build | Back to Mira together with #2: one sentence on Moonlit Clouds with Impermanence Heron for support builds, sourced to P |

### Process notes (not claim failures)

- Stale source: P's Brant page was last reviewed in Patch 2.6 (build/calcs 2.5), while game_version is 3.8. The kit text agrees with G, but the sword and Echo rankings may predate 3.x equipment. Record this in verification, and set the review trigger to "new Fusion sword or Echo set, or a Brant change".
- Evidence quality: one catch-all R2 excerpt covers Bravo, the Outro, S1 to S3 and every weapon. Mira should add a verbatim excerpt per critical claim. Several quotes in this report are paraphrases by the fetch tool and are marked as such. They are not evidence-file quality.
- The verification record's B4 lists the enhanced-state ATK formula as omitted, but R2 adds it. Strike it from B4.
- No image is proposed (stylecheck INFO). Claude adds an official Kuro image before publishing. Remove the placeholder published_at until publication.
- The tldr uses a curly apostrophe ("Bloodpact’s Pledge"). Use the straight one, as in the body.
- Spec gate: the materials check in check.js matches the heading regex /material|ascension|farm/. The existing "### Farm Echoes with an ER budget" makes the materials section pass without any materials content, so the gate is satisfied by accident. Suggest tightening the regex.
- Originality: run `lib/originality.py` on the downloaded P, PL and G pages before publishing (Tier 3).
- CLAUDE.md files failed-claims reports under `verification/reviews/<slug>-r<n>.md`. Copy this report there when the batch is imported.

Arithmetic: every figure in the draft was reproduced (see Verified). No errors. The Aflame tables now rest on a verified replacement premise.

## Paste-ins

### Materials section

Ascension totals agree in two independent specialist sources (P and G, which match row for row, Shell Credits included), and D matches every material count. The Forte quantities do not meet the two-source bar. The Tidal Residuum and Metallic Drip tier counts (25/28/40/57 and 25/28/55/67) agree only in P and D, and D is general press. The weekly material count (26 The Netherworld's Stare) and the 2,030,000 Forte Shell Credits come from P alone. Drop locations (Blazing Bone from Dragon of Dirge, The Netherworld's Stare from the weekly boss Hecate) come from D alone. G and P both name the Forte materials but not their roles.

Recommendation: paste the block below, which gives the full ascension table and names the Forte materials. Record in verification that the Forte quantities and boss sources are held back until a second specialist database (Hakush, encore.moe or similar, by GitHub Action or browser) confirms them. Then add a Forte table. `spec_omit` only takes whole sections (`materials`), so it isn't needed while this section exists. If Mira or Daniel judges a section without Forte quantities misleading, drop the section and set `spec_omit: [materials]`.

Insert before "## Resonance Chain and weapon investment":

```markdown
## Ascension and Forte materials

Brant's full ascension uses these totals.

| Material | Total |
|---|---:|
| LF Tidal Residuum | 4 |
| MF Tidal Residuum | 12 |
| HF Tidal Residuum | 12 |
| FF Tidal Residuum | 4 |
| Blazing Bone | 46 |
| Golden Fleece | 60 |
| Shell Credit | 170,000 |

His Forte upgrades use Tidal Residuum, Metallic Drip and The Netherworld's Stare.
```

Source YAML lines (Prydwen Brant is already listed):

```yaml
- title: genshin-builds Brant (game data)
  url: https://genshin-builds.com/eN/wuthering-waves/characters/brant
```

### Unambiguous fact fixes Claude may apply directly

- Failed #5 cell: `| Emerald of Genesis (R1) | Works as a baseline S0 option on Molten Rift when ER is short. |`
- Failed #10: source title `- title: Kuro Games Version 2.1 patch notes`
- Failed #7 sentence: `Level Forte Circuit first, then Resonance Liberation and Basic Attack. Intro Skill and the ordinary Resonance Skill come last.`
- tldr apostrophe: `- Bloodpact's Pledge is a quest-reward alternative.`

Items #1 to #4, #6, #8, #9 and #11 touch recommendations or need new evidence, so they go back to Mira.
