import { PhotoCaption, PhotoFrame } from "@/components/photo-frame"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { portrait } from "@/lib/photos"
import { intro } from "@/lib/site"

function Introduction() {
  const [opening, ...rest] = intro.paragraphs

  return (
    <Section id="about" index="01" label="Introduction">
      <div className="grid gap-x-10 gap-y-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <figure>
            <PhotoFrame
              photo={portrait}
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
            <figcaption className="mt-3">
              <PhotoCaption photo={portrait} />
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={60} className="lg:col-span-6 lg:col-start-7">
          <p className="font-heading text-2xl leading-snug text-balance md:text-3xl">
            {opening}
          </p>

          <div className="mt-7 space-y-5 text-sm leading-relaxed text-pretty text-muted-foreground md:text-base">
            {rest.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-7">
            {intro.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="eyebrow text-muted-foreground">{fact.label}</dt>
                <dd className="mt-2 text-sm">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Reveal className="mt-20 border-t border-border pt-7 md:mt-28">
        <h3 className="eyebrow text-muted-foreground">What I shoot</h3>
        <ul className="mt-5 flex flex-wrap items-baseline gap-x-8 gap-y-2 font-heading text-2xl md:text-4xl">
          {intro.subjects.map((subject) => (
            <li key={subject}>{subject}</li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}

export { Introduction }
