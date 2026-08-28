# How to swap a photo

---

## The short version

1. Prepare the file properly (this is 90% of the job).
2. Put it in `assets/images/`.
3. Point the page at the new filename.

**Do not** just rename a phone snap and drop it in. A soft hero photo makes an
expensive-looking site look cheap instantly.

---

## Step 1 — Prepare the file

Start from the **biggest original you have**, in `_SH_data_in/`. Never from a
copy already on the web — that's already been squashed once.

In an image editor:

1. **Crop** for the shape you need (see the table below).
2. **Resize** to the target width.
3. **Export** as WebP, high quality. For heroes, also export a JPEG.

| Where it goes | Shape | Export at |
|---|---|---|
| Hero, desktop | wide | 1800px **and** 2560px wide |
| Hero, phone | square | 1200 × 1200 |
| Card image | 4:3 | 1200 × 900 |
| Tall frame | 4:5 | 1200 × 1500 |
| Wide frame | 16:10 | 1600 × 1000 |

**Name it for what it is:** `wedding-first-dance.webp`, not `IMG_4471.webp`.

---

## Step 2 — Composition check

Before you export, look hard at the crop:

- Is anyone's head cut off at the hairline? Re-crop.
- On the **square** phone crop, is the subject still the subject? A wide photo
  cropped square often loses the person entirely.
- Is there a big patch of empty ceiling or floor? Crop it out.
- Faces and the dancefloor are what sells. Not the venue's carpet.

---

## Step 3 — Drop it in

Put the finished files in `assets/images/`. That's the only folder the website
looks in.

---

## Step 4 — Point the page at it

**A simple image** — find the old filename in the page and change it:

```html
<div class="imgframe imgframe--tall">
  <img src="../assets/images/wedding-barn-warm.webp"
       width="1200" height="1500"
       alt="A barn wedding under bunting, Schuggie calling as the floor fills">
</div>
```

Change three things: the filename, the `width`/`height` to match your new file,
and the `alt` to describe the new photo.

**A hero** — there are five filenames to change, because a hero serves a
different file to phones, desktops and older browsers:

```html
<div class="hero__media"><picture>
  <source media="(max-width: 700px)" type="image/webp" srcset="../assets/images/NEW-square.webp">
  <source media="(max-width: 700px)" type="image/jpeg" srcset="../assets/images/NEW-square.jpg">
  <source type="image/webp" srcset="../assets/images/NEW-wide-1800.webp 1800w,
                                    ../assets/images/NEW-wide-2560.webp 2560w" sizes="100vw">
  <img class="hero__img--composed" src="../assets/images/NEW-wide-1800.jpg"
       width="1800" height="900" fetchpriority="high"
       alt="Describe the photo">
</picture></div>
```

Change all five. Miss one and some visitors get the old photo.

---

## Step 5 — Always write the alt text

`alt` is what a blind visitor hears and what Google reads. Describe what's
happening: *"A bride throwing both arms in the air mid-celebration, guests behind
her"* — not *"wedding photo"*.

---

## Step 6 — Check on a phone

This is where photo problems show up.

- [ ] Sharp, not soft or blocky.
- [ ] Subject visible — not hidden behind the headline.
- [ ] No cropped heads.

**If the hero looks soft on a phone, the file is too small.** Go back to step 1
and export bigger. Don't try to fix it in the CSS — you can't.

If the subject is *there* but badly placed, that's a different fix: the crop
position can be nudged in CSS (`object-position`). Ask a developer, or see
`12-mobile-optimization.md` §2.

---

## Step 7 — Deploy

**New filename?** No cache-buster roll needed — nothing has an old copy of a file
that didn't exist before.

**Same filename, new content?** You *must* roll the cache-buster, or people keep
seeing the old picture. This is why new filenames are the safer habit.
