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
               'flex h-12 w-12 items-center justify-center rounded-full border-none p-1  text-xl font-bold uppercase text-primary opacity-70 backdrop-blur-md backdrop:opacity-0 xs:h-16 xs:w-16',
               anchorClassName
            )}>
            <svg
               width="512"
               className={twMerge(
                  'h-8 w-8 text-primary [text-shadow:10px_10px_100px_black] xs:h-12 xs:w-12 sm:h-12 sm:w-12 lg:h-16 lg:w-16',
                  !svgUp && 'rotate-180 transform'
               )}
               height="512"
               viewBox="0 0 1024 1024"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  fill="currentColor"
                  d="m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
               />
            </svg>
         </motion.a>
      </div>
   )
}
