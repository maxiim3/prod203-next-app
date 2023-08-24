'use client'

import {classed} from '@tw-classed/react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import React from 'react'
import {twMerge} from 'tailwind-merge'

export default function LanguageSelection({
   large,
   onClick,
   className,
}: {
   large?: boolean
   onClick?: () => void
   className?: string
}) {
   const pathname = usePathname()

   return (
      <article className={twMerge('space-x-2', className)}>
         <Element
            onClick={onClick}
            large={large || false}
            isSelected={!pathname.includes('eng')}>
            <Link href={'/'}>FR</Link>
         </Element>
         <Element
            onClick={onClick}
            large={large || false}
            isSelected={pathname.includes('eng')}>
            <Link href={'/eng/'}>ENG</Link>
         </Element>
      </article>
   )
}

export const Element = classed(
   'span',
   'font-manrope uppercase md:text-base lg:text-lg xl:text-xl',
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
