---
layout: legal.njk
permalink: /contact.html
title: Contact
seo_title: "Contact MaxCrit"
summary: "How to reach MaxCrit for corrections, tips, rights holder requests and privacy questions, plus who runs the site."
---
## Contact

Email [{{ site.email }}](mailto:{{ site.email }}) for anything:

- **Corrections:** link the article and tell us what is wrong. We fix confirmed mistakes and note the change on the page.
- **News and tips from developers and publishers:** send the official announcement or press kit.
- **Rights holders:** tell us which image or text, and what you would like us to do.
- **Privacy and data requests:** see the [Privacy policy](privacy.html) for your rights.

{% if site.legal.commercial %}## Legal notice

Information required by Hungarian law on information society services (Act CVIII of 2001, section 4):

| | |
|---|---|
| Service provider and editor | {{ site.legal.operator }} |
| Address | {{ site.legal.address }} |
| Email | [{{ site.email }}](mailto:{{ site.email }}) |
{% if site.legal.registry %}| Registration number | {{ site.legal.registry }} |
{% endif %}{% if site.legal.tax %}| Tax number | {{ site.legal.tax }} |
{% endif %}| Hosting provider | {{ site.legal.host.name }}, {{ site.legal.host.address }}, {{ site.legal.host.email }} |
{% else %}## Who runs MaxCrit

MaxCrit is a non-commercial, independent site run by {{ site.legal.operator }}, who also edits it. It carries no advertising, affiliate links or paid content.

| | |
|---|---|
| Operator and editor | {{ site.legal.operator }} |
| Email | [{{ site.email }}](mailto:{{ site.email }}) |
| Hosting provider | {{ site.legal.host.name }}, {{ site.legal.host.address }}, {{ site.legal.host.email }} |
{% endif %}
Editorial principles: [Editorial policy](editorial-policy.html) · [Terms of use](terms.html) · [Cookie policy](cookies.html)
