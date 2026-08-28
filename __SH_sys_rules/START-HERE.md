# Start Here, Schuggie

This folder is your manual for the website. You do **not** need to be a
developer to use it.

---

## The one-minute version

Your site is made of three kinds of thing:

1. **Pages** — one file per page. `index.html` is the home page. Everything else
   lives in the `pages` folder.
2. **One style file** — `assets/css/styles.css`. It decides what everything
   *looks* like. Colours, spacing, fonts. All of it. Once.
3. **One script file** — `assets/js/main.js`. It builds the menu, the footer,
   the WhatsApp button and the chat bubble on **every** page automatically.

That third one is the important bit. **You never edit the menu or the footer on
a page.** You edit it once in `main.js` and all 60-odd pages update themselves.

---

## The golden rules

**1. Copy, don't invent.**
Need a new page? Copy a template from `_templates/`. Need a row of three boxes?
Copy the example from `_examples/`. Everything you need already exists
somewhere on the site — find it, copy it, change the words.

**2. Change the words, not the wrapping.**
In `<h2>Fill your dancefloor</h2>`, the bit you change is
*Fill your dancefloor*. Leave the `<h2>` and `</h2>` alone. They're the box the
words sit in.

**3. If you change the look, roll the number.**
Every page ends with something like `styles.css?b=49`. That number tells the
internet "this is new, don't show the old one". If you change how things look
and forget to change the number, **your visitors keep seeing the old version for
hours** and you'll think you broke something. Full instructions in
`_howto/08-deploy-a-change.md`.

**4. Check it on your phone before you're done.**
Most of your visitors are on a phone, planning a wedding in bed at 11pm. If it
looks wrong there, it looks wrong. `_checklists/phone-qa.md` is the two-minute
check.

**5. When in doubt, don't guess — look it up here.**

---

## Where to go for what

| I want to… | Go to |
|---|---|
| **See how a page is built** | `_examples/07-anatomy-of-a-page.html` |
| **Follow one whole job start to finish** | `_howto/10-build-a-page-end-to-end.md` |
| **Know what I must never do** | `14-hard-rules.md` |
| **Look up a price, a number, a claim** | `_reference/facts-sheet.md` |
| **Find the right words** | `_reference/copy-bank.md` |
| **Fix a broken live site, now** | `_checklists/emergency.md` |
| Understand a word I don't know | `00-glossary.md` |
| Add a new page | `_howto/01-add-a-new-page.md` |
| Write a new blog post | `_howto/02-add-a-blog-post.md` |
| Change a price | `_howto/03-change-a-price.md` |
| Swap a photo | `_howto/04-swap-a-photo.md` |
| Change my phone number or email | `_howto/05-change-contact-details.md` |
| Add or remove a menu item | `_howto/06-change-the-menu.md` |
| Fix what the chatbot says | `_howto/07-update-the-chatbot.md` |
| Put my changes live | `_howto/08-deploy-a-change.md` |
| Fix something that broke | `_howto/09-when-something-breaks.md` |
| **See** what a component looks like | `_examples/` — open them in a browser |
| Start a new page from scratch | `_templates/` |
| Look up a colour or a class name | `_reference/` |
| Tick off before going live | `_checklists/` |
| Get found on Google | `13-seo-and-search.md` |
| Brief a photographer | `_reference/photo-brief.md` |

The numbered files (`01`–`14`) are the deeper rules — the *why* behind all of the
above. Read them when you're curious, or when a developer is about to touch the
site and you want them to follow the house style.

---

## Two things that will save you an afternoon

**The site works offline.** Double-click any `.html` file and it opens in your
browser, fully working. You don't need the internet or a server to check
something. (One exception: the pages look for the style file, so keep the folder
structure intact.)

**Nothing is fetched from your old WordPress site.** Every photo, every page,
every word is in this folder. If a photo isn't in `assets/images`, it isn't on
your website. That's deliberate — nothing can break because someone else's
server went down.

---

## If it all goes wrong

One command puts the live site back to how it was before your last change:

```bash
git revert HEAD
git push
```

Nothing you do here is permanent. Every version of every file is saved forever.
The full guide is `_checklists/emergency.md` — but that one command covers most
of it.

---

## What NOT to touch

Unless you know exactly what you're doing:

- `assets/css/styles.css` — the whole site's appearance. One typo here breaks
  every page at once.
- The `<head>` section at the top of a page — that's the SEO and social-sharing
  plumbing.
- Anything inside `< >` brackets when you meant to change words.

None of it is dangerous — it's all in version control and can be undone — but
these are the three places where a small slip has a big, sitewide effect.
