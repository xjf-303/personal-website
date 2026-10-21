import { Container } from "@/components/container"
import { PhotoCaption, PhotoFrame } from "@/components/photo-frame"
import { Reveal } from "@/components/reveal"
import { heroPhoto } from "@/lib/photos"
import { hero, site } from "@/lib/site"

/**
 * Type on the left, one photograph on the right. The statement is the page's
 * only <h1>; the name lives in the masthead above it.
 */
function Hero() {
  return (
    <div id="top" className="pt-10 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-36">
      <Container>
        <div className="grid items-start gap-x-10 gap-y-12 lg:grid-cols-12 lg:gap-y-0">
          <div className="lg:col-span-6 lg:pt-6">
            <Reveal>
              <p className="eyebrow text-muted-foreground">
                {site.role}
                <span aria-hidden="true" className="px-2.5 text-foreground/25">
                  /
                </span>
                {site.location}
              </p>

              <h1 className="mt-7 font-heading text-[2.5rem] leading-[1.06] text-balance sm:text-5xl md:mt-9 md:text-[3.5rem] lg:text-[4rem]">
                {hero.statement}
              </h1>

              <p className="mt-7 max-w-[34rem] text-sm leading-relaxed text-pretty text-muted-foreground md:mt-9 md:text-base">
                {hero.lede}
              </p>

              <div className="eyebrow mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 md:mt-12">
                <a
                  href="#work"
                  className="border-b border-foreground/30 pb-1 transition-colors hover:border-foreground"
                >
                  See the work
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="border-b border-transparent pb-1 text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  {site.email}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={80}>
              <figure>
                <PhotoFrame
                  photo={heroPhoto}
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  eager
                />
                <figcaption className="mt-3">
                  <PhotoCaption photo={heroPhoto} />
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Hero }
