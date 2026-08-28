# 07 — Chatbot, Logo Icon & Floating Buttons

---

## 1. Chatbot widget — "Ask Schuggie"

- Markup and behaviour: `assets/js/chatbot.js`, injected by `main.js` (never add
  a second script tag for it).
- Styles and placement: the `.cbot*` block in `assets/css/styles.css`.

**Content rules**

- It answers from a **built-in keyword knowledge base** (`KB`) — no server, no
  install, works offline.
- `CONFIG.useOllama` is `false` for the hosted site and **must stay false**: an
  HTTPS page cannot call a local `http://localhost:11434` model, and visitors
  don't have Ollama.
- Everything the bot says about prices, coverage or dates must match
  `05-content-style-voice.md`. When prices change, update **`CONFIG.system` and
  the matching `KB` entries** in the same commit as the FAQs and price page.
- The bot never invents prices or availability. Unsure → point at a chat, the
  phone number, or the Contact page.

---

## 2. Placement

| | Chat bubble | WhatsApp | Scroll-to-top |
|---|---|---|---|
| Desktop (≥701px) | bottom-**left**, 18px | bottom-right | bottom-right, 90px up |
| Phone (≤700px) | bottom-**right**, 90px up | bottom-right, 16px | bottom-right, 162px up |

All three use `env(safe-area-inset-bottom)` so they clear the iPhone home bar.
`z-index`: chatbot `130`, scroll-to-top `125`, WhatsApp below.

---

## 3. Chatbot icon and logo

The button is:

```html
<button class="cbot__fab" aria-label="Open chat">ICON</button>
```

A 58×58px circle filled with `--oxblood`.

**When using a custom logo**

- Set it as a CSS `background-image` on `.cbot__fab`.
- `background-size` must keep the logo **fully inside** the circle — start around
  70%, adjust within 60–80%. Never resize it in markup.
- Hide the inline SVG so only the logo shows:
  `.cbot__fab svg { display: none; }`
- Keep `--oxblood` behind the logo as a subtle plate. It gives depth — don't
  make the button transparent.

---

## 4. 3D feel & motion

Depth comes from three things and no more:

- The rich base colour (or a gradient on it).
- `box-shadow: var(--shadow-md);`
- A small hover lift — `transform: translateY(-2px)`.

No big bounce, no rotation, no pulse. Interactions feel confident and minimal.

---

## 5. WhatsApp + chatbot choreography

The rules that must not break:

- `.wa-float` and `.cbot` never sit on top of interactive content or each other.
  On phones they stack: WhatsApp 16px, chat 90px, scroll-to-top 162px.
- **One focus at a time.** With the chat panel open on a phone, WhatsApp and
  scroll-to-top step aside:
  `body.cbot-open .wa-float { opacity: 0; pointer-events: none; }`
- The footer reserves room for them on phones:
  `.site-footer { padding-bottom: max(6.5rem, calc(env(safe-area-inset-bottom) + 6rem)); }`
  That rule is why bubbles never cover footer links. Do not trim it.
- **The closed panel must stay `display: none`.** `.cbot__panel` is
  `display: flex`, which beats the `[hidden]` attribute — so the explicit
  `.cbot__panel[hidden] { display: none; }` rule is load-bearing. Without it, an
  invisible 353×510 rectangle swallows every click behind it (this is what once
  broke the footer social links).
- These rules live in the **BOTTOM-EDGE CHOREOGRAPHY** block, which must stay
  last in `styles.css` so it overrides the base `.wa-float` / `.cbot` rules.

---

## 6. Adding a new floater

Don't, if it can be avoided — three fixed bubbles is already the ceiling on a
phone screen. If one is genuinely necessary (a newsletter bubble, say), it must:

- Use the same spacing strategy and safe-area inset.
- Slot into the existing `z-index` band — no `9999`.
- Join the `body.cbot-open` hide rule.
- Be declared in the same bottom-edge block.
- Keep the footer's reserved padding sufficient, and keep every bubble's tap
  target clear of the others at 375px.
