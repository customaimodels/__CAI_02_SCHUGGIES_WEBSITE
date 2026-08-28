# CSS Conventions

## Single source of truth

All global styling lives in `assets/css/styles.css`. There is one stylesheet and
there will stay one stylesheet. Avoid inline `style` unless it is genuinely
per-instance data (a background image URL, a grid span used once).

## File layout — keep this order

1. `:root` tokens
2. Reset-ish + base elements
3. **PATTERN LAYER** (line ~160) — the reusable components
4. Real-image treatments / natural texture
5. Contact-over-hills section
6. Chatbot widget (`.cbot*`)
7. Ceilidh Price Guide (`.pg*`)
8. **PHONE LAYOUT** — placement rules for ~375–430px
9. **BOTTOM-EDGE CHOREOGRAPHY** — floater stacking
10. **QUIET-LUXURY LAYER** — final overrides

Sections 8–10 override what comes before them by sitting last. Do not append new
rules after the quiet-luxury layer, and do not move these blocks.

## Pattern-first

Reuse what exists before writing anything new. The vocabulary:

- **Layout** — `.container` (+ `--tight`, `--narrow`, `--reading`, `--cards`),
  `.section` (+ `--sage`, `--ink`, `--paper2`, `--natural`, `--moss`, `--tight`,
  `--closing`, `--flush-top`, `--hero-pad`), `.grid`, `.split`, `.stack`,
  `.full-bleed`
- **Content blocks** — `.card`, `.price-card`, `.detail-card`, `.note-card`,
  `.contact-card`, `.service-panel`, `.feature`, `.steps` / `.step`,
  `.fact-list`, `.check-list`, `.link-list`, `.acc` (accordion), `.prose`
- **Type helpers** — `.lead`, `.eyebrow`, `.muted`, `.section-label`,
  `.section__intro`, `.statement-text`, `.quote` / `.quote-feature` / `.quote-rail`
- **Buttons** — `.btn` + `--primary`, `--sage`, `--light`, `--ghost`, `--on-dark`,
  `--block`, `--chat`; rows via `.btn-row`
- **Media** — `.imgframe` (+ `--square`, `--tall`, `--wide`, `--stamp`),
  `.media-frame`, `.image-pair`, `.video-wrap`, `.grain`, `.scrim`

If a design repeats on more than one page, give it a named class here instead of
cloning inline CSS.

## Naming

Loose BEM, as already used: `.block`, `.block__element`, `.block--modifier`.
State classes are `.is-*` (`.is-open`, `.is-visible`, `.is-relative`). Utilities
are `.u-*`. Stick to it.

## Mobile-first

- Base styles are the phone. Scale **up** with `@media (min-width: …)`.
- `@media (max-width: …)` is used only for the deliberate phone-layout and
  bottom-edge blocks near the end of the file.
- Phone-specific behaviour belongs in the PHONE LAYOUT / BOTTOM-EDGE sections,
  not scattered through the file.

## No new breakpoints

In use today: `520 · 560 · 640 · 700 · 720 · 760 · 820 · 860/861 · 900 · 960 ·
1000 · 1120`px. `700px` is the phone/desktop line for the floaters — treat it as
load-bearing. Reuse an existing value unless there is a strong, stated reason.

## Things not to do

- No `!important` — if you need it, the rule is in the wrong section of the file.
- No `z-index` free-for-all. The fixed layer is already assigned: chatbot `130`,
  scroll-to-top `125`, WhatsApp below them. Slot into that, don't invent `9999`.
- No CSS resets or normalise libraries. The small reset at the top is enough.
