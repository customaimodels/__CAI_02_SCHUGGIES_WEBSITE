# 11 — Review Checklists

Print these. Work through them.

---

## A. Before committing a visual change

- [ ] Uses existing tokens for colour, radius, shadow and spacing — no new hex,
      no new radius, no `margin: 27px`.
- [ ] Re-uses an existing component pattern (card, steps, fact-list, split,
      imgframe…) rather than inventing one.
- [ ] No inline `style` beyond genuine per-instance data.
- [ ] No `!important`, no new `z-index` outside the existing band.
- [ ] Looks intentional at 390px, ~768px **and** desktop.
- [ ] CTA hierarchy is still clear — one primary per screen.
- [ ] Reuses an existing breakpoint.
- [ ] Any new animation is covered by the reduced-motion block.

---

## B. When touching copy

- [ ] Prices, event counts, coverage area and the 2029 lock are consistent
      across **home, prices, FAQs, chatbot and the footer blurb**.
- [ ] Guide prices are qualified with the NG/LE/DE postcode note — never quoted bare.
- [ ] Tone is friendly, non-corporate, straightforward. No "bespoke", no
      "elevate", no "unforgettable experience".
- [ ] Inclusive language; gender-neutral where appropriate; no assumptions about
      who is marrying whom.
- [ ] One `h1`, real heading order, headings that actually say something.
- [ ] Spelling and grammar double-checked. UK spelling.

---

## C. Before deployment

- [ ] `?b=` bumped for any changed CSS / JS / major image — in **every** file
      that references it.
- [ ] `grep -rn "b=<old>" index.html pages/ assets/js/` returns nothing.
- [ ] Railway deploy **finished**; new assets confirmed on the origin.
- [ ] Only then: Cloudflare purged / new `?b=` requested.
- [ ] HTML, `styles.css` and `main.js` shipped as one coherent batch.

---

## D. After deployment — two-minute pass

- [ ] Home page and one inner page, on desktop and a real phone.
- [ ] Nav links all resolve — nothing pointing at the old WordPress site.
- [ ] Footer links (both columns) resolve.
- [ ] WhatsApp bubble opens WhatsApp.
- [ ] Chat bubble opens, answers a question, closes — and the footer links still
      click afterwards.
- [ ] Scroll-to-top appears after one viewport, sits above both bubbles.
- [ ] Console: no 404s, no errors.
- [ ] Hero image sharp on a phone.

---

## E. When adding a new page

- [ ] Lives in `pages/` (or `pages/blog/`), kebab-case slug matching the `h1`.
- [ ] Head copied from a sibling — correct `../` depth, correct `?b=`, real
      title, real meta description, canonical, OG tags.
- [ ] Both mount divs present; `main.js` is the only script tag.
- [ ] Linked from `NAV`, `EXPLORE` or `MOREINFO` — otherwise it's an orphan.
- [ ] Follows the relevant template in `10-layout-templates.md`.
- [ ] Ends with a CTA.
