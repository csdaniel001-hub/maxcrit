# Failed-claims report: wuthering-waves-the-shorekeeper-build (r2)
Reviewer: Claude (independent check) · 2026-11-25 · Tier 3
**Verdict: PASS**

All nine r1 findings are resolved. Two MINOR fixes remain, and neither touches a conclusion: a one-sentence completeness addition and an outdated line in the verification record. Both can be applied at implementation.

Retrieval this round:
- Read live: WuWaBuild Shorekeeper build page, Pity.gg Shorekeeper guide, WuWaBuild Shorekeeper teams.
- From r1: Wutheringlab kit text, Prydwen fetch summaries, Kuro feed (1454, 1419).
- Neither new source cites Game8. Mobalytics and wuwaguide stay ACCESS BLOCKED; they are only historical corroboration.

## r1 findings
| r1 # | Status now | Evidence |
|---|---|---|
| 1 Skill priority | RESOLVED, VERIFIED | Draft: Intro first, then Liberation (Wutheringlab) or Resonance Skill (Prydwen). WuWaBuild build page: "Intro Skill > Res. Skill > Basic Attack > Forte Circuit > Res. Liberation". Wutheringlab: Intro, then Liberation |
| 2 Discernment at S0 | RESOLVED, VERIFIED | Wutheringlab: "Casting Discernment ends the current Stellarealm"; S1 removes this. Pity.gg: "Discernment closes off the field at S0", "Bring Shorekeeper back only once Supernal is nearly over" |
| 3 Current teams | RESOLVED, VERIFIED | WuWaBuild ToA 3.8: Hsin / Suoming T0, Jingran / Iuno T0, Aemeath / Lynae T0.5, Augusta / Iuno T1, Sigrika / Qiuyuan T0.5. Pity.gg: Augusta / Iuno sequence. Prydwen headers: Augusta, Camellya, Zani. The Lily note is supported by WuWaBuild Lily teams |
| 4 4-cost main stat | RESOLVED, VERIFIED | Draft: "Healing Bonus for comfort or CRIT DMG for Intro damage". WuWaBuild build page: "CRIT DMG > HP% on the 4-cost". Wutheringlab: Healing Bonus or CRIT DMG |
| 5 Recipe wording | RESOLVED, VERIFIED | "Call of the Abyss, whose recipe is a Rinascita exploration quest reward". Prydwen text quoted on WuWaBuild: "given for free via an Exploration quest in Rinascita". GamesFuze: recipe, then craft |
| 6 Primary source title | RESOLVED | 1454 is retitled and 1419 added; both are quoted correctly in YAML |
| 7 Moonlit Clouds | RESOLVED, VERIFIED | WuWaBuild build page: "Moonlit Clouds ... 10% unconditional Energy Regen% ... upon using Outro, grants the next character switching in a 22.5% ATK boost", with Impermanence Heron. Pity.gg: "5pc Moonlit Clouds ... Impermanence Heron ... use right before Outro" |
| 8 Style frames | RESOLVED | All four replacements are applied |
| 9 Record | PARTLY RESOLVED | See #2 below |

## Verified (new or changed claims)
| Claim | Status | Evidence |
|---|---|---|
| Craftable Rectifier#25 | VERIFIED | Pity.gg: "Craftable Energy Regen choice". Prydwen text quoted on WuWaBuild: "acquired for free via crafting". Sportskeeda. Lootbar's "(Gacha Weapon)" label is outweighed 3 to 1 |
| Weapon order: Stellar Symphony, Variation, then Rectifier#25 and Call of the Abyss | VERIFIED | WuWaBuild build page: "Variation, Rectifier#25 and Call of the Abyss are the next picks, in that order" |
| Hsin / Suoming, Jingran / Iuno, Augusta / Iuno, Aemeath / Lynae rows | VERIFIED (teams); INTERPRETATION ("why it works" text) | WuWaBuild ToA 3.8; Pity.gg |
| "At S0, returning with Intro Skill Discernment ends the Supernal Stellarealm" | VERIFIED | Discernment only exists in Supernal (Wutheringlab), so "current" means Supernal |
| ER table, Stellarealm caps, Echo layout, Rectifier notes | VERIFIED (unchanged from r1) | r1 report |
| Style | VERIFIED | No em dashes, no bold in running text, no stock phrases. The "X, not Y" frames from r1 are gone. "instead of casting Liberation and swapping aimlessly" is a mild leftover, acceptable |
| Directory metadata in front matter | VERIFIED | See below |

## Failed claims
| # | Severity | Status | Claim / gap | Evidence | Downstream impact | Fix |
|---|---|---|---|---|---|---|
| 1 | MINOR (completeness) | UNSUPPORTED (completeness) | The Jingran / Iuno row has no set note. The current build page lists a niche set for exactly that team. | WuWaBuild build page: "Halo of Starry Radiance ... Niche set for Shorekeeper in Jingran teams that don't feature a natural Shield applier" | Small gap for one listed team | Add after the Moonlit Clouds sentence: "In Jingran teams without a shield applier, WuWaBuild lists 5-piece Halo of Starry Radiance as a niche alternative to Rejuvenating Glow." |
| 2 | MINOR | N/A (record) | The verification record says "Rectifier#25 acquisition disputed ... review before publish". The record still has no claim map of its own and points to the r1 report. Its title has an em dash. | Pity.gg and Prydwen settle the acquisition (see Verified) | The record contradicts the article | Replace that line with: "Rectifier#25 is craftable: Pity.gg ('Craftable Energy Regen choice'), Prydwen text on WuWaBuild ('acquired for free via crafting'), Sportskeeda; Lootbar's gacha label is outnumbered." Add the r2 sources (WuWaBuild build page, Pity.gg) to the claim mapping. Replace the em dash in the title with a colon. |

## Final directory metadata (confirmed, matches the draft's front matter)
- `character: "Shorekeeper"`
- `build_meta: { attribute: Spectro, weapon: Rectifier, role: Support }`
- `game_version: "3.8"`
- No `banner_ends` / `banner_name`.
