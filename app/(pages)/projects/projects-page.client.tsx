'use client'

import {ProjectThumbnail} from '@/app/(pages)/projects/project-thumbnail.client'
import {CategoryFactoryType, ProjectWithMappedCategory} from '@/lib/sanity/sanity-store.factory'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import {Flex, Link as RadixLink} from '@radix-ui/themes'
import Link from 'next/link'
import {useSearchParams} from 'next/navigation'
import React, {Suspense, useMemo} from 'react'
import {twMerge} from 'tailwind-merge'

type ProjectsPageProps = {
   store: {
      projects: ProjectWithMappedCategory[]
      categories: CategoryFactoryType[]
   }
}
export default function ProjectsPage({store}: ProjectsPageProps) {
   // const projects = await getAllProjects()
   // const categories = await getAllCategories()
   /*   const projects = mockedProjects
   const categories = mockedCategories*/
   const searchParams = useSearchParams()
   const activeCategory = searchParams.get('category')

   // console.log(store.projects.at(1))
   const existingCategories = useMemo(() => {
      let activeCat: CategoryFactoryType[] = []

      store.projects.forEach(project => {
         project.categories.forEach(cat => {
            activeCat.every(active => active._id !== cat._id) && activeCat.push(cat)
         })
      })

      return activeCat
   }, [store])

   const filterProjects = useMemo(() => {
      if (!activeCategory || activeCategory === 'all') return store.projects

      const projects: ProjectWithMappedCategory[] = []
      for (let project of store.projects) {
         for (let category of project.categories) {
            if (category.slug.current === activeCategory) {
               projects.push(project)
            }
         }
      }

      return projects
   }, [activeCategory, store])

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
                        className={twMerge(
                           'select-none snap-mandatory snap-center font-poppins font-light visited:text-primary',
                           'cursor-pointer text-primary/90 hover:text-primary',
                           !activeCategory || activeCategory === 'all'
                              ? 'cursor-default font-semibold opacity-100'
                              : 'cursor-pointer opacity-90'
                        )}
                        asChild>
                        <Link href={`/projects?category=all`}>Toutes</Link>
                     </RadixLink>
                  </NavigationMenu.Item>
                  <ul className={'flex gap-3'}>
                     {existingCategories.map(category => (
                        <li key={category._id}>
                           <RadixLink
                              aria-selected={activeCategory === category.slug.current}
                              className={twMerge(
                                 'select-none snap-mandatory snap-center font-poppins font-light visited:text-primary',
                                 'cursor-pointer text-primary/90 hover:text-primary',
                                 activeCategory === category.slug.current
                                    ? 'cursor-default font-semibold opacity-100'
                                    : 'cursor-pointer opacity-90'
                              )}
                              asChild>
                              <Link href={`/projects?category=${category?.slug.current}`}>
                                 {category.name.fr}
                              </Link>
                           </RadixLink>
                        </li>
                     ))}
                  </ul>
               </NavigationMenu.List>
            </NavigationMenu.Root>
         </header>
         <main>
            <Suspense fallback={<p>Loading....</p>}>
               <ul
                  className={
                     'mx-auto grid max-w-[1440px] grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-12 2xl:grid-cols-4'
                  }>
                  {filterProjects.map((p, index) => (
                     <ProjectThumbnail
                        key={p._id}
                        title={p.title.fr}
                        description={p.description?.fr}
                        slug={p.slug.current}
                        thumbnail={p.thumbnail}
                        index={index}
                     />
                  ))}
               </ul>
            </Suspense>
         </main>
      </Flex>
   )
}
