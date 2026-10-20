"use client"

import * as React from "react"
import Image from "next/image"
import { Dialog } from "@base-ui/react/dialog"
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { PhotoCaption, PhotoFrame } from "@/components/photo-frame"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { sizesFor, spanClass, work } from "@/lib/photos"
import { cn } from "@/lib/utils"

/** Pads the counter so "3 of 10" reads as "03 / 10". */
const pad = (n: number) => String(n).padStart(2, "0")

function SelectedWork() {
  const [active, setActive] = React.useState<number | null>(null)
  const open = active !== null

  const step = React.useCallback((delta: number) => {
    setActive((current) =>
      current === null ? current : (current + delta + work.length) % work.length
    )
  }, [])

  React.useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") {
        event.preventDefault()
        step(1)
      } else if (event.key === "ArrowLeft") {
        event.preventDefault()
        step(-1)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open, step])

  return (
    <Section id="work" index="02" label="Selected work">
      <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-12 md:gap-y-20">
        {work.map((photo, index) => (
          <Reveal
            key={photo.src}
            className={cn("min-w-0", spanClass[photo.span])}
          >
            <figure>
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={`View ${photo.title} larger`}
                className="group block w-full outline-offset-4"
              >
                <PhotoFrame
                  photo={photo}
                  sizes={sizesFor[photo.span]}
                  imageClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </button>
              <figcaption className="mt-3">
                <PhotoCaption photo={photo} />
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20 border-t border-border pt-7 md:mt-28">
        <p className="max-w-[40rem] text-sm leading-relaxed text-pretty text-muted-foreground">
          Ten frames from the last three years. Full series — including the
          boatyard and the Douro work — are available on request; write to me
          and I will send a link.
        </p>
      </Reveal>

      <Lightbox index={active} onClose={() => setActive(null)} onStep={step} />
    </Section>
  )
}

function Lightbox({
  index,
  onClose,
  onStep,
}: {
  index: number | null
  onClose: () => void
  onStep: (delta: number) => void
}) {
  const photo = index === null ? null : work[index]

  return (
    <Dialog.Root
      open={index !== null}
      onOpenChange={(next) => {
        if (!next) onClose()
      }}
    >
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-background/95 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-sm" />
        <Dialog.Popup className="fixed inset-0 z-50 flex flex-col transition-opacity duration-200 outline-none data-ending-style:opacity-0 data-starting-style:opacity-0">
          <div className="flex h-16 shrink-0 items-center justify-between gap-4 px-5 sm:px-8">
            <Dialog.Title className="eyebrow min-w-0 truncate text-muted-foreground">
              {photo ? (
                <>
                  <span className="text-foreground">{photo.title}</span>
                  <span
                    aria-hidden="true"
                    className="px-2.5 text-foreground/25"
                  >
                    /
                  </span>
                  {photo.place}, {photo.year}
                </>
              ) : null}
            </Dialog.Title>

            <div className="flex items-center gap-1">
              <span className="eyebrow mr-3 text-muted-foreground">
                {index === null
                  ? ""
                  : `${pad(index + 1)} / ${pad(work.length)}`}
              </span>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Previous photograph"
                onClick={() => onStep(-1)}
                className="text-muted-foreground hover:text-foreground"
              >
                <HugeiconsIcon
                  icon={ArrowLeft01Icon}
                  strokeWidth={1.5}
                  className="size-4"
                />
              </Button>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Next photograph"
                onClick={() => onStep(1)}
                className="text-muted-foreground hover:text-foreground"
              >
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  strokeWidth={1.5}
                  className="size-4"
                />
              </Button>
              <Dialog.Close
                render={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="ml-2 text-muted-foreground hover:text-foreground"
                  />
                }
              >
                <HugeiconsIcon
                  icon={Cancel01Icon}
                  strokeWidth={1.5}
                  className="size-4"
                />
                <span className="sr-only">Close</span>
              </Dialog.Close>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center px-5 pb-8 sm:px-8">
            {photo ? (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="100vw"
                className="max-h-full w-auto object-contain"
              />
            ) : null}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export { SelectedWork }
