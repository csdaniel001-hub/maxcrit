---
title: 'Arknights: Endfield AIC factory beginner guide and production priorities'
seo_title: Arknights Endfield AIC Factory Beginner Guide
summary: Build an efficient Endfield AIC factory with mining, blueprints, battery production, power budgeting and
  the new Wuling rebuilding system.
keyword: arknights endfield factory guide
published_at: '2026-11-25T15:33:00Z'
genres:
- rpg
platforms:
- ios
- android
- pc
titles:
- arknights-endfield
hub_type: guides
tier: 2
review_by: '2026-12-23'
tldr:
- Automate basic materials and mining before building large production lines.
- One LC Valley Battery Packaging Unit makes six batteries per minute under ideal conditions.
- Keep spare fuel and check your production bottlenecks before expanding.
- November 25 adds Exclusion Zone Rebuilding in Wuling.
sources:
- title: GRYPHLINE Meeting You in the World o’Shrooms patch notes
  url: https://endfield.gryphline.com/en-us/news/0740
  primary: true
- title: Mobalytics Base Building and Automation
  url: https://mobalytics.gg/arknights-endfield/bases
- title: Endfield Talos Wiki Packaging Unit recipe data
  url: https://endfield.wiki.gg/wiki/Module%3ARecipe/Packaging_Unit
- title: Endfield Talos Wiki Automated Industry Complex
  url: https://endfield.wiki.gg/wiki/AIC
- title: Endfield Talos Wiki facility data
  url: https://endfield.wiki.gg/wiki/Module%3AItem/Facilities
- title: Icy Veins AIC power guide
  url: https://www.icy-veins.com/arknights-endfield/news/arknights-endfield-how-to-increase-your-aic-factory-power/
- title: Mobalytics blueprint progression guide
  url: https://mobalytics.gg/arknights-endfield/bases/blueprints
- title: Endfield Handbook Factory Basics
  url: https://www.endfieldtools.dev/guides/factory-basics/
- title: Epic Games Store manufacturing guide
  url: https://store.epicgames.com/news/arknights-endfield-guide-master-manufacturing-build-top-team-tips?lang=fi
image: "/assets/img/arknights-endfield-aic-factory-beginner-guide.jpg"
image_url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/50/8b/6b/508b6b6f-0d75-81ce-505c-5f62ea73e3b8/4-EN.jpg/2600x2600bb.jpg"
image_source: "https://apps.apple.com/us/app/arknights-endfield/id6752642477"
image_credit: "GRYPHLINE"
image_alt: "Official App Store screenshot of Arknights: Endfield"
image_status: "candidate"
---

Your first AIC factory in Arknights: Endfield has one job, which is to make the materials you need to keep progressing so you stop gathering them by hand. As the story opens up, it turns into your supply of building materials, outpost supplies and power fuel.

Keep the first lines small and get them running in Valley IV. Wuling's more complex manufacturing can wait until the basics run on their own, and that includes including the Exclusion Zone Rebuilding mode added on November 25, 2026.

## Get the first production lines working

The Protocol Automation-Core (PAC) is the hub for your region's factory, depot and electrical network. Start with an output connected to a processing machine, then connect the machine's output to storage. Set the supply item first, or the machine will sit there doing nothing.

| First priority | Facility or technology | Purpose |
|---|---|---|
| Basic materials | Refining Unit | Process Originium Ore into Origocrust for construction |
| Automated mining | Electric Mining Rig | Feed the regional depot with mined materials |
| Plant production | Seed Picking Unit and Planting Unit | Maintain renewable plant supply |
| Finished products | Packaging Unit | Manufacture batteries and other useful consumables |
| Expanded logistics | Depot Bus | Use independent Depot Loaders and Unloaders |

Do the factory Simulations as they unlock. They teach each machine and hand you starter blueprints, which are the quickest way to dependable production. Once those run, change one section at a time as your needs grow.

The AIC Plan requires Basic AIC Index, including points collected from Protocol Dataloggers. Explore for these while connecting mining sites to your regional grid. Follow the main missions for initial technology unlocks, then work toward the production and power technologies needed for batteries.

## Automate LC Valley Batteries

Batteries make a strong early project, because sooner or later every factory runs short of electrical capacity. Thermal Banks consume fuel to generate additional power for the regional grid. Make sure each bank has the required electrical connection and a reliable supply route.

The LC Valley Battery recipe requires 10 Originium Powder and 5 Amethyst Part in a Packaging Unit. One completed recipe takes 10 seconds.

| Resource or output | Per battery | Per minute at full utilization |
|---|---:|---:|
| Originium Powder | 10 | 60 |
| Amethyst Part | 5 | 30 |
| LC Valley Battery | 1 | 6 |

Each Thermal Bank using this battery consumes one every 40 seconds and provides 220 power while fueled. With ideal continuous production, the six batteries produced each minute support the following budgets:

| Active Thermal Banks | Battery demand/min | Battery surplus/min | Gross additional power |
|---:|---:|---:|---:|
| 1 | 1.5 | 4.5 | 220 |
| 2 | 3 | 3 | 440 |
| 3 | 4.5 | 1.5 | 660 |
| 4 | 6 | 0 | 880 |

These are calculated steady-state figures from documented machine recipes and fuel duration. They assume uninterrupted ingredients, transport and fuel delivery. Gross power excludes the electricity consumed by manufacturing facilities. Four banks leave no fuel reserve, so begin with one or two and keep surplus batteries in storage. Check the current in-game recipe and fuel preview when you expand.

## How to diagnose a stalled factory

A stalled line can have several causes, so don't start by building more. Find the first machine where material stops moving and trace the flow both ways from there.

| Symptom | What to inspect | Fix to try |
|---|---|---|
| Input queue empty | Upstream production and ore supply | Increase the missing ingredient's production or mining |
| Output queue full | Downstream machines, belts and storage | Clear blocked storage or increase downstream processing |
| Machine idle despite inputs | Recipe quantities and item types | Check whether the machine has every required ingredient |
| Several facilities lose power | Regional power balance and Thermal Bank fuel | Restore the fuel supply or reduce electrical demand |
| Battery line intermittently stops | Powder and part supply rates | Compare output per minute against the recipe budget |

A second Packaging Unit won't raise battery output while the first one is waiting for Amethyst Part. Fix the missing upstream material first. The same principle applies to capsule lines and later Wuling recipes.

## Using blueprints without breaking production

Blueprints save facility layouts, which makes them useful when expanding or relocating a proven line. Before importing one from another player, check that you have its facilities, sufficient space and the right regional code. Once placed, inspect all inputs and confirm the required materials reach the first machines.

Be wary of big imported battery layouts: one may promise far more output than your mining network can supply today. Begin with a single section, measure whether it stays supplied, and duplicate it when your resource budget permits. Keep the original working line running while you build the replacement.

## What changed in the November 25 update?

The Meeting You in the World o'Shrooms update expands manufacturing in Wuling. Complete Rebuilding a Home II to unlock Exclusion Zone Rebuilding, where delivering manufactured supplies at the Rebuilding Supply Port advances the project. The update also opens Sub-PAC deployment at Old Dam, expands Wuling's regional development cap and adds new array-related AIC technologies and system blueprints.

Array Building: Mend the Old Gash runs for the whole version and pays up to 1,000 Oroberyl. Its construction-task rewards end with the event, but the rebuilding mode itself is permanent.

Still in Valley IV? Keep building out mining, logistics and power, because a stable factory with a fuel reserve and predictable material income is what gives you room to experiment once Wuling brings new production requirements.

For the full update details, see our [World o'Shrooms patch notes](/news/arknights-endfield-world-o-shrooms-patch-notes.html).
