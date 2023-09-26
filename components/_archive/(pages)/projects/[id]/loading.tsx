'use client'

import {Skeleton} from '@/components/ui/skeleton'
import {Container, Flex, Section} from '@radix-ui/themes'
import React from 'react'

export default function LoadingProjectPage() {
   return (
      <Container
         mt={{initial: '2', sm: '4'}}
         px={'2'}
         width={'100%'}
         size={'3'}
         className={'h-full'}>
         <Section
            size={'1'}
            width={'100%'}>
            <Flex
               className={'w-full'}
               gap={'2'}
               justify={'start'}
               align={'center'}>
               <Skeleton className={'h-8 w-full'} />
            </Flex>
         </Section>
         <header className={'flex flex-col justify-between gap-2'}>
            <span
               role={'separator'}
               className={'divider w-full'}
            />

            <ul className={'flex justify-between px-8'}>
               {Array.from({length: 4}, (_, i) => i).map(index => (
                  <li
                     key={index}
                     className={'flex flex-col items-center gap-3'}>
                     <Skeleton className={'h-8 w-12'} />
                     <ul>
                        <Skeleton className={'h-8 w-full'} />
                        <Skeleton className={'h-8 w-full'} />
                     </ul>
                  </li>
               ))}
            </ul>

            <span
               role={'separator'}
               className={'divider w-full'}
            />
         </header>
         <div className={'flex flex-col items-center justify-center px-2 py-12 '}>
            <div
               className={
                  'prose flex w-full max-w-[70ch] flex-col items-center justify-center gap-3 text-center text-sm leading-relaxed text-balance sm:text-base md:text-lg'
               }>
               <Skeleton className={'h-8 w-full'} />
               <Skeleton className={'h-8 w-full'} />
               <Skeleton className={'h-8 w-full'} />
               <Skeleton className={'h-8 w-full'} />
            </div>
         </div>

         <section className={'flex w-full flex-col'}>
            <figcaption className={'aspect-video w-full'}>
               <Skeleton className={'aspect-video w-full object-contain object-center'} />
            </figcaption>
         </section>
         <Skeleton className={'h-full w-full'} />
      </Container>
   )
}
