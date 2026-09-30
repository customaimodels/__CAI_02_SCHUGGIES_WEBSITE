# Phone QA — the two-minute pass

**Run this before every single deploy.** Most of your visitors are on a phone.

Open `http://localhost:8177/_phone.html?p=index.html` or use your browser's
phone view (F12, then the little phone icon), set to **390px wide**.

---

## 1. The top of the page

- [ ] The headline reads clearly — no pinching, no zooming.
- [ ] The photo is **sharp**, not soft or blocky.
- [ ] You can see the subject of the photo — it isn't hidden behind the text.
- [ ] Buttons sit in a tidy grid, not four cramped pills on one line.
- [ ] **No horizontal scrollbar.** Swipe sideways — the page shouldn't move.

## 2. The bottom of the page

- [ ] Every footer link is tappable — no bubble sitting over one.
- [ ] WhatsApp is in the bottom-right corner, not overlapping anything.
- [ ] Scroll-to-top appears once you've scrolled, above WhatsApp.

## 3. The menu

- [ ] Tap the menu button — the drawer slides in.
- [ ] Every link fits and is easy to tap.
- [ ] The close button is easy to hit and doesn't sit on top of text.
- [ ] If the list is long, it scrolls.

## 4. One inner page

Pick Prices or Weddings.

- [ ] Columns have collapsed to one, cleanly.
- [ ] Photos are sharp.
- [ ] No heading stranded alone at the bottom of a screen.
- [ ] Every button is comfortably tappable with a thumb.

---

**Any "no" = fix it before deploying.**

---

## The three most common problems

1. **A soft, blocky hero photo.** The file is too small. Re-export it bigger —
   it cannot be fixed in code. See `_howto/04-swap-a-photo.md`.
2. **A horizontal scrollbar.** Something is wider than the screen — usually a
   photo without a frame, or a very long unbroken word.
3. **Text hidden behind the photo.** The crop needs nudging, not a new photo.
   See `12-mobile-optimization.md` §2.
