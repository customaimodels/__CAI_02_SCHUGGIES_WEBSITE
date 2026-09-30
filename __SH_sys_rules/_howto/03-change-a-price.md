# How to change a price

⚠️ **The most dangerous edit on the site.** Not because it's hard — because it's
easy to change it in three places and miss the fourth, and then your FAQs
quote one price while your price page shows another. That costs bookings and
looks unprofessional.

**Do all four. In one sitting. Then check.**

---

## The four files a price lives in

### 1. `pages/prices.html`
The meta description in the `<head>` and the price guide cards — **each price
appears twice in this file.** Search it for the old number and fix every hit.

### 2. `index.html`
The meta description in the `<head>` and the "What you need to know" list.

### 3. `pages/faqs.html`
The FAQ schema in the `<head>` (what Google shows) **and** the answers on the
page. Search for the old figure and for the year. Several answers mention both.

### 4. `pages/blog/how-much-does-a-ceilidh-band-cost.html`
The DJ and band prices, in the cost list.

### If the lock year changes: `assets/js/main.js`
The top bar: `'💷 Prices locked until 2029'`

---

## Finding every mention

From the website folder, search for the old figure:

```bash
grep -rn "£877" index.html pages/ assets/js/
```

Change them all. Then run it again — it should come back empty.

Do the same for the year if it's changing:

```bash
grep -rn "2029" index.html pages/ assets/js/
```

Careful with years: some are ranges like `2027 · 2028 · 2029`, which shift
together. Read each one before changing it rather than replacing blindly.

---

## Don't forget

- **Guide prices must always be qualified** with the postcode note: "East
  Midlands (NG, LE and DE postcodes)". Never quote a bare price.
- The Whole of the Moon has **three prices**, one per year. They're a ladder, not
  a single figure.

---

## Check before you deploy

- [ ] `grep` for the old figure returns nothing.
- [ ] Home page hero badge, price page, and FAQs all agree.
- [ ] The price blog post matches too.

---

## Then deploy

Pages only? No roll needed. Changed the year in `main.js`? **You must roll the
cache-buster.** See `08-deploy-a-change.md`.
