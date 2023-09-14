'use client'

import {ProjectCard} from '@/app/(pages)/projects/project-card.client'
import mockedCategories from '@/mocked-content/categories.data.mocked'
import mockedProjects from '@/mocked-content/projects.data.mocked'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import {Flex, Link as RadixLink} from '@radix-ui/themes'
import Link from 'next/link'
import {useSearchParams} from 'next/navigation'
import React, {Suspense} from 'react'
import {twMerge} from 'tailwind-merge'

export default function ProjectGallery() {
   // const projects = await getAllProjects()
   // const categories = await getAllCategories()
   const projects = mockedProjects
   const categories = mockedCategories
   const searchParams = useSearchParams()
   const activeCategory = searchParams.get('category')
   console.log(!activeCategory || activeCategory === 'all')
   // TODO set that we retrieve category reference from Projects. then we use the array of corresponding category to avoid categories that have no project
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
                        aria-selected={!activeCategory || activeCategory === 'all'}
                        data-active={!activeCategory || activeCategory === 'all'}
                        className={twMerge(
                           'select-none snap-mandatory snap-center font-poppins font-light visited:text-primary',
                           'cursor-pointer text-primary/90 hover:text-primary',
                           'data-[active=true]:cursor-default data-[active=true]:font-semibold data-[active=true]:text-primary'
                        )}
                        asChild>
                        <Link href={`/projects?category=all`}>Toutes</Link>
                     </RadixLink>
                  </NavigationMenu.Item>
                  {categories.map(c => (
                     <NavigationMenu.Item key={c.id}>
                        <RadixLink
                           aria-selected={!activeCategory || activeCategory === c.slug}
                           data-active={!activeCategory || activeCategory === c.slug}
                           className={twMerge(
                              'select-none snap-mandatory snap-center font-poppins font-light visited:text-primary',
                              'cursor-pointer text-primary/90 hover:text-primary',
                              'data-[active=true]:cursor-default data-[active=true]:font-semibold data-[active=true]:text-primary'
                           )}
                           asChild>
                           <Link href={`/projects?category=${c?.slug}`}>{c?.i18nValue?.fr}</Link>
                        </RadixLink>
                     </NavigationMenu.Item>
                  ))}
               </NavigationMenu.List>
            </NavigationMenu.Root>
         </header>
         <main>
            <Suspense fallback={<p>Loading....</p>}>
               <ul
                  className={
                     'mx-auto grid max-w-[1440px] grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-12 2xl:grid-cols-4'
                  }>
                  {projects
                     .filter(p => {
                        if (!activeCategory || activeCategory === 'all') return true
                        const activeCategoryReference = categories.find(
                           c => c.slug === activeCategory
                        )?.id
                        return categories.find(c => activeCategoryReference === p.category._ref)
                     })
                     .map((p, index) => (
                        <ProjectCard
                           key={p.id}
                           title={p.title}
                           description={p.i18nDescription.fr}
                           slug={p.slug}
                           index={index}
                        />
                     ))}
               </ul>
            </Suspense>
         </main>
      </Flex>
   )
}
