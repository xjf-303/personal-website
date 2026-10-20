/**
 * Every piece of copy on the site lives here.
 *
 * REPLACE ME: all values below are placeholders. See PLACEHOLDERS.md.
 */

export const site = {
  /** REPLACE ME — your name. Used as the wordmark and in page metadata. */
  name: "Mara Oren",
  /** REPLACE ME — one or two words under your name. */
  role: "Photographer",
  /** REPLACE ME — where you are based. */
  location: "Lisbon, Portugal",
  /** REPLACE ME — the address you want people to write to. */
  email: "hello@maraoren.com",
  /** REPLACE ME — the public URL once deployed. Used for canonical + OG tags. */
  url: "https://maraoren.com",
  /** REPLACE ME — one sentence, shown in search results and link previews. */
  description:
    "Portrait, documentary and editorial photography. Available light, 35mm film and digital.",
} as const

export const nav = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#rates", label: "Rates" },
  { href: "#contact", label: "Contact" },
] as const

/** REPLACE ME — your own links, or delete the ones you do not use. */
export const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Are.na", href: "https://are.na" },
] as const

export const hero = {
  /** The page's one <h1>. Keep it short — it is set at display size. */
  statement:
    "I photograph people in the places that shaped them, and the places people leave behind.",
  /** One supporting line under the statement. */
  lede: "Portrait, documentary and editorial work made in available light. Based in Lisbon, working across Europe and North Africa.",
} as const

export const intro = {
  /** REPLACE ME — two or three short paragraphs in your own voice. */
  paragraphs: [
    "I have worked as a photographer for eleven years, first for a regional newspaper and since 2019 on my own. Most of my commissions are portraits and quiet documentary work: a family at home, a boatyard in winter, somebody's last day at a job they held for thirty years.",
    "I shoot in available light almost without exception. That means I arrive early, stay longer than the schedule says, and spend the first half hour not taking pictures at all. The work is better for it, and so is the day.",
    "I use two 35mm film bodies and a digital back, and I print everything I keep. If you would like to see a full series rather than a selection, write to me and I will send one.",
  ],
  /** REPLACE ME — what you actually shoot. */
  subjects: [
    "Portraits",
    "Documentary & reportage",
    "Editorial",
    "Landscape",
    "Weddings",
  ],
  /** Short factual lines, set in small type beside the portrait. */
  facts: [
    { label: "Based in", value: "Lisbon, Portugal" },
    { label: "Travels", value: "Europe & North Africa" },
    { label: "Shoots on", value: "35mm film, digital" },
    { label: "Working since", value: "2015" },
  ],
} as const

export const contact = {
  /** The line above the email address. */
  heading: "Write to me.",
  body: "Tell me roughly what you have in mind, when, and where. A few lines is plenty — I will come back with questions, a quote and the dates I have left.",
  /** REPLACE ME — keep this honest, or delete it. */
  availability: "Currently booking from March 2026.",
  /** Pre-filled subject line for the mailto: links. */
  subject: "Photography enquiry",
} as const
