# How to change contact details

**Good news: one file, one place, and all 60+ pages update themselves.**

---

## The file

`assets/js/main.js` — right at the top, the `SITE` block:

```javascript
var SITE = {
  name: "Schuggies-Ceilidhs",
  phone: "01332 498839",
  phoneHref: "tel:01332498839",
  email: "info@schuggies-ceilidhs.co.uk",
  whatsapp: "https://wa.me/447875718702",
  calendlyChat:  "https://calendly.com/schuggies-ceilidhs/ceilidh-chat-...",
  calendlyAvail: "https://calendly.com/schuggies-ceilidhs/private-ceilidh-...",
  address: "Suite 69, Sneinton Market Unit 6, Gedling Street, Nottingham, NG1 1DS",
  ...
```

Change the value between the quote marks. Leave everything else — the quotes,
the commas, the names on the left — exactly as it is.

---

## Watch out for these two

**`phone` and `phoneHref` are a pair.** One is what people read, the other is
what happens when they tap it. Change both:

```javascript
phone:     "01332 111222",      // what's displayed
phoneHref: "tel:01332111222",   // no spaces, no punctuation
```

**WhatsApp uses the international format, no plus sign, no spaces.**
UK mobile `07875 718702` becomes `447875718702`:

```javascript
whatsapp: "https://wa.me/447875718702",
```

---

## Two placeholders waiting for you

These are empty on purpose. While empty, the site shows a sensible fallback.
Paste a real URL in and the real thing appears everywhere automatically.

```javascript
amazonAffiliate: "",    // your Amazon storefront link, with the ?tag= bit
newsletterAction: "",   // your Mailchimp/ConvertKit/Brevo form URL
```

---

## The one page that has details written into it

`pages/contact.html` shows the address and details in its own text as well.
If you change the address, check that page too.

Everything else — footer, top bar, WhatsApp button — comes from `SITE`.

---

## Check

- [ ] Look at two or three different pages. New details showing everywhere?
- [ ] Tap the phone number on a phone — does it dial the right number?
- [ ] Tap the WhatsApp bubble — does it open a chat with the right number?
- [ ] Check `pages/contact.html` specifically.

---

## Deploy

You changed `main.js`, so **roll the cache-buster**. See `08-deploy-a-change.md`.
