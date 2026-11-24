---
layout: legal.njk
permalink: /cookies.html
title: Cookie policy
seo_title: "Cookie policy"
summary: "MaxCrit sets no tracking or advertising cookies. What could be stored in your browser, why, and how to change your choice at any time."
---
Cookies and similar technologies such as local storage are small pieces of data a website stores in your browser. EU law says sites may only store what is strictly necessary unless you agree first.

## What MaxCrit stores today

Nothing for tracking or advertising. We do not use analytics, ad networks, social media buttons or embedded videos, and fonts are hosted on our own domain.

| Name | Where | Purpose | Kept for | Type |
|---|---|---|---|---|
| mc-consent | Local storage | Remembers your cookie choice, once the site has something to ask about | 12 months | Strictly necessary |

{% if site.consent.analytics or site.consent.ads %}## Optional services

These only run after you say yes in the cookie settings:

{% if site.consent.analytics %}- **Analytics: {{ site.consent.analytics.name }}.** Used to {{ site.consent.analytics.purpose }}. [Privacy policy]({{ site.consent.analytics.privacy }}).
{% endif %}{% if site.consent.ads %}- **Advertising: {{ site.consent.ads.name }}.** Used to {{ site.consent.ads.purpose }}. [Privacy policy]({{ site.consent.ads.privacy }}).
{% endif %}
{% endif %}## Changing your choice

Use the **Cookie settings** link in the footer of any page to see or change your choice. You can also clear stored data in your browser settings; the site will then ask again.

## If this changes

If we add analytics or advertising, they will be listed here, and the site will ask for your consent before they run. Refusing is as easy as accepting, and the site works the same either way.

Last updated: {{ site.legal.updated | longDate }}
