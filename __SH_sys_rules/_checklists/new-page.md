# New page checklist

## The file

- [ ] It's in `pages/` (or `pages/blog/` if it's a post).
- [ ] Filename is lowercase with hyphens, no spaces, no capitals, no apostrophes.
- [ ] The filename matches what the page is about.

## The head

- [ ] `<title>` is filled in and ends with `| Schuggies-Ceilidhs`.
- [ ] `<meta name="description">` is a real sentence, roughly 150 characters.
- [ ] `canonical` points at this page's real address.
- [ ] `og:title` is filled in.
- [ ] The `?b=` numbers match the rest of the site.
- [ ] The number of `../` is right for how deep the page sits.

## The page

- [ ] Exactly **one** `<h1>`.
- [ ] Headings go in order — `h1`, then `h2`, then `h3`. No skipping.
- [ ] Every image has `width`, `height` and a real `alt`.
- [ ] Every section uses an existing pattern from `_examples/`.
- [ ] The page **ends with a call to action**.
- [ ] No placeholder text left anywhere. Search the file for "LOREM" and for
      capitals you meant to replace.

## The plumbing

- [ ] `<div id="site-header-mount"></div>` is there.
- [ ] `<div id="site-footer-mount"></div>` is there.
- [ ] The `main.js` script line is at the bottom — and it's the **only** script.

## Linked from somewhere

- [ ] Added to `NAV`, `EXPLORE` or `MOREINFO` in `main.js`.
      **A page nobody links to is invisible.**
- [ ] Blog post? Also added to `pages/blogs.html` and
      `pages/recent-articles.html`.

## Checked

- [ ] Opens in the browser, menu and footer appear.
- [ ] Menu links work **from this page** (test the `../` depth).
- [ ] Passed the phone QA pass — `phone-qa.md`.
- [ ] The new link appears on other pages and goes to the right place.
