'use client'

import {cn} from '@/lib/utils'
import {
   All_Clients,
   ClientClassFactory,
   clients as clients_01,
   clients_02,
} from '@/static-content/clients.static.content'
import Image from 'next/image'
import React, {memo, type ComponentPropsWithoutRef} from 'react'
import Marquee from 'react-fast-marquee'

function MarqueeClientsBanner() {
   return (
      <>
         <div className={'2xl:hidden'}>
            <MarqueeContainerLeftDirection>
               {clients_01.map((client, index) => (
                  <figcaption key={`scrolling-client-coll-${index}`}>
                     <ImageComponent
                        className={cn(
                           'md:h-[56px] md:w-[124px] lg:h-[75px] lg:w-[164px]',
                           client.title.toLowerCase().includes('fribourg') && 'max-w-[105px]',
                           client.title.toLowerCase().includes('24h') && 'max-w-[95px]',
                           client.title.toLowerCase().includes('sedan') && 'max-w-[80px]',
                           client.title.toLowerCase().includes('warner') && 'max-w-[124px]'
                        )}
                        client={client}
                     />
                  </figcaption>
               ))}
            </MarqueeContainerLeftDirection>
            <MarqueeContainerRightDirection>
               {clients_02.map((client, index) => (
                  <figcaption key={`scrolling-client-coll-reversed-${index}`}>
                     <ImageComponent
                        className={cn(
                           'md:h-[56px] md:w-[124px] lg:h-[75px] lg:w-[164px]',
                           client.title.toLowerCase().includes('fribourg') && 'max-w-[105px]',
                           client.title.toLowerCase().includes('24h') && 'max-w-[95px]',
                           client.title.toLowerCase().includes('gum') && 'max-w-[40px]',
                           client.title.toLowerCase().includes('fff') && 'max-w-[70px]',
                           client.title.toLowerCase().includes('warner') && 'max-w-[124px]'
                        )}
                        client={client}
                     />
                  </figcaption>
               ))}
            </MarqueeContainerRightDirection>
         </div>
         <article
            className={
               'mx-auto hidden max-w-5xl items-center justify-center gap-x-2 gap-y-8 2xl:flex 2xl:flex-wrap'
            }>
            {All_Clients.map((client, index) => (
               <figcaption key={`desktop-client-coll-${index}`}>
                  <ImageComponent
                     className={cn(
                        'md:h-[56px] md:w-[124px] lg:h-[75px] lg:w-[164px]',
                        client.title.toLowerCase().includes('fribourg') && 'max-w-[105px]',
                        client.title.toLowerCase().includes('24h') && 'max-w-[95px]',
                        client.title.toLowerCase().includes('warner') && 'max-w-[124px]'
                     )}
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

/**
 * The Image component includes a filter : brightness, grayscale and inversion (invert) of colors
 * In order to uniformize all logos to pure white
 */
const ImageComponent = ({
   client,
   className,
}: ComponentPropsWithoutRef<'img'> & {client: ClientClassFactory}) => (
   <Image
      width={200}
      height={200}
      alt={client.title}
      src={client.source}
      className={cn(
         'mx-3 h-24 w-36 select-none object-contain object-center opacity-90 brightness-0 grayscale invert transition-transform hover:scale-105',
         className
      )}
   />
)

export default memo(MarqueeClientsBanner)
