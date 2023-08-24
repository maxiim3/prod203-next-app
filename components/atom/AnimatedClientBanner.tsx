'use client'

import StaticClientBanner, {clients} from '@/components/atom/StaticClientBanner'
import {nanoid} from 'nanoid'
import React from 'react'
import Marquee from 'react-fast-marquee'

export function AnimatedClientBanner() {
   return (
      <div className={'md:hidden'}>
         <Marquee
            className={'flex w-screen'}
            speed={30}>
            {clients.map(client => (
               <span key={nanoid()}>
                  <client.Icon className="mx-5 text-5xl text-base-100/50 md:text-6xl" />
               </span>
            ))}
         </Marquee>
         <Marquee
            direction={'right'}
            speed={30}
            className={'flex w-screen'}>
            {clients.reverse().map(client => (
               <span key={nanoid()}>
                  <client.Icon className="mx-5 text-5xl text-base-100/50 md:text-6xl" />
               </span>
            ))}
         </Marquee>
      </div>
   )
}
