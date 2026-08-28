# Schuggies-Ceilidhs — Build Rules

This folder locks in how the site is built so nobody slowly destroys the
"quiet luxury / professional" feel.

**Scope**

- `index.html` + every page in `pages/` and `pages/blog/`
- `assets/css/styles.css` (the only stylesheet)
- `assets/js/main.js` (header, footer, nav, floaters, tracking)
- `assets/js/chatbot.js` ("Ask Schuggie")

**Principle** — fewer, better patterns. Chants, not one-off styles.

**When adding anything**

1. Check whether a pattern already exists (`03-css-conventions.md` has the full
   class inventory).
2. If a genuinely new pattern is needed, write it into the relevant rules file
   here **first**, then implement it.
3. Touched CSS or JS? Roll the cache-buster — `08-deploy-and-cache-busting.md`.
4. Work the checklists in `11-review-checklists.md` before you commit and before
   you deploy.
5. Check it at 390px before calling it done — the QA pass is in
   `12-mobile-optimization.md` §10.

---

## The files

| File | Covers |
|---|---|
| `01-design-system.md` | Visual DNA — palette, type, radii, shadows, sections, CTA hierarchy, motion, spacing |
| `02-html-structure-urls.md` | Page skeleton, file locations, nav & footer routing, URL rules |
| `03-css-conventions.md` | How `styles.css` is organised; the full pattern inventory |
| `04-js-architecture.md` | `main.js` responsibilities, path handling, tracking, hard limits |
| `05-content-style-voice.md` | Tone, and the facts that must stay consistent everywhere |
| `06-images-and-media.md` | Photography rules — pipeline, composition, ratios, anti-pixelation |
| `07-chatbot-and-floaters.md` | Chatbot, logo icon, WhatsApp, bottom-edge stacking |
| `08-deploy-and-cache-busting.md` | Railway + Cloudflare order of operations |
| `09-accessibility-and-mobile.md` | Focus, ARIA, tap targets, motion, the three test widths |
| `10-layout-templates.md` | How each page type should be structured |
| `11-review-checklists.md` | Tick-box passes: visual, copy, pre-deploy, post-deploy, new page |
| `12-mobile-optimization.md` | The phone/tablet playbook — hero sizing, CTAs, floaters, forms, full QA pass |

---

## Quick reference

| | |
|---|---|
| Cache-buster now at | `b=49` |
| Primary CTA | `.btn--chat`, ceilidh green, "Book a Chat" |
| Price lock | 2029 |
| Packages from | £877 DJ · £1,597 band · £4,927 Whole of the Moon |
| Guide-price area | NG, LE, DE postcodes |
| Phone test width | 390px, via `_phone.html` |
| Local server | `python3 -m http.server 8177` |

**Note on the root `README.md`** — it is the original migration readme and has
drifted (it still lists a `--purple` token that no longer exists). Where the two
disagree, **this folder wins**.
