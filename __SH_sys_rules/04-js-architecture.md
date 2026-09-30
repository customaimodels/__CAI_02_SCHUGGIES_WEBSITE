# JavaScript Architecture

One file, a plain IIFE in strict mode, no dependencies.

## `main.js` responsibilities

- **Builds** the top bar, header + nav, mobile drawer, footer, WhatsApp floater
  and scroll-to-top button, as DOM strings injected on load.
- **Wires** the mobile drawer, FAQ accordions, scroll reveal (`.reveal`), the
  contact form, and click tracking. The contact form has no backend: it opens
  the visitor's email app via `mailto:` to `info@schuggies-ceilidhs.co.uk`,
  pre-filled, and never claims "sent" — the visitor presses send.
- **Holds the single config**: the `SITE` object at the top — phone, email,
  WhatsApp, Calendly links, postal address, social URLs, newsletter action,
  Amazon affiliate link. Change a phone number once, it changes on every page.

Two values in `SITE` are deliberate placeholders: `amazonAffiliate` and
`newsletterAction`. While empty, the footer renders a working fallback. Paste the
real URL in and the real markup appears sitewide — don't rebuild those blocks by
hand.

## Path handling

`main.js` computes `base` from `location.pathname` so links work at depth 0
(`index.html`), depth 1 (`pages/`) and depth 2 (`pages/blog/`). Any new
generated link must go through `base` / `url()`. A literal `../` in generated
markup breaks the 56 blog posts.

## Do not

- **Do not fetch external layout or templates.** Everything stays DOM-string
  based so the site still works from `file://` and from any static host.
- **Do not add libraries.** No jQuery, no framework, no bundler. If a feature
  needs a library, it probably doesn't belong on this site.
- **Do not hand-write a header or footer into a page.** It will fall out of sync
  the first time the nav changes.
- **Do not trigger `alert()` / `confirm()`.**

## Tracking

Click tracking runs through the `track()` helper, which pushes to
`window.dataLayer`. Recognised kinds today: `book_calendly`, `call_phone`,
`email_click`, `whatsapp_click`.

If you add a new conversion action, wire it through `track()` — never an ad-hoc
`console.log`, never a second analytics path.

## `chatbot.js` — removed

Removed on 2026-09-26. Backup in `../dta/_off_massie/`. See
`07-chatbot-and-floaters.md`.
