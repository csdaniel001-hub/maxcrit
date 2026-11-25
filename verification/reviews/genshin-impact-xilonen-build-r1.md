# MaxCrit Editorial Review

Article: genshin-impact-xilonen-build
Game version: 7.2 (Phase II)
Package revision: pilot-01
Review date: 2026-11-25
Reviewer: Claude (independent retrieval: official 5.1 update notice via HoYoverse content API, KQM Xilonen quick guide, Icy Veins, GameWith, Prydwen, genshin-builds)

## Review status
REVISION REQUIRED (2 Major, 2 Minor, 2 Suggestions). No Blockers.

## Verified (pass)
- Source Samplers by party element (Pyro/Hydro/Cryo/Electro): official 5.1 update notice (iInfoId 126305).
- Skill + 2 Normal/Plunging hits reaches 90 Nightsoul points, only with 2+ converted Samplers; Burst healing needs 2+ converted; same-element teammates count: KQM.
- No interruption resistance at C0 (C1 adds it): KQM.
- Peak Patrol Song R1: 8% party All Elemental DMG Bonus per 1,000 DEF at 2 stacks, cap 25.6%, 15s: official 5.1 notice; GameWith. DEF table arithmetic correct.
- Scroll of the Hero of Cinder City 4pc 12% for 15s / extra 28% for 20s in Nightsoul's Blessing, elements involved in the reaction: genshin-builds, Prydwen. 40% overlap arithmetic correct.
- Instructor 120 EM for 8s; Flute of Ezpitzal craftable DEF sword (Icy Veins, GameWith); talent priority Skill > Burst (KQM).
- Neuvillette/Furina/Kazuha and Navia/Bennett/Xiangling lineups appear in KQM's team list.

## Findings

### C08 Energy Recharge figures. Severity: MAJOR
Original claim: "KQM's Version 5.4 model estimates 170–190% ER for solo Geo with one Skill and her own particles per rotation, compared with 205–250% if those particles are fed to another teammate."
Issue: KQM labels these as Scroll-free, Favonius-dependent setups with a Burst every rotation (and lists how much each Favonius proc lowers them). The article recommends 4pc Scroll as the first choice two sections earlier, whose 2pc returns 6 Energy per Nightsoul Burst, so a Scroll Xilonen does not need these numbers. Presented without the conditions, they push players to over-farm ER.
Evidence: KQM Xilonen quick guide, ER table ("Scroll-free, Favonius-dependent setups; assumes Burst every rotation").
Proposed resolution: state the assumptions (no Scroll, Burst every rotation, Favonius procs not counted) or drop the numbers and keep the qualitative guidance plus a link to KQM's ER calculator.
Impact: Sands recommendation ("Energy Recharge or DEF%") and the "stop farming" advice depend on this.

### C10 Mualani team flex slot. Severity: MAJOR
Original claim: "Mualani, Xiangling, Xilonen, flex Pyro/Hydro/Cryo/Electro".
Issue: KQM's lineup is Mualani – Xiangling – Sucrose / Kazuha – Xilonen (Anemo flex). A Cryo or Electro flex would add a third reacting element to a Vaporize team and can disrupt the Pyro aura the article itself says to preserve. Mualani and Xiangling already give Xilonen her two converted Samplers.
Evidence: KQM Xilonen quick guide, team list.
Proposed resolution: change to "Sucrose or Kazuha", or explain why another element works.
Impact: team table only.

### C02 Help Center conflict. Severity: MINOR
The verification record notes the Help Center says "different elemental types". The page returns 403 to automated retrieval, so I could not confirm the wording; the official 5.1 notice only says Samplers follow "other party members' Elemental Types". The article's wording ("Pyro, Hydro, Cryo and Electro teammates contribute their respective elements") does not commit either way, which is acceptable. Keep it as an open uncertainty in the record; no text change needed unless you can confirm the Help Center wording.

### Primary source. Severity: MINOR
Fine as is (official 5.1 notice). Note for the record: confirmed readable via HoYoverse's content API.

### Suggestions
- Link the live pull guide (/hub/guides/genshin-impact-names-forged-beneath-blazing-skies-pull-guide.html) next to the banner schedule for readers deciding whether to pull.
- Peak Patrol Song also gives the wielder 10% All Elemental DMG Bonus and 8% DEF per stack; mentioning that the 3,200 DEF target includes its own DEF stacks would help players reading their character screen.

## Checker compatibility
Passes `lib/check.js` apart from the image, which Claude adds at implementation.

## Publication decision
Requires revision of C08 and C10, then publish.
