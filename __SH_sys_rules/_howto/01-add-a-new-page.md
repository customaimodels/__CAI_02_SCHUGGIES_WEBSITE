# How to add a new page

**Example:** you want a page about ceilidhs for birthday parties in Leicester.

---

## Step 1 — Pick the filename

Lowercase, hyphens for spaces, `.html` on the end, no capitals or apostrophes.

```
pages/leicester-birthday-ceilidhs.html
```

That filename becomes the web address, so make it readable and keyword-sensible.
It should match what the page's main heading says.

---

## Step 2 — Copy a template

From `__SH_sys_rules/_templates/`, copy the one that fits:

| Template | Use for |
|---|---|
| `page-service.html` | A page selling something — weddings, parties, a region |
| `page-long-form.html` | Mostly text — a guide, terms, an explainer |
| `page-blank.html` | You know what you're doing and want the bare skeleton |

Paste it into the `pages` folder and rename it.

---

## Step 3 — Fill in the head

Open the file. At the top, change these four things and nothing else:

```html
<title>Birthday Ceilidhs in Leicester | Schuggies-Ceilidhs</title>
<meta name="description" content="One sentence, about 150 characters, that
      would make someone click this in Google.">
<link rel="canonical" href="https://schuggies.caitryapps.com/pages/leicester-birthday-ceilidhs.html">
<meta property="og:title" content="Birthday Ceilidhs in Leicester">
```

**Check the `?b=` number** on the stylesheet and script lines matches what the
other pages use. Copy from a page you know is current.

---

## Step 4 — Write the page

Replace the placeholder content. Structure it the way `10-layout-templates.md`
describes for that page type. In short:

1. Hero — who it's for, one promise, a button.
2. What it's like — text and a photo, side by side.
3. What they need to know — the practical facts.
4. Closing CTA — Book a Chat.

Copy any component you need from `_examples/`.

---

## Step 5 — Link to it

**A page nobody links to is invisible.** Open `assets/js/main.js` and add it to
one of these:

- `NAV` — only if it's genuinely top-level important. The menu is deliberately
  short; think hard before adding a seventh item.
- `EXPLORE` in `buildFooter()` — the main footer column.
- `MOREINFO` in `buildFooter()` — the long footer list. **This is usually the
  right answer.**

```javascript
{ label: "Leicester Birthday Ceilidhs", href: base + "pages/leicester-birthday-ceilidhs.html" },
```

Mind the comma at the end. Every line needs one except the last in the list.

---

## Step 6 — Check it

- [ ] Open it in the browser. Header and footer appear? If not, one of the two
      mount `<div>`s is missing.
- [ ] Menu links work from this page (check the `../` depth is right).
- [ ] Looks right at phone width — `_checklists/phone-qa.md`.
- [ ] The new footer link appears on **other** pages and goes to the right place.

---

## Step 7 — Deploy

Because you changed `main.js`, you must roll the cache-buster.
See `_howto/08-deploy-a-change.md`.
