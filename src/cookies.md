---
layout: legal.njk
permalink: /cookies.html
title: Cookie policy
seo_title: "Cookie policy"
summary: "MaxCrit sets no tracking or advertising cookies. What could be stored in your browser, why, and how to change your choice at any time."
---
Cookies and similar technologies such as local storage are small pieces of data a website stores in your browser. EU law says sites may only store what is strictly necessary unless you agree first.

## What MaxCrit stores

| Name | Set by | Purpose | Kept for | Type |
|---|---|---|---|---|
| mc-consent | MaxCrit (local storage) | Remembers your cookie choice | 12 months | Strictly necessary |
| _ga | Google Analytics | Tells visits apart so pages and sessions can be counted | 2 years | Analytics, only with consent |
| _ga_&lt;ID&gt; | Google Analytics | Keeps the state of the current session | 2 years | Analytics, only with consent |

We also count visits with Cloudflare Web Analytics, which stores nothing in your browser and needs no consent. We use no advertising, social media buttons or embedded videos, and fonts are hosted on our own domain.

{% if site.consent.analytics or site.consent.ads %}## Optional services

These only run after you say yes in the cookie settings. If you say no, nothing is loaded from them:

{% if site.consent.analytics %}- **Analytics: {{ site.consent.analytics.name }}.** Used to {{ site.consent.analytics.purpose }}. [Privacy policy]({{ site.consent.analytics.privacy }}).
{% endif %}{% if site.consent.ads %}- **Advertising: {{ site.consent.ads.name }}.** Used to {{ site.consent.ads.purpose }}. [Privacy policy]({{ site.consent.ads.privacy }}).
{% endif %}
{% endif %}## Changing your choice

Use the **Cookie settings** link in the footer of any page to see or change your choice. Rejecting is as easy as accepting. If you withdraw consent, the Google Analytics cookies are deleted. You can also clear stored data in your browser settings; the site will then ask again.

## If this changes

If we add advertising or other services, they will be listed here, and the site will ask for your consent before they run. The site works the same whether you accept or not.

Last updated: {{ site.legal.updated | longDate }}
