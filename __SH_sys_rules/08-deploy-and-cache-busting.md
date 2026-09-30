# 08 — Deploy, Cache Busting & Environments

Static site → **Railway** (project CAI_02_SCHUGGIES_WEBSITE, service `schuggies`) →
`www.schuggies-ceilidhs.co.uk` (DNS at 20i/StackCP, run by Ash). Railway builds with
Nixpacks and runs `node server.js` (`npm start`); health check `/api/health`. There is
no CDN: files carry `Cache-Control: max-age=300`, so browsers hold CSS/JS for up to
5 minutes. `?b=` beats that. A change nobody can see is almost always a cache
problem — roll `?b=`.

---

## 1. Assets and `?b=` versioning

CSS, JS and key images are cache-busted with a `?b=<number>` query parameter:

```html
<link rel="stylesheet" href="assets/css/styles.css?b=65">
<script src="assets/js/main.js?b=65"></script>
```

It is one shared counter, not per-file.

**Never trust a number written in a document — including this one.** It moves
every deploy. Look up the live value instead:

```bash
grep -o 'styles.css?b=[0-9]*' index.html
```

When you change:

- `styles.css` → bump `?b=` in **every** HTML file that links it.
- `main.js` → bump `?b=` in **every** HTML file that loads it.
- Another critical asset (logo, favicon, hero image) → bump **where it is
  referenced**, including inside `main.js`.

**Never reuse an old `?b=` value with new file content.**

Bump across the whole site:

```bash
OLD=<the number you just found>; NEW=<one higher>
grep -rl "b=$OLD" index.html pages/ | xargs sed -i '' "s/b=$OLD/b=$NEW/g"
grep -rn "b=$OLD" index.html pages/ assets/js/     # should return nothing
```

---

## 2. Deployment sequence (Railway direct)

1. **Push code and the bumped `?b=` in one commit.** The server gets the new file
   and the new number at the same moment.
2. **Wait for the Railway deploy to finish** — health check `/api/health` green.
3. **Verify** (section 4). Nothing to purge: there is no CDN.

If a bumped `?b=` goes live before the file it points at, browsers hold the
**old** file under the **new** key for up to 5 minutes. Bump again to escape.
This has happened before — it is part of why the counter is at 65.

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
SITE=https://www.schuggies-ceilidhs.co.uk
curl -sI "$SITE/assets/js/main.js?b=NN" | head -1      # 200
curl -sI "$SITE/api/health"             | head -1      # 200
for p in /_SH_data_in/ /README.md /.git/config /server.js; do
  curl -sI "$SITE$p" | head -1                         # 404, every one
done
```

- `200` on `main.js?b=NN` and `/api/health` — the deploy is live.
- Any private path answering anything but `404` — stop; the server is publishing
  what it shouldn't.

---

## 5. Quick post-deploy sanity checklist

Load `index.html` **and** at least one inner page (e.g. `pages/prices.html`), on
desktop and on a real phone. Check:

- [ ] Nav and footer links go to the **new static pages**, not old WordPress URLs.
- [ ] Hero images are sharp, not pixelated.
- [ ] WhatsApp + back-to-top floaters are correctly positioned and clickable.
- [ ] Scroll-to-top appears after one viewport and sits above WhatsApp.
- [ ] Browser console shows no 404s for CSS/JS/images.

---

## 6. Local preview

```bash
python3 -m http.server 8177     # then http://localhost:8177
```

`_phone.html` is a local-only 390px preview harness, gitignored on purpose — the
repo root is the web root, so committing it would publish a dev tool at
`/_phone.html`. Recreate it from the root README if it goes missing.
