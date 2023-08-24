'use client'

import LanguageElement from '@/components/atom/LanguageElement'
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
         <LanguageElement
            onClick={onClick}
            large={large || false}
            isSelected={!pathname.includes('eng')}>
            <Link href={'/'}>FR</Link>
         </LanguageElement>
         <LanguageElement
            onClick={onClick}
            large={large || false}
            isSelected={pathname.includes('eng')}>
            <Link href={'/eng/'}>ENG</Link>
         </LanguageElement>
      </article>
   )
}
