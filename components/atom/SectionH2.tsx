import {classed} from "@tw-classed/react"
import {PropsWithChildren} from "react"
import {twMerge} from "tailwind-merge"

// export const TitleH2 = classed(
// 	"h2",
// 	"font-poppins tracking-wider uppercase text-balance text-center text-primary",
// 	twMerge("text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-[25ch]")
// )

export const TitleH2 = ({children, className}: PropsWithChildren<{className?: string}>) => (
	<h2
		className={twMerge(
			"h2",
			"font-poppins tracking-wider uppercase text-balance text-center text-primary",
			" max-w-[25ch]",
			className
		)}>
		{children}
	</h2>
)
