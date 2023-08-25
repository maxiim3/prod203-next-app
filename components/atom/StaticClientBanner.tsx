import {clients} from '@/lib/mocked_data'
import {nanoid} from 'nanoid'
import React from 'react'

export default function StaticClientBanner() {
   return (
      <article
         className={
            'mx-auto hidden max-w-5xl items-center justify-center gap-x-6 gap-y-0 md:flex  md:flex-wrap'
         }>
         {clients.map(client => (
            <figcaption key={nanoid()}>
               <img
                  src={client.source}
                  className={'mx-2 h-64 w-48 object-contain object-center'}
               />
            </figcaption>
         ))}
      </article>
   )
}
