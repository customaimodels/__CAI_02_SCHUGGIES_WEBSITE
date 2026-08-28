# Templates

Ready-to-use starter files. Copy one, rename it, fill it in.

| File | Use for | Goes in |
|---|---|---|
| `page-service.html` | A page selling something — a region, an event type | `pages/` |
| `page-long-form.html` | Mostly text — a guide, an explainer, terms | `pages/` |
| `page-blog-post.html` | A blog post | `pages/blog/` |
| `page-blank.html` | The bare skeleton, when you know what you're building | `pages/` |

---

## How to use one

1. **Copy** the file into the right folder (see the table).
2. **Rename** it — lowercase, hyphens instead of spaces, `.html` on the end.
   `leicester-birthday-ceilidhs.html`, not `Leicester Birthday Ceilidhs.html`.
3. **Fill in** everything written in SHOUTY CAPITALS. That's the placeholder text.
4. **Delete** any section you don't need. Delete from its opening
   `<!-- comment -->` down to the matching `</section>`.
5. **Check** the `?b=` numbers match the rest of the site.
6. **Link to it** from the menu or the footer — see
   `_howto/01-add-a-new-page.md` step 5.

---

## The one difference between them

The blog template uses `../../` in its paths, everything else uses `../`.
That's because blog posts sit two folders deep and the others sit one.

**If you put a blog template in `pages/` by mistake, the page loads with no
styling.** That's the symptom to recognise — see
`_howto/09-when-something-breaks.md`.

---

## What not to change

The `<head>` section has about twenty lines you should leave alone — the icons,
the fonts, the social-sharing tags. Only the five lines marked with a comment
need your attention.

The two `<div id="site-header-mount">` / `site-footer-mount` lines build your
menu and footer. Delete them and the page loses both.
