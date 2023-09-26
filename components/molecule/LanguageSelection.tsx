'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import React, {PropsWithChildren} from 'react'
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
   console.log(pathname)
   return (
      <List>
         <Item
            className={className}
            onClick={onClick}
            isSelected={pathname.includes('fr')}>
            <Link href={'/fr'}>FR</Link>
         </Item>
         <Item
            className={className}
            onClick={onClick}
            isSelected={pathname.includes('en')}>
            <Link href={'/en'}>EN</Link>
         </Item>
      </List>
   )
}

const List = ({
   children,
   className,
}: PropsWithChildren<{
   className?: string
}>) => <ul className={twMerge('flex items-center space-x-2', className)}>{children}</ul>

const Item = ({
   children,
   isSelected = false,
   className,
   onClick,
}: PropsWithChildren<{
   className?: string
   isSelected?: boolean
   onClick?: () => void
}>) => (
   <li
      className={twMerge(
         'select-none font-poppins uppercase tracking-wider md:text-base lg:text-lg',
         isSelected ? 'font-semibold' : 'font-thin',
         className
      )}>
      {children}
   </li>
)
