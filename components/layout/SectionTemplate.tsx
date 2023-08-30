'use client'

import {TitleH2} from '@/components/atom/SectionH2'
import {motion} from 'framer-motion'
import React, {PropsWithChildren} from 'react'
import {twMerge} from 'tailwind-merge'

export const SectionTemplate = ({
   children,
   outerContainerStyles,
   innerContainerStyles,
   sectionTitleStyles,
   ariaLabel,
   title,
   id,
   imgClassName,
}: PropsWithChildren<{
   title: string
   id: string
   outerContainerStyles?: string
   innerContainerStyles?: string
   sectionTitleStyles?: string
   ariaLabel?: string
   imgClassName?: string
}>) => {
   return (
      <section
         aria-label={ariaLabel}
         className={twMerge(
            ' relative mx-auto flex h-full min-h-screen w-screen max-w-[980px] snap-start items-center py-2 ',
            outerContainerStyles
         )}
         id={id}>
         <motion.main
            initial={{opacity: 0}}
            exit={{opacity: 1}}
            whileInView={{opacity: 1}}
            transition={{
               duration: 0.65,
               delay: 0.25,
               type: 'spring',
               stiffness: 260,
               damping: 20,
               staggerDirection: -1,
            }}
            className={twMerge(
               'min-h-xl flex w-full flex-col  gap-12 overflow-hidden md:overflow-visible',
               innerContainerStyles
            )}>
            <TitleH2
               className={twMerge(
                  'w-content mx-auto text-center text-4xl font-thin uppercase sm:text-5xl ',
                  sectionTitleStyles
               )}>
               {title}
            </TitleH2>
            {children}
         </motion.main>
      </section>
   )
}
