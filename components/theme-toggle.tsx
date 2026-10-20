"use client"

import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

/**
 * Both icons are always rendered and swapped with the `dark` class, which keeps
 * the server and client markup identical — no mounted check, no flash.
 */
function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      aria-label="Switch between light and dark"
      title="Switch between light and dark (d)"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-muted-foreground hover:text-foreground"
    >
      <HugeiconsIcon
        icon={Moon02Icon}
        strokeWidth={1.5}
        className="size-3.5 dark:hidden"
      />
      <HugeiconsIcon
        icon={Sun03Icon}
        strokeWidth={1.5}
        className="hidden size-3.5 dark:block"
      />
    </Button>
  )
}

export { ThemeToggle }
