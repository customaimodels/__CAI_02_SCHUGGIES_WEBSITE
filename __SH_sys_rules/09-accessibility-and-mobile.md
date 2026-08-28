# 09 — Accessibility & Mobile Behaviour

---

## 1. Focus & keyboard

- Every clickable element — links, buttons, form fields — must be reachable
  with `Tab` and operable with the keyboard.
- Focus styling is global:
  `:focus-visible { outline: 3px solid var(--burgundy); outline-offset: 2px; }`
  with the outline switching to ink on buttons, white on dark sections, and
  `--green-deep` on `.btn--chat`.
- **Never remove a focus outline to "make it cleaner".** If a new component
  looks wrong with the ring, fix the component's padding. Any replacement must
  be at least as visible.

---

## 2. ARIA & semantics

Keep what's already there:

- `aria-label` on the chat button, close button, scroll-to-top, nav toggle,
  WhatsApp link, and the chat input/send controls.
- `role="dialog"` + `aria-label` on the chatbot panel, `aria-live="polite"` on
  the message log.
- `aria-expanded` on the mobile nav toggle and the FAQ accordions.
- `aria-current="page"` on the active nav item — generated automatically, never
  written by hand.

Structure:

- One `<h1>`, real heading order, `<main>` on every page.
- Use headings, not `div` + bold text.
- Lists are lists. Things that navigate are `<a>`; things that act are `<button>`.
- Text over photos sits on a `.scrim` — check contrast against the **lightest**
  part of the image, not the darkest.

---

## 3. Tap targets and spacing

- Links and buttons on mobile are **≥ 44px** high. The existing phone rules
  already enforce this — reuse them rather than adding micro-buttons.
- At least 8px between adjacent tap targets.
- Footer links and top-bar items follow the same rule.
- Phone numbers are `tel:` links; emails are `mailto:` links.

---

## 4. Motion and reduced-motion

- Any new animation must be disabled inside the existing
  `@media (prefers-reduced-motion: reduce)` blocks, using the same pattern.
  An animation not covered by them is a bug.
- No long-running looping animations. They pull attention off the content.
- `.reveal` must never leave content permanently invisible if JS fails or the
  observer never fires.

---

## 5. Mobile layout checks

On any layout change, test all three:

**iPhone / small phone (~375–414px)**
- Hero: text readable, image still visible, CTAs in a tidy 2×2 (one per line
  below 380px) — never four cramped pills.
- Floaters not covering footer links or any CTA.
- Top bar stays at two rows maximum.

**iPad / tablet (~768px)**
- `.grid-2` (from 720px) and `.grid-3` (from 900px) transition as intended.
- `.split` is still stacked here — it goes two-column at 860px.

**Desktop (≥1000px)**
- Nav fits on one line without wrapping.
- No unexpected huge gutters or stretched sections.

If it looks tight or broken on any of the three, fix it before shipping.

---

## 6. The phone harness

```
http://localhost:8177/_phone.html?p=index.html,pages/prices.html
```

390px iframes, so media queries behave for real rather than as a scaled
screenshot. Comma-separate pages; add `&y=1200` to scroll each frame down.
