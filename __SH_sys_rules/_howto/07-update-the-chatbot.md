# How to update the chatbot

The chat bubble is "Ask Schuggie". It answers from a list of questions and
answers **you** control. No AI service, no monthly fee, no internet needed — it
works even if everything else is down.

Everything lives in `assets/js/chatbot.js`.

---

## The three parts

### 1. The greeting — what it says when opened

```javascript
greeting: "Hi, I'm Schuggie 👋 Fancy a ceilidh but not sure where to start?
           Ask me anything, or tap a question below.",
```

### 2. The brain — a summary of the facts

```javascript
system:
  "You are the friendly booking assistant for Schuggies-Ceilidhs...
   Ceilidh DJ from £877, live band from £1,597, Whole of the Moon from £4,927;
   prices locked to 2029; every dance is called; UK-wide incl. Channel Islands;
   hosting since 2008, 550+ events, 220+ weddings..."
```

**Keep this current.** When a fact changes on the site, change it here too.

### 3. The answer bank (`KB`) — the actual answers

Each entry is a list of trigger words plus one answer:

```javascript
{ keys: ["price","cost","how much","expensive","fee","quote","budget","£"],
  a: "Here's the guide pricing (locked until 2029):\n• Ceilidh DJ set — from £877..." },
```

If a visitor's message contains any of the `keys`, they get that answer.

---

## To add a new question

Copy an existing entry and change both halves. Put it before the last one, and
mind the comma:

```javascript
{ keys: ["parking","park","car park","transport"],
  a: "Most venues sort parking themselves, but I'll always check access for my
      gear beforehand — it's part of the planning chat." },
```

**Choosing keys:** think of every way someone might phrase it, including
misspellings and shorthand. "how much", "cost", "price", "££" are all the same
question to a human. Five to ten keys per entry is about right.

---

## To change an answer

Find the entry and rewrite the `a:` text. Rules:

- Keep it short — two to four sentences. It's a chat bubble, not a page.
- `\n` starts a new line. `\n•` makes a bullet.
- Sound like you, not like a brochure.
- **Never invent a price or promise a date.** If unsure, point at a chat.

---

## Watch out

**Quote marks inside your text will break it.** This is the one thing that
genuinely stops the chat from working:

```javascript
a: "He said "brilliant" to me"     ← BROKEN
a: "He said 'brilliant' to me"     ← fine
```

Use single quotes inside. If the chat bubble stops appearing after you edit,
this is almost certainly why — see `09-when-something-breaks.md`.

---

## The Ollama setting — leave it alone

```javascript
useOllama: false,
```

**This must stay `false` on the live site.** It's for connecting a local AI model
on your own computer. Your visitors don't have one, and a secure website can't
reach it anyway. Turning it on gains nothing and risks errors.

---

## The rule that matters most

**The chatbot must never contradict your website.** If the FAQ page says one
thing and the bot says another, you look careless at exactly the moment someone
is deciding to book.

When you change a price or a promise, change it in all five places at once —
see `03-change-a-price.md`.

---

## Check

- [ ] Open the chat bubble. Does it appear and greet you?
- [ ] Ask the question you just added, in your own words.
- [ ] Ask "how much?" — does it match the price page?
- [ ] Close the chat. **Do the footer links still work?**
      (If not, something's broken — see `07-chatbot-and-floaters.md`.)

---

## Deploy

You changed a JS file — **roll the cache-buster**. See `08-deploy-a-change.md`.
