/**
 * Every image on the site is declared here.
 *
 * REPLACE ME: all of these point at picsum.photos. Swap `src` for your own
 * file (drop it in `public/` and use e.g. `/work/boatyard.jpg`), then update
 * `width`, `height`, `alt` and the caption fields. See PLACEHOLDERS.md.
 */

/** Deterministic placeholder from picsum.photos — same seed, same photo. */
function placeholder(seed: string, width: number, height: number) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`
}

export type Ratio = "3/2" | "4/5" | "1/1" | "16/7"
export type Span = 4 | 5 | 6 | 7 | 12

export type Photo = {
  src: string
  width: number
  height: number
  /** Describe the picture for someone who cannot see it. Not a title. */
  alt: string
  title: string
  place: string
  year: string
  ratio: Ratio
  /** Columns out of 12 this photo occupies from `md` up. */
  span: Span
}

/** Hero image — the first thing anyone sees. Make it your strongest frame. */
export const heroPhoto: Photo = {
  src: placeholder("oren-hero", 1200, 1500),
  width: 1200,
  height: 1500,
  alt: "A figure standing at the edge of a harbour wall in flat morning light.",
  title: "Harbour wall",
  place: "Setúbal",
  year: "2025",
  ratio: "4/5",
  span: 12,
}

/** Portrait of you, shown beside the introduction. */
export const portrait: Photo = {
  src: placeholder("oren-portrait", 1000, 1250),
  width: 1000,
  height: 1250,
  alt: "The photographer, seated by a window, holding a film camera.",
  title: "Self portrait",
  place: "Lisbon",
  year: "2025",
  ratio: "4/5",
  span: 12,
}

/** The selected work grid, in the order it appears. */
export const work: Photo[] = [
  {
    src: placeholder("oren-01", 1800, 1200),
    width: 1800,
    height: 1200,
    alt: "Two people talking across a kitchen table, late afternoon light on the wall behind them.",
    title: "Kitchen, four o'clock",
    place: "Évora",
    year: "2025",
    ratio: "3/2",
    span: 7,
  },
  {
    src: placeholder("oren-02", 1200, 1500),
    width: 1200,
    height: 1500,
    alt: "A standing portrait of a dockworker in overalls against a corrugated wall.",
    title: "Nuno, boatyard",
    place: "Setúbal",
    year: "2024",
    ratio: "4/5",
    span: 5,
  },
  {
    src: placeholder("oren-03", 1200, 1500),
    width: 1200,
    height: 1500,
    alt: "A child looking out of a bus window, reflections across the glass.",
    title: "The 714",
    place: "Lisbon",
    year: "2024",
    ratio: "4/5",
    span: 5,
  },
  {
    src: placeholder("oren-04", 1800, 1200),
    width: 1800,
    height: 1200,
    alt: "An empty village square at midday, shutters closed, one dog asleep.",
    title: "Siesta",
    place: "Monsaraz",
    year: "2023",
    ratio: "3/2",
    span: 7,
  },
  {
    src: placeholder("oren-05", 2400, 1050),
    width: 2400,
    height: 1050,
    alt: "A wide view of terraced hillsides under low cloud.",
    title: "Terraces, before rain",
    place: "Douro",
    year: "2023",
    ratio: "16/7",
    span: 12,
  },
  {
    src: placeholder("oren-06", 1400, 1400),
    width: 1400,
    height: 1400,
    alt: "Hands resting on a worn workbench, tools laid out in a row.",
    title: "Thirty years",
    place: "Porto",
    year: "2024",
    ratio: "1/1",
    span: 4,
  },
  {
    src: placeholder("oren-07", 1400, 1400),
    width: 1400,
    height: 1400,
    alt: "A laid table after a meal, chairs pushed back, napkins folded.",
    title: "After lunch",
    place: "Alentejo",
    year: "2025",
    ratio: "1/1",
    span: 4,
  },
  {
    src: placeholder("oren-08", 1400, 1400),
    width: 1400,
    height: 1400,
    alt: "A doorway in a whitewashed wall opening onto bright sunlight.",
    title: "Doorway",
    place: "Tavira",
    year: "2022",
    ratio: "1/1",
    span: 4,
  },
  {
    src: placeholder("oren-09", 1800, 1200),
    width: 1800,
    height: 1200,
    alt: "Guests dancing at dusk, string lights above a courtyard.",
    title: "Courtyard, late",
    place: "Sintra",
    year: "2025",
    ratio: "3/2",
    span: 6,
  },
  {
    src: placeholder("oren-10", 1800, 1200),
    width: 1800,
    height: 1200,
    alt: "A couple walking away from the camera along a wet cobbled street.",
    title: "Rua da Bica",
    place: "Lisbon",
    year: "2024",
    ratio: "3/2",
    span: 6,
  },
]

/** Static class maps — Tailwind only sees class names written out in full. */
export const ratioClass: Record<Ratio, string> = {
  "3/2": "aspect-[3/2]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "16/7": "aspect-[16/7]",
}

export const spanClass: Record<Span, string> = {
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
  12: "md:col-span-12",
}

/** `sizes` hint for next/image, derived from how wide the photo actually is. */
export const sizesFor: Record<Span, string> = {
  4: "(min-width: 768px) 30vw, 100vw",
  5: "(min-width: 768px) 38vw, 100vw",
  6: "(min-width: 768px) 46vw, 100vw",
  7: "(min-width: 768px) 54vw, 100vw",
  12: "(min-width: 1280px) 1280px, 100vw",
}
