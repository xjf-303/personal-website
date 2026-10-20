import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { addOns, rates, ratesLede, ratesNote } from "@/lib/rates"
import { contact, site } from "@/lib/site"
import { cn } from "@/lib/utils"

function enquiry(about: string) {
  const subject = `${contact.subject} — ${about}`
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`
}

/**
 * The rates sit between the work and the contact section: you look at the
 * photographs, you work out what a job would cost, then you write. Three
 * columns divided by hairlines rather than three boxed-up cards — nothing is
 * highlighted, because nothing here is being upsold.
 */
function Rates() {
  return (
    <Section id="rates" index="03" label="Rates">
      <Reveal>
        <p className="max-w-[48rem] font-heading text-2xl leading-snug text-balance md:text-3xl">
          {ratesLede}
        </p>
      </Reveal>

      <Reveal className="mt-14 md:mt-20">
        <div className="grid divide-border border-t border-border md:grid-cols-3 md:divide-x">
          {rates.map((rate, index) => (
            <div
              key={rate.name}
              className={cn(
                "flex flex-col border-b border-border py-9 md:border-b-0 md:py-11",
                index > 0 && "md:pl-9",
                index < rates.length - 1 && "md:pr-9"
              )}
            >
              <h3 className="font-heading text-xl md:text-2xl">{rate.name}</h3>
              <p className="eyebrow mt-3 text-muted-foreground">{rate.scope}</p>

              <p className="mt-7 font-heading text-4xl tabular-nums md:text-5xl">
                {rate.price}
              </p>

              <p className="mt-5 text-sm leading-relaxed text-pretty text-muted-foreground">
                {rate.summary}
              </p>

              {/* flex-1 lets the shorter lists absorb the slack, so the three
                  "Enquire" links land on one baseline instead of three. */}
              <ul className="mt-7 flex-1 space-y-3 border-t border-border pt-6 text-sm leading-relaxed">
                {rate.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.7em] h-px w-3 shrink-0 bg-foreground/30"
                    />
                    <span className="text-pretty">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={enquiry(rate.name)}
                className="eyebrow mt-9 self-start border-b border-foreground/30 pb-1 transition-colors hover:border-foreground"
              >
                Enquire about this
              </a>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-20 grid gap-x-10 gap-y-12 border-t border-border pt-7 md:mt-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h3 className="eyebrow text-muted-foreground">Also available</h3>
          <dl className="mt-6 space-y-4">
            {addOns.map((item) => (
              <div key={item.label} className="flex items-baseline gap-3">
                <dt className="text-sm">{item.label}</dt>
                <span
                  aria-hidden="true"
                  className="min-w-5 flex-1 translate-y-[-0.25em] border-b border-dotted border-border"
                />
                <dd className="eyebrow shrink-0">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="text-sm leading-relaxed text-pretty text-muted-foreground lg:col-span-6 lg:col-start-7">
          {ratesNote}
        </p>
      </Reveal>
    </Section>
  )
}

export { Rates }
