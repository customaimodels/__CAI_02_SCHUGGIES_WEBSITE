# 06 — Images & Media (Ceilidh Photography Rules)

The rulebook for image quality, cropping and placement. Written to be handed to
whoever is preparing photos.

---

## 1. Source & export pipeline

1. Always start from the master files in `_SH_data_in/` — the highest resolution
   available. Never from a web copy.
2. Crop in a proper editor (Photoshop, Affinity, Lightroom). **Never crop by
   shrinking a tiny inline image or by changing CSS.**
3. Resize with high-quality interpolation:
   - Heroes: export at multiple widths — **1800px and 2560px** for desktop, plus
     a **square crop** for phones.
   - Cards and smaller slots: match the existing aspect ratios in §3.
4. Export:
   - **WebP** first choice.
   - High-quality **JPEG** fallback for heroes and anything in a `<picture>`.
5. Drop the finished files in `assets/images/`. **If a file is not in that
   folder it does not appear on the site** — nothing is fetched from WordPress
   or any CDN.

**Filenames describe content, not camera IDs.**
`hero-wedding-arch-wide-1800.jpg` ✅ — `DSC_0012.jpg` ❌

Pattern: `<role>-<subject>-<size>.<ext>`. Widths in use: 1280 · 1600 · 1800 ·
2400 · 2560, plus `-square` for the phone crop.

---

## 2. Composition — what "good" looks like

- Faces sit **inside the safe area**. No heads cropped at the hairline, no chins
  clipped at the bottom edge.
- For heroes, leave room for type:
  - **Desktop** — important faces sit roughly right of centre so the left side
    can carry the headline.
  - **Phone** — check the portrait crop specifically. The hero text is
    bottom-aligned on phones (`.hero { align-items: end }`), so the subject must
    stay visible **above** the copy.
- No dead patches of ceiling, empty floor, or blown-out windows unless clearly
  artistic.
- Faces and the dance floor are the subject. If a photo needs a caption to
  explain why it's there, it's the wrong photo.

---

## 3. Aspect ratios & class mapping

Use these standard slots — they are already defined in CSS:

| Slot | Class | Ratio |
|---|---|---|
| Hero | `.hero__media` | wide + square phone crop, via `<picture>` |
| Card image | `.card__media` | 4/3 |
| Tall portrait | `.imgframe--tall` | 4/5 |
| Wide | `.imgframe--wide` | 16/10 |
| Square | `.imgframe--square` | 1/1 |
| Service panel | `.service-panel` | 3/4 phone, 4/5 from 860px |
| Image pair | `.image-pair__primary` / `__secondary` | 4/3 and 4/5 |
| Video | `.video-wrap` | 16/9 |

**Rule:** if an image doesn't fit one of these well, **crop it to fit**. Never
stretch, squeeze, or add a new ratio.

---

## 4. Responsive setup

For every **major** image (hero, full-width band), follow the pattern already on
`index.html`:

```html
<picture>
  <source media="(max-width: 700px)" type="image/webp" srcset="assets/images/hero-x-square.webp">
  <source media="(max-width: 700px)" type="image/jpeg" srcset="assets/images/hero-x-square.jpg">
  <source type="image/webp" srcset="assets/images/hero-x-wide-1800.webp 1800w,
                                    assets/images/hero-x-wide-2560.webp 2560w">
  <img src="assets/images/hero-x-wide-1800.jpg" alt="…" width="1800" height="1012">
</picture>
```

For supporting images inside cards, at minimum:

- `width` and `height` attributes — always, on every image. They reserve the
  space and stop the page jumping as photos load.
- `object-fit: cover` via the shared class, never inline.
- A real `alt`. Decorative-only images get `alt=""`.
- `loading="lazy"` below the fold. **Never on a hero.**

---

## 5. Anti-pixelation rules

- If a hero looks soft on a modern phone, **assume the source is too small** and
  re-export it larger. Do not try to fix sharpness in CSS.
- Never let the browser upscale an image more than ~**1.4×** its natural pixel
  size. Phones are high-DPI — a 900px file in a 900px slot is already soft.
- Check at: iPhone portrait (high DPI) · iPad/tablet · desktop full width.
  Re-export if any of the three is soft.

---

## 6. Matching images to words

Each section's image must support the copy beside it:

- **Weddings** → couples, the dance floor, venues.
- **Parties** → mixed-age, genuinely having fun.
- **Corporate** → more neutral, well-dressed groups, but still warm — never
  stock-photo boardroom.
- **Public ceilidhs** → the hall, the crowd, the caller.

Avoid repeating the same photo too often. If one is reused it should feel
intentional — a hero and one echo on a different page, not six repeats.

---

## 7. Video

Embeds sit inside `.video-wrap`, which holds the 16/9 ratio. No autoplay with
sound, ever.

---

## 8. Cache

Images referenced from `main.js` (the footer logo, for instance) carry their own
`?b=` number. Replacing one in place means bumping that number — see
`08-deploy-and-cache-busting.md`. A new filename needs no bump.
