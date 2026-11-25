# MaxCrit Editorial Standard: Operational Amendments

The original MaxCrit Editorial Standard remains the governing editorial philosophy. The following amendments supersede its more resource-intensive operational requirements.

## 1. Risk-based editorial pipelines

Use three editorial production tiers:

**Tier 1: Standard news**

Research, source validation, writing, practical context, factual review and publication checks.

**Tier 2: Analytical journalism**

Research, historical context, original analysis, editorial writing, independent factual review where available, SEO and publication approval.

**Tier 3: Authority content**

Deep research, source triangulation, mechanical analysis, technical validation, editorial writing, independent adversarial fact-checking, managing editor approval and version-based maintenance.

The level of scrutiny must reflect the complexity, uncertainty and consequences of the published information.

The five editorial department roles remain valid as responsibilities, but five separate agent executions are not mandatory for every article.

## 2. Evidence-based publication gates

Replace numerical AI self-assessment scores with concrete pass/fail acceptance criteria.

Consequential factual claims must be traceable to reliable evidence. Numerical claims must be sourced or reproducible. Game versions, names, dates and terminology must be accurate.

Unsupported consequential claims, fabricated testing, plagiarism and misleading certainty automatically block publication.

Editorial judgment remains necessary to evaluate originality, usefulness and writing quality.

## 3. Numerical analysis

Encourage reproducible numerical analysis where reliable inputs and formulas are available.

Straightforward calculations involving rewards, currencies, resource requirements, upgrade costs and patch differences are encouraged.

Complex damage calculations, team DPS simulations and mechanical performance comparisons require validated formulas, documented assumptions and reproducible methodologies.

Do not present theoretical calculations as measured gameplay results.

Prohibit invented precision, not legitimate mathematical analysis.

## 4. Article length and completeness

There are no mandatory minimum word counts.

Article length must reflect the complexity of the topic, reader needs and available verified information.

Never introduce filler or unsupported content to reach a target length.

When important information cannot be verified, explicitly acknowledge the limitation, narrow the article's scope or establish an update trigger.

Accuracy must not be compromised for completeness, but omissions should not make an article misleading or incapable of satisfying its stated purpose.

## 5. Lean article packages

Avoid duplicating functionality already provided by MaxCrit's publishing infrastructure.

Each article requires:

- Publication-ready editorial content.
- Original findings or practical reader value.
- Relevant source references.
- Search intent and editorial metadata requirements.
- A concise verification record.
- Material uncertainties and important omitted information.
- Applicable maintenance dates or event-based review triggers.

Automatically generated metadata, structured data and internal links do not require manual duplication when the existing implementation is reliable.

Their accuracy and relevance must still be validated.

## 6. Verification records

Maintain an internal verification record appropriate to the article's complexity.

Record:

- Consequential claims and their supporting sources.
- Applicable game version.
- Calculations and assumptions where relevant.
- Important information deliberately omitted and the reason.
- Unresolved uncertainties.
- Last verification date.
- Future review date or event-based update trigger.

Do not require individual citations for every sentence when multiple statements derive from the same clearly identified source.

## 7. Content maintenance

Prioritize event-based update triggers alongside scheduled review dates.

Relevant triggers include new patches, balance adjustments, character releases, equipment changes, banner rotations, event expiration and changes in established theorycrafting findings.

Preserve existing article URLs where appropriate and update content only when substantive improvements or corrections are made.

## 8. Unchanged editorial principles

Accuracy remains the highest priority, followed by original information value and practical reader usefulness.

MaxCrit must never become an automated rewriting operation.

A shorter, useful and thoroughly verified article is preferable to a longer, generic or speculative one.

Operational efficiency is encouraged, but it must never become an excuse for weak research, unsupported recommendations or insufficient editorial value.

## 9. Verification statuses and inaccessible sources (Daniel, 2026-11-25)

Source access failures no longer reject an article automatically. Each consequential claim in a review gets one of these statuses:

| Status | Meaning | What happens |
|---|---|---|
| VERIFIED | The reviewer inspected the evidence and it confirms the claim. | Publishable. |
| ACCESS BLOCKED | The cited source can't be opened by the reviewer (403, bot wall, JavaScript-only page, login). | Not a rejection in itself. The claim needs an alternative verification method before it counts as VERIFIED. |
| UNSUPPORTED | The available evidence does not establish the claim. | Correct, narrow or remove. If the claim is critical, publication waits. |
| CONTRADICTED | Reliable evidence conflicts with the claim. | Correct or remove before publication. Always blocks if left in. |
| INTERPRETATION | Editorial analysis built on documented factual premises. | Allowed when the premises are VERIFIED and the text presents it as analysis. |

Alternative verification for ACCESS BLOCKED sources, in order of preference:
1. Authentic excerpts of the same official page: the publisher's own mirror (Steam announcement feed, store release notes, official social post), an archived copy, or the page fetched through a real browser or GitHub Action.
2. Screenshots or text excerpts supplied in the publication package, with URL and retrieval date.
3. Official documentation elsewhere (help centre, patch notes, press release, press-wire copy).
4. Independent reputable sources (specialist databases and guides allowed by section 1 of CLAUDE.md, never banned domains), preferably two that agree.

Rules:
- Request evidence per claim. Never reject a whole article only because a URL is blocked.
- A claim stays ACCESS BLOCKED until one of the methods above confirms it; the verification record names the method used.
- Critical claims (anything a reader acts on: dates, costs, rewards, mechanics, recommendations, safety/risk rules) must be VERIFIED, or a verified INTERPRETATION, before publication. UNSUPPORTED or CONTRADICTED critical claims are corrected or removed.
- Non-critical claims that remain ACCESS BLOCKED may stay only if an independent reputable source supports them; otherwise they are cut.
- Article verdicts: PASS (no unresolved critical claims), REVISION REQUIRED (fixable claims listed), BLOCKED (only when a critical claim is CONTRADICTED or the article's core cannot be verified by any method).
- Mira includes portable source evidence (excerpts, screenshots, archive links) in packages wherever available.
