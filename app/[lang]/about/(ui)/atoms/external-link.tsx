import {type T_AvailableLanguages} from '@/shared/i18n.ts/i18n.global.schema'
import Link from 'next/link'
import React from 'react'

export default function ExternalLink({
   href,
   name,
   lang,
}: {
   href: string
   name: string
   lang: T_AvailableLanguages
}) {
   return (
      <Link
         title={lang === 'en' ? 'Open in a new tab' : 'Ouvrir dans un nouvel onglet'}
         className={
            'prose m-0 w-full font-poppins text-sm font-normal tracking-wide !text-primary text-balance visited:opacity-70 visited:hover:opacity-100'
         }
         target="_blank"
         rel="noopener noreferrer"
         type={'external'}
         href={href}>
         {lang === 'en' ? `${name}'s Official website` : `Site officiel de ${name}`}
      </Link>
   )
}
