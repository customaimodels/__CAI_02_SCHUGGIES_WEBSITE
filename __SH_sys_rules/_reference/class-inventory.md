# Class Inventory

Every reusable class on the site, grouped by job. **Check here before inventing
anything** — nine times out of ten it already exists.

---

## Page structure

| Class | What it does |
|---|---|
| `section` | A full-width horizontal band |
| `section--sage` | …with a soft green background |
| `section--ink` | …dark. Use sparingly |
| `section--paper2` | …a subtle off-white shift |
| `section--natural` / `--moss` | …textured backgrounds |
| `section--tight` | Less vertical space |
| `section--closing` | The final band before the footer |
| `section--flush-top` | No gap above |
| `section--hero-pad` | Extra top padding when there's no hero |
| `container` | Keeps content off the screen edges. **Every section needs one** |
| `container--tight` | Narrower — short centred statements |
| `container--narrow` | Narrower still |
| `container--reading` | Narrowest — long text, blog posts |
| `container--cards` | Sized for card grids |
| `full-bleed` | Break out to the full screen width |

## Columns

| Class | What it does |
|---|---|
| `grid` | The base grid — one column on a phone |
| `grid-2` | Two columns from 720px |
| `grid-3` | Three columns from 900px |
| `grid--below-intro` | Extra space above, when following a section intro |
| `split` | Two columns from 860px — text beside a photo |
| `split--wide-left` | …with a wider left column |
| `stack` | Vertical stack with even spacing |

## Headings and text

| Class | What it does |
|---|---|
| `eyebrow` | The small label above a heading |
| `eyebrow--sage` | …in sage, for dark backgrounds |
| `section-label` | An alternative small label |
| `section__intro` | Wrapper for eyebrow + heading + sentence |
| `lead` | Larger intro paragraph |
| `prose` | Long-form text — blog posts, guides |
| `muted` | Quiet grey text |
| `u-soft` | Softened text |
| `text-center` | Centre it |
| `statement-text` | Large standalone statement |

## Buttons

| Class | What it does |
|---|---|
| `btn` | Required on every button |
| `btn--chat` | **Green. "Book a Chat" only** |
| `btn--primary` | Burgundy. General main action |
| `btn--sage` | Sage. Supporting action |
| `btn--ghost` | Outlined |
| `btn--light` | For dark backgrounds |
| `btn--on-dark` | Pair with `btn--ghost` over photos |
| `btn--block` | Full width |
| `btn-row` | Wraps a group of buttons |
| `btn-row--center` | …centred |
| `btn-row--start` | …left-aligned |

## Content blocks

| Class | What it does |
|---|---|
| `card` + `card__body` | A boxed item |
| `card__media` | A photo at the top of a card (4:3) |
| `card__tag` | A small label on a card |
| `feature` + `feature__icon` | A tile with a tick — short selling points |
| `steps` + `step` + `step__num` | Numbered process |
| `fact-list` + `fact-detail` + `fact-label` | Label-and-answer practical details |
| `check-list` | A tick list |
| `link-list` | A plain list of links — blog indexes |
| `note-card` | A highlighted aside |
| `detail-card` | A denser info box |
| `service-panel` | The big clickable panels |
| `cta-strip` | The closing call-to-action block |
| `badge-note` | **The yellow locked-prices pill** |
| `pill` / `pill-row` | Small rounded labels |

## FAQ

| Class | What it does |
|---|---|
| `acc` | One question-and-answer unit |
| `acc__q` | The clickable question (must be a `<button>`) |
| `acc__a` + `acc__a-inner` | The answer. **Both divs are required** |
| `faq-group` | A heading that groups questions |

## Reviews

| Class | What it does |
|---|---|
| `quote-feature` | One prominent review |
| `quote-rail` | Two or three quieter ones |
| `quote` + `quote__who` + `quote__stars` | Individual quote parts |
| `overlay-quote` | A quote over a photo |

## Images

| Class | Shape |
|---|---|
| `imgframe--tall` | 4:5 |
| `imgframe--wide` | 16:10 |
| `imgframe--square` | 1:1 |
| `imgframe--stamp` | Small, framed |
| `media-frame` | General media wrapper |
| `image-pair` | Two photos, offset |
| `video-wrap` | 16:9 video embed |
| `grain` | Texture overlay for heroes |
| `scrim` | Darkening layer so text stays readable over a photo |

## Hero

| Class | What it does |
|---|---|
| `hero` | Full-height hero — home page |
| `hero--short` | Shorter — every other page |
| `hero__media` | The photo layer |
| `hero__inner` | The text layer |
| `hero__sub`, `hero__def` | Supporting lines |
| `hero__badges` + `hero__badge` | The stat badges |

## Forms

| Class | What it does |
|---|---|
| `form` | The form wrapper |
| `field` | One label-and-input pair |
| `form-status` | The "thanks, message sent" line |

## Prices

| Class | What it does |
|---|---|
| `pg`, `pg-grid`, `pg-card` | The price-guide banner |
| `pg-card__name`, `pg-price`, `pg-tier`, `pg-note` | Its parts |
| `price-card` | A standalone price card |
| `price-card--featured` | …highlighted |

## Built automatically — never write these yourself

`site-header`, `topbar`, `nav`, `mobile-nav`, `site-footer`, `footer-grid`,
`footer-links`, `wa-float`, `to-top`, `brand`, `social-row`, `newsletter`.

These are generated by `main.js`. Writing them into a page by
hand will produce duplicates.

## Spacing utilities

`u-mt-1` … `u-mt-4` (space above) · `u-mb-1` … `u-mb-4` (space below) ·
`u-m0` (none) · `u-mt-auto` · `u-gap-1`

## Behaviour

| Class | What it does |
|---|---|
| `reveal` | Fades in on scroll. Put on big blocks, not every paragraph |
| `is-relative` | Positioning helper |
