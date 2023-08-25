'use client'

import {clients} from '@/lib/mocked_data'
import {nanoid} from 'nanoid'
import React from 'react'
import Marquee from 'react-fast-marquee'

export function AnimatedClientBanner() {
   return (
      <div className={'md:hidden'}>
         <Marquee
            className={'flex w-screen items-center'}
            speed={30}>
            {clients.map(client => (
               <figcaption key={nanoid()}>
                  <img
                     src={client.source}
                     className={'mx-3 h-40 w-36 object-contain object-center'}
                  />
               </figcaption>
            ))}
         </Marquee>
         <Marquee
            direction={'right'}
            speed={30}
            className={'flex w-screen items-center'}>
            {clients.reverse().map(client => (
               <figcaption key={nanoid()}>
                  <img
                     src={client.source}
                     className={'mx-3 h-40 w-36 object-contain object-center'}
                  />
               </figcaption>
            ))}
         </Marquee>
      </div>
   )
}
