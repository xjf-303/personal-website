"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type State = "idle" | "hidden" | "shown"

/**
 * Fades its children up a few pixels the first time they scroll into view.
 *
 * Renders visible on the server and stays visible without JavaScript, so the
 * animation can never hide content. Anything already on screen at hydration is
 * left alone, and anyone who has asked for reduced motion gets no transition.
 */
function Reveal({
  className,
  delay = 0,
  children,
  ...props
}: React.ComponentProps<"div"> & { delay?: number }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [state, setState] = React.useState<State>("idle")

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    const onScreen = node.getBoundingClientRect().top < window.innerHeight * 0.9

    if (reduced || onScreen) {
      setState("shown")
      return
    }

    setState("hidden")

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setState("shown")
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.04 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={
        state === "shown" && delay
          ? { transitionDelay: `${delay}ms` }
          : undefined
      }
      className={cn(
        "transition-[opacity,translate] duration-700 ease-out motion-reduce:transition-none",
        state === "hidden" && "translate-y-4 opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Reveal }
