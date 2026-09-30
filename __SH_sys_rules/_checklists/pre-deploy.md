# Pre-deploy checklist

## Content

- [ ] Prices, event counts and the price-lock year agree across the home page,
      prices page, FAQs, the price blog post **and** the top bar.
- [ ] Any guide price is qualified with the postcode note (NG, LE, DE).
- [ ] Spelling and grammar checked. UK spelling.
- [ ] No placeholder text anywhere.

## Cache-buster

- [ ] Did you change `styles.css`, `main.js`, or replace a photo
      keeping its filename? → **you must roll the `?b=` number.**
- [ ] Rolled it in **every** page:

```bash
# check the current number first — it moves every deploy
grep -o 'styles.css?b=[0-9]*' index.html

OLD=<current>; NEW=<current+1>
grep -rl "b=$OLD" index.html pages/ | xargs sed -i '' "s/b=$OLD/b=$NEW/g"
grep -rn "b=$OLD" index.html pages/ assets/js/
```

- [ ] That last command printed **nothing**.

## Phone

- [ ] Ran `phone-qa.md`. All clear.

## The push

- [ ] Everything goes in **one** push — pages, CSS, JS and the rolled number
      together. Never the number on its own.
- [ ] The commit message says what changed, in plain words.

```bash
git add -A
git commit -m "What changed"
git push
```

---

⚠️ **Never roll the `?b=` number and push it before the matching files.** It
poisons the cache and you'll have to roll again to escape. Full explanation in
`_howto/08-deploy-a-change.md`.
