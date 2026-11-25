# MaxCrit Editorial Review

Article: genshin-impact-wish-pity-guarantee-guide
Game version: 7.2 (Phase II)
Package revision: pilot-01
Review date: 2026-11-25
Reviewer: Claude (independent retrieval: official Chronicled Wish Rules & FAQ, official "Capturing Radiance" Q&A via HoYoverse content API, 7.2 Phase II notice via HoYoLAB API)

## Review status
REVISION REQUIRED (0 Major, 3 Minor, 2 Suggestions). Close to PASS.

## Verified (pass)
- 90 / 80 / 90 maximums; Epitomized Path now needs 1 Fate Point (official Capturing Radiance Q&A, iInfoId 125274).
- Chronicled: 90 max, 1 Fate Point, pity carries over, Fate Points reset at end or on change (official Rules & FAQ, iInfoId 122695).
- Chronicled shares pity with Lightrace Wish only (7.2 Phase II notice).
- All arithmetic recomputed: 20 / 110 / 50 / 130 / 50 / 140 wishes; ×160 = 3,200 / 17,600 / 8,000 / 20,800 / 8,000 / 22,400; 8,450 = 52 × 160 + 130; 70 wishes; 40 short; 6,400 − 130 = 6,270.
- Internal links resolve (/hub/events/genshin-impact-events.html, /hub/banners/genshin-impact-banners.html).

## Findings

### Primary source. Severity: MINOR
The Help Center article returns 403 to automated retrieval, so I could not confirm it. The official Capturing Radiance Q&A (genshin.hoyoverse.com/en/news/detail/125274) and Chronicled Rules & FAQ are both readable and cover the consequential rules.
Proposed resolution: make 125274 the primary source and keep the Help Center as secondary.

### C04 "A featured-weapon guarantee does not necessarily guarantee the specific weapon you selected." Severity: MINOR
Under the current one-Fate-Point Epitomized Path, any 5-star that isn't your selected weapon gives the Fate Point, so the next 5-star is the selected weapon. The sentence describes the pre-5.0 two-step logic and will confuse readers.
Proposed resolution: delete it, or rewrite as "without a selected path, a featured-weapon guarantee can still give the other featured weapon."
Impact: none on the numbers.

### Lightrace Wish sentence. Severity: MINOR (house style)
"consult the current Lightrace Wish details before using that separate path mechanic" is a "check the game for what we left out" sentence, which MaxCrit's rules ban. Either cover Lightrace (only if it's decision-relevant this phase) or keep just the confirmed fact that it shares pity with Chronicled Wish.

### Suggestions
- The official Q&A gives Capturing Radiance's consolidated rate: 55.000% that a 5-star from the character event wish is the featured character. That is a citable, useful number for the "what are my odds" question the article currently avoids.
- review_by '2026-12-15' fits the Phase II examples but the guide is evergreen; consider an event trigger instead ("any change to wish rules or a new wish type") plus the next version start.

## Overlap
Distinct intent from the live Phase II pull guide (evergreen "how pity and guarantees work" versus "who to pull this phase"). No merge needed.

## Checker compatibility
Passes `lib/check.js` apart from the image.

## Publication decision
Minor fixes, then publish.
