# Build page completeness spec (Daniel, 2026-11-25)

A build page answers everything a player needs to build, play and invest in one character, without sending them to another site. Accuracy rules are unchanged (Tier 3, official sources first, fresh-agent fact check, originality scan). What this spec adds is coverage: a short, accurate page that skips a section players search for is incomplete.

## Required sections

Use plain-sentence H2s with the game's own terms (table below). Order can follow the character, but every section must be present.

1. **Kit overview**: what the character does and how their damage, buffs or healing work, from the official skill text. One paragraph to a short list, with the mechanic names spelled exactly.
2. **Stats**: a main stat table per slot, substat priority, and numeric targets when a source supports them (crit ratio, Energy Regen, SPD or DEF breakpoints). Show where a target comes from or how it's calculated.
3. **Weapons**: signature first, then at least two alternatives, including at least one free, craftable, battle pass or standard-pool option. One line on when each one is worth it.
4. **Sets**: best set and at least one alternative (for HSR: relic set and planar ornament both).
5. **Teams**: the established archetypes (batch 02 completeness rule) plus one budget or F2P team when one exists.
6. **Rotation or how to play**: the order of actions in a normal turn or rotation, and the mistakes to avoid.
7. **Skill priority**: which talents, traces or skills to level first.
8. **Duplicates**: what each meaningful Constellation, Eidolon, Sequence or Mindscape does and which ones change the build, from the official text. Skip none of the first two copies.
9. **Materials**: ascension and talent or trace materials and where they come from, so players can farm before the banner.

Optional: FAQ with 2 to 4 real questions (answers must not repeat the body).

## Game terms

| Section | Genshin Impact | Honkai: Star Rail | Wuthering Waves | Zenless Zone Zero |
|---|---|---|---|---|
| Weapons | Weapons | Light Cones | Weapons | W-Engines |
| Sets | Artifacts | Relics and Planar Ornaments | Echoes | Drive Discs |
| Skill priority | Talents | Traces | Forte | Skills |
| Duplicates | Constellations | Eidolons | Resonance Chain (Sequences) | Mindscape Cinema |
| Materials | Ascension and talent materials | Ascension and Trace materials | Ascension and Forte materials | Promotion and skill materials |

## When a section can't be verified

Accuracy outranks coverage. If a section can't be verified by any method in amendments section 9, leave it out, list it in front matter as `spec_omit: [materials]` (section names as above, lowercase) and record why in the verification record. Never pad a section to satisfy the gate.

## Length

Length still follows the facts, but a page covering all nine sections lands around 900 to 1,500 words of prose plus tables. `check.js` warns on builds under 700 words of prose or missing a section, and fails builds written to this spec (published after it, or marked `build_spec: 1` when an existing build is expanded) that miss either.
