# Claim review: Yao Guang

Prepared 2026-11-25. Status refers to author evidence, not independent editorial approval.

| ID | Status | Claim and evidence |
|---|---|---|
| 01 | VERIFIED | Identity and rerun date: S1; banner_ends 2026-12-02T03:59:00Z (11:59 server time on the UTC+8 server, the published Aha build convention). |
| 02 | VERIFIED | Base kit, equipment and stats: S2; SP trace S4. |
| 03 | VERIFIED | 4.7 Aha E0 interaction: S3 (release data, indexed). |
| 04 | VERIFIED | Free mission reward: S6; no comparative ranking claimed. |
| 05 | INTERPRETATION | Team examples from S2/S5 and previously reviewed Batch 03 Aha/Batch 05 Silver Wolf synergies. Not a usage ranking. |
| 06 | CALCULATED | 10,000/160=62.5; 10,000/200=50. No external action modifiers. |

## Review limitations / triggers
S2 is an older opened copy. S3-S6 indexed only. New Aha E2 interaction and exact relative performance of the free cone require independent release-data review; superseded: the Aha E2 values are now verified and stated (see corrections below). No universal team ranking or exact server-to-UTC timestamp claimed.
Recheck on 2026-12-02 and whenever kit, gear or team recommendations materially change. No gameplay testing claimed.

## Corrections applied by Claude under standing approval (2026-11-25)
Source of each fix: review/honkai-star-rail-yao-guang-build-r1.md. Release data = Gachabase 4.7.0 release page for Yao Guang (character 1502) and its 4.6-to-4.7 diff, both opened directly.

| # | Change | Evidence |
|---|---|---|
| 1 | Rewrote the SPD paragraph: added the Amaze-In Grace 120 SPD threshold (30% Elation, plus 1% per extra point, up to 200 extra SPD), the Diviner 120/160 and Sprightly Vonwacq 120 thresholds, Prydwen's 200 SPD target needing the signature, the AV maths, the 134 SPD Aha note and the 4.7 Aha Instant base SPD change. Removed the "not a requirement" frame. | Release data, trace and set texts; Prydwen copy dated May 31, 2026; HoYoLAB 4.7 notes ("increasing its base SPD") |
| 2 | Relic row: added Messenger Traversing Hackerspace as the alternative. Planar row: added Broken Keel at 30% Effect RES. | In-game Build Guide, Cavern Relics and Planar Ornaments; HSR Build (Nov 8, 2026) |
| 3 | Trace order changed to: Ultimate and Elation Skill, then Skill and Talent, then Basic ATK. | In-game Skill Upgrade Priority: Ultimate = Elation Skill > Skill = Talent > Basic ATK |
| 4 | See You at the World's End! row: now states it raises only her own CRIT DMG (S5: 10% per Elation character, plus 20% with Aeon ★ Aha) and gives no SPD, Energy or team buff. Signature sentence reworded. | Release data, Light Cone text; HoYoLAB 4.7 notes (free S5 mission reward) |
| 5 | Aha paragraph replaced: names Faces of Elation ★ Mind Reading and adds the E2 values (40%, 30 fixed Energy, 10 Bliss). Removed the "not a permanent change" frame. | Release data, trace text (new in the 4.6-to-4.7 diff) |
| 6 | Teams: changed "Elation Trailblazer" to "Trailblazer (Elation: Lightning)" in two rows. Reworded the budget row. Added the Aventurine • Waveflair / Yao Guang / Aeon ★ Aha / Pearl row and the Prydwen Archer/Sparkle sentence. | In-game Recommended Teams (Team 3); HoYoLAB 4.2 notes (Trailblazer name); Gachabase index (Aventurine • Waveflair is Elation: Quantum; Pearl's Skill heals all allies); Prydwen |
| 7 | Added the Asat Pramad's Gift sentence. | HoYoLAB 4.7 notes, Others and Grab Your Opening Gifts |
| 8 | TL;DR now uses a straight apostrophe. Summary now says "Aeon ★ Aha" (146 characters). | Official name in the HoYoLAB 4.7 notes |
| 9 | Added HSRZone as the source for the Mushy Shroomy's Adventures shop. Updated row 01 of this record with the banner convention. Front matter now has banner_ends 2026-12-02T03:59:00Z and banner_name "Indelible Coterie: Yao Guang". | HSRZone Silver Wolf LV.999 build ("Forgotten Hall/Memory of Chaos Light Cone shop"); HoYoLAB 4.7 Phase I notice (2026/12/02 11:59 server time) |

Not changed: published_at. The evidence file and sources.json are outside this copy set; mirror the new HSRZone source there before publishing.


## Build-spec expansion (Claude, 2026-11-25), pending fresh-agent Tier 3 check
Authored by Claude at Daniel's request ("can you fix the guides?"), to docs/build-page-spec.md.
- Added: kit overview, Prydwen stat targets, Rotation section, Traces and skill priority (with major Trace table), Eidolons section, separate Aeon ★ Aha heading.
- Eidolons E1-E6 (names, effects) and major Traces A2/A4/A6: VERIFIED by two independent specialist sources that agree (Icy Veins profile, Prydwen), method per amendments section 9. Gachabase was declined by WebFetch (robots) and was not used.
- Skill names and one-line effects: Icy Veins profile; consistent with the previously verified body (Zone, Great Boon, 180 Energy, fixed 20 Punchline).
- Stat targets and Trace priority: Prydwen, credited by name in the text. In-game Build Guide skill order kept from the earlier verified version; the two orders are presented side by side.
- Eidolon value judgement labelled INTERPRETATION in the text, premise VERIFIED (effects above); Prydwen quoted for "no Eidolon required".
- spec_omit: materials. Ascension totals appear in one source only (Icy Veins); Trace materials and the weekly boss item in none reachable. A second source needed WebFetch approval while Daniel was away. Fill in when verified.
- Fresh-agent Tier 3 review (verification/reviews/honkai-star-rail-yao-guang-build-r1-b07r2.md): every new fact VERIFIED; depth gate failed on a single generic rotation paragraph. Fixed with the reviewer's rotation paste-in (Technique opener, 3-turn Zone ticking at her turn start, 20% All-Type RES PEN for 3 turns, A4 SP refund, SP-spending carries trigger Great Boon once more; "common mistakes" labelled VERIFIED-premise INTERPRETATION). E6 cell no longer claims an undocumented E4/E6 magnitude.
- Materials stay spec_omit: only Icy Veins lists them (profile and article are the same outlet), the weekly boss item is unnamed and Lucid Awl 50 may be a typo. Candidate table held in the review file until a second confirmation.
- Correction after the reviewer's final note: the Technique opener and "Zone ticks down at the start of her turn" rest on Icy Veins only; both removed. Remaining rotation facts have two sources (Icy Veins and Prydwen: 3-turn Zone, 20% RES PEN for 3 turns, A4 refund) or come from the earlier verified body (SP-spending attacks and Great Boon).
