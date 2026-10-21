import { Contact } from "@/components/contact"
import { Hero } from "@/components/hero"
import { Introduction } from "@/components/introduction"
import { Rates } from "@/components/rates"
import { SelectedWork } from "@/components/selected-work"

export default function Page() {
  return (
    <>
      <Hero />
      <Introduction />
      <SelectedWork />
      <Rates />
      <Contact />
    </>
  )
}
