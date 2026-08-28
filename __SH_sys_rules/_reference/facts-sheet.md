# Facts Sheet — the single source of truth

**Every number and claim on the website, in one place.**

When any of these changes, it changes *here first*, then everywhere in the
right-hand column, in one sitting. This sheet is what stops the chatbot quoting
one price while the price page shows another.

---

## The business

| Fact | Value | Appears in |
|---|---|---|
| Trading name | Schuggies-Ceilidhs | everywhere |
| Legal name | Schuggies-Ceilidhs Limited | footer |
| Company number | 12395804 | footer |
| Trading since | 2008 | home badges, about, chatbot |
| Address | Suite 69, Sneinton Market Unit 6, Gedling Street, Nottingham, NG1 1DS | `main.js` → `SITE.address`, contact page |
| Phone | 01332 498839 | `main.js` → `SITE.phone` + `SITE.phoneHref` |
| Email | info@schuggies-ceilidhs.co.uk | `main.js` → `SITE.email` |
| WhatsApp | 07875 718702 → `wa.me/447875718702` | `main.js` → `SITE.whatsapp` |

---

## The track record

| Fact | Value | Appears in |
|---|---|---|
| Events hosted | **550+** | home hero badge, about, footer blurb, chatbot |
| Weddings | **220+** | home hero badge, about, footer blurb, chatbot |

⚠️ These two appear in the footer blurb inside `main.js` as prose — "Over 550
events, 220+ weddings" — which is easy to miss when searching.

---

## Pricing

| Package | From | Appears in |
|---|---|---|
| Ceilidh DJ set | **£877** | prices (×2), chatbot (×2) |
| Live ceilidh band | **£1,597** | prices (×2), chatbot (×2) |
| The Whole of the Moon | **£4,927** | prices (×2), chatbot (×2) |

**The Whole of the Moon is a ladder, not one price:**

| Booking year | Price |
|---|---|
| 2027 | £4,927 |
| 2028 | £4,997 |
| 2029 | £5,697 |

| Fact | Value | Appears in |
|---|---|---|
| Price lock | **until 2029** | home ×3, prices ×7, faqs ×2, chatbot ×3, top bar |
| Booking years covered | 2027 · 2028 · 2029 | home, prices, offer pages |

---

## Coverage & travel

| Fact | Value |
|---|---|
| Guide-price area | East Midlands — **NG, LE and DE postcodes** |
| Beyond that | **£0.55/mile plus £20/hour** travel time |
| Overall coverage | Whole UK, **including the Channel Islands** |

⚠️ **A guide price is never quoted without the postcode note.** See
`14-hard-rules.md` #20.

---

## The offer itself

| Claim | Detail |
|---|---|
| Every dance is called | The core promise. No experience needed, ever. |
| Sound levels | Ceilidhs peak around **85 dB** — inside most venue limits |
| Acoustic option | Bands can play fully acoustic for outdoor events |
| Venue size | Any — village hall to castle hall, marquee, garden |
| Outdoor | All packages work outdoors |
| Insurance | Full public liability; gear is PAT-tested |
| First dance | Can be a ceilidh, just the couple or everyone |
| Chat length | About 20 minutes, ideally both partners. Not a sales call. |

---

## Booking links

| What | Where it lives |
|---|---|
| Book a Chat (Calendly) | `main.js` → `SITE.calendlyChat` |
| Check Availability (Calendly) | `main.js` → `SITE.calendlyAvail` |

### ⚠️ Known weakness — read before changing a booking link

`SITE.calendlyChat` and `SITE.calendlyAvail` exist so a booking link can be
changed in one place. **The header, mobile menu and footer use them properly.**

But **every in-page button hardcodes the full URL instead** — currently 78 pages.
So changing a Calendly link is not a one-line edit; it's a sitewide sweep:

```bash
grep -rl "calendly.com/schuggies-ceilidhs/OLD-SLUG" index.html pages/ \
  | xargs sed -i '' "s|OLD-SLUG|NEW-SLUG|g"
grep -rn "OLD-SLUG" index.html pages/ assets/js/   # must print nothing
```

**Then check the handbook too** — `_templates/` and `_examples/` contain the
link, and a stale template quietly puts a dead booking link on every new page
built from it.

This happened during the writing of this handbook: the chat link moved to
`/book-a-chat` and 78 pages plus two handbook files needed updating.

**If a developer is ever in this area:** the fix is to make in-page buttons read
from `SITE` like the header does. Until then, treat any booking-link change as a
sweep, not an edit.

---

## Social

All in `main.js` → `SITE.social`: Facebook · Instagram · TikTok · YouTube ·
Pinterest · X · LinkedIn.

---

## Still to be filled in

| Placeholder | What happens meanwhile |
|---|---|
| `SITE.amazonAffiliate` | Disclosure block says "coming soon" |
| `SITE.newsletterAction` | Footer shows a working mailto fallback |

Paste a real URL into either and the real version appears sitewide
automatically. No other change needed.

---

## Testimonials — action needed

The home page quotes are marked in the code as **placeholders**:

```html
<!-- PLACEHOLDER QUOTES — replace with 2-3 real reviews before go-live. -->
```

Replace them with real ones. Attribute each with event type and region — *"Barn
wedding, Derbyshire"* is worth ten times *"A happy customer"*, because it tells
a reader this was someone like them.

---

## How to check the site still agrees with this sheet

```bash
grep -rn "550+\|220+" index.html pages/ assets/js/     # track record
grep -rn "£877\|£1,597\|£4,927" index.html pages/ assets/js/   # prices
grep -rn "2029" index.html pages/ assets/js/            # the lock year
grep -rn "NG, LE" index.html pages/ assets/js/          # postcode note
```

Anything that disagrees with the tables above is a bug. Fix it before it costs
a booking.
