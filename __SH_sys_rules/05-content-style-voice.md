# Content Style & Voice

## Tone

Warm, clear, non-corporate. It should read like Schuggie speaking, not a
brochure. Short sentences. Second person. Say the thing, then stop.

Emojis: allowed, sparingly. Heroes and major CTAs stay clean.

Avoid: "bespoke", "elevate", "unforgettable experience", "we pride ourselves",
exclamation stacks, and any sentence that could appear on any other supplier's
site.

## Facts that must stay consistent everywhere

These appear on the home hero, the price guide, the FAQs, the footer blurb and
the price blog post. **If one changes, change all of them in the same
commit.**

| Fact | Value |
|---|---|
| Trading since | 2008 |
| Events | 550+ |
| Weddings | 220+ |
| Price lock | Prices locked until **2029** |
| Ceilidh DJ set | from £877 |
| Live ceilidh band | from £1,597 |
| The Whole of the Moon | from £4,927 |
| Guide-price area | East Midlands — **NG, LE and DE postcodes** |
| Beyond that | £0.55/mile + £20/hour travel time |
| Coverage | Whole UK, including the Channel Islands |
| Phone | 01332 498839 |
| Email | info@schuggies-ceilidhs.co.uk |
| Company | Schuggies-Ceilidhs Limited, No. 12395804 |

Guide prices must always be qualified with the postcode area — never quote a
price bare.

## Headings

- Exactly one `<h1>` per page, then `h2`/`h3` in real hierarchy. Never skip a
  level to get a smaller size — use a class.
- Headings must say something. No "More info", no "Our Services", no filler.
- No lorem ipsum ships. Ever.

## The alignment rule

Anything promised in the FAQs must not contradict the price guide.
When offers, prices or coverage change, update **together**:

- `pages/faqs.html`
- `pages/prices.html`
- `pages/blog/how-much-does-a-ceilidh-band-cost.html`
- `index.html` hero badges + locked-prices section
- the footer blurb in `main.js`

## Blog posts

`pages/blog/<slug>.html`, slug in kebab-case matching the title. New posts must
be listed on `pages/blogs.html` and, if recent, `pages/recent-articles.html` —
an unlinked post is invisible.
