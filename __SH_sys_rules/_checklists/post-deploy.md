# Post-deploy checklist

Run this once Railway has finished building. **Use a private/incognito window** —
your normal browser keeps its own copies and will lie to you.

## Did it actually deploy?

```bash
curl -sI "https://schuggies.caitryapps.com/assets/css/styles.css?b=50" | grep -i 'cf-cache-status'
```

- [ ] Says `MISS` on the first check. That's correct.
- [ ] If it says `HIT` with a large `age` on a number you just created, the
      cache is poisoned — roll to the next number and push again.

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
- [ ] Chat bubble opens, answers a question, closes.
- [ ] After closing the chat, footer links still click.
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
