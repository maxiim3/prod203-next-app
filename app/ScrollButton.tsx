'use client'

import {motion} from 'framer-motion'
import {twMerge} from 'tailwind-merge'

export const ScrollButton = ({
   sectionID,
   anchorClassName,
   containerClassName,
   svgUp,
}: {
   sectionID: '#services' | '#about' | '#references' | '#'
   anchorClassName?: string
   containerClassName?: string
   svgUp?: boolean
}) => {
   return (
      <div
         className={twMerge(
            `absolute bottom-0 z-30 flex w-full items-center justify-end pb-8 pr-4 sm:justify-center sm:pb-[5vw] sm:pr-0 2xl:pb-40 landscape:justify-end landscape:pb-8 landscape:pr-4 md:landscape:justify-center md:landscape:pb-[5vw] md:landscape:pr-0 2xl:landscape:pb-20`,
            containerClassName
         )}>
         <motion.a
            initial={{scale: 0.9, translateY: -25, opacity: 0.2}}
            whileInView={{
               scale: 1,
               translateY: 0,
               opacity: 1,
            }}
            transition={{
               type: 'spring',
               stiffness: 260,
               damping: 20,
               duration: 0.25,
               delay: 0.075,
            }}
            href={sectionID}
            className={twMerge(
               'flex h-12 w-12 items-center justify-center rounded-md border-none bg-base-100/5 p-1  text-xl font-bold uppercase text-primary opacity-70 backdrop-blur-md backdrop:opacity-0 xs:h-16 xs:w-16 sm:h-16 sm:w-16 lg:h-24 lg:w-24',
               anchorClassName
            )}>
            <svg
               width="48"
               height="48"
               viewBox="0 0 256 256"
               className={twMerge(
                  'h-8 w-8 text-primary xs:h-12 xs:w-12 sm:h-12 sm:w-12 lg:h-16 lg:w-16',
                  !svgUp && 'rotate-180 transform'
               )}
               xmlns="http://www.w3.org/2000/svg">
               <path
                  fill="currentColor"
                  d="M202.83 114.83a4 4 0 0 1-5.66 0L132 49.66V216a4 4 0 0 1-8 0V49.66l-65.17 65.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0l72 72a4 4 0 0 1 0 5.66Z"
               />
            </svg>
         </motion.a>
      </div>
   )
}
