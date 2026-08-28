# How to add a blog post

The easiest job on the site. About ten minutes.

---

## Step 1 — Copy the template

Copy `_templates/page-blog-post.html` into `pages/blog/` and rename it to match
your title:

Title: *6 Ways to Keep Kids Entertained at a Wedding*
Filename: `pages/blog/6-ways-to-keep-kids-entertained-at-a-wedding.html`

Lowercase, hyphens, no apostrophes, no capitals. It becomes the web address.

---

## Step 2 — Change the title in three places

They must all match:

```html
<title>6 Ways to Keep Kids Entertained at a Wedding | Schuggies-Ceilidhs</title>
```
```html
<meta name="description" content="Your one-sentence summary for Google.">
```
```html
<h1>6 Ways to Keep Kids Entertained at a Wedding</h1>
```

---

## Step 3 — Write

Everything goes between `<div class="prose reveal">` and its closing `</div>`.

- A paragraph is `<p>Your words here.</p>`
- A sub-heading is `<h2>1. Give them a job</h2>`
- Bold is `<b>like this</b>`, italic is `<em>like this</em>`
- A link is `<a href="../prices.html">see my prices</a>`
  (note the `../` — blog posts are two folders deep)

**Every paragraph needs its own `<p>` tags.** A blank line on its own does
nothing in HTML.

Emojis are fine in blog posts — you already use them and they suit the voice.
Keep them out of headings and buttons.

---

## Step 4 — Add a photo (optional)

```html
<div class="imgframe imgframe--wide u-mt-3 u-mb-3">
  <img src="../../assets/images/your-photo.webp" width="1600" height="1000"
       alt="Describe what's in the photo" loading="lazy">
</div>
```

Three `../` here — blog posts are two levels down. See `04-swap-a-photo.md` for
getting the photo file ready first.

---

## Step 5 — End with a call to action

Never let a post dead-end. The template already has this at the bottom — keep it:

```html
<section class="section section--closing"><div class="container"><div class="cta-strip reveal">
  <h2>Fancy a ceilidh at your wedding?</h2>
  <p>Every dance called, prices locked until 2029.</p>
  <div class="btn-row btn-row--center">
    <a class="btn btn--chat" href="https://calendly.com/schuggies-ceilidhs/ceilidh-chat-how-a-ceilidh-will-work-for-your-wedding" target="_blank" rel="noopener">Book a Chat</a>
  </div>
</div></div></section>
```

---

## Step 6 — Link it from the blog lists

**This is the step people forget.** Add your post to:

- `pages/blogs.html` — the full archive.
- `pages/recent-articles.html` — if it's recent, and it is.

Copy an existing line in those files and change the filename and title.

---

## Step 7 — Check and deploy

- [ ] Opens in the browser, header and footer present.
- [ ] The "← All blogs" link at the top works.
- [ ] Reads well on a phone — no wall of unbroken text.
- [ ] It appears on the blogs page and Recent Articles.

You did **not** change CSS or JS, so **no cache-buster roll needed** — a brand
new file has no old copy to bust. Just commit and push.
