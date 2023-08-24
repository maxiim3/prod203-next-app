'use client'

import {classed} from '@tw-classed/react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import React from 'react'
import {twMerge} from 'tailwind-merge'

export default function LanguageSelection({
   onClick,
   className,
}: {
   large?: boolean
   onClick?: () => void
   className?: string
}) {
   const pathname = usePathname()

   return (
      <ul className={twMerge('flex items-center space-x-2', className)}>
         <Li
            onClick={onClick}
            isSelected={!pathname.includes('eng')}>
            <Link href={'/'}>FR</Link>
         </Li>
         <Li
            onClick={onClick}
            isSelected={pathname.includes('eng')}>
            <Link href={'/eng/'}>ENG</Link>
         </Li>
      </ul>
   )
}
const Li = classed(
   'span',
   'font-poppins tracking-wider uppercase md:text-base lg:text-lg select-none',
   {
      variants: {
         isSelected: {
            true: 'font-semibold',
            false: 'font-thin',
         },
      },
      defaultVariants: {
         isSelected: false,
      },
   }
)
