# Photography portfolio

A one-page portfolio site: introduction, selected work, rates, contact. Built
with Next.js 16 (App Router), Tailwind CSS v4 and shadcn/ui on the `base-lyra`
style.

**All content is placeholder content** — the name, the photographs, the prices
and the biography are invented. [`PLACEHOLDERS.md`](./PLACEHOLDERS.md) lists
every one of them and where to change it.

## Running it

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

| Script | Does |
| --- | --- |
| `pnpm dev` | Dev server with Turbopack. |
| `pnpm build` | Production build. All four routes prerender as static. |
| `pnpm start` | Serves the build. Run `build` first. |
| `pnpm typecheck` | `tsc --noEmit`. |
| `pnpm lint` | ESLint. |
| `pnpm format` | Prettier, including Tailwind class sorting. |

Node 20.9+ is required by Next 16; this was developed on Node 22.

## Where the content lives

There is no CMS. Three files hold everything you would want to edit:

- `lib/site.ts` — name, role, location, email, canonical URL, navigation,
  social links, and the copy for the hero, introduction and contact sections.
- `lib/photos.ts` — every image on the site, with its crop, grid span, alt text
  and caption.
- `lib/rates.ts` — the three rate tiers, the add-on list and the note beneath.

Changing `site.email` in one place updates the header, the hero, all three
"Enquire" links, the contact section, the footer and the structured data.

## How the page is assembled

`app/page.tsx` is five components in a row:

```
components/hero.tsx            the one <h1>, the lead photograph
components/introduction.tsx    01 / Introduction — portrait, bio, what I shoot
components/selected-work.tsx   02 / Selected work — the grid and its lightbox
components/rates.tsx           03 / Rates — three columns, add-ons, caveat
components/contact.tsx         04 / Contact — the email, set large
```

Three shared pieces do most of the work:

- `components/section.tsx` — the frame every section shares: a hairline rule, a
  numbered label, and identical vertical air. That small label *is* the `<h2>`,
  which is what gives the page a readable document outline.
- `components/photo-frame.tsx` — an aspect-ratio box around `next/image`, so
  layout never shifts while a photograph loads.
- `components/reveal.tsx` — a fade-up on first scroll into view. It renders
  visible on the server and stays visible without JavaScript, so it can never
  hide content; anything already on screen at hydration is left alone, and
  `prefers-reduced-motion` turns it off.

The work grid is a 12-column layout where each row's spans sum to 12 (7+5, 5+7,
12, 4+4+4, 6+6). Spans and crops are declared per photograph in `lib/photos.ts`.

## Design notes

The photographs are the only saturated thing on the page. Everything else is a
warm near-monochrome — paper and ink, defined as oklch custom properties in
`app/globals.css` and inverted for dark mode. Light and dark both ship; the
toggle is in the header and the default follows the operating system.

Three typefaces, all from Google Fonts via `next/font`:

- **Instrument Serif** for display — the hero statement, section subheadings,
  prices and the email address. Used at 400 only, never bold.
- **Geist** for body text.
- **Geist Mono** for the small uppercase labels (the `.eyebrow` class in
  `app/globals.css`): section numbers, captions, the lightbox counter.

Corners are square throughout (`--radius: 0rem`), rules are hairlines, and
nothing is boxed in a card. The rates are three equal columns divided by
hairlines with no highlighted tier, because nothing there is being upsold.

## Accessibility

A skip link, one `<h1>` per page, sections tied to their headings with
`aria-labelledby`, real alt text on every photograph, labelled icon buttons, and
muted text checked against WCAG AA (4.8:1 light, 6.0:1 dark). The lightbox and
mobile menu are Base UI dialogs, so focus trapping, Escape and scroll locking
come for free. Motion is suppressed under `prefers-reduced-motion`.

## Deploying

The build is fully static, so any Node host or static-capable platform works.
Two things to set before the first deploy:

1. `site.url` in `lib/site.ts` — it drives the canonical URL, the Open Graph
   tags and `sitemap.xml`.
2. Nothing else. There are no environment variables and no API routes.

While placeholders remain, `next.config.ts` allows remote images from
`picsum.photos` and `images.unsplash.com`. Remove both entries once real files
live in `public/`.
