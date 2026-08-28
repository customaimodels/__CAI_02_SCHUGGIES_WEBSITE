# 10 — Layout Templates by Page Type

How each main page should *feel* structurally. Follow the shape; the components
themselves come from `03-css-conventions.md`.

---

## Home (`index.html`)

**Hero**
- Clean, confident headline — currently "Authentic Scottish Ceilidh Entertainment".
- The eyebrow carries reach: Weddings · Parties · UK-wide, including the Channel Islands.
- `.hero__def` explains what a ceilidh *is* (and how to say it) — most visitors
  don't know. Keep it.
- Four CTAs max, with an obvious primary: Book a Chat (green) → Check
  Availability → Prices → FAQs.
- `.hero__badges`: 550+ events since 2008 · 220+ weddings · 2029 prices locked.

**Above the fold must convey three things**
1. What Schuggies does.
2. That **every dance is called** — this is the objection-killer.
3. That **prices are locked until 2029**.

**Sections below, in order**
1. Price reassurance — "No surprise increases", the sage band.
2. Video + "what you need to know".
3. Why choose me (`#why`, the split that flips order on phones).
4. Social proof — testimonials / quotes.
5. A clear final CTA strip.

---

## Prices (`pages/prices.html`)

Must always repeat:

- Price lock to **2029**.
- All three packages with from-prices: Ceilidh DJ **£877**, live band **£1,597**,
  The Whole of the Moon **£4,927**.
- The East Midlands postcode note — **NG, LE and DE** — plus travel beyond.

Use the price-card components and the `.pg` price-guide banner. **No ad-hoc
tables.** This is the one page allowed the Playfair display face, for the numerals.

---

## Weddings / Parties / Corporate / Public Ceilidhs

Each page needs, in this order:

1. Who it's for — said plainly in the first screen.
2. What the experience feels like.
3. Real photos matching that audience (see `06-images-and-media.md` §6).
4. "What you need to know" facts: travel, timing, space required, sound limits.
5. A CTA strip pointing at Book a Chat.

**Corporate stays present but visually quieter** than Weddings and Parties — less
colour, calmer imagery. It is a supporting line of work, not a headline one.

---

## FAQs (`pages/faqs.html`)

- Group questions into logical blocks using `.faq-group`: planning, money,
  travel, experience.
- Use the `.acc` accordion component. **Never a raw list of `<p>` Q&A.**
- Every answer must stay in sync with `chatbot.js` — see
  `05-content-style-voice.md` for the alignment rule.

---

## Contact (`pages/contact.html`)

- Simple form: name, contact details, message. Nothing more.
- Supporting copy emphasises how easy and low-pressure a chat is.
- Phone, email and address must match the `SITE` object in `main.js` — if they
  differ, `main.js` is right and the page is stale.

---

## Blog index & Recent Articles

- `pages/blogs.html` is the full archive; `pages/recent-articles.html` is the
  short recent list that sits in the main nav.
- Use the `.link-list` pattern.
- Each link's text matches the post's `h1`.
- No teaser paragraphs unless a shared pattern is agreed and added to
  `03-css-conventions.md` first.
- **A new post must be linked from at least one of these two pages**, or it is
  invisible to visitors and to search.

---

## Individual blog posts (`pages/blog/*.html`)

- One `h1` matching the slug, then `h2`/`h3`.
- Body copy inside `.prose` / `.container--reading` — long-form text gets the
  narrow measure, not the full 1180px.
- Close with a CTA back to Book a Chat or Prices. A post that dead-ends is a
  wasted visit.
