# December 2026 maintenance plan: codes, events, banners

Scope: 25 codes pages, 15 event pages, 5 banner pages (all last updated Nov 24–25). Rule: the month in a title changes only when the page's content has been re-checked and updated. URLs stay the same.

## Passes

| Date (UTC) | Pages | Trigger | Work |
|---|---|---|---|
| Nov 30 – Dec 1 | All 25 codes pages | Month change | Re-check every listed code against the page's trackers and official posts. Remove expired or disputed codes, add new ones with the date first reported, update the "Checked" date, and change the title month only after this. A game with no reported active code loses its page from the menus (codes rule). |
| Dec 1 | All 15 event pages | November events end (Black Desert Nov 30, PUBG and others) | Remove ended events. Add December schedules from the official notices, normalise dates to UTC where the source gives a timezone, and rewrite "check the server clock" padding into the actual time basis or drop it. |
| Dec 1–2 | ZZZ banner rows, HSR banner page | ZZZ 3.3 Phase II ends Dec 1; HSR Indelible Coterie / Coalesced Truths end Dec 2 11:59 | Replace with the next official channel or warp notice. Update the Aha build and HSR warp guide `review_by` (Dec 2). |
| Dec 3 | WuWa banner page | 3.8 Phase I ends Dec 3 09:59 server time | Phase II notice. Starpath Reverbs II stays out until Kuro's official notice exists. |
| Dec 15 | Genshin banner page, 7 Genshin builds, Genshin guides | 7.2 Phase II and the Chronicled Wish end Dec 15 14:59 server time | New 7.3 notices. Remove the build banner badges (they also expire automatically in the browser), and do the builds' `review_by` re-check. |
| Dec 22 | HSR banner page | A Comedy of Stars ends Dec 22 15:00 server time | Next phase notice. Remove the Aha build's banner fields. |

## Checks per page
- Every changed fact traces to a source listed on the page (official notice for events and banners; trackers allowed for codes).
- `updated_at` is set only for substantive changes.
- `check.js` warns on due `review_by` dates. Run it before each pass.
- No "the source doesn't say" or "check in-game" filler.
