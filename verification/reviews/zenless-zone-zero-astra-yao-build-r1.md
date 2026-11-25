# Failed-claims report: zenless-zone-zero-astra-yao-build (r1)
Reviewer: Claude (fresh adversarial check) · 2026-11-25 · Tier 3
**Verdict: REVISION REQUIRED**

There are no back-to-editor items. The build itself verifies. The team table misses the most-used current lineups and keeps one unsupported row; paste-in fixes are below.

Retrieval this round:
- HoYoverse content API: Astra Yao Agent Mechanics Intro (iInfoId 129490, 2025-01-18). Images read: Support specialty, Additional Ability "Moonlit Frenzy", Idyllic Cadenza, Chords, Ultimate "Fantasian Sonata".
- HoYoverse content API, channel 288 list: official names Nangong Yu, Velina, Norma, Severian, Cissia, Zhao, Ye Shunguang, Seed, Orphie & Magus, Soldier 0 - Anby, Trigger, Vivian, Ukinami Yuzuha.
- HoYoverse content API: V3.3 Phase I and II channel notices (166926, 167269).
- Opened directly: ZZZ-Build Astra Yao build and best-teams pages (data version 3.3, updated 2026-10-24).
- Via WebFetch summary: Prydwen Astra Yao (team lists from 1.6 and DA data), Icy Veins Astra Yao teams and Norma teams. Neither Icy Veins page shows its team list.

## Verified
| Claim | Status | Evidence |
|---|---|---|
| Astra Yao: S-Rank Ether Support | VERIFIED | Official intro (Support specialty; "Ether DMG"); ZZZ-Build ("S-Rank Ether Support") |
| About 3,430 initial ATK caps the Core Passive at max Core Skill. Initial ATK, not combat ATK, counts | VERIFIED | Prydwen summary ("~3430 ATK"; cap 1,200; "initial ATK"). 1,200 / 0.35 = 3,429 matches the 35% figure in Prydwen's review. ZZZ-Build ("cap her Core Passive") |
| Astral Voice 4-piece; Swing Jazz or Hormone Punk 2-piece; Disc 4 and 5 ATK%; Disc 6 ATK% then Energy Regen | VERIFIED | ZZZ-Build (Astral Voice + Swing Jazz; Hormone Punk alternative; "Disk 6 — Energy Regen = ATK%") |
| Elegant Vanity (assist-triggered Energy, team DMG); Bashful Demon; Kaboom the Cannon (Energy Regen, team ATK, needs ATK from Discs); The Vault | VERIFIED | ZZZ-Build W-Engine section; Prydwen order |
| Bashful Demon and Kaboom the Cannon are A-Rank signatures of other agents | VERIFIED | ZZZ-Build ("Soukaku's Signature", "Lucy's Signature") |
| Additional Ability activates with an Attack, Anomaly or Rupture teammate | VERIFIED | The official 2025 intro says Attack or Anomaly (it predates Rupture). Prydwen's current profile: "an Attack, Anomaly, or Rupture character" |
| Special Attack enters Idyllic Cadenza; she stays on field off-screen; 1 Chord per 25 Energy; switch-ins trigger Tremolo and buffs | VERIFIED | Official intro ("For every 25 Energy Astra Yao has, she gains 1 Chord"; stays on field and Invulnerable after switching) |
| Ultimate heals the squad and turns the next two Quick Assists into Chain Attacks; especially good with Evelyn | VERIFIED | Official intro (Fantasian Sonata); ZZZ-Build FAQ (Evelyn synergy) |
| Skill priority: Core, Special Attack, Chain Attack, then Assist, Dodge, Basic | VERIFIED | ZZZ-Build ("Core Skill first, then Special Attack, Chain Attack, Assist, Dodge, Basic Attack") |
| Evelyn / Lighter / Astra Yao | VERIFIED | ZZZ-Build #6 and #8 |
| Seed / Orphie & Magus / Astra Yao; Miyabi / Vivian / Astra Yao | VERIFIED | Prydwen Shiyu team list (both) |
| Ye Shunguang / Norma / Astra Yao | ACCESS BLOCKED | Evidence S5 is an Icy Veins indexed excerpt; the live page shows no team list. Plausible (Norma is a Stun agent per official 167269), but not in ZZZ-Build's 3.3 usage list |
| Soldier 0 - Anby / Trigger / Astra Yao | INTERPRETATION (partial premise) | Icy Veins pairs Trigger with Astra (low field time). The full trio isn't in Prydwen's or ZZZ-Build's lists |
| No current banner | VERIFIED | Official 3.3 Phase II channels (167269): Severian and Norma until 2026-12-01 14:59 server time; Astra isn't featured |

## Failed claims
| # | Severity | Status | Claim / gap | Evidence | Downstream impact | Fix (paste-in) |
|---|---|---|---|---|---|---|
| 1 | MINOR (completeness; paste-in) | UNSUPPORTED (completeness) | The team table misses the top 3.3 usage lineups. Each meets Moonlit Frenzy through an Attack or Anomaly teammate. | ZZZ-Build Astra Yao best teams (3.3): #1 Cissia + Seed (SD Rank 13, 5.05%); #2 and #3 Evelyn + Norma (DA Rank 12, 6.15%); #4 Miyabi + Nangong Yu (DA Rank 15); #5 Ye Shunguang + Zhao (SD Rank 14). Names confirmed in the official channel 288 list. Norma is "Fire - Stun" per official 167269; ZZZ-Build's "Ether · Stun" label is wrong. | The most-played current teams are missing | Add these rows at the top of the table: `\| Cissia / Seed / Astra Yao \| Two Attack carries; both meet Moonlit Frenzy, and frequent swaps feed her Quick Assist follow-ups. Most-used Astra team in ZZZ-Build's 3.3 data. \|` / `\| Evelyn / Norma / Astra Yao \| Fire Attack carry with a Stun partner; Astra's Ultimate turns two Quick Assists into Chain Attacks for Evelyn. \|` / `\| Miyabi / Nangong Yu / Astra Yao \| Anomaly carry with a Stun partner; Astra also meets Miyabi's own Support requirement. \|` / `\| Ye Shunguang / Zhao / Astra Yao \| Attack carry with a Defense partner and team-wide buffs. \|` |
| 2 | MINOR (critical: team recommendation; paste-in) | UNSUPPORTED | "Zhu Yuan / Anby / Astra Yao: Accessible Stun partner, with Zhu Yuan as the limited carry." No current source lists it. | It doesn't appear in ZZZ-Build's 3.3 Astra teams or Prydwen's lists | Unsupported recommendation | Delete the row. The Evelyn / Lighter row already covers a lineup with a widely owned Stun partner. |
| 3 | MINOR (completeness; paste-in) | UNSUPPORTED (completeness) | The Rupture condition is stated, but no Rupture team is shown | Prydwen DA teams: "Yixuan, Qingyi, Astra Yao"; "Yixuan, Dialyn, Astra Yao". Official intro list confirms Yixuan. | Shows the Rupture condition in practice | Add the row: `\| Yixuan / Dialyn / Astra Yao \| Rupture carry, which meets Moonlit Frenzy, with a Stun partner. \|` |
| 4 | MINOR (completeness; paste-in) | UNSUPPORTED (completeness) | Moonlight Lullaby isn't listed as an alternative 4-piece | ZZZ-Build: "Alternative Disc Sets Moonlight Lullaby, Hormone Punk" | Missing alternative | After the Drive Disc table, add: "Moonlight Lullaby is the alternative four-piece set if Astral Voice pieces are poor." |
| 5 | MINOR | N/A (style) | "X, not Y" frames: "The Core Passive scales with initial ATK, not temporary combat ATK buffs."; "Bashful Demon and Kaboom the Cannon are A-Rank alternatives rather than guaranteed free max-superimposition equipment."; "These are roster examples rather than a ranked November usage table." | CLAUDE.md §3 | House style | Replace with: "The Core Passive scales with initial ATK; temporary combat ATK buffs don't count." / "Bashful Demon and Kaboom the Cannon are A-Rank signatures of other agents, so S5 copies aren't guaranteed." / "The first rows follow ZZZ-Build's Version 3.3 usage data; the rest are established alternatives." |
| 6 | MINOR | N/A (record) | The record cites a July cached profile. The C03 team evidence is indexed only, and Icy Veins doesn't show a team list live. | Official API and ZZZ-Build read this round | Record accuracy | Add the official intro (129490) for C01, ZZZ-Build build and teams pages for C02 to C05, and mark the Ye Shunguang / Norma row as resting on an indexed Icy Veins excerpt. |

## Directory metadata
- `character: "Astra Yao"` (official intro 129490)
- `build_meta: { attribute: Ether, specialty: Support, role: Support }`
- `game_version: "3.3"`
- No `banner_ends` / `banner_name`. The 3.3 Phase II channels feature Severian and Norma (official 167269).
