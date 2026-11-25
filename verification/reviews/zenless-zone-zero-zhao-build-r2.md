# Failed-claims report: zenless-zone-zero-zhao-build (r2)

Reviewer: Claude (fresh adversarial Tier 3 agent), 2026-11-25. Draft R3 not edited. Diffed against R2.

**Verdict: REVISION REQUIRED**

Minor only. Every critical claim is now VERIFIED or a VERIFIED-premise INTERPRETATION except one single-source mechanic sentence (N1), which can simply be deleted. All fixes below are minor, evidence-backed paste-ins that Claude can apply under the standing approval; nothing needs to go back to Mira.

**Depth gate: PASS**: the page now covers kit overview, HP targets with reproducible maths, W-Engines including the free P5 option, Bunny in Wonderland plus the older Astral Voice and Proto Punk sets by archetype, the Ye Shunguang team and its two listed variants, the Alice option, a rotation that uses the correct gauge sources, Anomaly-team guidance, skill priority from two guides, Mindscapes, and a justified `spec_omit: materials`. The Anomaly guidance is short but uses only verified premises.

Sources opened this round:
- Official 2.5 Update Details via the content API (iInfoId 161728)
- Prydwen Zhao (live, updated 27 May 2026; profile shows Core Passive at Lv. 1)
- Icy Veins Zhao profile, skills and Mindscapes (https://www.icy-veins.com/zenless-zone-zero/zhao-profile-skills-mindscapes, updated 28 Jul 2026, Core Passive shown at Lv. 7). This is the new second source for F14.
- Mobalytics Zhao build (live)
- genshin-builds Zhao, genshin.gg Zhao
- Icy Veins Zhao build guide (live copy is the beta page)
- Mobalytics character page: headings only.
- Gachabase: WebFetch declined it (robots_disallowed). Not fetched, not counted.

## r1 items

| # | Status | Evidence |
|---|---|---|
| F1 | FIXED | BiW text matches the Icy Veins set page (r1). Its BiS status is backed by the Icy Veins 2.7 article and genshin-builds ("Bunny in Wonderland (4-piece) + Yunkui Tales (2-piece)"). The Astral Voice stack sentence is gone and the three sources are in YAML. |
| F2 | FIXED | genshin-builds verbatim: EX "gain 20 Frostbite Points", Ultimate "gains 20", Chain "gains 5", Assist Follow-Up "if Frostbite Points are maxed out, all Frostbite Points are consumed". Prydwen agrees. Neither lists a gain on Defensive Assist, Quick Assist or Dodge. Line 70, rotation opening and the "Repeatable Veil maintenance" bridge sentence are all corrected. The added Defensive Assist sentence is single-source (see N1). |
| F3 | FIXED | "craftable" is removed everywhere. Mobalytics lists Original Transmorpher (P5) as the best A-Rank pick. |
| F4 | FIXED | Proto Punk is added. The Anomaly paragraph uses Mobalytics "For Anomaly or Ye Shunguang teams, Energy Regen will always be the way" plus verified Entry Skill and EX values. |
| F5 | FIXED | Prydwen team data: Ye Shunguang + Astra Yao + Zhao (SD rank 7, DA rank 5), Ye Shunguang + Trigger + Zhao (SD 37, DA 17). |
| F6 | FIXED | Official 2.5: "Can be obtained through the 'Priceless Heart' Signal Search." |
| F7 | FIXED | Mobalytics: Half-Sugar Bunny (P1), Tusks of Fury (P1), Original Transmorpher (P5). |
| F8 | FIXED | Icy Veins at Core Lv. 7: "gaining 1.4% CRIT Rate for every 1,000 initial Max HP". Prydwen profile shows 0.8% at Lv. 1, so the qualifier is right. |
| F9 | PARTIAL | The unsourced ER sentence is gone. The replacement says "both specialist guides" put CRIT Rate and CRIT DMG after HP, but live Mobalytics lists only HP% and HP (see N2). |
| F10 | FIXED | Prydwen and Icy Veins verbatim: "her ATK increases by 20%, and other squad members' ATK increases by 15% for 50s." |
| F11 | FIXED | Every "instead of" in the last third is rephrased. |
| F12 | FIXED | stylecheck reports 0 errors and 0 warnings. Skill priority is added and `spec_omit: materials` is set. |
| F13 | OPEN (Info) | `published_at` is removed. There is still no image: stylecheck INFO "no image proposed". |
| F14 | PARTIAL, fixable now | Prydwen (verbatim, Lv. 1 profile and maxed review) and the Icy Veins profile (Lv. 7; quoted or closely paraphrased by the fetch tool) agree on all of these: 100 points on entry, 180s, cap 100 ("The maximum amount of Frostbite Points is 100."), 6 per 3s, 40s Veil, 5% Max HP, 1,000 ATK for 50s, 1.4% per 1,000 at max, and Crystallization (10% base, 15,000 start, +1% per 400, 40% cap at 27,000). They also agree on M1 (15% for 50s), M2 (20%/15%, 50s), M4 (250 Decibels, +40% CRIT DMG) and all of M6: 125% CRIT Rate buff, 140% charge DMG and charge not consumed. genshin.gg and genshin-builds Talent F also give the 125%. The evidence file still cites Gachabase, which the reviewer can't open, and its passive line is marked as a paraphrase, so the evidence trail is weak (N5). |

## New claims

| Claim (line) | Status | Evidence |
|---|---|---|
| Priceless Heart Signal Search (62) | VERIFIED | Official 2.5 notice |
| "Her EX Special, Ultimate and Chain Attack provide additional points" (70) | VERIFIED | genshin-builds, Prydwen |
| BiW 2-pc 10% HP; 4-pc 6% per stack, 3 stacks, 25s, Defense equipper EX or squad Defensive/Evasive Assist (101) | VERIFIED | Icy Veins set page (r1) |
| Yunkui Tales for HP, Swing Jazz or Moonlight Lullaby for ER (101) | VERIFIED | Mobalytics "Yunkui Tales is needed for Zhao to have much of a chance to hit her 27,000 initial Max HP requirement"; Prydwen pairs Astral Voice and Proto Punk with Moonlight Lullaby or Swing Jazz (fetch summary) |
| Astral Voice for Attack teams, Proto Punk for Anomaly or dual damage-dealer teams (103) | VERIFIED | Mobalytics "4-piece Astral Voice for Attacker teams", "4-piece Proto Punk for dual Damage Dealer/Anomaly teams"; Prydwen agrees |
| "Before Bunny in Wonderland arrived" (103) | INTERPRETATION (VERIFIED premise) | Neither Prydwen nor Mobalytics mentions BiW |
| Proto Punk "the closer match" to BiW (103) | INTERPRETATION (VERIFIED premise) | Prydwen describes Proto Punk as a team-wide damage boost from Defensive or Evasive Assists (fetch summary). BiW triggers on the same assists plus EX. |
| Substat sentence (111) | PARTIAL | See N2 |
| Ye Shunguang + Astra Yao, Ye Shunguang + Trigger rows (127-128) | INTERPRETATION (VERIFIED premise) | Prydwen usage data only: Astra Yao variant SD rank 7 (8.07%), DA rank 5 (11.81%); Trigger variant SD rank 37 (1.59%), DA rank 17 (3.05%). Mobalytics "Attacker / Filler / Zhao" shell fits both. Usage data is measured, not opinion, so one source is acceptable for "listed", but "Frequently listed" overstates the Trigger row (N8). |
| "The second and third examples are flexible roster options" (130) | STALE | The third row is now a Prydwen-listed Ye Shunguang variant (N3) |
| Astra Yao / Trigger advice (138) | INTERPRETATION (VERIFIED premise) | Generic sequencing advice; nothing in it can be contradicted. Record it as interpretation (N6). |
| Anomaly rotation: ER Disc 6, open with Entry Skill, Quick Assist into the Anomaly driver, passive rebuild, EX for 20 points (138) | INTERPRETATION (VERIFIED premises) | Mobalytics ER D6 "for Anomaly ... teams" and "Anomaly / Anomaly / Zhao" shell. Prydwen and Icy Veins: Entry Skill consumes the gauge for Wellspring; 6 per 3s. genshin-builds: EX gives 20. |
| Rotation opening, Assist Follow-Up activation from full gauge (142) | VERIFIED | genshin-builds, Prydwen |
| "A Defensive Assist switch-in doesn't trigger the Entry Skill." (142) | UNSUPPORTED (single source) | Only the Prydwen review says this ("If swapping to Zhao via a Defensive Assist however, the Entry Skill will not cast"). Icy Veins and genshin-builds are silent. (N1) |
| Final Verdict keeps charging off-field (142) | VERIFIED | r1, Prydwen |
| Skill priority paragraph (146) | VERIFIED | Prydwen "Special Attack > Chain Attack > Basic Attack > Assist > Dodge". Mobalytics (fetch summary): Core first ("by far and away the most important skill to max"), then Basic Attack and EX Special, then Assist and Ultimate, with Dodge left at level 1. |
| M2 sentence (158) | VERIFIED | Prydwen and Icy Veins verbatim |
| M4 "adds Decibels on Veil activation and buffs several of her own attacks" (158) | VERIFIED | Prydwen and Icy Veins: "When Zhao activates an Ether Veil, she gains 250 Decibels." and "The CRIT DMG of her Ultimate, Chain Attack, and Basic Attack: Final Verdict increase by 40%." The wording is accurate and has no unverified detail. |
| M6 "further increases personal critical and charged attack value" (158) | VERIFIED but imprecise | 125% CRIT Rate buff: Prydwen, Icy Veins, genshin.gg. Charge not consumed and 140% charge DMG: Prydwen ("accumulated charge time is no longer consumed when attacking") and Icy Veins profile (same content, fetch paraphrase). Mobalytics also ties M6 to an active damage-dealer role. The current wording leaves out the part that matters, which is that she can play on-field (N4). |
| Ellen, Soukaku, Zhao removed | Accepted (Info) | Mobalytics only says "She'd slot in with Ellen" and Prydwen has the trio at rank 85. This isn't an established team, so leaving it out doesn't mislead. |

## Remaining failures

| # | Severity | Status | Claim | Evidence | Exact fix |
|---|---|---|---|---|---|
| N1 | Minor | UNSUPPORTED (one source) | "A Defensive Assist switch-in doesn't trigger the Entry Skill." | Prydwen review only | Delete the sentence. "An Assist Follow-Up also activates it from a full gauge." stays and already gives the post-parry path. Restore it only if a second source is found, and record that source. |
| N2 | Minor | PARTIAL | "Both specialist guides rank HP% first and flat HP second, with CRIT Rate and CRIT DMG after the HP target." | Mobalytics substats: "1. HP % 2. HP" with no CRIT. genshin-builds: "Percent HP, HP, CRIT DMG". It also repeats the sentence before it. | Replace the whole paragraph with Paste-in A |
| N3 | Minor | Stale | "The second and third examples are flexible roster options" | Row order changed in R3 | Paste-in B |
| N4 | Minor | Imprecise | M6 sentence | See New claims | Paste-in C (uses only two-source facts) |
| N5 | Minor | Evidence | F14 kit values: the evidence file has no fetchable second excerpt, the Gachabase passive line is a paraphrase, and the live "Icy Veins Zhao build" page is the beta version ("Stay tuned for our drive disc recommendations", lists Tusks of Fury as signature) | Fetched pages above | In YAML, replace the `Icy Veins Zhao build` entry with Paste-in D. In the evidence file, add the Icy Veins profile excerpts from Paste-in E. Gachabase may stay listed but isn't counted as reviewed. |
| N6 | Info | Record | Line 138 (Astra Yao / Trigger advice and Anomaly rotation) isn't labelled INTERPRETATION in the verification record, and the Ellen removal isn't recorded | n/a | Add Paste-in F to `verification/zenless-zone-zero-zhao-build.md` |
| N7 | Info | Process | No image (F13) | stylecheck INFO | Claude adds an official image before publication |
| N8 | Minor | Overstated | Trigger row role "Frequently listed Ye Shunguang variant." | Prydwen usage 1.59% (SD) and 3.05% (DA) | Rows 127-128 become: "| Ye Shunguang, Astra Yao, Zhao | Common Ye Shunguang variant with Astra Yao as the second support. |" and "| Ye Shunguang, Trigger, Zhao | Ye Shunguang variant with Trigger as the Stunner, used less often. |" |

## Paste-ins

### A. Substats (replaces the paragraph at line 111)

```markdown
Prioritize HP% and then flat HP substats until the initial HP target is reached; Mobalytics and Genshin-Builds both list them in that order. CRIT substats only add to Zhao's own damage, so take them after the HP target.
```

### B. Teams note (replaces the first sentence at line 130)

```markdown
The two Ye Shunguang variants cover players without Dialyn, and the Alice lineup is a flexible roster option whose value depends on the encounter.
```

(Keep the rest of the paragraph from "A specialist support can outperform Zhao..." onward.)

### C. M6 (replaces the last sentence of the Mindscape paragraph, the one starting "M6 further increases...")

```markdown
M6 raises the CRIT Rate from her Core Passive to 125% of its value and stops her attacks from consuming Final Verdict's stored charge, which moves her toward an on-field damage role. That is an expensive direction for a character whose main job is enabling the carry.
```

### D. Source YAML (replaces the `Icy Veins Zhao build` entry)

```yaml
- title: Icy Veins Zhao skills and Mindscapes
  url: https://www.icy-veins.com/zenless-zone-zero/zhao-profile-skills-mindscapes
```

### E. Evidence excerpts (add to `evidence/zenless-zone-zero-zhao-build.md`)

```markdown
- Icy Veins Zhao profile, skills and Mindscapes (updated 2026-07-28, Core Passive Lv. 7): https://www.icy-veins.com/zenless-zone-zero/zhao-profile-skills-mindscapes
  - "all squad members' ATK increase by 1000 for 50s"; "all squad members gain 5% Max HP for 40s"; "Zhao gains 6 Frostbite Points. This can be triggered once every 3s."; "Upon entering the battlefield, Zhao gains 100 Frostbite Points."; "once every 180s in Investigation Zone mode"; "gaining 1.4% CRIT Rate for every 1,000 initial Max HP"
  - M1 "all squad members' DMG ignores 15% of the target's All-Attribute RES for 50s"; M2 "her ATK increases by 20%, and other squad members' ATK increases by 15% for 50s"; M4 "she gains 250 Decibels" / "CRIT DMG of her Ultimate, Chain Attack, and Basic Attack: Final Verdict increase by 40%"; M6 "The CRIT Rate buff from Core Passive: Ideal Colleague increases to 125% of the original value."
- Prydwen Zhao (M6, live 2026-11-25): "accumulated charge time is no longer consumed when attacking"
- Icy Veins profile (M6, Crystallization, cap; reviewer fetch paraphrase, check the wording on the page): charge DMG to 140% and charge time not consumed; Crystallization 15,000 start, +1% per 400, 40% cap at 27,000; "The maximum amount of Frostbite Points is 100."
- Strike or flag the existing "discs (indexed)" Icy Veins Zhao build excerpt: the live page is the beta version and doesn't contain it. Bunny in Wonderland as BiS rests on the Icy Veins 2.7 article and Genshin-Builds.
- genshin-builds Zhao (gauge): EX "gain 20 Frostbite Points"; Ultimate "gains 20 Frostbite Points"; Chain Attack "gains 5 Frostbite Points"; Assist Follow-Up "if Frostbite Points are maxed out, all Frostbite Points are consumed"
```

### F. Verification record lines

```markdown
- INTERPRETATION (VERIFIED premises): Astra Yao / Trigger sequencing and the Anomaly rotation (Teams, last paragraph). Premises: Mobalytics ER Disc 6 for Anomaly teams and the "Anomaly / Anomaly / Zhao" shell; Prydwen and Icy Veins Entry Skill and 6 per 3s; genshin-builds EX +20. Not tested in game.
- OMITTED: Ellen, Soukaku, Zhao (Mobalytics mention only, Prydwen rank 85). Defensive Assist switch-in behaviour (Prydwen review only), pending a second source.
- r2 review: Gachabase couldn't be opened by the reviewer (robots); kit values were confirmed on Prydwen and the Icy Veins profile instead.
```
