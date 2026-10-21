import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { contact, site, socials } from "@/lib/site"

const mailto = `mailto:${site.email}?subject=${encodeURIComponent(contact.subject)}`

function Contact() {
  return (
    <Section id="contact" index="04" label="Contact">
      <div className="grid gap-x-10 gap-y-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="font-heading text-3xl leading-tight md:text-4xl">
            {contact.heading}
          </p>

          <a
            href={mailto}
            className="mt-7 block font-heading text-[1.75rem] leading-none [overflow-wrap:anywhere] underline decoration-border decoration-1 underline-offset-[0.35em] transition-colors hover:decoration-foreground sm:text-4xl md:mt-9 md:text-5xl lg:text-6xl"
          >
            {site.email}
          </a>

          <p className="mt-9 max-w-[34rem] text-sm leading-relaxed text-pretty text-muted-foreground md:mt-12 md:text-base">
            {contact.body}
          </p>
        </Reveal>

        <Reveal delay={60} className="lg:col-span-4 lg:col-start-9">
          <dl className="space-y-7 border-t border-border pt-7 lg:border-t-0 lg:pt-2">
            <div>
              <dt className="eyebrow text-muted-foreground">Availability</dt>
              <dd className="mt-2 text-sm">{contact.availability}</dd>
            </div>
            <div>
              <dt className="eyebrow text-muted-foreground">Studio</dt>
              <dd className="mt-2 text-sm">{site.location}</dd>
            </div>
            <div>
              <dt className="eyebrow text-muted-foreground">Elsewhere</dt>
              <dd className="mt-2">
                <ul className="space-y-2 text-sm">
                  {socials.map((social) => (
                    <li key={social.href}>
                      <a
                        href={social.href}
                        rel="me noreferrer"
                        target="_blank"
                        className="underline decoration-border decoration-1 underline-offset-4 transition-colors hover:decoration-foreground"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}

export { Contact }
