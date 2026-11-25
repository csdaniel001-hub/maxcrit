# Failed-claims report: albion-online-mobile-beginner-gear-fame-zones-guide (r2)

**Verdict: PASS** (once the MINOR fixes below are applied; none of them changes a conclusion)

Reviewer: fresh adversarial fact-check agent, 2026-11-25. Tier 2 scope. Counts: 0 BLOCKER, 0 MAJOR, 6 MINOR.

Verification method: albiononline.com serves a Cloudflare challenge (HTTP 403) to this environment. I verified the text through Sandbox Interactive's own Steam announcement feed: `api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=761890&feeds=steam_community_announcements`, full text, read 2026-11-25. Every `steamstore-a.akamaihd.net/news/externalpost/...` URL in the front matter returns 302, then 200, on the matching steamcommunity.com announcement. I checked the page titles for four of them.

## r1 findings

| r1 # | Status |
|---|---|
| 1 Source URLs | Resolved, apart from one listing URL (see MINOR 1) |
| 2 Fame routes | Resolved (Expeditions, Solo Dungeons, Arena) |
| 3 Ancient Lands risk | Resolved; wording tightened in MINOR 3 |
| 4 Learning Points | Resolved by removing the claims |
| 5 Date the builds | Resolved ("2023 Basic Builds series") |
| 6 Patch 3 settings | Resolved |
| 7 Double Tap to Self-Cast | Resolved |
| 8 Bank or respawn city | Resolved |
| 9 Flagging nuance | Partly resolved: the subzone rule is added, and the table is accurate as written |
| 10 "X, not Y" | Resolved, but one new frame appears (MINOR 5) |
| 11 Image, 12 published_at | Still pending at implementation, per the record |

## Verified

| Claim | Status | Evidence |
|---|---|---|
| Battleaxe build: Adept's Battleaxe, Shield, Scholar Cowl, Mercenary Jacket, Mercenary Shoes; Blood Bandit deals damage and heals | VERIFIED | Basic Builds: Battleaxe (2023-03-27), externalpost 5143713753742799088 |
| Spear build: Adept's Spear, Torch, Mage Cowl, Mercenary Jacket, Soldier Boots; mobility and consistent damage | VERIFIED | Basic Builds: Spear (2023-05-19), externalpost 5140340943309097657 |
| Series dated 2023; "Adept" means Tier 4 | VERIFIED | Same posts: Adept items, and the dates in the feed |
| Expeditions via the Expedition Master, with a bonus for the first one each day; Tier 3 Solo Dungeons; Arena with no item loss | VERIFIED | Your First Steps (2024-04-24), externalpost 5759616966660900356. No later change to these turned up in the feed through Nov 2026. Radiant Wilds (2026-04-13) confirms that Solo, Group and Hardcore Expeditions exist. |
| "Arena is useful for learning PvP in a lower-risk setting" | INTERPRETATION on a verified premise | First Steps: "Arena battles, where you don't have to worry about losing your items" |
| Combat Fame advances equipment progression | VERIFIED | First Steps: Fame "will let you unlock more gear and abilities" |
| Armory gives build suggestions from gameplay data | VERIFIED | New Guide: The Armory (2026-06-03), externalpost 1834602721184557 |
| Armory "added in Radiant Wilds" | VERIFIED, but the source isn't listed (MINOR 2) | Changelog: Radiant Wilds Update, externalpost 1829528821315042 ("New Armory system") |
| Zone table (blue no kill or loot; yellow knockdown with durability loss; red PvP death drops all items; black always PvP, same death rules) | VERIFIED | Zone Types and Flagging (2023-07-21), externalpost 5124584051973131782, plus First Steps |
| Unrestricted PvP subzones follow the zone's death rules | VERIFIED | Zone guide: "knockdown in yellow zones, death in red zones" |
| Yellow-zone portals lead to partial-loot orange-zone Ancient Lands; black-zone portals lead to full-loot Ancient Lands | VERIFIED | Changelog: Dragonfire Update (2026-08-31), externalpost 1842212951309746 |
| "preserves equipped gear" | INTERPRETATION of "only inventory is dropped on death"; reword per MINOR 3 | Same changelog |
| Patch 3: more frequent yellow-zone Small Portals, Fame and loot cut by 30% | VERIFIED | Changelog: Dragonfire Patch 3 (2026-10-12), externalpost 1846018067940491 |
| Targeting modes (All, Enemies, Party, Allies, Automatic) under Settings > Controls > Auto-Targeting, off by default, switched from the HUD; Double Tap to Self-Cast on by default under Controls > General | VERIFIED | Same Patch 3 changelog |
| Same account works on desktop and mobile | VERIFIED | Mobile Version is Out Now (2021-06-09), externalpost 4093189984234917007 |
| Respawn at Home or last visited city | VERIFIED | Zone guide |
| Three-set budget; 60,000 × 3 = 180,000 | INTERPRETATION plus a calculation on an assumed figure, labeled as such | Arithmetic correct |
| Progression sequence and practice routine | INTERPRETATION | Labeled "Our recommendation" or advice; no gameplay claim |
| Internal links | VERIFIED | /home/claude/maxcrit/src/content/hub/albion-online-events.md, /home/claude/maxcrit/src/content/news/albion-online-dragonfire-patch-4-firewing-drake-eggs-ancient-lands.md |
| Style | VERIFIED | 0 em dashes, 0 en dashes, no bold, none of the check.js stock phrases, no "check the game" or "source doesn't say" filler. seo_title 49, summary 148, 4 H2s, 4-point tldr. |

## Failed claims

| # | Severity | Claim / gap | Evidence | Downstream impact | Fix |
|---|---|---|---|---|---|
| 1 | MINOR | The Dragonfire source URL is a Steam news listing page (`store.steampowered.com/news/posts/?enddate=1788171101...`), not the changelog itself | The changelog is externalpost 1842212951309746, which resolves to steamcommunity.com/games/761890/announcements/detail/708904817558291126 (title "Changelog: Dragonfire Update") | The source isn't a stable link to the claim | Replace that source entry with: `- title: 'Sandbox Interactive: Changelog Dragonfire Update (Steam publisher copy)'` / `  url: https://steamcommunity.com/games/761890/announcements/detail/708904817558291126` |
| 2 | MINOR | "The Armory, added in Radiant Wilds" has no listed source; the Armory guide post doesn't mention Radiant Wilds | Changelog: Radiant Wilds Update, steamcommunity.com/games/761890/announcements/detail/510733750483551181 | Untraceable detail | Add the source: `- title: 'Sandbox Interactive: Changelog Radiant Wilds Update (Steam publisher copy)'` / `  url: https://steamcommunity.com/games/761890/announcements/detail/510733750483551181` |
| 3 | MINOR | "where death drops inventory but preserves equipped gear under the partial-loot rules" goes past the official wording | Dragonfire changelog: "partial-loot, orange-zone Ancient Lands where only inventory is dropped on death" | A risk rule is stated more strongly than the source | Replace with: "The Dragonfire update introduced portals from Yellow Zones to partial-loot, orange-zone Ancient Lands, where only inventory is dropped on death." |
| 4 | MINOR | Red-zone Small Portals aren't mentioned, although Patch 3 lists them | Patch 3: "Small Portals in Red and Black Zones remain unchanged and will remain opportunity targets offering access to the same high Fame and loot" | Incomplete portal picture | After "Black-zone portals lead to full-loot Ancient Lands." insert: "Small Portals in Red and Black Zones kept their higher Fame and loot in Patch 3." |
| 5 | MINOR | Reader-steering frame: "A Yellow Zone is not a guarantee of safety beyond the portal." | House style (AI tells) | Style | Replace with: "Portals in Yellow Zones carry their own risk." |
| 6 | MINOR | "your equipment is too expensive for a first expedition into lethal territory" can be confused with the game's Expeditions activity, which the guide names later | First Steps uses "Expedition" for the activity | Term clash | Replace "a first expedition into lethal territory" with "a first trip into lethal territory". |

Still pending at implementation (doesn't affect the verdict): official image fields with credit, `published_at` at publication, check.js, and the originality check (Tier 2).
