# File Map — which file do I edit?

| I want to change… | Edit this | Recipe |
|---|---|---|
| Words on a page | that page's `.html` file | — |
| My phone number, email, address | `assets/js/main.js` → `SITE` | `_howto/05-change-contact-details.md` |
| WhatsApp number | `assets/js/main.js` → `SITE.whatsapp` | `_howto/05-change-contact-details.md` |
| Calendly booking links | `assets/js/main.js` → `SITE` | `_howto/05-change-contact-details.md` |
| Social media links | `assets/js/main.js` → `SITE.social` | `_howto/05-change-contact-details.md` |
| The menu | `assets/js/main.js` → `NAV` | `_howto/06-change-the-menu.md` |
| Footer links | `assets/js/main.js` → `buildFooter()` | `_howto/06-change-the-menu.md` |
| The top bar message | `assets/js/main.js` → `buildHeader()` | — |
| ~~What the chatbot says~~ | removed 2026-09-26 — `chatbot.js` is gone | `_howto/07-update-the-chatbot.md` |
| Prices | 4 files — see the recipe | `_howto/03-change-a-price.md` |
| A photo | the page + `assets/images/` | `_howto/04-swap-a-photo.md` |
| Colours, fonts, spacing, any styling | `assets/css/styles.css` | ⚠️ developer job |
| Newsletter signup provider | `assets/js/main.js` → `SITE.newsletterAction` | `_howto/05-change-contact-details.md` |
| Amazon affiliate link | `assets/js/main.js` → `SITE.amazonAffiliate` | `_howto/05-change-contact-details.md` |

---

## The whole site, laid out

```
website/
├── index.html ················· the home page
├── pages/
│   ├── prices.html ············ ⚠️ prices live here (twice on the page)
│   ├── weddings.html
│   ├── parties.html
│   ├── corporate.html
│   ├── public-ceilidhs.html ··· "Nottingham Ceilidh Club" in the menu
│   ├── guides.html ············ "Free Wedding Toolkit" in the menu
│   ├── faqs.html ·············· ⚠️ must agree with the price page
│   ├── contact.html ·········· the only page with contact details written in
│   ├── about.html
│   ├── testimonials.html
│   ├── blogs.html ············· the blog archive — link new posts here
│   ├── recent-articles.html ··· the short recent list — link new posts here too
│   ├── …plus regional and offer pages
│   └── blog/ ················· 56 posts, two folders deep
├── assets/
│   ├── css/styles.css ········ ⚠️ the entire site's appearance. One file.
│   ├── js/main.js ············ menu, footer, WhatsApp, contact details, contact form
│   ├── images/ ··············· every photo. If it's not here, it's not on the site.
│   └── fonts/
├── _SH_data_in/ ·············· original high-res photos. Not published, not in git.
└── __SH_sys_rules/ ··········· this handbook
```

---

## Files you should never need to touch

| File | What it is |
|---|---|
| `site.webmanifest` | How the site behaves when saved to a phone home screen |
| `favicon*.png` / `.ico` | The tab icons |
| `apple-touch-icon*.png` | The home-screen icon |
| `tryon.py`, `tryon.log` | A developer's local tool. Not part of the website. |
| `.gitignore` | Tells git which files to skip |

---

## Two folders that look similar

- **`_SH_data_in/`** — your original, full-size photos and source material.
  Not published, and gitignored — never committed. This is your archive.
- **`assets/images/`** — the web-ready versions. **This is the only folder the
  website reads from.**

Photos go from the first to the second by being cropped and exported. See
`_howto/04-swap-a-photo.md`.
