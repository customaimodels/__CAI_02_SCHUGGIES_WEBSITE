# Schuggies-Ceilidhs — Build Rules & Training Guide

Everything needed to run, update and extend this website without slowly
destroying the "quiet luxury" feel it was built with.

**New here? Read `START-HERE.md` first.** It's written for Schuggie, not for a
developer, and takes about five minutes.

---

## The folder

```
__SH_sys_rules/
│
├── START-HERE.md ················ read this first
├── README.md ···················· you are here
├── 00-glossary.md ··············· every technical word, in plain English
│
├── 01-design-system.md ·········· colours, type, corners, buttons, motion
├── 02-html-structure-urls.md ···· page skeleton, file locations, links
├── 03-css-conventions.md ········ how the stylesheet is organised
├── 04-js-architecture.md ········ what main.js does, and its limits
├── 05-content-style-voice.md ···· tone, and the facts that must stay consistent
├── 06-images-and-media.md ······· photography pipeline and standards
├── 07-chatbot-and-floaters.md ··· chat, WhatsApp, the bottom-corner buttons
├── 08-deploy-and-cache-busting.md  Railway + Cloudflare, in the right order
├── 09-accessibility-and-mobile.md  focus, tap targets, motion, testing
├── 10-layout-templates.md ······· how each type of page is structured
├── 11-review-checklists.md ······ the full review passes
├── 12-mobile-optimization.md ···· the phone & tablet playbook
│
├── _howto/ ······················ ⭐ step-by-step recipes — start here for jobs
│   ├── 01-add-a-new-page.md
│   ├── 02-add-a-blog-post.md
│   ├── 03-change-a-price.md ····· ⚠️ touches 5 files — follow it exactly
│   ├── 04-swap-a-photo.md
│   ├── 05-change-contact-details.md
│   ├── 06-change-the-menu.md
│   ├── 07-update-the-chatbot.md
│   ├── 08-deploy-a-change.md ···· read before your first deploy
│   └── 09-when-something-breaks.md
│
├── _templates/ ·················· copy these to start a new page
│   ├── page-service.html ········ a page that sells something
│   ├── page-long-form.html ······ a guide or explainer
│   ├── page-blog-post.html ······ a blog post
│   └── page-blank.html ·········· the bare skeleton
│
├── _examples/ ··················· ⭐ open in a browser — see every component live
│   ├── index.html ··············· start here
│   ├── 01-heroes.html
│   ├── 02-buttons-and-ctas.html
│   ├── 03-sections-and-grids.html
│   ├── 04-cards-and-features.html
│   ├── 05-images-and-frames.html
│   └── 06-faq-and-quotes.html
│
├── _reference/ ·················· look-up sheets
│   ├── file-map.md ·············· "which file do I edit to change X?"
│   ├── tokens.md ················ every colour and size, by name
│   ├── class-inventory.md ······· every class, grouped by job
│   └── breakpoints.md ··········· where the layout changes
│
└── _checklists/ ················· tick before you ship
    ├── phone-qa.md ·············· two minutes, before every deploy
    ├── new-page.md
    ├── pre-deploy.md
    └── post-deploy.md
```

---

## Three ways in

**"I want to do a specific job."** → `_howto/`
Nine recipes covering everything that routinely comes up.

**"I want to see what's available."** → `_examples/index.html`
Open it in a browser. Every component, shown live, with copy-paste code.

**"I want to understand the rules."** → the numbered files, `01` to `12`
The reasoning behind everything. Read when curious, or hand to a developer
before they touch the site.

---

## The five rules that matter most

1. **Copy, don't invent.** Every pattern you need already exists in
   `_examples/`. Find it, copy it, change the words.
2. **Never edit the menu or footer on a page.** They're built once in
   `main.js` and appear on all 60+ pages automatically.
3. **Change the look, roll the number.** Edited CSS or JS? Bump `?b=` on every
   page, or visitors keep seeing the old version for hours.
4. **Check it at 390px.** Most visitors are on a phone. `_checklists/phone-qa.md`.
5. **Keep the facts aligned.** A price appears in five places. Change all five,
   or the chatbot ends up contradicting the price page.

---

## Quick reference

| | |
|---|---|
| Find the current cache-buster | `grep -o 'styles.css?b=[0-9]*' index.html` |
| Primary button | `btn--chat`, green, "Book a Chat" |
| Price lock | 2029 |
| Packages from | £877 DJ · £1,597 band · £4,927 Whole of the Moon |
| Guide-price area | NG, LE, DE postcodes |
| Live site | schuggies.caitryapps.com |
| Run it locally | `python3 -m http.server 8177` |
| Phone preview | `localhost:8177/_phone.html?p=index.html` |
| Undo everything uncommitted | `git checkout -- .` |
| Undo the last push | `git revert HEAD` then `git push` |

---

## Scope

- `index.html`, and every page in `pages/` and `pages/blog/`
- `assets/css/styles.css` — the only stylesheet
- `assets/js/main.js` — header, footer, menu, floaters, contact details
- `assets/js/chatbot.js` — "Ask Schuggie"

**Note on the project root `README.md`:** it's the original migration readme and
has drifted — it still lists a `--purple` colour that no longer exists. Where the
two disagree, **this folder wins**.
