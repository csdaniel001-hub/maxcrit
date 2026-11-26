# MaxCrit package format (agreed 2026-11-26)

One zip per batch:

```
batch-YYYY-MM-DD/
  manifest.yml
  <slug>/article.md
  <slug>/evidence.yml
```

## manifest.yml (one entry per article)

```yaml
- slug: free-fire-events
  action: new                # new | update
  target: hub/free-fire-events.md   # existing file, for updates
  duplicate_check: "No Free Fire events page; related: none"
  game_registration:         # only for a game not yet in games.yml
    slug: free-fire
    name: "Free Fire"
    publisher: "Garena"
    official: "https://ff.garena.com/"
    appstore_url: "https://apps.apple.com/us/app/.../id1300146617"
    googleplay_url: "https://play.google.com/store/apps/details?id=com.dts.freefireth"
  image:
    url: "https://..."       # official, 1000 px+ wide, correct game, no real people
    source_page: "https://..."
    credit: "Garena"         # rights holder, never the site it was found on
    alt: "Official Free Fire Storm Arena campaign artwork"
  sources_read_in_full: true # false = lead only, don't draft it
```

## article.md

Repo front matter exactly as CLAUDE.md section 3 lists it (slugs, not display names: `platforms: [ios, android]`, `titles: [free-fire]`, `genres: [shooter]`, `hub_type` for hub pages, `tldr` list, `sources` with one `primary: true`). Leave `published_at` out; Claude sets it. Run `lib/stylecheck.py` before delivery: 0 errors.

## evidence.yml

Every consequential claim (dates, times, numbers, prices, rewards, names, mechanics, recommendations' premises):

```yaml
- claim: "Last Chance is November 27; 12 teams for four Grand Finals spots"
  url: "https://ff.garena.com/en/article/1736/"
  quote: "Last Chance (27 November): 12 teams compete for the last four spots in the Grand Finals."
- claim: "Storm Arena runs to November 29"
  url: "https://ff.garena.com/en/article/1736/"
  quote: "campaign artwork: EVENT PERIOD 6–29 NOV"
```

Quotes are short (one sentence) and copied exactly. Recommendations are marked `type: interpretation` with the verified premise they rest on.

## What happens on review

Claude spot-checks the critical claims against the quotes and sources. Pass: published. Fail: returned with the failed claim; Claude doesn't rewrite. Tier 3 (builds, tier lists, pull guides) also gets an independent agent review.
