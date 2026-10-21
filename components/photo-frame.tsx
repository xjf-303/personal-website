import Image from "next/image"

import { ratioClass, type Photo } from "@/lib/photos"
import { cn } from "@/lib/utils"

/**
 * A photograph in its box. The aspect ratio comes from the data, so swapping in
 * a picture of a different shape is a one-line change in `lib/photos.ts`.
 *
 * `bg-muted` stands in while the file loads, which keeps the page from jumping.
 */
function PhotoFrame({
  photo,
  sizes,
  eager = false,
  className,
  imageClassName,
}: {
  photo: Photo
  sizes: string
  /** Set on the hero only: skips lazy loading for the first paint. */
  eager?: boolean
  className?: string
  imageClassName?: string
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted",
        ratioClass[photo.ratio],
        className
      )}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  )
}

/** Title, place and year, set in the small mono. Used under every photograph. */
function PhotoCaption({
  photo,
  className,
}: {
  photo: Photo
  className?: string
}) {
  return (
    <div
      className={cn(
        "eyebrow flex flex-wrap items-baseline gap-x-2 gap-y-1 text-muted-foreground",
        className
      )}
    >
      <span className="text-foreground">{photo.title}</span>
      <span aria-hidden="true" className="text-foreground/25">
        /
      </span>
      <span>{photo.place}</span>
      <span aria-hidden="true" className="text-foreground/25">
        /
      </span>
      <span>{photo.year}</span>
    </div>
  )
}

export { PhotoCaption, PhotoFrame }
