# When something breaks

**First: nothing is lost.** Every version of every file is saved in git. Anything
can be undone. Take a breath.

---

## The undo button

Ruined a file and want it back as it was?

```bash
git checkout -- pages/weddings.html
```

Want *everything* back to the last saved state? (This throws away all
uncommitted work — be sure.)

```bash
git checkout -- .
```

Already pushed something bad? Don't panic-edit. Undo the last commit as a new
commit, which is safe:

```bash
git revert HEAD
git push
```

---

## Symptom → cause

### The whole page looks like plain text — no colours, no layout

The stylesheet isn't loading. Almost always the path.

- On a page in `pages/`: `../assets/css/styles.css`
- On a blog post: `../../assets/css/styles.css`
- On `index.html`: `assets/css/styles.css`

Count the `../`. That's usually it.

---

### No menu and no footer

`main.js` isn't running, or the mount points are missing. Check the page has
**both** of these:

```html
<div id="site-header-mount"></div>
<div id="site-footer-mount"></div>
```

and the script line at the bottom. If they're all there, press **F12 → Console**
and read the red text — it names the file and line number.

---

### The chat bubble vanished

You almost certainly broke `chatbot.js` with a stray quote mark.

```javascript
a: "He said "brilliant""     ← breaks everything
a: "He said 'brilliant'"     ← fine
```

F12 → Console will point at the line. Or undo the file and start again.

---

### Footer links won't click

The chat panel is invisible but still sitting on top of them. There's a specific
CSS rule that prevents this:

```css
.cbot__panel[hidden] { display: none; }
```

If someone deleted it, put it back. See `07-chatbot-and-floaters.md`.

---

### My change isn't showing on the live site

In order:

1. Did Railway finish building?
2. Did you roll the `?b=` number? (See `08-deploy-a-change.md`.)
3. Are you looking in a private window? Your browser caches too.

Nine times in ten it's 2 or 3.

---

### One page looks wrong, the rest are fine

An unclosed tag on that page — a `<div>` without its `</div>`. Everything after
it goes haywire.

Compare against a page that works. Or paste the file into
`validator.w3.org/nu/` and it'll point straight at the line.

---

### **Every** page looks wrong

You changed `styles.css` and something's broken — a missing `}` will do it.

```bash
git checkout -- assets/css/styles.css
```

Back to normal. Then redo the change more carefully.

---

### The site is completely down

Not your files — that's hosting. Check Railway's dashboard, then Cloudflare's.
Nothing in this folder will fix an outage.

---

## The developer's flashlight

**F12**, then click **Console**. Red text = something broke, and it names the
file and line. Even if it means nothing to you, screenshot it — it tells whoever
helps you exactly what happened.

The **Network** tab shows files that failed to load. Red `404` means a file is
missing or the path is wrong.

---

## When you're stuck

Write down:

1. What you changed.
2. What you expected.
3. What actually happened.
4. A screenshot of the Console.

That's most of the diagnosis done. And remember — `git checkout -- .` puts
everything back to the last good state.
