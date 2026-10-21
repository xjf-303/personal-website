import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"

import "./globals.css"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { heroPhoto } from "@/lib/photos"
import { site, socials } from "@/lib/site"
import { cn } from "@/lib/utils"

/** Display face. High contrast, used for everything set large. */
const fontHeading = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
})

/** Body and interface. Quiet enough to disappear behind the photographs. */
const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

/** The small tracked-out labels, captions and prices. */
const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.description,
    images: [
      {
        url: heroPhoto.src,
        width: heroPhoto.width,
        height: heroPhoto.height,
        alt: heroPhoto.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
    images: [heroPhoto.src],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1918" },
  ],
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  description: site.description,
  url: site.url,
  email: `mailto:${site.email}`,
  address: site.location,
  sameAs: socials.map((social) => social.href),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={cn(
        "antialiased",
        "font-sans",
        fontSans.variable,
        fontMono.variable,
        fontHeading.variable
      )}
    >
      <body>
        <ThemeProvider>
          <a
            href="#main"
            className="eyebrow sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </ThemeProvider>
        <script
          type="application/ld+json"
          // Static, build-time data — no user input reaches this string.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  )
}
