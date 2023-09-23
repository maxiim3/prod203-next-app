'use client'

import {ClientClassFactory, clients, reversedClients} from '@/static-content/clients.static.content'
import Image from 'next/image'
import React, {memo} from 'react'
import Marquee from 'react-fast-marquee'
import {twMerge} from 'tailwind-merge'

function MarqueeBanner() {
   return (
      <>
         <div className={'md:hidden'}>
            <MarqueeContainerLeftDirection>
               {clients.map((client, index) => (
                  <figcaption key={`scrolling-client-coll-${index}`}>
                     <ImageComponent client={client} />
                  </figcaption>
               ))}
            </MarqueeContainerLeftDirection>
            <MarqueeContainerRightDirection>
               {reversedClients.map((client, index) => (
                  <figcaption key={`scrolling-client-coll-reversed-${index}`}>
                     <ImageComponent client={client} />
                  </figcaption>
               ))}
            </MarqueeContainerRightDirection>
         </div>
         <article
            className={
               'mx-auto hidden max-w-5xl items-center justify-center gap-x-4 gap-y-8 md:flex md:flex-wrap lg:gap-x-6  lg:gap-y-10'
            }>
            {clients.map((client, index) => (
               <figcaption key={`desktop-client-coll-${index}`}>
                  <ImageComponent
                     className={'md:h-[56px] md:w-[124px] lg:h-[75px] lg:w-[164px]'}
                     client={client}
                  />
               </figcaption>
            ))}
         </article>
      </>
   )
}

const MarqueeContainerRightDirection = ({children}: {children: React.ReactNode}) => (
   <Marquee
      direction={'right'}
      speed={30}
      className={'flex w-screen items-center'}>
      {children}
   </Marquee>
)

const MarqueeContainerLeftDirection = ({children}: {children: React.ReactNode}) => (
   <Marquee
      direction={'left'}
      speed={30}
      className={'flex w-screen items-center'}>
      {children}
   </Marquee>
)

const ImageComponent = ({client, className}: {client: ClientClassFactory; className?: string}) => (
   <Image
      width={200}
      height={200}
      alt={client.title}
      src={client.source}
      className={twMerge(
         'mx-3 h-24 w-36 select-none object-contain object-center opacity-70',
         className
      )}
   />
)

export default memo(MarqueeBanner)
