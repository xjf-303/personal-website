"use client"

import * as React from "react"
import { Dialog } from "@base-ui/react/dialog"
import { Cancel01Icon, Menu02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Container } from "@/components/container"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { nav, site, socials } from "@/lib/site"

const mailto = `mailto:${site.email}`

function SiteHeader() {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/85 supports-backdrop-filter:backdrop-blur-md"
          : "border-transparent bg-background"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          className="group flex items-baseline gap-3 outline-offset-4"
          aria-label={`${site.name} — back to top`}
        >
          <span className="font-heading text-lg leading-none">{site.name}</span>
          <span className="eyebrow hidden text-muted-foreground sm:inline">
            {site.role}
          </span>
        </a>

        <div className="flex items-center gap-1 md:gap-6">
          <nav aria-label="Sections" className="hidden md:block">
            <ul className="flex items-center gap-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="eyebrow text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={mailto}
            className="eyebrow hidden border-l border-border pl-6 text-foreground underline decoration-border decoration-1 underline-offset-4 transition-colors hover:decoration-foreground lg:inline-block"
          >
            {site.email}
          </a>

          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="text-muted-foreground hover:text-foreground md:hidden"
          >
            <HugeiconsIcon
              icon={Menu02Icon}
              strokeWidth={1.5}
              className="size-4"
            />
          </Button>
        </div>
      </Container>

      <MobileMenu open={open} onOpenChange={setOpen} />
    </header>
  )
}

function MobileMenu({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-background/80 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-sm md:hidden" />
        <Dialog.Popup className="fixed inset-x-0 top-0 z-50 flex max-h-dvh flex-col overflow-y-auto border-b border-border bg-background pb-10 transition-[opacity,translate] duration-200 ease-out outline-none data-ending-style:-translate-y-2 data-ending-style:opacity-0 data-starting-style:-translate-y-2 data-starting-style:opacity-0 md:hidden">
          <Container className="flex h-16 shrink-0 items-center justify-between">
            <Dialog.Title className="eyebrow text-muted-foreground">
              Menu
            </Dialog.Title>
            <Dialog.Close
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="text-muted-foreground hover:text-foreground"
                />
              }
            >
              <HugeiconsIcon
                icon={Cancel01Icon}
                strokeWidth={1.5}
                className="size-4"
              />
              <span className="sr-only">Close menu</span>
            </Dialog.Close>
          </Container>

          <Container>
            <nav aria-label="Sections">
              <ul className="border-t border-border">
                {nav.map((item) => (
                  <li key={item.href} className="border-b border-border">
                    <a
                      href={item.href}
                      onClick={() => onOpenChange(false)}
                      className="block py-4 font-heading text-3xl leading-none"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-10 space-y-3">
              <a
                href={mailto}
                onClick={() => onOpenChange(false)}
                className="block font-heading text-xl leading-none underline decoration-border decoration-1 underline-offset-[6px]"
              >
                {site.email}
              </a>
              <ul className="eyebrow flex gap-5 text-muted-foreground">
                {socials.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      rel="me noreferrer"
                      target="_blank"
                      className="transition-colors hover:text-foreground"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export { SiteHeader }
