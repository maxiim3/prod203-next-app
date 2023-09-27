'use client'

import {cn} from '@/lib/utils'
import {Z_PageI18nParam} from '@/schemas/i18n.page.props.schema'
import Link from 'next/link'
import {useParams, usePathname} from 'next/navigation'
import React, {ComponentPropsWithRef, PropsWithChildren} from 'react'

export default function LanguageSelection({
   onClick,
   className,
}: {
   large?: boolean
   onClick?: () => void
   className?: string
}) {
   const pathname = usePathname()
   const params = useParams()
   let safeParams = Z_PageI18nParam.safeParse(params)
   let currentLang = safeParams.success ? safeParams.data.lang : 'fr'

   function buildURL(url: string, currentLang: 'fr' | 'en', replaceBy: 'fr' | 'en') {
      if (url === '/' || url === `/${currentLang}`) return `/${replaceBy}`

      const replaceIsInURL = url.match(`/${replaceBy}`)
      if (replaceIsInURL) return url

      return url.replace(`/${currentLang}`, `/${replaceBy}`)
   }

   return (
      <List>
         <Item
            className={className}
            onClick={onClick}
            isSelected={pathname.includes('fr')}>
            <Link href={buildURL(pathname, currentLang, 'fr')}>FR</Link>
         </Item>
         <Item
            className={className}
            onClick={onClick}
            isSelected={pathname.includes('en')}>
            <Link href={buildURL(pathname, currentLang, 'en')}>EN</Link>
         </Item>
      </List>
   )
}
const List = ({children, className}: ComponentPropsWithRef<'ul'>) => (
   <ul className={cn('flex items-center space-x-2', className)}>{children}</ul>
)
const Item = ({
   children,
   className,
   isSelected = false,
}: PropsWithChildren<ComponentPropsWithRef<'li'> & {isSelected?: boolean}>) => (
   <li
      className={cn(
         'select-none font-poppins uppercase tracking-wider md:text-base lg:text-lg',
         isSelected ? 'font-semibold' : 'font-thin',
         className
      )}>
      {children}
   </li>
)
