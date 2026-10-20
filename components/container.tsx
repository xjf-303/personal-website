import * as React from "react"

import { cn } from "@/lib/utils"

/** The single measure everything on the page lines up against. */
function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[84rem] px-5 sm:px-8 lg:px-12",
        className
      )}
      {...props}
    />
  )
}

export { Container }
