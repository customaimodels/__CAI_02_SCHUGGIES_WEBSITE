# 12 — Phone & Tablet Optimization Rules

The **master playbook** for how the site must behave on phones (especially
iPhone) and tablets.

The goal: **no clutter, no pixelation, no overlaps, no tiny tap targets** — just
calm, expensive-feeling mobile.

---

## 1. Target devices & breakpoints

Core views:

| View | Width | Examples |
|---|---|---|
| Small phones | 360–414px | iPhone SE, 13 mini, 14/15 portrait |
| Regular phones | 430–480px | Bigger iPhones, common Android |
| Tablets | 768–1024px | iPad portrait / landscape |
| Desktop | ≥1000px | — |

Breakpoints already in the CSS that matter for mobile:

- `max-width: 380px` — very small phones, one CTA per line
- `max-width: 520px`, `640px`
- `max-width: 700px` — **the phone/desktop line**; hero height, floater
  choreography and phone layout all key off it
- `max-width: 859px` — the `#why` section order flip
- `max-width: 900px` — touch-target padding
- `min-width: 720px` (`.grid-2`), `860px` (`.split`), `900px` (`.grid-3`)

**Rule:** do not invent a new breakpoint for one bug. Fit into this system first.

---

## 2. Hero on phones — layout & copy

**Objectives**

- The hero shows what Schuggies does, the promise ("no empty dancefloor", every
  dance is called), and at least one obvious primary CTA.
- The image is **sharp** and readable behind/around the copy.

**Rules — these match the CSS as written**

- Below 700px, `.hero { min-height: clamp(440px, 62vh, 560px); }`.
  This is deliberate and load-bearing: at 88vh on a DPR-3 phone the box wants
  ~2229 device px of height from a 1080px source — a 2.1× upscale, which is
  exactly what reads as "pixelly". 62vh cuts it to ~1.4×. **Do not raise it back.**
- `.hero { align-items: end }` on phones — copy sits between centre and bottom so
  the photo reads **above** the text, rather than the copy pinning to the top and
  burying the image.
- `.hero__media img { object-position: 58% center; }` on phones, versus
  `center 38%` on desktop — a square photo in a portrait box is height-limited,
  so `cover` crops the sides and the subject drifts off. Adjust this value per
  hero if faces sit oddly; don't change the crop by swapping the image.
- Hero CTAs: four become **2×2** via `.hero .btn-row .btn { flex: 1 1 calc(50% - .3rem) }`.
  At `max-width: 380px` they go **one per line**.
- Text caps: `h1` drops to `clamp(1.9rem, 8.5vw, 2.6rem)`, `.lead` is capped at
  `34ch`, `.hero__def` at `38ch`. These keep lines short — don't remove them.

**When changing hero content, check explicitly**

- iPhone-sized viewport: text must not overflow off-screen or need pinch-zoom.
- Landscape phone: the main part of the image must still be visible — not just
  floor and ceiling.

---

## 3. CTAs & button behaviour on phones

**Targets & spacing**

- Minimum tap size **44px** high, everywhere. No tiny pills with microscopic text.
- The touch-target block at `max-width: 900px` already lifts top-bar links,
  footer links, social icons and chat controls to 44px using **padding, not font
  size** — so nothing changes visually on desktop. Reuse it; don't re-solve it.

**Rules**

- Phone hero: clean 2×2 at 390–414px; one CTA per row at ≤380px, centred.
- Closing strips (`.cta-strip`): CTAs stack at ≤380px. Never leave 3–4 CTAs
  crammed side by side.
- Footer "Check Availability" stays a clear, full-size button.

**Hierarchy**

- On any phone screen the user should instantly know the primary action
  (usually Book a Chat) and what's secondary (FAQs, more info).
- No more than **two CTA styles visible at once**, and never a third random
  colour. Green means Book a Chat, always.

---

## 4. Floaters — phone choreography

**Desktop**

- Left: chatbot (`.cbot`). Right: WhatsApp (`.wa-float`). Above WhatsApp:
  scroll-to-top (`.to-top`), when visible.

**Phones (`max-width: 700px`)** — all three on the right, stacked:

| Element | Offset from bottom |
|---|---|
| WhatsApp | 16px |
| Chatbot | 90px |
| Scroll-to-top | 162px |

All plus `env(safe-area-inset-bottom)`.

**Rules**

- The footer reserves room for the bubbles:
  `.site-footer { padding-bottom: max(6.5rem, calc(env(safe-area-inset-bottom) + 6rem)); }`
  This applies on **desktop too**, not just phones — the floats are fixed to the
  viewport, so at the very bottom of the page they land on the Privacy/Terms bar
  and made both links unclickable before this rule existed. **Do not reduce it.**
- With the chat panel open, `body.cbot-open` hides WhatsApp **and**
  scroll-to-top: `opacity: 0; pointer-events: none;` — so a tap can never hit two
  elements.
- Any new floating UI (newsletter, offers) respects the same right/bottom
  offsets, stacks cleanly with the other three, and never sits over footer links
  or form buttons.

**Testing checklist**

- Bottom of page: every footer link tappable, no bubble overlapping.
- Chat open: page content still scrolls behind the panel; the WhatsApp bubble is
  genuinely gone — **not just invisible but still clickable**. (`pointer-events`
  is what makes the difference; check by tapping where it was.)

---

## 5. Image behaviour on small screens

Goals: no pixelation, no critical faces cropped out, crops that feel intentional.

**Rules**

- `.hero__media img` uses `object-fit: cover` plus a tuned `object-position`.
  Phones get their own value (§2) — shift it rather than swapping in a different
  photo.
- Card images and frames use the `aspect-ratio` classes (`.imgframe--tall` 4/5,
  `--square` 1/1, `--wide` 16/10, `.card__media` 4/3) so heights are predictable.
- **Never set inline heights on images.** The class plus `object-fit: cover`
  handles it.

**Pixel checks**

- Check the hero and at least one card image on a real device or the iPhone
  simulator, at 100% zoom.
- If an image looks **even slightly** pixelated:
  1. Re-export from `_SH_data_in/` at higher resolution.
  2. Confirm the `<picture>` sources are wired so phones get the square crop, not
     a downscaled wide one.
  3. Only then consider the CSS.

---

## 6. Typography & reading comfort

**Rules**

- Base font size is already tuned for mobile (`1.02rem`, line-height 1.65). **Do
  not shrink paragraphs further.**
- Keep long text inside `.container--reading` / `.container--narrow` so lines stay
  scannable.
- Break long sections with sub-headings, bullets or `.fact-list` — never one
  solid wall of text on a phone.

**Do not**

- Add small "legal" copy without checking readability at 360px.
- Use all-caps for full sentences. Caps stay on short labels — `.eyebrow`,
  `.section-label`, button text.

---

## 7. Grids & layout transitions

The site relies on **stack → two-column → multi-column**.

| Pattern | Goes multi-column at |
|---|---|
| `.grid-2` | 720px |
| `.grid-3` | 900px |
| `.split` | 860px |

Note: at iPad portrait (768px) `.split` is **still stacked**. That is intended —
don't "fix" it.

**Rules**

- Default is single column (mobile). Add a `min-width` breakpoint to make it 2
  or 3 columns. Never the reverse.
- For image + copy sections where the image comes first in the DOM (correct for
  a desktop wide-left split), use a phone-specific order flip rather than
  duplicating the markup — as `#why .split` already does at `max-width: 859px`.

---

## 8. Forms on phones (Contact page)

**Rules**

- Inputs and textareas: full width inside the container, `padding: .85rem 1rem`,
  `font-size: 1rem` (16px — anything smaller makes iOS zoom the page on focus).
  Textarea `min-height: 130px`.
- Labels always visible. **Never rely on placeholder text alone.**
- Status text ("Thanks — your message has been sent…") must be readable on a
  phone and must not push the layout sideways.

**Do not**

- Put two fields side by side at phone widths (first/last name) unless you have
  explicitly tested at 360px and they are still usable.

---

## 9. Performance & interaction

**Goals:** no jank on scroll, no lag opening the mobile nav or chatbot.

**Rules**

- Keep JS light. No heavy third-party scripts dropped into pages.
- Scroll effects use the existing `IntersectionObserver` + `.reveal`. Don't stack
  competing scroll handlers.
- No large background videos, and no uncompressed hero images shipped just for
  mobile.
- The mobile drawer is `width: min(86vw, 360px)` with its own safe-area padding.
  Keep it scrollable (`overflow-y: auto`) — a long nav must not trap links
  off-screen.

---

## 10. Phone QA checklist — run before shipping

**1. Open at a small phone width** (dev tools iPhone profile or a real device)
- [ ] Hero: copy readable, image not buried, CTAs in a tidy grid.
- [ ] **No horizontal scrollbar.**
- [ ] Buttons and links easy to tap — no tiny pills.

**2. Scroll to the bottom**
- [ ] Footer links tappable.
- [ ] WhatsApp + chat bubbles not covering anything.
- [ ] Scroll-to-top appears above both bubbles and is tappable.

**3. Open the mobile nav**
- [ ] All nav links fit, readable, 44px tall.
- [ ] Close button easy to hit, doesn't overlap text.
- [ ] Drawer scrolls if the list is long.

**4. Open the chatbot**
- [ ] Panel height usable — `min(68vh, 480px)` on phones, not the full screen.
- [ ] WhatsApp bubble hidden **and unclickable** while chat is open.
- [ ] Page content still scrolls behind the panel.
- [ ] Close it — footer links still work. (If they don't, the `[hidden]` rule has
      been broken; see `07-chatbot-and-floaters.md`.)

**5. Test one inner page** (Prices, Weddings)
- [ ] Grids collapse cleanly to one column.
- [ ] Images sharp, not pixelated or stretched.
- [ ] No orphan headings or stranded CTAs.

Any **"no"** on this list = fix before deploy.

---

Harness: `http://localhost:8177/_phone.html?p=index.html,pages/prices.html` —
390px iframes, real media-query behaviour. Add `&y=1200` to scroll each frame.
