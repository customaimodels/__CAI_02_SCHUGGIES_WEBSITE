# Breakpoints — where the layout changes

A "breakpoint" is a screen width at which the layout rearranges itself. The
site is built phone-first: the plain design *is* the phone design, and wider
screens get extra columns added.

---

## The one that matters most

### 700px — the phone/desktop line

Below 700px the site is in "phone mode":

- The hero gets shorter (and its photo switches to the square crop).
- The chat bubble moves from bottom-left to bottom-right.
- The three floating buttons stack up the right-hand edge.
- Hero buttons arrange themselves two-by-two.

**If you're testing one width only, test below this.**

---

## All of them

| Width | What happens |
|---|---|
| **380px** | Very small phones — buttons go one per line |
| **520px** | Minor spacing adjustments |
| **640px** | Minor layout adjustments |
| **700px** | **The big one** — phone mode, floaters, hero height |
| **720px** | Two-column grids (`grid-2`) kick in |
| **760px** | Minor adjustments |
| **820px** | Minor adjustments |
| **859 / 860px** | `split` sections go side by side; the "why choose me" order flips |
| **900px** | Three-column grids (`grid-3`) kick in; touch-target padding stops |
| **960px** | Minor adjustments |
| **1000px** | Full desktop |
| **1120px** | Widest layout adjustments |

**Do not invent new ones.** Twelve is already plenty. If something looks wrong at
an odd width, the fix is nearly always in an existing breakpoint.

---

## Widths worth testing

| Device | Width | Why |
|---|---|---|
| iPhone SE / mini | **375px** | The tightest real phone |
| iPhone 14/15 | **390px** | The most common visitor |
| Larger iPhones | **430px** | Common |
| iPad portrait | **768px** | Note: `split` sections are **still stacked** here — that's intended |
| iPad landscape | **1024px** | Full desktop layout |
| Desktop | **1280px+** | |

---

## Testing at 390px

```
python3 -m http.server 8177
```

then open:

```
http://localhost:8177/_phone.html?p=index.html,pages/prices.html
```

That shows each page in a real 390px-wide frame — genuine phone behaviour, not a
shrunken screenshot. Comma-separate as many pages as you like; add `&y=1200` to
scroll them all down.

---

## One thing that catches people out

At iPad portrait (768px), text-and-photo `split` sections are **still stacked**
one above the other. They don't go side by side until 860px.

That's a deliberate choice — side by side at 768px makes both columns too narrow
to read. It isn't a bug. Don't "fix" it.
