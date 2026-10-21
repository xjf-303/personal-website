# Placeholders

Nothing on this site is real yet. Every photograph, name, figure and sentence
below is a stand-in, and all of it lives in three plain TypeScript files under
`lib/` — there is no CMS and no database to log into.

Work through the four sections in order and the site is yours.

## 1. Photographs — `lib/photos.ts`

Every image is declared in this one file. They currently come from
picsum.photos through the `placeholder()` helper, which returns a stable URL for
a given seed.

To replace one: drop the file into `public/` (e.g. `public/work/kitchen.jpg`),
then set `src` to the path from the public root — `"/work/kitchen.jpg"` — and
correct `width` and `height` to the file's real pixel dimensions. Next.js uses
those two numbers to reserve space before the image arrives, so a wrong aspect
ratio will show as a jump while the page loads.

| Shown | Constant | Seed | Crop | Placeholder size | What belongs here |
| --- | --- | --- | --- | --- | --- |
| Hero, top right | `heroPhoto` | `oren-hero` | 4/5 upright | 1200×1500 | Your strongest single frame. It is also the social-share image until you add `app/opengraph-image.jpg`. |
| Introduction, left | `portrait` | `oren-portrait` | 4/5 upright | 1000×1250 | A picture of you. It does not have to be a formal portrait. |
| Work 1 | `work[0]` | `oren-01` | 3/2 landscape | 1800×1200 | Wide frame, 7 of 12 columns. |
| Work 2 | `work[1]` | `oren-02` | 4/5 upright | 1200×1500 | Upright, 5 columns — sits beside Work 1. |
| Work 3 | `work[2]` | `oren-03` | 4/5 upright | 1200×1500 | Upright, 5 columns. |
| Work 4 | `work[3]` | `oren-04` | 3/2 landscape | 1800×1200 | Wide, 7 columns — sits beside Work 3. |
| Work 5 | `work[4]` | `oren-05` | 16/7 panorama | 2400×1050 | Full width. The one picture that gets the whole page, so give it a frame that earns it. |
| Work 6–8 | `work[5..7]` | `oren-06`…`08` | 1/1 square | 1400×1400 | A row of three squares. Detail shots work well here. |
| Work 9–10 | `work[8..9]` | `oren-09`, `oren-10` | 3/2 landscape | 1800×1200 | Two half-width frames closing the grid. |

Alongside `src`, each entry carries four fields that are also placeholders:

- `alt` — a description for someone who cannot see the photograph. Describe what
  is in the frame, not what the picture is called. This is the one field worth
  taking time over; it is read aloud by screen readers and indexed by search.
- `title`, `place`, `year` — the caption printed under the frame and in the
  lightbox header.

Two layout fields are not placeholders, but you may want to change them:

- `ratio` — the crop the frame reserves. Pick the one nearest your real file.
- `span` — how many of the 12 columns the photo takes from `md` up. The grid is
  only tidy because **each row's spans add up to 12**: 7+5, 5+7, 12, 4+4+4, 6+6.
  If you reorder or add photographs, keep that sum.

Resolution: the 12-column frames are displayed up to 1280px wide on a 2× screen,
so give those a long edge of at least 2000px. Everything else is comfortable at
1600px.

## 2. Words — `lib/site.ts`

| Field | Currently | Notes |
| --- | --- | --- |
| `site.name` | Mara Oren | Appears in the masthead, the page title, the footer and the JSON-LD. |
| `site.role` | Photographer | Shown next to the wordmark and in the hero eyebrow. |
| `site.location` | Lisbon, Portugal | Hero eyebrow, contact column, JSON-LD address. |
| `site.email` | hello@maraoren.com | **Change this first.** It feeds the header link, the hero, every "Enquire" button in the rates, the contact section, the footer and the structured data. |
| `site.url` | https://maraoren.com | Must be the real deployed origin. It sets the canonical URL, the Open Graph tags and the single entry in `sitemap.xml`. |
| `site.description` | Portrait, documentary and editorial… | The search-result and link-preview sentence. Keep it under about 155 characters. |
| `hero.statement` | "I photograph people in the places…" | The one large sentence on the page, and its only `<h1>`. |
| `hero.lede` | Portrait, documentary and editorial work… | Two lines under the statement. |
| `intro.paragraphs` | Three paragraphs | Written in first person: how you started, how you work, what you shoot on. All invented. |
| `intro.subjects` | Portraits, Documentary & reportage, Editorial, Landscape, Weddings | The "What I shoot" list. Delete any you do not want to be asked for. |
| `intro.facts` | Based in / Travels / Shoots on / Working since | Four short facts beside the introduction. |
| `contact.heading` | "Write to me." | |
| `contact.body` | "Tell me roughly what you have in mind…" | |
| `contact.availability` | Currently booking from March 2026 | A date that will go stale — check it when you launch. |
| `contact.subject` | Photography enquiry | Pre-filled subject line on every mailto link. |
| `socials` | Instagram and Are.na, both pointing at the site root | Real URLs, or delete the entries you do not use — the list renders from whatever is left. |
| `nav` | About / Work / Rates / Contact | Only touch these if you rename a section; the `href` must match the section's `id`. |

## 3. Rates — `lib/rates.ts`

**Every figure in this file is invented.** It is laid out to look settled, which
makes it more misleading than obviously-fake copy would be — so go through all
of it before the site is public.

- `ratesLede` — the sentence above the three columns.
- `rates[]` — three tiers: *Portrait session* (From €450), *Editorial &
  commissions* (From €1,200), *Weddings & events* (From €2,400). Each has a
  `name`, `price`, `scope` (the time it buys), a one-line `summary` and four
  `includes` bullets. The delivery times, photograph counts and licensing terms
  in those bullets are all placeholders.
- `addOns` — five line items with prices, including a second photographer at
  €600/day and a 30×40 cm print at €120.
- `ratesNote` — contains two invented commitments: **VAT at 23%** and **a third
  of the fee holds the date**. Check both against how you actually bill.

Currency symbols are written into the strings rather than formatted, so
switching away from euros means editing each `price` and `value`.

Three tiers is a layout decision, not a constraint: the columns come from
`md:grid-cols-3` in `components/rates.tsx`. Two or four will need that number
changed to match.

## 4. Files the site expects but does not have

- `app/opengraph-image.jpg` — 1200×630. Until it exists, link previews fall back
  to the hero placeholder, so the first thing anyone sees when you share the URL
  is a stock photograph.
- `app/icon.svg` and `app/apple-icon.png` — the favicon and home-screen icon.
  Next.js picks both up from the filename alone; no config needed.

## Before it goes public

1. Set `site.url` and `site.email` in `lib/site.ts`.
2. Replace the twelve photographs in `lib/photos.ts`.
3. Replace every figure in `lib/rates.ts`.
4. Add `app/opengraph-image.jpg` and the icons.
5. Delete both entries from `images.remotePatterns` in `next.config.ts` — once no
   `picsum.photos` or `images.unsplash.com` URLs remain, that config is the only
   thing still permitting remote images, and removing it means a forgotten
   placeholder fails loudly in the build instead of quietly shipping.
6. Re-read `contact.availability`; it names a month.
