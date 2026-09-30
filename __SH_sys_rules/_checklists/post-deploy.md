# Post-deploy checklist

Run this once Railway has finished building. **Use a private/incognito window** —
your normal browser keeps its own copies and will lie to you.

## Did it actually deploy?

```bash
SITE=https://www.schuggies-ceilidhs.co.uk
curl -sI "$SITE/assets/js/main.js?b=<your new number>" | head -1
curl -sI "$SITE/api/health" | head -1
for p in /_SH_data_in/ /README.md /.git/config /server.js; do curl -sI "$SITE$p" | head -1; done
```

- [ ] `main.js?b=<your new number>` says `200`.
- [ ] `/api/health` says `200`.
- [ ] All four private paths say `404`. Anything else — stop and fix it first.

## The site

- [ ] Home page loads and looks right.
- [ ] The thing you changed **is actually changed**.
- [ ] One inner page loads and looks right.
- [ ] Same two pages on a real phone.

## Links

- [ ] Menu links all work.
- [ ] Footer links — both columns — work.
- [ ] Nothing points at the old WordPress site.

## The bits that float

- [ ] WhatsApp bubble opens WhatsApp with the right number.
- [ ] Footer links still click — no floater covering them.
- [ ] Scroll-to-top appears and works.

## Under the bonnet

- [ ] Press F12 → Console. **No red errors.**
- [ ] Click Network, reload. **No red 404s.**

---

## If something's wrong

1. Did Railway actually finish?
2. Did you roll the `?b=` number?
3. Are you in a private window?

Nine times in ten it's 2 or 3. If it's a real problem, see
`_howto/09-when-something-breaks.md` — and remember `git revert HEAD` safely
undoes the last push.
