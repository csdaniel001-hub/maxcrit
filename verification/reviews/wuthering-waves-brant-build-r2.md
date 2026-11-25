# Failed-claims report: wuthering-waves-brant-build (r2)

Reviewer: Claude (fresh adversarial Tier 3 agent, round 2), 2026-11-25. Draft not edited. Scope: r1 items, claims new in R3 versus R2 (diffed), Mira's open items, depth gate. No live-client testing.

**Verdict: REVISION REQUIRED**

Every remaining fix is a paste-in or a record entry with unambiguous evidence. Claude may apply them under the 2026-11-25 standing approval and record them in the verification record, with no further Mira round. After that the article meets the claim gates. Image and originality are still to do.

**Depth gate: PASS**. Main DPS archetype has two practical sequences (Lupa/Brant/Changli, Shorekeeper/Lupa/Brant) and the sub-DPS archetype has one (Shorekeeper/Brant/Carlotta). Every sequence matches the order in the G/WWB dataset and the routing in PL. The draft labels them as simplified plans built from the mechanics. Established teams are covered: Lupa/Brant/Changli, Galbrena, Encore, Shorekeeper quickswap with Changli, Shorekeeper/Lupa/Brant, Carlotta. No rankings remain ("Premium" is gone). One gap that does not mislead: WWB's 3.8 data adds a Brant/Lynae/Mornye Tune Break team and lists Mornye in place of Shorekeeper in the main-DPS team. That is a single dataset, so it goes to the `review_by` pass (see #6).

Sources used in this round:
- O1/O2/O3: official Kuro JSON 2154 (2.1 patch notes), 2381 (Bloodpact's Pledge), ArticleMenu (3.8 current), as in r1.
- O4: official Kuro JSON 2343 "[Absolute Pulsation] Featured Weapon Convene: Boosted Drop Rate for Red Spring" ("5-Star Weapon: Red Spring", "exclusive to the Featured Weapon Convene").
- O5: official Kuro JSON 2229, the same notice for Blazing Brilliance ("5-Star Weapon: Blazing Brilliance"). Neither notice carries weapon stats or passive text.
- O6: official Kuro JSON 1912 (2.0 patch notes): "5-Star Resonator: Carlotta (Glacio)".
- P: Prydwen Brant (review Patch 2.6, build/calcs 2.5, profile 2025-09-16). Re-fetched.
- PL: Prydwen Lupa, last updated 12 November 2026. Re-fetched.
- G: genshin-builds Brant. Re-fetched.
- WWB: wutheringwaves-builds.com Brant page and /teams/ ("Data as of 3.8.0"). Team names and rotation wording are identical to G ("High Synergy Mono Fusion Team", "Start off with Lupa ... Pack Hunt and Glory"), so G and WWB are copies of one dataset and count as one source.
- DB1: wuwa.build Red Spring (id 21020026). DB2: wuthering.th.gl Red Spring (weapon_21020026). These are game-data databases. They agree on the passive text.
- Pity.gg: robots-disallowed for WebFetch (ACCESS BLOCKED). Not routed around. Mira's indexed excerpt is judged on consistency only.

## r1 items

| # | r1 claim | Status | Evidence |
|---|---|---|---|
| 1 | Team-level rotation per archetype | FIXED | New sequences for Lupa/Brant/Changli, Galbrena/Encore, Shorekeeper/Lupa/Brant, Shorekeeper/Brant/Changli and Carlotta. Order matches G ("Start with Lupa ... then Brant ... Changli") and PL ("Brant is fine only having his Anchor Forte Skills buffed", "Changli's the same with the end of her rotation that goes Forte Heavy-Ultimate-Forte Heavy", "Lupa needs to buff Aemeath/Galbrena (in Demon Hypostasis)/Jingran/Encore's entire rotations"). Labelled as simplified plans |
| 2 | Missing established teams | FIXED | Lupa/Brant/Changli (G/WWB, PL "final teammate to the Changli/Brant duo", wuwaguide row), Shorekeeper/Lupa/Brant (G "Brant Main DPS Team", PL "perfect fit for DPS Brant (in Quickswap)"), Shorekeeper/Brant/Carlotta (G/WWB "Brant Sub-DPS Team", P "general Skill DMG dealers like Carlotta") |
| 3 | "Premium" ranking on Galbrena row | FIXED | Row now "Fusion core with Galbrena; prioritize her damage window." PL and WWB ("Galbrena Fusion: Galbrena, Brant, Lupa") support the pairing |
| 4 | Red Spring and Blazing Brilliance missing | PARTIAL | Red Spring row is supported (see N3). Blazing Brilliance row still implies a stat (no ER) that no fetched source gives. See Remaining #1 |
| 5 | Emerald of Genesis "useful CRIT Rate" | FIXED | Cell now "Baseline S0 option on Molten Rift when ER is short." P: "baseline S0 level with Emerald of Genesis on Molten Rift" |
| 6 | Bloodpact's Pledge passive on one source | FIXED | P re-fetched this round, Default Weapons section: "Aero Rover's Signature weapon is actually very much usable on Brant with Tidebreaking Courage", "Unfortunately he is unable to make use of this weapon's passive effects". Second: Mira's Pity.gg excerpt ("cannot utilize its Aero Rover-exclusive passive"). Pity.gg is ACCESS BLOCKED for this reviewer, but the excerpt is consistent with P, and WWB lists the sword as a Brant alternative. Numeric ATK/ER were removed from the draft, so the single-source stat issue is gone |
| 7 | Skill priority order | FIXED | Draft now reads exactly as the r1 paste-in, matching P's order |
| 8 | "Displayed CRIT DMG includes base damage" | FIXED | Sentence removed and the example made conditional. Wording repeats "illustrative" (Remaining #4) |
| 9 | `role: Hybrid` | FIXED | `role: Support and Healer` (O1) |
| 10 | Source 2154 title | FIXED | "Kuro Games Version 2.1 patch notes" (O1). The 2381 title is still generic (Remaining #5) |
| 11 | Moonlit Clouds with Impermanence Heron | FIXED | P: Heron is a "Supportive Echo that can be run at the cost of a sizeable chunk of damage". G: Moonlit Clouds "Third best. Useful if you have another main DPS" |
| r1 process | curly apostrophe in tldr, placeholder published_at | FIXED | Both corrected in R3 |
| r1 process | B4 still lists the enhanced-state ATK formula as omitted | NOT FIXED | It sits in the "historical; superseded" block, so it is harmless. Strike it when the record is next touched |
| r1 process | No image | NOT FIXED | Front matter has no image fields. Claude adds an official Kuro image before publishing. The build drops imageless articles, so this cannot publish by accident |

## New claims

| # | New R3 claim | Status | Evidence |
|---|---|---|---|
| N1 | Brant's Outro: 20% Fusion, 25% Resonance Skill DMG Amplification, 14 s or until switched out | VERIFIED | r1 (P, G). Unchanged text moved into the team section |
| N2 | Lupa's Outro routing per Prydwen: Brant's anchor attacks and Changli's closing Forte, while Galbrena and Encore take a full buffed rotation | VERIFIED | PL, three quotes in r1 item 1 above. Premise behind the Lupa to Brant handoff: PL quotes Lupa's Outro as "Fusion DMG Amplified by 20% and Basic Attack DMG Amplified by 25% for 14s", and Returned from Ashes counts as Basic Attack DMG (r1, P/G) |
| N3 | Red Spring: "Reuse for Basic Attack damage if owned; its lack of ER makes Tidebreaking Courage difficult." | PARTIAL | Basic Attack half VERIFIED: it is a limited 5-star (O4), and DB1 and DB2 both give "Increase ATK by 12%." and "When dealing Basic Attack DMG, the wielder gains 10% Basic Attack DMG Bonus for 14s." P (re-fetched) has a Camellya-signature entry: "Camellya's signature weapon is usable by all Basic Attack focused Sword wielding characters". Red Spring shipped as Camellya's weapon banner the same day (O4, with 2341). The "lack of ER" half rests on one database: DB1 shows a CRIT Rate secondary. Mira's P excerpt ("unable to benefit from the Tidebreaking Courage set") was not reproduced on two re-fetches. Remaining #3 |
| N4 | Blazing Brilliance: "Alternative to evaluate if owned, particularly with an Echo setup that does not rely on the 250% ER gate." | UNSUPPORTED (effect clause) | O5 confirms a limited 5-star weapon only. G: "limited 5-star weapons like Red Spring and Blazing Brilliance are strong alternatives". WWB 3.8 data no longer lists it. The ER-gate clause implies a stat that no fetched source gives. Remaining #1 |
| N5 | Moonlit Clouds with Impermanence Heron as a support option; Moonlit Clouds when Brant supports Carlotta | VERIFIED | P (Heron), G ("Useful if you have another main DPS") |
| N6 | Team table, six rows | Rows 1 to 3 VERIFIED. Rows 4 to 6 VERIFIED (single dataset, with P or PL premise) | Row 1: G/WWB, PL, wuwaguide. Row 2: PL, WWB. Row 3: WWB "Encore Mono Fusion: Encore, Changli or Brant, Lupa", PL, S5. Row 5: G/WWB "Premium Dual DPS", P (Outro "very appreciated on ... Changli"). Row 6: G/WWB, P. Row 4: G plus PL. WWB's 3.8 copy of the same dataset swaps Shorekeeper for Mornye (Remaining #6) |
| N7 | Lupa/Brant/Changli sequence | INTERPRETATION (verified premises), labelled | Order Lupa, Brant, Changli matches G. Lupa's Basic Attack amp suits Returned from Ashes (N2). Brant's Outro to Changli: P. Changli's closing Forte and Liberation: PL "Forte Heavy-Ultimate-Forte Heavy" |
| N8 | Galbrena/Encore sequence (Brant, then Lupa, Lupa's Outro into the carry) | INTERPRETATION (verified premise), labelled | PL: Lupa must buff their "entire rotations". WWB's Galbrena paraphrase ("Lupa opens, then Brant ... before switching to Galbrena") may order it differently. The draft calls the route "conservative", so this is acceptable. Record it in verification |
| N9 | Shorekeeper/Lupa/Brant and Shorekeeper/Brant/Changli sequences | INTERPRETATION (verified premises), labelled | G rotations: Shorekeeper, Lupa ("After Lupa fills Concerto, switch to Brant: cast Liberation to enter Aflame"), Brant. And Shorekeeper, Brant, Changli |
| N10 | Carlotta sequence and "Her damage benefits from the Skill DMG portion even though she is not Fusion" | VERIFIED premise. Wording imprecise | WWB: "Swap to Carlotta using Brant's Outro Skill to give 25% Resonance Skill DMG amplification." O6: Carlotta (Glacio). P: "general Skill DMG dealers like Carlotta". Sharper wording in Remaining #2 |
| N11 | Ascension table (LF/MF/HF/FF Tidal Residuum 4/12/12/4, Blazing Bone 46, Golden Fleece 60, Shell Credit 170,000) and the Forte material names | VERIFIED | r1: P and G match row for row, D cross-checks. Text is exactly the r1 paste-in |
| N12 | New source list entries | PARTIAL | oyungunlugu.com ("Brant material reference") carries no evidence excerpt and no claim rests on it. Pity.gg is ACCESS BLOCKED here but has an excerpt. wuwaguide is honestly titled as a community guide. Remaining #5 |

## Rulings on Mira's open items

- Blazing Brilliance stats: no stat or effect claim is allowed without two sources. Keep the sword as a named alternative (G, and limited 5-star per O5), with the effect clause removed (Remaining #1). If Mira later sources its stats from two game-data databases, the tradeoff sentence can come back.
- Prydwen cached text from earlier patches: accepted for kit mechanics (they agree with G, WWB 3.8 data and PL of 12 November 2026). Equipment rankings from P are not used as rankings in R3. Set `review_by` to stay 2026-12-02, with the trigger "new Fusion sword or Echo set, a Brant change, or Mornye/Tune Break team confirmed by a second source".
- Ascension table: accepted. Two independent sources match (r1).
- Forte totals withheld: accepted. The section names the Forte materials without quantities, which does not mislead. Record in verification that Forte counts, the weekly material count and drop locations are held back until a second database confirms them. No `spec_omit` is needed while the section exists.

## Remaining failures

| # | Severity | Status | Claim | Evidence | Exact fix |
|---|---|---|---|---|---|
| 1 | Moderate | UNSUPPORTED | Blazing Brilliance "...particularly with an Echo setup that does not rely on the 250% ER gate." | No fetched source gives its stats. O5 and G only name it, and WWB's 3.8 copy dropped it | Replace the row with: `| Blazing Brilliance (R1) | Limited five-star weapon that genshin-builds lists as an alternative to the signature. Check that your ER total still reaches your set threshold after equipping it. |` |
| 2 | Minor | INTERPRETATION (imprecise) | "Her damage benefits from the Skill DMG portion even though she is not Fusion." | O6: Carlotta is Glacio. Brant's 20% Fusion amplification does not apply to Glacio damage. WWB: "25% Resonance Skill DMG amplification" | Replace with: `Carlotta is a Glacio Resonator, so the 25% Resonance Skill DMG amplification is the part of his Outro that applies to her.` |
| 3 | Minor | PARTIAL | Red Spring "its lack of ER makes Tidebreaking Courage difficult" (N3) | One database for the secondary stat. Mira's P excerpt not reproduced | Replace the row with: `| Red Spring (R1) | Reuse for its Basic Attack DMG passive if owned. Check that your Echoes still reach 250% ER with it before running Tidebreaking Courage. |` Then add to evidence: `- Red Spring passive: https://wuwa.build/weapons/21020026` / `  - When dealing Basic Attack DMG, the wielder gains 10% Basic Attack DMG Bonus for 14s.` / `- Red Spring cross-check: https://wuthering.th.gl/db/weapons/weapon_21020026` / `  - Increase ATK by 12%.` Add both URLs to `sources`, titled "Red Spring game data" |
| 4 | Minor | Style | "The following are simplified execution plans derived from these mechanics, not live-tested frame-by-frame rotations." ("X, not Y" habit) and the doubled "illustrative" | House style | Replace the first with: `The plans below are simplified from these mechanics and have not been tested frame by frame in the game.` Replace the CRIT sentence opening with: `As an illustration that uses the displayed CRIT DMG as the multiplier, a character at 70% CRIT Rate and 230% CRIT DMG has an average critical multiplier of 0.3 + 0.7 × 2.3 = 1.91, excluding all other effects.` |
| 5 | Minor | Source hygiene | `oyungunlugu.com` source with no evidence; 2381 titled "Kuro Games update and quest weapon" | N12. r1 O2: 2381 is the 2.2 patch notes | Delete the oyungunlugu source entry. Retitle 2381: `- title: Kuro Games Version 2.2 patch notes` |
| 6 | Minor | Record only | Row 4 Shorekeeper/Lupa/Brant, and the Tune Break team not covered | WWB 3.8 data lists "Brant Main DPS Team: Brant, Lupa, Mornye" and "Brant Tune Break Team: Brant, Lynae, Mornye". Its own rotation for the Mornye team still "Starts with Shorekeeper". Single dataset | No article change. Record in verification as a `review_by` item: confirm Mornye and Tune Break with a second source, then add a row. Also record N8 (WWB's Galbrena order may differ) |

Arithmetic: unchanged from r1 and still reproduced. No new numbers in R3 apart from the ascension table (verified).

Originality: still to run `lib/originality.py` on the downloaded P, PL, G/WWB pages before publishing (Tier 3 gate). Image: still required before publishing.
