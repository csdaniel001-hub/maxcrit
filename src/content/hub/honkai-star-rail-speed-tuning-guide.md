---
title: 'Honkai: Star Rail Speed tuning guide: Action Value, breakpoints and Elation'
seo_title: 'Honkai Star Rail Speed Tuning and SPD Breakpoints'
summary: 'Calculate Action Value, choose 134 or 161 SPD, tune Sunday and Himeko • Nova, and see why Elation characters gain from even higher Speed.'
keyword: honkai star rail speed tuning guide
published_at: '2026-11-25T18:22:00Z'
genres:
- rpg
platforms:
- ios
- android
- pc
titles:
- honkai-star-rail
topics:
- gacha
hub_type: guides
tier: 2
review_by: '2026-12-23'
tldr:
- A natural turn takes 10,000 divided by SPD in Action Value.
- Aim for 134 SPD for two natural turns inside an uninterrupted 150 AV opening cycle.
- A 135 SPD carry and 134 SPD Sunday can produce four carry turns in the same simplified opening window.
- Yao Guang and Silver Wolf LV.999 convert Speed into Elation through their Traces.
sources:
- title: HoYoLAB Version 2.7 update details (Sunday)
  url: https://www.hoyolab.com/article/35356638
  primary: true
- title: KQM Speed and Turn Order
  url: https://hsr.keqingmains.com/misc/speed-guide/
- title: KQM Turn Order Mechanics
  url: https://srl.keqingmains.com/combat-mechanics/turn-order/turn-order-mechanics
- title: Icy Veins Anomaly Arbitration (MoC cycle rule)
  url: https://www.icy-veins.com/honkai-star-rail/anomaly-arbitration
- title: HSR Quartz turn-based combat guide (MoC cycle and wave reset)
  url: https://hsrquartz.pages.dev/02.-Essential-Guides/Turn-based-Combat
- title: Icy Veins Sunday build guide (SPD tuning, hyperspeed)
  url: https://www.icy-veins.com/honkai-star-rail/sunday-guide-best-builds
- title: Icy Veins Himeko • Nova build guide
  url: https://www.icy-veins.com/honkai-star-rail/himeko-nova-guide-best-builds
- title: Prydwen Sunday build
  url: https://www.prydwen.gg/star-rail/characters/sunday
- title: Prydwen Yao Guang build and Traces
  url: https://www.prydwen.gg/star-rail/characters/yao-guang
- title: Prydwen Silver Wolf LV.999 build and Traces
  url: https://www.prydwen.gg/star-rail/characters/silver-wolf-lv-999
- title: HoYoLAB Version 4.7 update details
  url: https://www.hoyolab.com/article/47394097?reply=1
image: "/assets/img/honkai-star-rail-speed-tuning-guide.jpg"
image_url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/4d/f7/ea/4df7ea7d-ba87-349e-f793-a3e52abe28a9/EN-2732_U00d72048-4-_U706b_U82b1.jpg/2600x2600bb.jpg"
image_source: "https://apps.apple.com/us/app/honkai-star-rail/id1599719154"
image_credit: "HoYoverse"
image_alt: "Official App Store screenshot of Honkai: Star Rail"
image_status: "candidate"
---

Speed tuning in Honkai: Star Rail can give your DPS an extra turn without changing their damage per hit. It can also ruin a rotation if your action-advance support starts moving ahead of the character they are meant to advance. Before farming another pair of SPD boots, work out which of those outcomes your team actually needs.

The familiar 134 and 160 SPD targets are useful starting points. They come from the amount of Action Value available during a timed encounter. Elation characters add another reason to build Speed: some of their Traces convert it into a damage-related stat even between traditional turn breakpoints.

## How Speed and Action Value work

Every normal turn begins with an action gauge of 10,000 units. Speed determines how quickly a character travels through that gauge. The time remaining until a character acts is expressed as Action Value (AV).

`Base AV = 10,000 / SPD`

At 100 SPD, a character naturally acts once every 100 AV. At 125 SPD, they act every 80 AV. At 160 SPD, that interval drops to 62.5 AV. A unit with a shorter interval gets more opportunities to use Skills, generate Energy or replenish Skill Points (SP).

Turn on the action value display under Other Settings in the Settings menu. The numbers next to the portraits in the action order show remaining AV, rounded up. Watch those numbers when a support uses an Ultimate or an enemy applies a delay. They tell you whether the next action still fits inside the window you planned for.

SPD and AV describe different things. SPD is a stat; AV is the remaining distance in combat time. An effect that changes one can influence the other without adding an entire turn.

## Speed breakpoints for Memory of Chaos

In Memory of Chaos, the first cycle lasts 150 AV and every later cycle lasts 100 AV. Icy Veins adds that clearing a wave inside that first cycle starts the next wave back at 150 AV. The table below models one uninterrupted wave with no SPD changes, action advance, delays or extra turns.

| SPD | Natural turn interval | Turns before 150 AV | Turns before 250 AV | Turns before 350 AV |
|---:|---:|---:|---:|---:|
| 100 | 100.00 | 1 | 2 | 3 |
| 120 | 83.33 | 1 | 2 | 4 |
| 134 | 74.63 | 2 | 3 | 4 |
| 143 | 69.93 | 2 | 3 | 5 |
| 160 | 62.50 | 2 | 3 | 5 |
| 161 | 62.11 | 2 | 4 | 5 |
| 172 | 58.14 | 2 | 4 | 6 |
| 200 | 50.00 | 2 | 4 | 6 |
| 201 | 49.75 | 3 | 5 | 7 |

The table deliberately counts actions strictly before a cycle boundary. At exactly 160 SPD, the fourth action lands at 250 AV; at exactly 200 SPD, the third action lands at 150 AV. These are mathematical ties. The conservative targets in the table give breathing room instead of relying on a boundary tie or rounded display value. Guides that list 160 or 200 SPD mean these exact ties. Build 161 or 201 to stay clear of the boundary.

To calculate a target yourself, divide 10,000 times your desired number of actions by the available AV budget. For two natural actions within the opening 150 AV, the threshold is 20,000 / 150 = 133.333… SPD. For five actions within 350 AV, it is 50,000 / 350 = 142.857… SPD.

The best breakpoint depends on when your team finishes the fight. If a wave ends at 180 AV, an upgrade that only adds a natural action at 240 AV brings no extra turn to that wave. Speed still affects action order and other kit effects, but you should judge the relic on its actual purpose.

## Why Action Advance can beat extra SPD

Action Advance removes a portion of the full 10,000-unit gauge. With constant SPD, a 25% advance removes 2,500 gauge units. If the target has fewer than 2,500 remaining, the remainder is simply brought to zero.

Consider a character at 125 SPD with 50 AV left before their next turn. Their remaining gauge is 6,250. A 25% advance reduces that to 3,750, leaving 30 AV. The effect saves 20 AV. If the same character had only 10 AV remaining, it would bring them to zero, saving 10 AV instead.

A SPD buff works differently. If a character at 100 SPD has 60 AV left, their remaining gauge is 6,000. Raising their SPD to 150 reduces the remaining time to 40 AV. When the buff expires, the remaining gauge is divided by their new SPD again. This is why a temporary SPD buff's expiration can disrupt a carefully planned rotation.

Effects that make a target act immediately follow their own Skill text. Read that text before treating one as a 100% advance in your timeline.

With constant SPD, a 25% advance saves 2,500 / SPD in AV, which is 20 AV at 125 SPD, as long as the target has at least that much left. Use it soon after the target's turn. A SPD buff saves time in proportion to the AV still remaining, and keeps doing so for its whole duration, so it is worth more across a multi-turn window and less on a unit that is about to act.

## The 135 and 134 SPD Sunday setup

Sunday's Skill makes an eligible ally and their summon act immediately. HoYoverse introduced this behavior in Version 2.7, and Prydwen's current Sunday guide (see our [Sunday build](/hub/builds/honkai-star-rail-sunday-build.html)) identifies Himeko • Nova as a carry that can use the 135/134 setup.

Give the carry 135 SPD and Sunday 134 SPD. In this simplified example, both enter combat with a full gauge and have no opening advances or delays. Sunday uses Skill on the carry every turn, and sufficient SP is available.

| Elapsed AV | Action |
|---:|---|
| 74.07 | Himeko • Nova takes her natural turn. |
| 74.63 | Sunday uses Skill on Himeko • Nova. |
| 74.63 | Himeko • Nova takes the granted turn. |
| 148.70 | Himeko • Nova takes another natural turn. |
| 149.25 | Sunday uses Skill again. |
| 149.25 | Himeko • Nova takes her fourth turn. |

The carry gets a fourth turn before 150 AV. The carry acts naturally just before Sunday and then receives another turn almost immediately. The carry's gauge resets after the granted turn, so the pattern repeats.

This example isolates turn timing; a complete Himeko • Nova damage rotation requires additional kit and team details. The other two teammates, summon or kit-specific actions, enemy mechanics, Energy, SP and relic effects can all change actual execution. Arrange your other support's buffing turn before the damage window and reserve enough SP for the carry's two closely spaced actions. Use Sunday's Ultimate on the intended damage dealer when appropriate for their resource and buff requirements.

Avoid replacing Sunday's relics one piece at a time without checking the carry. If Sunday moves ahead of the carry, he may pull forward a turn that was already about to happen. Even a small SPD change can cost the extra natural action. A slightly wider SPD gap can be easier to maintain, but check the complete timeline before settling on it.

## When a hyperspeed Sunday setup makes sense

A different approach is to build Sunday to at least 161 SPD and leave a slower carry on offensive boots. Sunday effectively becomes the carry's turn scheduler whenever his Skill is available.

In a simplified 161 SPD Sunday and 100 SPD carry opening, Sunday acts at approximately 62.11 AV and immediately grants the carry a turn. His next Skill arrives at 124.22 AV, granting another carry turn. With no other changes, his third and fourth turns fall at approximately 186.34 and 248.45 AV. The carry therefore gets two granted turns before 150 AV and four before 250 AV, assuming Sunday can maintain the loop. Its slower natural turns never catch up between his Skills.

Compare that with the four carry actions in the opening 135/134 example. The hyperspeed build sacrifices early turn count in exchange for more offensive relic freedom on the carry and a simpler timing relationship. Across a longer fight the comparison depends on Skill Points, buff durations, Energy, enemy delays and how much damage each carry action actually deals.

Prydwen lists both approaches for Himeko • Nova. Prydwen describes hyperspeed as a niche build that often trails the -1 SPD setup, and Icy Veins also calls it the more niche option. Treat them as two separate builds with separate relic requirements. If your carry's offensive boots are excellent but its SPD boots are poor, hyperspeed may be the cheaper route to a functional team. If the carry already has strong SPD boots and the support can keep up, the slower-than-carry setup gives more carry turns in the opening.

## Elation characters have different SPD incentives

In Version 4.x, Speed can improve more than a unit's natural action frequency. Two Elation characters have explicit SPD conversions in their major Traces. Elation teams also influence the cadence of Aha Instants through their Elation members, so inspect the team's action order alongside personal stat thresholds.

| Effective SPD | Yao Guang Elation from A2 | Silver Wolf LV.999 Elation from A2 |
|---:|---:|---:|
| 119 | 0% | 0% |
| 120 | 30% | 0% |
| 159 | 69% | 0% |
| 160 | 70% | 50% |
| 180 | 90% | 90% |
| 200 | 110% | 130% |
| 260 | 170% | 250% |
| 320 | 230% | 250% |

Yao Guang's Amaze-In Grace ([Yao Guang build](/hub/builds/honkai-star-rail-yao-guang-build.html)) starts at 30% Elation at 120 SPD and adds one percentage point for each additional SPD, up to 200 excess SPD. Silver Wolf LV.999's False Ending Speedrun ([Silver Wolf LV.999 build](/hub/builds/honkai-star-rail-silver-wolf-lv999-build.html)) starts at 50% Elation at 160 SPD and adds two percentage points per additional SPD, up to 100 excess SPD. These are Trace contributions only. They exclude base Elation, other buffs and any damage multipliers. The very high numbers are mathematical caps, not recommended relic targets.

For Silver Wolf LV.999, moving from 160 to 180 SPD grants 40 percentage points of Elation from this Trace alone. It can therefore have value even when both builds take the same number of natural turns in your current cycle. Reaching 200 SPD is an aspirational equipment target, especially with her signature Light Cone, and should not become a requirement for playing her at lower investment.

Yao Guang also gains from raising her SPD beyond the 120 activation threshold. When comparing two relic pieces, consider the Elation gain and the next action timing together with lost CRIT or survivability. Aha Instants also occur through specific character abilities; the ordinary natural-turn table cannot predict the total number of Elation Skills a team will execute. The playable Aeon ★ Aha, added in Version 4.7, introduces another layer of team interaction. A complete Aha timeline needs its own kit-specific model.

## How to troubleshoot a broken rotation

Start by writing down the first four intended actions for your team. Include the skill you want each support to use and the target of that skill. Then compare the intended order with the live action bar.

If the carry moves before your debuffer, the debuffer needs an earlier opening action or the carry needs to wait for the relevant Ultimate. If Sunday moves before your carry in a slower-than-carry build, inspect both SPD values and any opening or temporary advance. If your damage dealer misses the second turn because you ran out of SP, adjust the other teammates' Basic ATK and Skill usage before investing in faster relics.

Compare two gear setups on the same encounter with the same teammates, Light Cones and combat plan. Record action count, SP availability and whether important buffs cover each damage window. Repeat when enemy control effects or random outcomes change the rotation. A single fast clear can hide a build that requires frequent resets.

Speed tuning is complete when the team consistently executes the intended sequence and reaches the combat windows that matter. A higher number on the character screen only helps if it improves the actual fight.

For current events and banner timing, see our [Honkai: Star Rail events guide](/hub/events/honkai-star-rail-events.html) and [banner schedule](/hub/banners/honkai-star-rail-banners.html).
