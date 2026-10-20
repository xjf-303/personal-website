import * as React from "react"

import { Container } from "@/components/container"
import { cn } from "@/lib/utils"

/**
 * The frame every section shares: a hairline rule, a numbered label, and the
 * same quantity of air above and below. The label is the section's heading —
 * small on the page, but it is what gives the document its outline.
 */
function Section({
  id,
  index,
  label,
  className,
  children,
  ...props
}: Omit<React.ComponentProps<"section">, "id"> & {
  id: string
  index: string
  label: string
}) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("scroll-mt-20 border-t border-border", className)}
      {...props}
    >
      <Container className="py-20 md:py-28 lg:py-36">
        <h2
          id={headingId}
          className="eyebrow mb-10 text-muted-foreground md:mb-14"
        >
          <span aria-hidden="true" className="text-foreground/35">
            {index}
          </span>
          <span aria-hidden="true" className="px-2.5 text-foreground/25">
            /
          </span>
          {label}
        </h2>
        {children}
      </Container>
    </section>
  )
}

export { Section }
