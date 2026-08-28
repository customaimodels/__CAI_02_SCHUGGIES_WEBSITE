# 14 — The Hard Rules

Everything else in this folder explains and suggests. **This file forbids.**

Each rule below has broken this site before, or would. Each one names what
actually happens when it's broken — not "it's bad practice", but the specific
failure and who sees it.

---

## Absolute — never, under any circumstance

### 1. Never hand-write a header, menu or footer into a page
**What happens:** that page's menu stops matching the other 60. Six months
later nobody remembers which pages are stale, and every menu change means
auditing every file.
**Instead:** edit `NAV` or `buildFooter()` in `main.js`. Once.

### 2. Never bump `?b=` and push it before the files it points at
**What happens:** Cloudflare fetches the new address, finds the *old* file still
on the server, and caches that under the new name. Purging doesn't clear it. You
have to bump again to escape. This has happened here — it's why the counter is
in the forties, not the single digits.
**Instead:** push everything in one commit. Files and number together.

### 3. Never remove `.cbot__panel[hidden] { display: none; }`
**What happens:** the closed chat panel stays in the layout as an invisible
353×510 rectangle over the bottom-left corner, swallowing every click behind it.
Footer links stop working sitewide and nothing on screen explains why.
**This has happened.** Leave the rule alone.

### 4. Never reduce the footer's bottom padding
**What happens:** the floating buttons are fixed to the screen, so at the bottom
of a page they land on the last footer row — the Privacy and Terms links. Both
become unclickable on every page.
**This has happened.** The `padding-bottom: max(6.5rem, …)` rule is why it
doesn't now.

### 5. Never write a raw hex colour in a component
**What happens:** the palette drifts. Six months of "just this once" and there
are four burgundies, none quite matching, and no way to change them all at once.
**Instead:** `var(--burgundy)`. If you truly need a new colour, add it to
`:root` with a comment first.

### 6. Never use yellow for anything but the price-lock pill
**What happens:** the pill stops meaning "this is the special thing" and becomes
decoration.

### 7. Never use the green button for anything but "Book a Chat"
**What happens:** green currently means one thing across the entire site, so
visitors learn it in seconds. Use it for a second purpose and it means nothing.

### 8. Never remove a focus outline
**What happens:** keyboard users — including people who can't use a mouse — lose
the ability to see where they are on the page.
**If it looks wrong on your component, fix the component's padding.**

### 9. Never add a second script tag for the chatbot
**What happens:** `main.js` already injects it. Add another and you get two chat
bubbles stacked on each other.

### 10. Never link to `schuggies-ceilidhs.co.uk` from page content
**What happens:** you send a visitor who found your new site to the old
WordPress one. Everything they need is here.
**Exceptions:** canonical/OG meta tags, Calendly, WhatsApp, social profiles.

---

## Near-absolute — only with a written reason

### 11. Don't invent a new breakpoint
Twelve already exist. A thirteenth for one bug means the next person has thirteen
places to check. Fix it in an existing one.

### 12. Don't invent a new radius or shadow
Four radii, three shadows. If none fits, step to the nearest. "Nearly right and
consistent" beats "exactly right and unique" every single time.

### 13. Don't add a JavaScript library
The whole site is a few kilobytes of plain JS and loads instantly on a phone in
a field with one bar. jQuery, React, a carousel plugin, an animation library —
each one is a permanent tax on every visitor. Solve it with what's here.

### 14. Don't use `!important`
It means the rule is in the wrong section of the stylesheet. Move it instead.

### 15. Don't set a `z-index` outside the existing band
Chat is 130, scroll-to-top is 125, the mobile drawer is 200. Slot in. `9999`
means the next person needs `10000`.

### 16. Don't make the phone hero taller
It's capped at 62% of screen height on purpose. At 88% a 1080px photo is being
stretched to about 2229 device pixels — a 2.1× upscale, which is precisely what
reads as "pixelly". This is the fastest way to make the site look cheap.

### 17. Don't put two form fields side by side on a phone
Unless you have personally tested it at 360px and both are still comfortably
tappable.

### 18. Don't add a fifth hero button
Four is already the ceiling. A fifth means none of them are the primary.

---

## Content rules — these cost money when broken

### 19. Never change a price in fewer than five places
It lives in `prices.html`, `index.html`, `faqs.html`, and **twice** in
`chatbot.js`, plus the top bar in `main.js`.
**What happens:** the bot quotes £877 while the page says £900. The visitor
notices before you do, and they were about to book.

### 20. Never quote a guide price without the postcode note
"From £877" without "East Midlands — NG, LE, DE postcodes" sets an expectation
you then have to walk back on a call. That conversation loses bookings.

### 21. Never let the chatbot invent anything
No prices it hasn't been given, no availability, no promises about dates. If it
doesn't know, it points at a chat. A confident wrong answer is worse than no
answer.

### 22. Never ship placeholder text
Search every new page for capitals you meant to replace before it goes live.

---

## Process rules

### 23. Never deploy without the phone check
Two minutes. `_checklists/phone-qa.md`. Most of your visitors are on a phone;
if you only look at a desktop you are checking the minority case.

### 24. Never trust your own browser after a deploy
It keeps its own copies and will happily show you yesterday's page while telling
you nothing is wrong. **Private window, every time.**

### 25. Never deploy `main.js` or `styles.css` on their own
They're shared by 60+ pages. Ship them with whatever HTML depends on them, or
some pages get a stylesheet that doesn't match their markup.

### 26. Never panic-edit a broken live site
`git revert HEAD` then `git push` puts it back safely. Fix it calmly afterwards.
Editing files at speed on a broken site is how one problem becomes three.

---

## The one rule behind all of them

**Consistency beats cleverness.**

This site looks expensive because everything on it agrees with everything else —
same colours, same corners, same spacing, same voice, same promises. Every
exception is a small crack. Individually they're invisible. Twenty of them and
the site looks like it was built by five people who never spoke.

When you're unsure, the answer is nearly always: *do what the rest of the site
already does.*
