# 00 — Glossary

Plain-English definitions for every bit of jargon in this folder.

---

**Asset**
Any file that isn't a page: a photo, the style file, the script file. They all
live in `assets/`.

**Attribute**
Extra information inside a tag. In `<a href="prices.html">`, the `href` is an
attribute — it says where the link goes.

**Breakpoint**
A screen width where the layout changes. Our main one is **700px**: below it the
site behaves like a phone, above it like a desktop.

**Cache / cached**
A saved copy. Your visitor's browser and Cloudflare both keep copies of your
files so pages load fast. The downside: after you change something they may keep
showing the old copy. That's what the cache-buster fixes.

**Cache-buster**
The `?b=49` on the end of `styles.css?b=49`. Changing that number makes every
browser and server treat it as a brand-new file. **Roll it whenever you change
the look or behaviour of the site.**

**Class**
A label on an element that tells the style file how to draw it.
In `<div class="card">`, `card` is the class — it makes that box look like a
card. Reusing classes is how the site stays consistent.

**Cloudflare**
The service sitting between your visitors and your website. It makes the site
fast worldwide by keeping copies. See `08-deploy-and-cache-busting.md`.

**CSS**
The language in `styles.css` that controls appearance — colours, sizes, spacing.

**Deploy**
Putting your changes live on the internet.

**Element**
One thing on a page: a heading, a paragraph, a button, an image.

**Favicon**
The tiny icon on a browser tab.

**Footer**
The dark block at the bottom of every page. Built automatically by `main.js` —
you never edit it on a page.

**Header / nav**
The bar at the top with the menu. Also built automatically by `main.js`.

**Hero**
The big image-and-headline block at the top of a page. The first thing anyone
sees.

**HTML**
The language pages are written in. It's just words wrapped in tags.

**JavaScript / JS**
The code in `main.js` and `chatbot.js` that makes things *do* things — open the
menu, show the chat, build the footer.

**Meta description**
The sentence Google shows under your page title in search results. It's in the
`<head>` of each page. Worth writing well.

**Origin**
Your actual server (Railway), as opposed to the cached copies Cloudflare serves.

**Railway**
The service that hosts your website's real files.

**Relative path**
A file location written as directions from where you are.
`../assets/images/photo.webp` means "go up one folder, then into assets, then
images". The number of `../` depends how deep the page is.

**Responsive**
Adapting to screen size. One page, looks right on phone, tablet and desktop.

**Slug**
The filename part of a web address. In `pages/weddings.html`, `weddings` is the
slug. Lowercase, hyphens instead of spaces, no capitals or apostrophes.

**srcset / picture**
The mechanism that sends a phone a small photo and a desktop a big one, so
phones load fast and desktops look sharp.

**Tag**
The bit in angle brackets. `<p>` opens a paragraph, `</p>` closes it. Nearly
everything comes in pairs.

**Tap target**
The area a finger can hit. Ours are never smaller than 44 pixels tall — about
the size of a fingertip.

**Token**
A named colour or size, defined once and reused everywhere.
`var(--burgundy)` instead of `#a0263b`. Change the token, change the whole site.

**Viewport**
The visible area of the screen.

**WebP**
A modern image format. Smaller than JPEG at the same quality. We use it first,
with a JPEG as backup for older browsers.
