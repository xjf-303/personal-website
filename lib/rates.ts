/**
 * Rates shown in the "Rates" section.
 *
 * REPLACE ME: the figures, inclusions and currency are placeholders.
 * See PLACEHOLDERS.md.
 */

export type Rate = {
  name: string
  /** Shown at display size. Keep the "From" — it sets the right expectation. */
  price: string
  /** One line under the price: what you get for it, in time terms. */
  scope: string
  summary: string
  includes: string[]
}

/** The line that sits above the three columns. */
export const ratesLede =
  "What a job costs comes down to three things: how long it takes, how far I travel, and where the pictures end up. These three shapes cover most of what I am asked for."

export const rates: Rate[] = [
  {
    name: "Portrait session",
    price: "From €450",
    scope: "Two hours, one location",
    summary:
      "For one person or a family, at home or somewhere that matters to you.",
    includes: [
      "A pre-shoot call to agree the place and time",
      "Two hours of shooting in available light",
      "15 edited photographs, delivered in three weeks",
      "Full resolution files for personal use",
    ],
  },
  {
    name: "Editorial & commissions",
    price: "From €1,200",
    scope: "Day rate, up to eight hours",
    summary:
      "For magazines, brands and agencies. Half days and multi-day shoots quoted on request.",
    includes: [
      "Research call and shot list with your editor",
      "Up to eight hours on location, travel within Lisbon included",
      "Same-day selects, 30 edited photographs in one week",
      "One year of print and digital licensing",
    ],
  },
  {
    name: "Weddings & events",
    price: "From €2,400",
    scope: "Full day, ceremony to late",
    summary:
      "Documentary coverage. No posed group shots unless you ask for them.",
    includes: [
      "A visit to the venue beforehand where possible",
      "Ten hours of coverage; second photographer at €600",
      "250–400 edited photographs in four weeks",
      "A private online gallery your guests can download from",
    ],
  },
]

/** Smaller line items, set as a list under the three columns. */
export const addOns = [
  { label: "Additional edited photograph", value: "€25" },
  { label: "Second photographer", value: "€600 / day" },
  { label: "Fine-art print, 30 × 40 cm", value: "€120" },
  { label: "Extended commercial licensing", value: "Quoted per use" },
  { label: "Travel beyond Lisbon", value: "At cost" },
]

/** The caveat under the table. Keep it plain. */
export const ratesNote =
  "These are starting points rather than a menu. Every job has a different shape, so write to me with what you need and I will send a figure for it. Prices exclude VAT at 23%. A third of the fee holds the date."
