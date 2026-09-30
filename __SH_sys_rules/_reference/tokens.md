# Tokens — colours and sizes

A "token" is a named value defined once in `assets/css/styles.css` and used
everywhere. Change the token, change the whole site.

**Always use the name, never the hex code.** `var(--burgundy)` not `#a0263b`.

---

## Colours

### Burgundy — the main accent
| Token | Value | Used for |
|---|---|---|
| `--burgundy` | `#a0263b` | Links, primary buttons, price flags, focus rings |
| `--burgundy-dark` | `#702331` | The top bar, hover states |

### Oxblood — deep red
| Token | Value | Used for |
|---|---|---|
| `--oxblood` | `#5e1119` | Was the chat bubble — unused since it was removed (2026-09-26) |
| `--oxblood-dark` | `#400b11` | Its hover state |

### Ceilidh green — the booking journey
| Token | Value | Used for |
|---|---|---|
| `--green` | `#3f6b57` | **"Book a Chat" buttons**, price-guide frame, scroll-to-top |
| `--green-dark` | `#2f5443` | Hover |
| `--green-deep` | `#23443b` | Text on green-tinted panels |

### Sage — soft support
| Token | Value | Used for |
|---|---|---|
| `--sage` | `#c0d5d0` | Section backgrounds, secondary buttons |
| `--sage-dark` | `#9dbcb4` | Borders, hover |

### Neutrals
| Token | Value | Used for |
|---|---|---|
| `--ivory` | `#faf7f3` | The site's background |
| `--paper` | `#ffffff` | Cards, panels |
| `--line` | `#e9e1d8` | Hairlines, card borders |
| `--ink` | `#141414` | Body text, dark bands, footer |
| `--ink-soft` | `#333333` | Slightly softer text |
| `--muted` | `#6b6b6b` | Captions, quiet notes |

### The one exception
| Token | Value | Used for |
|---|---|---|
| `--yellow` | `#fef366` | **The locked-prices pill. Nothing else, ever.** |

---

## Colours that were deliberately removed

Purple, blue-soft, heather, moss, sage-deep. They were strays that pulled the
palette apart. **Do not bring them back**, and do not add new colours without
adding them here first.

(The old `README.md` in the project root still mentions `--purple`. That file is
out of date — this one is right.)

---

## Fonts

| Token | Font | Used for |
|---|---|---|
| `--font-head` | Montserrat | All headings, buttons, labels |
| `--font-body` | Hind | All body text |

One exception: the prices page also loads **Playfair Display** for the big price
numerals. It's not used anywhere else.

---

## Corners

| Token | Value | Used on |
|---|---|---|
| `--radius-sm` | 12px | Inputs, small tiles |
| `--radius` | 14px | General purpose |
| `--radius-lg` | 22px | Cards, panels, quotes, video |
| `999px` | — | Buttons, pills, tags |

**Four options. That's the complete list.**

---

## Shadows

| Token | Feel |
|---|---|
| `--shadow-sm` | A whisper. Hairline separation. |
| `--shadow-md` | Standard lift. Buttons, floating bubbles. |
| `--shadow-lg` | Real elevation. Panels sitting over the page. |

If something looks wrong, step to the next one. Don't invent a fourth.

---

## Spacing

| Token | Use |
|---|---|
| `--sp-xs` … `--sp-xl` | Gaps between things |
| `--sp-section` | The standard gap between page bands |
| `--gutter` | The page's side margin |
| `--maxw` | 1180px — how wide content ever gets |

### Quick nudges you can use in HTML

| Class | Effect |
|---|---|
| `u-mt-1` … `u-mt-4` | Space above, small → large |
| `u-mb-1` … `u-mb-4` | Space below |
| `u-m0` | Remove spacing |
| `u-gap-1` | Small gap inside a group |
| `text-center` | Centre the text |

```html
<h2 class="u-mt-2">A heading with a bit of space above it</h2>
```

**Never write `style="margin-top: 27px"`.** Use a class. If none fits, ask a
developer to add one — that's how the spacing stays consistent.
