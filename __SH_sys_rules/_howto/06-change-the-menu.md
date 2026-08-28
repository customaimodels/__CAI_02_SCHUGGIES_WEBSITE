# How to change the menu

**One place. Never edit a page's menu directly** — there are 60+ pages and they'd
drift apart within a week.

---

## The file

`assets/js/main.js`, the `NAV` block near the top:

```javascript
var NAV = [
  { label: "Home",                    href: "index.html" },
  { label: "Prices",                  href: "pages/prices.html" },
  { label: "Weddings",                href: "pages/weddings.html" },
  { label: "Nottingham Ceilidh Club", href: "pages/public-ceilidhs.html" },
  { label: "Free Wedding Toolkit",    href: "pages/guides.html" },
  { label: "Recent Articles",         href: "pages/recent-articles.html" }
];
```

- `label` — what people see.
- `href` — the file, written from the site root. Always `pages/whatever.html`,
  never `../pages/whatever.html`. The code works out the `../` itself.

---

## To rename an item

Change the `label` only. `"Prices"` → `"Prices & Packages"`. Done.

---

## To add an item

Add a line. **Every line ends with a comma except the last one.**

```javascript
  { label: "Recent Articles", href: "pages/recent-articles.html" },
  { label: "Testimonials",    href: "pages/testimonials.html" }
];
```

⚠️ **Think twice.** Six items is already a lot for a phone menu. A seventh makes
the menu the thing people look at instead of the thing you're selling. Consider
the footer instead.

---

## To remove an item

Delete its line — **and check the footer lists still contain that page.**
Removing it from the menu without adding it to the footer makes the page
unreachable, and Google eventually drops it.

The footer lists are in the same file, in `buildFooter()`: `EXPLORE` and
`MOREINFO`.

---

## To reorder

Move the lines. The order in the file is the order on screen. Keep `Home` first.

---

## Two labels that aren't what they look like

- **"Nottingham Ceilidh Club"** goes to `public-ceilidhs.html`
- **"Free Wedding Toolkit"** goes to `guides.html`

Those are your names for existing pages, not separate pages. Don't "fix" them.

---

## Check

- [ ] Menu shows the change on the home page.
- [ ] Menu shows it on a page in `pages/` — and the link works from there.
- [ ] Menu shows it on a blog post — and the link works from there too.
      **(Blog posts are two folders deep. If a link works on the home page but
      not on a blog post, this is what went wrong.)**
- [ ] Open the phone menu. Does everything still fit?

---

## Deploy

You changed `main.js` — **roll the cache-buster**. See `08-deploy-a-change.md`.
