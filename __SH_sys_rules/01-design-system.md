# 01 — Design System Rules (Visual DNA)

This site must always feel like **quiet luxury ceilidh**: warm, intentional, zero
"template" vibes.

---

## 1. Palette — what's allowed and where

All colour lives as tokens in `:root` at the top of `assets/css/styles.css`.
Five families and nothing else.

| Token | Value | Where it belongs |
|---|---|---|
| `--burgundy` / `--burgundy-dark` | `#a0263b` / `#702331` | Main accent, links, top bar, price flags, general-purpose buttons |
| `--oxblood` / `--oxblood-dark` | `#5e1119` / `#400b11` | Chat button and a few premium touches |
| `--green` / `--green-dark` / `--green-deep` | `#3f6b57` / `#2f5443` / `#23443b` | Ceilidh green — "Book a Chat", price-guide frame, scroll-to-top, text on green panels |
| `--sage` / `--sage-dark` | `#c0d5d0` / `#9dbcb4` | Soft supporting backgrounds, badges, ghost borders |
| `--ivory` / `--paper` / `--paper-2` / `--paper-3` | `#faf7f3` / `#fff` | Base neutrals |
| `--ink` / `--ink-soft` / `--muted` | `#141414` / `#333` / `#6b6b6b` | Text and quiet copy |
| `--line` | `#e9e1d8` | Hairlines, card borders |
| `--yellow` | `#fef366` | **Locked-prices pill only.** Nothing else. |

**Rules**

- **Do** use only the tokens above, via CSS variables.
- **Do not** introduce a new hex in a component. If a new tone is genuinely
  needed, add it to `:root` with a clear name and a comment, and update this file.
- Backgrounds are mostly `--ivory` / paper. Colour panels are used
  intentionally, not everywhere.
- Purple, blue-soft, heather, moss and sage-deep were deliberately removed.
  Do not bring them back. (The old root `README.md` still lists `--purple` —
  it is stale; this file wins.)

---

## 2. Typography — hierarchy and rhythm

**Fonts**

- Headings: `--font-head` → **Montserrat** (600/700/800).
- Body: `--font-body` → **Hind** (400/500/600).
- One exception: **Playfair Display** is loaded on `pages/prices.html` for the
  price-guide display numerals. It does not spread to other pages.

**Scale — follow the existing CSS**

- `h1` — hero and major page titles (`clamp(2rem, 7vw, 3.6rem)`, already responsive)
- `h2` — section headings
- `h3` — card titles, FAQ group titles
- `.lead` — short intro lead text
- `.hero__def` — the supporting "what a ceilidh is" definition line
- `.eyebrow`, `.section-label` — small caps labels above headings
- `.muted`, `.u-soft` — quiet supporting copy

**Rules**

- One `h1` per page. Never fake an `h1` visually with an `h2` just to get a size.
- No inline `style="font-size:…"` on headings or body copy. If the scale is
  wrong, fix or add a reusable class in `styles.css`.
- Letter-spacing and uppercase behaviour come from classes (`.eyebrow`,
  `.section-label`), never from inline attributes.

---

## 3. Radii & shadows — rounded luxury, not blobs

**Tokens**

- Radii: `--radius-sm` (12px), `--radius` (14px), `--radius-lg` (22px), plus
  `border-radius: 999px` for full pills.
- Shadows: `--shadow-sm`, `--shadow-md`, `--shadow-lg`.
- Easing: `--ease`. Every transition uses it.

**Component mapping**

| Component | Radius |
|---|---|
| Buttons, pills, tags, chips | `999px` |
| Small tiles, inputs | `--radius-sm` / `--radius` |
| Cards, quotes, panels, video frame | `--radius-lg` |

Do not invent a new radius or a one-off shadow recipe. If something looks "off",
step to the next token — don't add another.

---

## 4. Section backgrounds & structure

**Allowed treatments**

- Neutral — `.section` on `--ivory` / paper
- Highlight — `.section--sage` for friendly, light content
- Dark — `.section--ink` for high-contrast bands (hero, closing CTAs)
- Textures — `.grain`, `.band`, `.contact-hero`, `.pg` (price guide),
  `.section--natural`, `.section--moss`

**Rules**

- A page should **alternate light and stronger bands** — never wall-to-wall
  colour. Dark bands stay short and purposeful.
- Open major sections with the `.section__intro` pattern:
  **eyebrow → `h2` → one strong sentence.** Not three paragraphs.
- `.section--tight`, `--flush-top`, `--closing`, `--hero-pad` handle rhythm
  variations. Use them instead of custom margins.

---

## 5. Buttons & CTA hierarchy

| Class | Colour | Role |
|---|---|---|
| `.btn--chat` | ceilidh green | **The primary journey** — "Book a Chat". Same colour in header, mobile nav and every in-page CTA. |
| `.btn--primary` | burgundy | Major action when Book-a-Chat isn't the focus |
| `.btn--sage` | sage | Supportive — e.g. "Check Availability" |
| `.btn--light`, `.btn--ghost`, `.btn--on-dark` | outline / light | Secondary, and the on-dark variants for `.section--ink` |
| `.btn--block` | — | Full-width, phone contexts |

**Rules**

- On any given screen **one button style clearly wins**. Never three different
  CTA colours competing side by side.
- The hero carries four CTAs. They are laid out 2×2 on phones and one-per-line
  below 380px, by existing rules. Don't add a fifth.
- No new button colours. Extend with an existing modifier if you must.

---

## 6. Animation & motion

- Scroll-in uses the existing `.reveal` system. Do not add an animation library.
- Everything respects `prefers-reduced-motion: reduce`, as already encoded.
- Motion is smooth and calm. No bounce, no rotation, no spring. Hover lift is
  `translateY(-2px)` — that is the whole vocabulary.

---

## 7. Spacing

- Section rhythm: `--sp-xs`, `--sp-sm`, `--sp-md`, `--sp-lg`, `--sp-xl`, `--sp-section`.
- Nudges: `.u-mt-1`…`.u-mt-4`, `.u-mb-1`…`.u-mb-4`, `.u-m0`, `.u-mt-auto`, `.u-gap-1`.
- Width: `--maxw` (1180px) via `.container`, plus `--tight`, `--narrow`,
  `--reading`, `--cards`.
- No random `margin: 27px` inline. If a spacing need repeats, make it a utility.
