# Failed-claims report: zenless-zone-zero-miyabi-build (r2)
Reviewer: Claude (independent check) · 2026-11-25 · Tier 3
**Verdict: REVISION REQUIRED**

All eight r1 findings are resolved. One new MAJOR completeness gap: Miyabi's most-used current team, with Nangong Yu, is missing.

Retrieval this round:
- Read live: ZZZ-Build Miyabi best teams (updated 2026-10-24, "Data: version 3.3") and ZZZ-Build Soukaku best teams.
- From r1: official Agent Intro (HoYoverse content API), Icy Veins and Prydwen fetch summaries.
- Mobalytics returns 403 (ACCESS BLOCKED). Prydwen Vivian was not opened (ACCESS BLOCKED); its claims are covered by ZZZ-Build.

## r1 findings
| r1 # | Status now | Evidence |
|---|---|---|
| 1 Vivian / Astra Yao teams | RESOLVED, VERIFIED | Miyabi / Vivian / Astra Yao, Vivian / Yuzuha, Yanagi / Astra Yao: Prydwen popular teams. Vivian / Yuzuha and Yanagi / Yuzuha: ZZZ-Build Miyabi #3 and #7. Astra Yao / Soukaku: ZZZ-Build Soukaku #4 (very low usage, 0.09%; the draft's "fewer dedicated Anomaly applications" caveat fits). ZZZ-Build lists Vivian as "Ether · Anomaly" and Astra Yao and Yuzuha as Support, so "Ether Anomaly and Frost enable Disorder" and "Astra / Yuzuha activates Bask in Frost" hold. But see new #1 |
| 2 Disc 5 | RESOLVED, VERIFIED | "Ice DMG Bonus or ATK%" (Icy Veins; Prydwen) |
| 3 Disc 4 | RESOLVED, VERIFIED | "CRIT Rate, or CRIT DMG once CRIT Rate is comfortable" (Icy Veins; Prydwen) |
| 4 Unsourced swap line | RESOLVED | Removed |
| 5 Electro-Lip Gloss | RESOLVED, VERIFIED | Icy Veins summary (Battle Pass; S5 about equal to S1 Fusion Compiler) |
| 6 Duplicate source | RESOLVED | Removed |
| 7 Style frames | RESOLVED | Applied |
| 8 Teammate condition record | PARTLY RESOLVED | Specialties are now traceable: ZZZ-Build lists Yuzuha, Astra Yao and Soukaku as Support; Soukaku's page header is "H.S.O.S.6"; Lucy is Support per r1 Prydwen teams. The record still says the Freeze / Shatter premise "was not established". See #2 |

## Verified (new or changed claims)
| Claim | Status | Evidence |
|---|---|---|
| CRIT Rate above 80% still improves crit consistency; Icy Veins suggests close to 100% | VERIFIED | Icy Veins summary |
| 70 + 12 = 82 example, conditional on Freeze or Shatter | VERIFIED | Arithmetic correct. Premise: Prydwen summary says filling her Frost gauge applies Freeze and Frostbite, and Shatter follows when the Freeze ends. Miyabi can therefore trigger the bonus herself |
| "Prydwen prefers Lighter to Piper in its Sons of Calydon setup" | VERIFIED | Prydwen summary (r1) |
| "Each example satisfies the condition" | VERIFIED | Each lineup includes Yuzuha, Astra Yao, Soukaku or Lucy (Support), or Yanagi (Section 6); ZZZ-Build and the official condition |
| Style | VERIFIED | No em dashes, no bold in running text, no stock phrases, no "X, not Y" frames |

## Failed claims
| # | Severity | Status | Claim / gap | Evidence | Downstream impact | Fix |
|---|---|---|---|---|---|---|
| 1 | MAJOR (completeness) | UNSUPPORTED (completeness) | The team table has no Nangong Yu lineup. Current 3.3 usage data ranks it as Miyabi's top team. Velina also appears as an Anomaly partner. | ZZZ-Build Miyabi best teams (version 3.3, updated 2026-10-24): "#1 Miyabi + Nangong Yu + Yuzuha ... SD Rank 2, App. rate 25.50%"; also Nangong Yu + Astra Yao (#5, #6) and Velina + Yuzuha (#8). Its FAQ: "Nangong Yu (Stun) is the first support to slot next to Miyabi." | Breaks the completeness safeguard: the most-played current lineup is missing | Back to the editor. Add Miyabi / Nangong Yu / Yuzuha (and optionally the Astra Yao variant) as a full system: who generates Disorder, Bask in Frost via Yuzuha or Astra Yao, the Stun window. Confirm Nangong Yu's exact official name and kit from a HoYoverse source. Consider a Velina row. Replace the blocked Mobalytics source with `https://www.zzz-build.com/best-teams/miyabi`. |
| 2 | MINOR | N/A (record) | The evidence and record say "Whether Frost alone meets the set condition was not established". The record has no claim map of its own, and its title has an em dash. | Prydwen summary (Frost gauge applies Freeze; Shatter on Freeze end) | Record inconsistency | Replace that line with: "Miyabi's own Frost gauge applies Freeze and, when Freeze ends, Shatter (Prydwen), so the 12% CRIT Rate is reachable in every listed team." Add the ZZZ-Build sources to the mapping. Replace the em dash in the title with a colon. |

## Final directory metadata (confirmed, matches the draft's front matter)
- `character: "Hoshimi Miyabi"`
- `build_meta: { attribute: Frost, specialty: Anomaly, role: DPS }`
- `game_version: "3.3"`. ZZZ-Build's team data is also 3.3. `review_by: 2026-12-02` matches the 3.4 launch.
- No `banner_ends` / `banner_name`.
