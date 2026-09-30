# 07 — Floating Buttons (WhatsApp + Back-to-Top)

> **The chatbot is gone.** "Ask Schuggie" / Massie was removed on 2026-09-26.
> `assets/js/chatbot.js` no longer exists. Her last version is kept outside the
> site in `../dta/_off_massie/` in case she ever comes back. Two floaters remain.

---

## 1. What floats

Both are built by `assets/js/main.js` — never hand-write them into a page.

- **WhatsApp** — `.wa-float`, rendered at the end of `buildFooter()`. A 58×58px
  green circle with a "Contact me" label (label hidden ≤520px).
- **Back-to-top** — `.to-top`, built by `buildToTop()`. Appears only after a
  full viewport of scrolling. Respects Reduce Motion (instant jump, no smooth
  scroll).

Styles: `.wa-float*` and `.to-top` in `assets/css/styles.css`.

---

## 2. Placement

| | WhatsApp | Back-to-top |
|---|---|---|
| Desktop (≥701px) | bottom-right, 18px | bottom-right, 90px up |
| Phone (≤700px) | bottom-right, 16px | bottom-right, 162px up |

Both use `env(safe-area-inset-bottom)` so they clear the iPhone home bar.
`z-index`: back-to-top `125`, WhatsApp `120`.

---

## 3. 3D feel & motion

Depth comes from three things and no more:

- The rich base colour (or a gradient on it).
- `box-shadow: var(--shadow-md);`
- A small hover lift — `transform: translateY(-2px)`.

No big bounce, no rotation, no pulse. Interactions feel confident and minimal.

---

## 4. Choreography

The rules that must not break:

- `.wa-float` and `.to-top` never sit on top of interactive content or each other.
- The footer reserves room for them on phones:
  `.site-footer { padding-bottom: max(6.5rem, calc(env(safe-area-inset-bottom) + 6rem)); }`
  That rule is why the buttons never cover footer links. Do not trim it.
- These rules live in the **BOTTOM-EDGE CHOREOGRAPHY** block, which must stay
  last in `styles.css` so it overrides the base `.wa-float` rules.

---

## 5. Adding a new floater

Don't, if it can be avoided. If one is genuinely necessary (a newsletter bubble,
say), it must:

- Be built by `main.js`, like the other two.
- Use the same spacing strategy and safe-area inset.
- Slot into the existing `z-index` band — no `9999`.
- Be declared in the same bottom-edge block.
- Keep the footer's reserved padding sufficient, and keep every tap target clear
  of the others at 375px.
