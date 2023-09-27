import {ComponentPropsWithRef} from 'react'
import {twMerge} from 'tailwind-merge'

// export const TitleH2 = classed(
// 	"h2",
// 	"font-poppins tracking-wider uppercase text-balance text-center text-primary",
// 	twMerge("text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-[25ch]")
// )

export const TitleH2 = ({ref, className, children}: ComponentPropsWithRef<'h2'>) => (
   <h2
      className={twMerge(
         'h2',
         'text-center font-poppins uppercase tracking-wider text-primary text-balance',
         ' max-w-[25ch]',
         className
      )}
      ref={ref}>
      {children}
   </h2>
)
