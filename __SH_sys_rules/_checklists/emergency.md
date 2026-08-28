# 🚨 Emergency Runbook

**Something is wrong with the live site and you need it fixed now.**

Read the first section. Don't improvise.

---

## Rule zero

**Do not start editing files on a broken site.**

The instinct is to dive in and fix it. Resist it. Almost every "one problem
became three" story starts with someone editing at speed under pressure.

**Put it back first. Diagnose second.**

---

## The 30-second fix

If the site was fine an hour ago and is broken now, undo the last change:

```bash
git revert HEAD
git push
```

This creates a **new** commit that reverses the last one. Nothing is lost, no
history is rewritten, and it's completely safe.

Wait for Railway. The site is back.

**Now** work out what went wrong, calmly, on your own machine.

---

## Severity — what to do first

### 🔴 Site completely down

1. Try it on mobile data, not your wifi. Still down?
2. Check the Railway dashboard — is the app running? Did the last build fail?
3. Check the Cloudflare dashboard.
4. **If Railway shows a failed build, the previous version is still live** —
   so a total outage is usually hosting, not your files. Nothing in this folder
   will fix it. Contact the host.

### 🔴 Site loads but looks completely broken — no colours, no layout

The stylesheet isn't loading, on every page. Almost always `styles.css`.

```bash
git checkout -- assets/css/styles.css
git add -A && git commit -m "Restore stylesheet" && git push
```

### 🔴 Wrong prices showing

**Treat as urgent.** Someone could book at a price you don't honour.

1. `git revert HEAD` and push — get the old prices back up.
2. Then redo it properly with `_howto/03-change-a-price.md`, all five places.

### 🟠 One page broken, rest fine

Not an emergency. Restore that one file:

```bash
git checkout -- pages/the-broken-page.html
```

### 🟠 Chat bubble gone

Almost certainly a stray quote mark in `chatbot.js`.

```bash
git checkout -- assets/js/chatbot.js
```

Then redo the edit, using single quotes inside answers. See `_howto/07-update-the-chatbot.md`.

### 🟠 Footer links unclickable

The chat panel is invisibly covering them. Check this rule still exists in
`styles.css`:

```css
.cbot__panel[hidden] { display: none; }
```

### 🟡 A change isn't showing

**Usually not a fault at all.** In order:

1. Has Railway finished building?
2. Did you roll the `?b=` number?
3. Are you in a private window?

Nine times in ten it's 2 or 3. See `_howto/08-deploy-a-change.md`.

---

## The undo commands, in order of force

| Situation | Command |
|---|---|
| One file, not yet committed | `git checkout -- path/to/file.html` |
| Everything, not yet committed | `git checkout -- .` |
| Last commit, already pushed | `git revert HEAD` then `git push` |
| Several commits back | `git revert <hash>` then `git push` |
| Just looking at what changed | `git diff` |
| Which commit broke it | `git log --oneline -10` |

⚠️ **Never use `git reset --hard` on anything already pushed.** It rewrites
history and can lose work permanently. `git revert` does the same job safely.

---

## Finding the commit that broke it

```bash
git log --oneline -10
```

Find the last one you know was fine. Then:

```bash
git diff <that-hash> HEAD --stat
```

That's everything that's changed since. The problem is in there.

---

## Diagnosing properly

**F12 → Console.** Red text names the file and line number. Even if it means
nothing to you, screenshot it — it's most of the diagnosis.

**F12 → Network**, then reload. Red `404`s are files that failed to load —
usually a wrong path or a missing image.

---

## Before you call for help, write down

1. What changed, and when
2. What you expected
3. What actually happens
4. Which pages — one, or all of them?
5. Which devices — phone, desktop, or both?
6. A screenshot of the Console

That turns an hour of back-and-forth into ten minutes.

---

## After it's fixed

Ask why it wasn't caught:

- Skipped the phone check? → run it every time, it's two minutes
- Skipped the private-window check? → same
- The docs were wrong or unclear? → **fix the doc**. That's the whole point of
  this folder.

---

## Keep these to hand

| | |
|---|---|
| Live site | schuggies.caitryapps.com |
| Repo | github.com/vargasyeriko/schuggiesweedings |
| Host | Railway |
| CDN | Cloudflare |
| Undo the last push | `git revert HEAD && git push` |

---

**The site is a set of text files in version control. Every version ever saved is
recoverable. Nothing you can do here is permanent — which means nothing here is
worth panicking about.**
