import {classed} from '@tw-classed/react'

const LanguageElement = classed(
   'span',
   'font-poppins tracking-wider uppercase md:text-base lg:text-lg select-none',
   {
      variants: {
         isSelected: {
            true: 'font-semibold',
            false: 'font-thin',
         },
         large: {
            true: 'text-2xl',
         },
      },
      defaultVariants: {
         isSelected: false,
      },
   }
)
export default LanguageElement
