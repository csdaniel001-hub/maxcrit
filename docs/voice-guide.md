# MaxCrit voice guide (Daniel, 2026-11-25; profile from reference articles, rev. 2)

MaxCrit should read like a magazine with several writers. Accuracy rules stay exactly as they are. The voice comes from judgment, context and plain talk, never from invented play experience. There is no single template: each article picks a desk voice and a few moves from the repertoire, and the site-level check stops any move from becoming a habit.

## Where this comes from
Daniel shared reference pieces from Kotaku, Polygon, Eurogamer, Pocket Gamer, Massively OP and IGN (November 2026). They are used only to learn habits. Never copy their wording, structure or facts; they stay banned as sources.

What they do that our early articles did not:
1. Context first. The news is placed in a bigger picture in one sentence (the industry moment, the genre trend, why now) before the details.
2. Comparisons as shorthand. A new game is described through two known ones ("X meets Y", "X with a Y camera"), or a system through an everyday image. One comparison per piece, and it has to be accurate.
3. Opinion anchored to evidence. Judgments sit next to the fact that earns them: a review score, a player count, a drop rate. "Mixed reception" comes with the number.
4. Numbers made vivid. A raw figure gets a human scale: "triple what it was", "some players have opened 150,000 chests".
5. Rhythm with punctuation. Long explanatory sentences broken by very short ones. A one-word reaction is allowed once in a piece.
6. Small asides. A parenthetical joke or a raised eyebrow, at most one or two per article, never at the expense of a fact.
7. Quotes for colour or substance. A short direct quote when the exact wording matters or has personality; never a quote that only restates the paragraph.
8. Short news. A typical news story is 250 to 500 words, few or no subheads, no summary box, no tables unless there is a schedule. Guides use lists and steps.
9. Clear endings. The last line tells the reader what to do or when to look again.

What we do not borrow:
- First-person play experience ("in my experience", "it gave me a chuckle") unless a named person actually played. MaxCrit speaks as "we" about its own work and opinions.
- Filler openers ("Well,", "Of course,", "It seems that nowadays", "Without further ado") and clichés ("blew the doors off", "tip of the iceberg").
- Link dumps and promo endings ("check out our list of...").
- Speculation dressed as news. A question is fine when it is clearly a question about something announced ("Will the stream show a date?"), never a rumour in disguise.

## Desk voices (pick one per article)
- Briefing (news, industry, business): brisk, context-first, one clear angle, light dry wit. The news is in the first two sentences.
- Coach (guides, builds, events): talks the player through a decision, opinionated about priorities, practical. Lists and tables where they help.
- Launch watch (pre-registration, releases, new games): curious and upbeat but grounded; describes the game through a comparison and the evidence so far (store reception, beta feedback, platforms, date).
- Roundup (patch digests, weekly changes, codes): compact, scannable, the fastest route to what changed. Personality in one line at most.

## Opening repertoire (rotate; no move dominates)
The consequence for the player. The number. The bigger picture. A comparison. A question. The plain news, straight. A short scene from the announcement itself (what the trailer or key art shows). Pick the one that fits the story; when in doubt, plain news.

## Rules of thumb
- Talk to "you" where it helps; plain third person is fine for business and industry news.
- Attribute like a journalist (2026-11-26): where it establishes origin or credibility ("NCsoft said", "announced on its X account", "players on the Steam page report"), inside the sentence. Don't repeat it; routine official facts can stand plainly.
- Tables only for schedules, numbers and codes.
- One idea per paragraph. Cut any sentence that repeats the last.
- End on what to do, or when to check back.

## What stays banned
Hands-on claims without real play, invented numbers, redundant hedging and research commentary ("the accessible text doesn't say", "check the game"), em dashes, bold in running text, reader-steering frames, "X, not Y" as a habit, stock phrases, fake bylines or personas. (Qualifications that change a player's decision, eligibility or availability stay in.)

## Site-level variety
`stylecheck.py --site` (planned) flags when too many recent articles share an opening move, a pet phrase or the same skeleton.

## Structure rules (Daniel, 2026-11-25)
- News under 500 words: TL;DR and subheads optional. The first two sentences carry the key facts (what changed, for which game, when), because that is what search and AI answers lift. `check.js` and `stylecheck.py` apply this.
- Hub pages and longer news keep the TL;DR and 2+ subheads: readers scan them and search links straight to sections.
- Tables in news only for schedules, server times, numbers and codes.
- Basis: Google's guidance says AI Overviews and AI Mode need no special optimization and that chunking or AI-specific rewriting is not needed; they use the same index and ranking as Search.

## Review question
After "Is every claim sourced?" comes "Would a person who plays this game write it like this?" A no on either one sends the piece back.
