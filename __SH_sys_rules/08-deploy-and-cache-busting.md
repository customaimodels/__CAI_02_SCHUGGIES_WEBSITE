# 08 — Deploy, Cache Busting & Environments

Static site → **Railway** (origin) → **Cloudflare** (edge) →
`schuggies.caitryapps.com`. Cloudflare caches CSS/JS at the edge for hours, so a
change nobody can see is almost always a cache problem, not a code problem.

---

## 1. Assets and `?b=` versioning

CSS, JS and key images are cache-busted with a `?b=<number>` query parameter:

```html
<link rel="stylesheet" href="assets/css/styles.css?b=49">
<script src="assets/js/main.js?b=49"></script>
```

**Current sitewide number: `b=49`.** It is one shared counter, not per-file.

When you change:

- `styles.css` → bump `?b=` in **every** HTML file that links it.
- `main.js` → bump `?b=` in **every** HTML file that loads it.
- Another critical asset (logo, favicon, hero image) → bump **where it is
  referenced**, including inside `main.js`.

**Never reuse an old `?b=` value with new file content.**

Bump across the whole site:

```bash
OLD=49; NEW=50
grep -rl "b=$OLD" index.html pages/ | xargs sed -i '' "s/b=$OLD/b=$NEW/g"
grep -rn "b=$OLD" index.html pages/ assets/js/     # should return nothing
```

---

## 2. Deployment sequence (Railway + Cloudflare)

To avoid poisoning the CDN cache:

1. **Push code** and **wait for the Railway deploy to finish**, so the origin
   actually holds the new file.
2. **Verify on the origin** — hit the Railway URL directly, bypassing Cloudflare,
   and confirm the new bytes are there.
3. **Only then** update `?b=` values and/or purge the relevant Cloudflare entries.

If you bump `?b=` before Railway is done, Cloudflare caches the **old** file
under the **new** key. That is a poisoned cache: it survives a purge of the old
URL and needs yet another bump to escape. This has happened before — it is the
reason the counter is at 49.

---

## 3. No half-deploys

- Do not ship only `main.js`, or only `styles.css`, without the HTML changes that
  go with them. Both files are shared by 60+ pages.
- Any change affecting global layout or nav goes out as one coherent batch:
  HTML page(s) + `styles.css` + `main.js` together.
- A page shipped ahead of the CSS it needs is a broken page for everyone.

---

## 4. Verifying a deploy

```bash
curl -sI "https://schuggies.caitryapps.com/assets/css/styles.css?b=NN" \
  | grep -i 'cf-cache-status\|age\|last-modified'
```

- `cf-cache-status: MISS` on the first hit of a new number is **correct**.
- A `HIT` with a large `age` on a number you just introduced means the cache was
  poisoned — bump again.

---

## 5. Quick post-deploy sanity checklist

Load `index.html` **and** at least one inner page (e.g. `pages/prices.html`), on
desktop and on a real phone. Check:

- [ ] Nav and footer links go to the **new static pages**, not old WordPress URLs.
- [ ] Hero images are sharp, not pixelated.
- [ ] WhatsApp + chatbot floaters are correctly positioned and clickable.
- [ ] Scroll-to-top appears after one viewport and sits above both bubbles.
- [ ] Browser console shows no 404s for CSS/JS/images.

---

## 6. Local preview

```bash
python3 -m http.server 8177     # then http://localhost:8177
```

`_phone.html` is a local-only 390px preview harness, gitignored on purpose — the
repo root is the web root, so committing it would publish a dev tool at
`/_phone.html`. Recreate it from the root README if it goes missing.
