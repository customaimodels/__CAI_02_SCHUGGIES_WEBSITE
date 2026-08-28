# How to change a price

⚠️ **The most dangerous edit on the site.** Not because it's hard — because it's
easy to change it in three places and miss the other two, and then your chatbot
quotes one price while your price page shows another. That costs bookings and
looks unprofessional.

**Do all five. In one sitting. Then check.**

---

## The five places a price lives

### 1. `pages/prices.html`
The price guide cards. Both the top banner and the detailed section lower down —
**the prices appear twice on this page.** Search the file for the old number and
fix every hit.

### 2. `index.html`
The hero badges and the locked-prices band near the top.

### 3. `pages/faqs.html`
Search for the old figure and for the year. Several answers mention both.

### 4. `assets/js/chatbot.js` — **two separate places in this file**

**a) The bot's brain**, near the top:
```javascript
"...Ceilidh DJ from £877, live band from £1,597, Whole of the Moon from £4,927;
prices locked to 2029..."
```

**b) The answer bank** (`KB`), further down — the pricing answer:
```javascript
{ keys: ["price","cost","how much", ...],
  a: "Here's the guide pricing (locked until 2029):\n• Ceilidh DJ set — from £877..." },
```

Miss either one and the bot contradicts your website.

### 5. `assets/js/main.js`
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
- [ ] Open the chat bubble and ask it "how much?" — the answer matches.
- [ ] Ask it "when are prices locked until?" — that matches too.

---

## Then deploy

You changed `main.js` and `chatbot.js`, so **you must roll the cache-buster**.
See `08-deploy-a-change.md`. Skip it and visitors see old prices for hours.
