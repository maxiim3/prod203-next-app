import {classed} from "@tw-classed/react"
import {ClassNameValue} from "tailwind-merge"

export const Text = classed(
   "p",
   "p-4 text-center text-balance text-primary",
   "text-base sm:text-lg md:text-lg tracking-wider leading-relaxed lg:text-xl max-w-[65ch]")
export const SectionTitle = classed(
   "h2",
   "font-cormorant uppercase text-balance text-center text-primary",
   "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-[25ch]")
