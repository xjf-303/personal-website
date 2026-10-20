import { Container } from "@/components/container"
import { site } from "@/lib/site"

function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="eyebrow text-muted-foreground">
          <span className="text-foreground">{site.name}</span>
          <span aria-hidden="true" className="px-2.5 text-foreground/25">
            /
          </span>
          All photographs © {new Date().getFullYear()}
        </p>

        <div className="eyebrow flex flex-wrap items-baseline gap-x-7 gap-y-3 text-muted-foreground">
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-foreground"
          >
            {site.email}
          </a>
          <a href="#top" className="transition-colors hover:text-foreground">
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  )
}

export { SiteFooter }
