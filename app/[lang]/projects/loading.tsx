'use client'

import {Skeleton} from '@/components/ui/skeleton'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import {Flex, Link as RadixLink} from '@radix-ui/themes'
import React from 'react'
import {twMerge} from 'tailwind-merge'

export default function Loading() {
   return (
      <Flex
         className={'space-y-6'}
         direction={'column'}>
         <header className={'w-screen'}>
            <NavigationMenu.Root className={'w-full overflow-scroll'}>
               <NavigationMenu.List
                  className={
                     'scroll-bar mx-auto flex w-max snap-x items-center justify-center gap-4 overflow-x-auto px-4 pb-5 pt-2'
                  }>
                  <NavigationMenu.Item>
                     <RadixLink
                        className={twMerge(
                           'select-none snap-mandatory snap-center font-poppins font-light visited:text-primary',
                           'cursor-pointer text-primary/90 hover:text-primary',
                           'store-[active=true]:cursor-default store-[active=true]:font-semibold store-[active=true]:text-primary'
                        )}
                        asChild>
                        <Skeleton className={'h-4 w-12 rounded-sm'} />
                     </RadixLink>
                  </NavigationMenu.Item>
                  <ul className={'flex gap-3'}>
                     {Array.from({length: 8}, (_, index) => index).map(category => (
                        <li key={category}>
                           <Skeleton className={'h-4 w-12 rounded-sm'} />
                        </li>
                     ))}
                  </ul>
               </NavigationMenu.List>
            </NavigationMenu.Root>
         </header>
         <ul
            className={
               'mx-auto grid max-w-[1440px] grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-12 2xl:grid-cols-4'
            }>
            {Array.from({length: 12}, (_, i) => i).map(index => (
               <li
                  key={index}
                  className="group/card card relative aspect-video h-full min-h-[260px] w-full min-w-[260px] overflow-hidden bg-base-100 shadow-xl md:aspect-square">
                  <Skeleton className={'h-full w-full'} />
               </li>
            ))}
         </ul>
      </Flex>
   )
}
