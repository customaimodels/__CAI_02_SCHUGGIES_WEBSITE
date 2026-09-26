# The full walkthrough — a page from nothing to live

One complete job, every keystroke, no steps skipped. Follow it once and every
other recipe in this folder will make sense.

**We're building:** a page targeting ceilidh bookings in Leicester.

---

## Before you start

Open a terminal in the website folder:

```bash
cd /path/to/website
python3 -m http.server 8177
```

Leave it running. Everything below is checked at `http://localhost:8177`.

---

## Step 1 — Decide the job (5 minutes, no typing)

Answer these before writing anything:

| Question | Our answer |
|---|---|
| Who is this for? | Couples marrying at Leicestershire venues |
| What do they search? | "ceilidh band leicester", "wedding entertainment leicester" |
| What's the one promise? | Local, no travel surcharge, every dance called |
| What's the next step? | Book a Chat |
| Is this genuinely different from `weddings.html`? | Yes — local venues, local pricing |

**If the last answer is "not really", stop.** Two similar pages compete with
each other in Google and both lose. See `13-seo-and-search.md`.

---

## Step 2 — Name the file

```
pages/leicester-ceilidh-band.html
```

Lowercase · hyphens · no capitals · no apostrophes · describes the content.

---

## Step 3 — Copy the template

```bash
cp __SH_sys_rules/_templates/page-service.html pages/leicester-ceilidh-band.html
```

---

## Step 4 — Find the current cache-buster

```bash
grep -o 'styles.css?b=[0-9]*' index.html
```

Say it prints `styles.css?b=50`. **Remember 50** — you'll need it twice.

---

## Step 5 — The head

Open the new file. Change only the marked lines:

```html
<title>Ceilidh Band in Leicester for Weddings | Schuggies-Ceilidhs</title>
```
✅ 58 characters — under the 60 Google displays. Search words first, brand last.

```html
<meta name="description" content="Ceilidh band and caller for weddings in Leicester and across Leicestershire. Every dance called, so nobody needs experience. Guide prices from £877.">
```
✅ 152 characters. What · where · why you.

```html
<link rel="canonical" href="https://www.schuggies-ceilidhs.co.uk/pages/leicester-ceilidh-band.html">
<meta property="og:title" content="Ceilidh Band in Leicester for Weddings">
<meta property="og:description" content="Every dance called, so nobody needs experience. Guide prices from £877, locked until 2029.">
```

Then check both `?b=` lines say `b=50`. Fix them if not.

---

## Step 6 — The hero

```html
<p class="eyebrow eyebrow--sage">Leicester &amp; Leicestershire</p>
<h1>A ceilidh band Leicester couples actually book twice</h1>
<p class="lead">Most of your guests will never have been to a ceilidh — and
  that's exactly why it works. Every dance is called, so nobody needs to know
  the steps.</p>
```

The `h1` carries the search phrase *and* makes a promise. Both jobs, one line.

**Two buttons in the hero, not four**, since this page has one clear next step:

```html
<div class="btn-row">
  <a class="btn btn--sage" href="https://calendly.com/schuggies-ceilidhs/private-ceilidh-check-if-im-available-for-your-big-day" target="_blank" rel="noopener">Check Availability</a>
  <a class="btn btn--light" href="prices.html">Prices &amp; Packages</a>
</div>
```

For now, leave the template's photo. We'll fix it in step 11.

---

## Step 7 — The pitch section

```html
<div class="reveal">
  <p class="eyebrow">Local, and it shows</p>
  <h2>No travel surcharge, no long-distance guesswork</h2>
  <p class="lead">Leicester sits inside my guide-price area, so what you see is
    what you pay — no mileage added on at the end.</p>
  <p>I've called ceilidhs in barns, hotels, village halls and marquees right
    across Leicestershire. Whatever the room, I've probably worked one like it.</p>
</div>
```

⚠️ **If you haven't actually played Leicestershire venues, don't write that you
have.** Faking local relevance is transparent and it's the fastest way to lose
trust. Write what's true — "Leicester is inside my guide-price area" is enough.

---

## Step 8 — The facts

Swap the template's feature grid for a fact list — practical detail is what a
regional page is *for*:

```html
<section class="section section--paper2">
  <div class="container">
    <div class="text-center reveal section__intro">
      <p class="eyebrow">The practical bit</p>
      <h2>What you need to know</h2>
    </div>
    <div class="fact-list u-mt-4 reveal">
      <div class="fact-detail"><span class="fact-label">Travel</span>
        <span>Leicester (LE postcodes) is inside the guide-price area — no
          mileage added.</span></div>
      <div class="fact-detail"><span class="fact-label">Space needed</span>
        <span>Any size works — a village hall, a marquee, a garden or a grand
          hotel ballroom.</span></div>
      <div class="fact-detail"><span class="fact-label">Sound limits</span>
        <span>No problem. Ceilidhs peak around 85 dB, and the bands can play
          fully acoustic.</span></div>
      <div class="fact-detail"><span class="fact-label">Experience needed</span>
        <span>None. Every dance is called as we go.</span></div>
    </div>
  </div>
</section>
```

Every fact here is taken from `_reference/facts-sheet.md`. **Never invent one.**

---

## Step 9 — The closing CTA

The template already has it. Just check the year still says 2029 — verify
against the facts sheet.

---

## Step 10 — Link it up

`assets/js/main.js`, in `buildFooter()`, `MOREINFO` list:

```javascript
{ label: "Ceilidh Quick Links",   href: base + "pages/ceilidh-quick-links.html" },
{ label: "Leicester Ceilidh Band", href: base + "pages/leicester-ceilidh-band.html" }
```

⚠️ Watch the commas. Every line needs one **except the last**. The line that was
previously last needs one adding.

**Not the menu.** Six items is already plenty — see `_howto/06-change-the-menu.md`.

---

## Step 11 — The photo

The template borrows the parties hero. Either leave it (honest, if generic) or
prepare a proper one following `_howto/04-swap-a-photo.md`. Five filenames to
change in the `<picture>` block if you do.

---

## Step 12 — Check it

```
http://localhost:8177/pages/leicester-ceilidh-band.html
```

- [ ] Menu and footer appear → the mount divs and script are right
- [ ] Menu links work **from this page** → the `../` depth is right
- [ ] No placeholder capitals left → search the file for `HERE`
- [ ] Footer now shows "Leicester Ceilidh Band" **on other pages too**

Then the phone pass:

```
http://localhost:8177/_phone.html?p=pages/leicester-ceilidh-band.html
```

Work `_checklists/phone-qa.md`. Two minutes.

---

## Step 13 — Roll the cache-buster

You changed `main.js` in step 10. **That means rolling.**

```bash
OLD=50; NEW=51
grep -rl "b=$OLD" index.html pages/ | xargs sed -i '' "s/b=$OLD/b=$NEW/g"
grep -rn "b=$OLD" index.html pages/ assets/js/
```

That last line must print **nothing**.

---

## Step 14 — Ship it

```bash
git add -A
git commit -m "Add a Leicester ceilidh band page and link it from the footer"
git push
```

Then wait for Railway.

---

## Step 15 — Check it live

**Private window.** Your normal browser will show you the old version and let
you believe it worked.

- [ ] The page loads at its real address
- [ ] The footer link appears on the home page and goes to it
- [ ] F12 → Console shows no red errors
- [ ] It looks right on your actual phone

---

## Step 16 — Tell Google

- Add the page to `sitemap.xml` (see `13-seo-and-search.md` — the file may not
  exist yet, and creating it is on the list).
- Paste the URL into Google Search Console → "Request indexing".

Without this, it can take weeks to be found. With it, usually days.

---

## What you just did

| | |
|---|---|
| Files created | 1 |
| Files edited | 1 (`main.js`) + every page (the roll) |
| Rules followed | Copy don't invent · link it or it's invisible · roll the number · check the phone · private window |
| Time | About 45 minutes, first time. Fifteen after that. |

Every other recipe in `_howto/` is a slice of this one.
