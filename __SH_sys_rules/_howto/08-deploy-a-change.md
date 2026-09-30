# How to put a change live

**Read this once, properly, before your first deploy.** There's one trap here
that wastes an afternoon, and it's easy to avoid once you know.

---

## How your site reaches people

```
Your folder  →  GitHub  →  Railway (the real server)  →  Visitor
```

Nothing sits in between. But every visitor's browser keeps a copy of your style
and script files for up to 5 minutes. That's good — until you change something
and it keeps showing yesterday's copy.

That's what the `?b=` number solves.

---

## The cache-buster

Look at the bottom of any page:

```html
<link rel="stylesheet" href="assets/css/styles.css?b=65">
<script src="assets/js/main.js?b=65"></script>
```

One number, shared by the whole site. **It changes every deploy, so never trust
a number written down — look it up:**

```bash
grep -o 'styles.css?b=[0-9]*' index.html
```

Changing that number makes it a brand new address as far as every browser is
concerned, so it fetches a fresh copy.

### When to roll it

| You changed | Roll it? |
|---|---|
| `styles.css` | **Yes** |
| `main.js` | **Yes** |
| A photo, keeping the same filename | **Yes** |
| Words on a page | No |
| A brand new page | No |
| A photo with a new filename | No |

When in doubt, roll it. Rolling it unnecessarily costs nothing.

### How to roll it

From the website folder:

```bash
OLD=<the number you just found>; NEW=<one higher>
grep -rl "b=$OLD" index.html pages/ | xargs sed -i '' "s/b=$OLD/b=$NEW/g"
grep -rn "b=$OLD" index.html pages/ assets/js/
```

That last line should print **nothing**. If it prints something, those files were
missed — fix them before continuing.

---

## The trap ⚠️

**Never roll the number before your new files are actually on the server.**

If you do, browsers go looking for `styles.css?b=66`, find the *old* file still
sitting there, and keep *that* under the new name. Now the old version is stuck
under the new number — you have to roll to 67 to escape it.

This has happened before. It's part of why the number is at 65 and not 5.

**The safe order, every time:**

1. Commit and push everything together — pages, CSS, JS, and the rolled number,
   in **one** push.
2. Wait for Railway to finish building.
3. Then look at the site.

Pushing it all at once is what keeps you safe: the server gets the new file and
the new number at the same moment.

---

## Putting it live

```bash
git add -A
git commit -m "Describe what changed, in plain words"
git push
```

Then wait. Railway takes a few minutes to build.

---

## Checking it worked

```bash
curl -sI "https://www.schuggies-ceilidhs.co.uk/assets/js/main.js?b=<your new number>" | head -1
curl -sI "https://www.schuggies-ceilidhs.co.uk/api/health" | head -1
```

- Both say `200` — **correct**. It's live.
- Anything else — Railway hasn't finished, or the build failed. Check the
  dashboard.

Then open the site in a **private/incognito window** — your own browser holds
copies too, and will happily lie to you about whether the change worked.

---

## Post-deploy two-minute check

- [ ] Home page and one inner page, on desktop and phone.
- [ ] The thing you changed is actually changed.
- [ ] Menu and footer links work.
- [ ] WhatsApp and back-to-top buttons show and work.
- [ ] No error messages in the browser console (F12 → Console).

---

## If it looks like nothing happened

In order:

1. Did Railway finish building? Check the dashboard.
2. Did you roll the `?b=` number?
3. Are you in a private window?
4. Only then start looking for a real bug.

Nine times out of ten it's number 2 or number 3.
