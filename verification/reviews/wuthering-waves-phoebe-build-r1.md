# Failed-claims report: wuthering-waves-phoebe-build (r1)
Reviewer: Claude (fresh adversarial check) · 2026-11-25 · Tier 3
**Verdict: REVISION REQUIRED**

There are no back-to-editor items. Every failure has a verified paste-in fix below. One critical claim is CONTRADICTED: the Absolution main Echo (#1).

Retrieval this round:
- Kuro feed, read live: 2106 Profile Reveal. I read Phoebe's kit text from its GIFs: Resonance Skill "To Where Light Shines", Liberation "Dawn of Enlightenment", Forte "Radiant Invocation", Intro "Golden Grace", Outro "Attentive Heart".
- Kuro feed: 2154 (2.1 patch notes) and 2561 (2.3 patch notes).
- Opened directly: WuWaBuild Phoebe build and best-teams pages (3.8; tier data follows Prydwen 12 Nov 2026) and the Pity.gg Phoebe guide (3.8, 2026-11-16).
- Prydwen Phoebe and Prydwen Battle Pass weapons, via WebFetch summary.

## Verified
| Claim | Status | Evidence |
|---|---|---|
| 5-star Spectro Rectifier with two modes: Absolution (damage) and Confession (applies Spectro Frazzle) | VERIFIED | Kuro 2154 (combat roles "Main Damage Dealer, Concerto Efficiency, Spectro Frazzle"); Kuro 2106 Forte text |
| Full Prayer (120) is needed. Hold Basic Attack for Absolution Litany, hold Resonance Skill for Utter Confession. Each restores 60 Divine Voice | VERIFIED | Kuro 2106 |
| Absolution allows 4 Starflash casts from a full bar, Confession 2 | VERIFIED (calculated) | Kuro 2106: Starflash costs 30 Divine Voice, Absolution cuts it by 15. 60/15 = 4; 60/30 = 2 |
| Absolution Starflash wants external Frazzle | VERIFIED | Kuro 2106: Absolution Starflash gains 256% DMG Amplification on targets with Spectro Frazzle |
| Liberation after choosing a mode | VERIFIED | Kuro 2106: Dawn of Enlightenment gains a mode-specific enhancement |
| Confession Outro grants Silent Prayer to the on-field Resonator, so Outro into Zani | VERIFIED | Kuro 2106 Outro "Attentive Heart": 10% Spectro RES reduction, 100% Spectro Frazzle DMG Amplification, 30s or until Phoebe switches to Absolution |
| Eternal Radiance (Absolution); Moonlit Clouds with Impermanence Heron (Confession); stat layout | VERIFIED | WuWaBuild (both sets, "best set for Hybrid Phoebe as a Zani buffer"); Pity.gg |
| Luminous Hymn signature; Lethean Elegy and Stringmaster alternatives; Cosmic Ripples permanent 5-star | VERIFIED | Kuro 2154 (Luminous Hymn, Rectifier); WuWaBuild ranking; Pity.gg (Cosmic Ripples "Permanent five-star choice") |
| Augment is a Battle Pass weapon | VERIFIED | Prydwen Battle Pass weapons page; WuWaBuild ("budget option") |
| Ocean's Gift was an event weapon and isn't reliably available | VERIFIED | Kuro 2154 (obtained from the "Old Man and the Whale" event); Kuro 2561 (returned only under "Limited-Time Rewards from Past Events") |
| Skill priority: Forte Circuit and Liberation first | VERIFIED | WuWaBuild, Pity.gg and Prydwen all give Forte Circuit > Liberation > Skill > Intro > Basic |
| Zani / Phoebe / Shorekeeper (Confession) | VERIFIED | Pity.gg; WuWaBuild ToA (Zani Hypercarry: Zani, Phoebe or Rover (Spectro), Shorekeeper) |
| Phoebe / Rover / Lynae; Phoebe / Ciaccona / Shorekeeper (Absolution) | VERIFIED | Pity.gg (both); WuWaBuild ToA (Phoebe, Lynae, Rover (Spectro)); Prydwen (Ciaccona with Shorekeeper) |
| Zani / Phoebe / Verina; Phoebe / Rover / Verina; Phoebe / Ciaccona / Lynae | INTERPRETATION | Healer or buffer swaps of the verified cores. WuWaBuild's best team pairs Phoebe with Verina; Whimpering Wastes lists "Phoebe, Lynae or Ciaccona" |
| Phrolova pairing depends on her signature | VERIFIED | Evidence S5 Prydwen Phrolova excerpt |

## Failed claims
| # | Severity | Status | Claim / gap | Evidence | Downstream impact | Fix (paste-in) |
|---|---|---|---|---|---|---|
| 1 | MINOR (critical: main Echo; paste-in) | CONTRADICTED | Absolution "Main Echo: Capitaneus" | WuWaBuild: main Echo Nightmare: Mourning Aix, with Capitaneus as a 3-cost piece. Prydwen summary: Nightmare: Mourning Aix is the "go to choice". Pity.gg names Capitaneus as the active Echo, so it is an alternative. | Wrong main Echo for the main build | Replace the table row with: `\| Main Echo \| Nightmare: Mourning Aix (Capitaneus as an alternative) \| Impermanence Heron \|` |
| 2 | MINOR (names; paste-in) | UNSUPPORTED (non-official name) | "Use Mirror Summon for the Ring of Mirrors" | Kuro 2106: the Resonance Skill is "To Where Light Shines" | Exact-names rule | Replace with: "Use Resonance Skill To Where Light Shines to summon the Ring of Mirrors" |
| 3 | MINOR (mechanics; paste-in) | UNSUPPORTED (inaccurate) | "Inside the ring, connect Basic Attack 3 or a Dodge Counter to Starflash." | Kuro 2106: with Divine Voice, Basic Attack Stage 3 or a Dodge Counter replaces the next Heavy Attack with Starflash; this isn't tied to the ring. Inside the ring, Basic Attack becomes Chamuel's Star. | Small mechanics error | Replace with: "With Divine Voice available, Basic Attack Stage 3 or a Dodge Counter turns the next Heavy Attack into Starflash; inside the Ring of Mirrors her Basic Attack becomes Chamuel's Star." |
| 4 | MINOR (names; paste-in) | UNSUPPORTED (non-official name) | "Spectro Rover" (team table and text) | Kuro patch notes use "Rover: Spectro" | Exact-names rule | Replace every "Spectro Rover" with "Rover: Spectro" |
| 5 | MINOR (unsupported; paste-in) | UNSUPPORTED | "Rebecca and Phrolova are additional offensive teammates worth investigating for Absolution; Phrolova's signature matters to the dual-DPS recommendation." Nothing supports Rebecca, and "worth investigating" is vague. | Evidence S5: "One of Phoebe's best teams assuming Phrolova has her Signature weapon" | Unsupported teammate | Replace with: "Prydwen rates Phrolova as one of Phoebe's best Absolution partners when Phrolova has her signature weapon." |
| 6 | MINOR | N/A (style) | "X, not Y" frames: "Ocean's Gift is a past event weapon, not guaranteed to be obtainable by a new player."; "Augment is a paid Battle Pass choice, not F2P."; "The two modes are useful because they serve different teams, not because one is always superior." | CLAUDE.md §3 | House style | Replace with: "Ocean's Gift came from the Version 2.1 Old Man and the Whale event and has only returned since as a limited-time exchange reward." / "Augment is a paid Battle Pass weapon." / "The two modes serve different teams." |
| 7 | MINOR | N/A (record) | The record calls S3 WuWaBuild "indexed". It has no kit evidence for the mode mechanics. | Kuro 2106 kit text read this round | Record accuracy | Add Kuro 2106 (kit GIF text) for C01, and add Kuro 2154 and 2561 for the Ocean's Gift claim. |

## Directory metadata
- `character: "Phoebe"` (Kuro 2154 and 2106)
- `build_meta: { attribute: Spectro, weapon: Rectifier, role: DPS / Support }`. Kuro's combat roles are "Main Damage Dealer, Concerto Efficiency, Spectro Frazzle". The dual role reflects the verified Confession mode.
- `game_version: "3.8"`
- No `banner_ends` / `banner_name`. She isn't on the 3.8 Phase I convene (Kuro 5754).
