# 02 — HTML Structure & URL Rules

---

## 1. Page skeleton

Every page — `index.html` included — follows exactly this shape:

```html
<body>
  <div id="site-header-mount"></div>   <!-- top bar + header + nav, injected -->
  <main> … page-specific content … </main>
  <div id="site-footer-mount"></div>   <!-- footer + WhatsApp floater, injected -->
  <script src="assets/js/main.js?b=NN"></script>
</body>
```

- The two mount divs are how `main.js` finds its slots. A page missing them
  renders with no header or footer.
- **`main.js` is the only script tag on a page.** (The chatbot it once injected
  was removed on 2026-09-26.)
- Depth changes the prefix only: `assets/…` at root, `../assets/…` in `pages/`,
  `../../assets/…` in `pages/blog/`.

**Do not hand-code a header or footer into an individual page.** It will fall out
of sync the first time the nav changes, and there are 60+ pages to fix.

---

## 2. File locations

- Root only: `index.html`.
- Inner pages: `pages/<slug>.html`.
- Blog posts: `pages/blog/<slug>.html`.
- No additional folder depth. If you're adding blog-style content it goes in
  `pages/blog/`; anything else is a page in `pages/`.

Slugs are kebab-case and should match the page's `h1`.

---

## 3. Nav & footer routing

- **Primary nav** — the `NAV` array in `assets/js/main.js`:
  Home · Prices · Weddings · Nottingham Ceilidh Club · Free Wedding Toolkit ·
  Recent Articles.
  To add, remove or rename a menu item, **edit `NAV` only**.
- **Footer** — two explicit arrays in `buildFooter()`:
  - `EXPLORE` — Prices, Weddings, Parties, Public Ceilidhs, About, Corporate, Contact.
  - `MOREINFO` — the long list mirroring the old site.

**Rule:** every page that matters appears in `NAV`, `EXPLORE` or `MOREINFO`.
Before removing a link, check the other two lists — the nav is deliberately short,
so the footer is what keeps pages reachable.

Two nav labels are the client's names for existing pages, not new pages:
"Nottingham Ceilidh Club" = `pages/public-ceilidhs.html`,
"Free Wedding Toolkit" = `pages/guides.html`.

---

## 4. URL consistency & active states

- Internal links are written **relative to the site root** (`pages/foo.html`),
  and go through the `url()` helper / `base` logic in `main.js`.
- **Never bypass that with a hand-written `../`.** Blog posts sit two levels
  down, so a fixed `../` silently misdirects every link on 56 pages.
- **No hard-coded `https://schuggies-ceilidhs.co.uk/…` in page content.** That is
  the old WordPress site. Link to the local page.
  Sanctioned absolute URLs: canonical/OG meta, Calendly, WhatsApp, social
  profiles, Google Fonts. Nothing else.
- The active nav item is derived from the current filename and gets
  `aria-current="page"` automatically. **Do not add `aria-current` by hand.**

---

## 5. `<head>` checklist for a new page

`charset` · `viewport` · `title` · `meta description` · canonical · OG/Twitter
tags · font preconnect + Google Fonts link · `assets/css/styles.css?b=NN` with
the correct number of `../`.

Copy the head from a sibling page rather than writing one from scratch — that is
how the `?b=` number and the OG tags stay right.
