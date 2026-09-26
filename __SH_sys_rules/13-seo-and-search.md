# 13 — SEO & Being Found

Your website's job is to be found by someone typing *"ceilidh band nottingham
wedding"* into Google at 11pm. Everything here serves that.

---

## Part 1 — The audit: what's missing right now

These were measured across the live site, not guessed. Fix them in this order —
top of the list is the biggest win for the least work.

| # | Gap | Scale | Effort |
|---|---|---|---|
| 1 | **No `sitemap.xml`** | Whole site | 20 min, once |
| 2 | **No `robots.txt`** | Whole site | 5 min, once |
| 3 | **No `canonical` tag on any page** | 80 pages | 1 hour |
| 4 | **`og:title` missing on every blog post** | 56 posts | 1 hour |
| 5 | **`og:image` missing** | 23 of 24 main pages | 30 min |
| 6 | **Home page `<title>` is 98 characters** | 1 page | 2 min |

### 1. Sitemap

A list of every page, handed to Google so it doesn't have to guess. Create
`sitemap.xml` in the website root:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.schuggies-ceilidhs.co.uk/</loc><priority>1.0</priority></url>
  <url><loc>https://www.schuggies-ceilidhs.co.uk/pages/prices.html</loc><priority>0.9</priority></url>
  <url><loc>https://www.schuggies-ceilidhs.co.uk/pages/weddings.html</loc><priority>0.9</priority></url>
  <!-- …one line per page. Blog posts get 0.5. -->
</urlset>
```

Then submit it once in Google Search Console. **Add a line every time you add a
page** — put it in the new-page checklist.

### 2. robots.txt

Create `robots.txt` in the website root:

```
User-agent: *
Allow: /
Disallow: /__SH_sys_rules/

Sitemap: https://www.schuggies-ceilidhs.co.uk/sitemap.xml
```

The `Disallow` line keeps this handbook out of search results.

### 3. Canonical tags

Tells Google "this is the real address of this page", so it doesn't treat
`/pages/prices.html` and `/pages/prices.html?fbclid=123` as two competing pages.
**Right now not one page has this.** In every page's `<head>`:

```html
<link rel="canonical" href="https://www.schuggies-ceilidhs.co.uk/pages/prices.html">
```

The templates in `_templates/` already include it. This is about the 80 existing
pages.

### 4 & 5. Social share tags

When someone pastes your link into WhatsApp or Facebook, these decide whether it
shows a photo and a headline — or a bare grey URL that nobody clicks.

```html
<meta property="og:title" content="9 Reasons You Need a Ceilidh">
<meta property="og:description" content="The same sentence as your meta description.">
<meta property="og:image" content="https://www.schuggies-ceilidhs.co.uk/assets/images/og-banner.jpg">
<meta property="og:type" content="article">
<meta name="twitter:card" content="summary_large_image">
```

**All 56 blog posts are missing these.** Blog posts are the pages most likely to
get shared, so this is the highest-value hour of work on the list.

### 6. The home page title

98 characters. Google shows about 60, then cuts it off mid-word.

```
Now:  Schuggies-Ceilidhs | Authentic Scottish Ceilidh Entertainment for Weddings & Parties Across the UK
Better: Scottish Ceilidh Band for Weddings & Parties | Schuggies-Ceilidhs
```

Front-load the words people actually search for.

---

## Part 2 — The formulas

### Titles

```
[What it is] for [who] in [where] | Schuggies-Ceilidhs
```

**Under 60 characters, including the brand.** Most important words first —
Google truncates the end, and so does a person's eye.

| Page | Title |
|---|---|
| Home | `Scottish Ceilidh Band for Weddings & Parties \| Schuggies-Ceilidhs` |
| Prices | `Ceilidh Band Prices from £877 — Locked to 2029 \| Schuggies-Ceilidhs` |
| Weddings | `Wedding Ceilidh Band & Caller, UK-wide \| Schuggies-Ceilidhs` |
| A region | `Ceilidh Band in Leicester for Weddings \| Schuggies-Ceilidhs` |

Never write "Home", "Welcome", or "Untitled".

### Meta descriptions

```
[What you get]. [The differentiator]. [The reassurance].
```

**150–160 characters.** It doesn't change your ranking — it changes whether
anyone clicks. Write it as an advert, because that's what it is.

> Authentic Scottish ceilidh entertainment for weddings and parties across the
> UK. Every dance called, so nobody needs experience. Prices locked until 2029.

Always include: what it is · where you work · one reason to choose you.
Never: "Welcome to our website", or the same description on two pages.

### Headings

- One `<h1>` per page, containing the phrase you want to rank for.
- `<h2>`s carry the supporting phrases.
- Write for the human. A heading stuffed with keywords reads like spam and Google
  treats it as spam.

---

## Part 3 — Words people actually type

Real searches look like:

- "ceilidh band nottingham"
- "how much does a ceilidh band cost"
- "wedding ceilidh east midlands"
- "what is a ceilidh"
- "scottish dancing for weddings near me"

Notice they're **questions and places**. That's why the blog works so well for
you — a post titled *How Much Does a Ceilidh Band Cost* answers a question
someone is literally typing.

### Rules

1. **One page, one job.** Don't try to rank one page for weddings *and* parties
   *and* corporate. Google won't know what it is, and neither will a visitor.
2. **Place names must be genuine.** A page about Leicester should mention
   Leicester venues you've actually played. Faking local relevance gets caught.
3. **Answer the question in the first paragraph.** Don't make someone scroll
   past three paragraphs of scene-setting to learn the price.
4. **Never duplicate a page** to target a second town. Google picks one and
   buries the other. Write genuinely different content or don't write it.

---

## Part 4 — Internal linking

Google follows links to find and rank pages. So do people.

**Rules:**

- Every blog post links to at least one money page — Prices, Weddings, or
  Contact. The template's closing CTA does this.
- Link with descriptive words: `<a href="prices.html">see my ceilidh prices</a>`,
  never `<a href="prices.html">click here</a>`.
- Every page must be reachable from the menu or the footer.
  **A page nobody links to is a page Google never sees.**
- The 56 blog posts are your biggest asset — each one is a door into the site.
  Make sure each one has a way through to a booking.

---

## Part 5 — Structured data

The home page already declares a `LocalBusiness`, and the FAQ page declares
`FAQPage` with six questions. That's what puts the little dropdown answers
straight into Google's results.

**Worth adding next:**

- `FAQPage` markup for more of the FAQ page — only six of the questions are
  marked up.
- `Article` markup on blog posts (date, headline, author).
- `Event` markup on public ceilidh dates — these can show up in Google's events
  panel, which is free promotion for the Nottingham Ceilidh Club.

This is developer work. Point them at this section.

---

## Part 6 — What actually moves the needle

In order:

1. **Reviews on Google.** More weight than anything on your website. Ask every
   couple, every time, while they're still glowing.
2. **The blog.** 56 posts answering real questions is a genuine asset. One new
   post a month beats six in a week and then nothing for a year.
3. **Being fast.** Already handled — no bloat, no frameworks. Keep it that way:
   don't let anyone add a tracking script "just to try".
4. **Being genuinely local.** Real venues, real place names, real events.

## What to ignore

- Anyone emailing to offer "guaranteed page 1 rankings". Delete it.
- Keyword stuffing. It hasn't worked since about 2011 and it now actively hurts.
- Buying links. This gets sites penalised.
- Chasing a keyword you'd never actually want the booking from.

---

## Checking your work

Free, worth 20 minutes a month:

- **Google Search Console** — what you're found for, and what's broken. Submit
  the sitemap here.
- **PageSpeed Insights** — paste any URL, get a speed score.
- Search `site:www.schuggies-ceilidhs.co.uk` in Google — shows every page Google
  knows about. If a page isn't listed, it isn't linked well enough.
