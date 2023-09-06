import {ProjectPreview} from '@/app/(pages)/projects/ProjectPreview'
import {ShadowTitleAnimation} from '@/app/(pages)/projects/ShadowTitleAnimation'
import {TitleH2} from '@/components/atom/SectionH2'
import {getCategories, getProjects} from '@/lib/sanityClient'
import Category from '@/schemas/category.schema'
import Project from '@/schemas/project.schema'
import {PageSlugAndCategoryParams} from '@/types/types'
import Link from 'next/link'
import React, {PropsWithChildren, Suspense} from 'react'
import {twMerge} from 'tailwind-merge'

const Showcase = async ({params, searchParams}: PageSlugAndCategoryParams) => {
   const projects: Project[] = await getProjects()

   const categories: Category[] = await getCategories()

   return (
      <main className={'min-h-screen w-screen py-24'}>
         {/*<PageHeadingParticule title={'Showcase'} />*/}

         <section>
            <header>
               <nav>
                  <ul
                     className={
                        'mx-auto flex w-screen items-center justify-center gap-4 px-2 py-8'
                     }>
                     <SelectCategory
                        href={'/showcase'}
                        active={
                           !searchParams.category ||
                           !searchParams ||
                           searchParams?.category === 'all'
                        }>
                        All
                     </SelectCategory>
                     {categories.map((c: Category) => (
                        <SelectCategory
                           key={c._id}
                           active={searchParams && searchParams?.category === c?.slug?.current}
                           href={`/showcase?category=${c?.slug?.current}`}>
                           {c.name}
                        </SelectCategory>
                     ))}
                  </ul>
               </nav>
            </header>
            <main>
               <Suspense fallback={<p>Loading....</p>}>
                  <ul
                     className={
                        'mx-auto grid max-w-[1440px] grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-12 2xl:grid-cols-4'
                     }>
                     {projects
                        .filter(p => {
                           if (!searchParams.category || searchParams.category === 'all')
                              return true
                           const activeCategoryReference = categories.find(
                              c => c.slug.current === searchParams.category
                           )?._id
                           return categories.find(c => activeCategoryReference === p.category._ref)
                        })
                        .map((p, index) => (
                           <ProjectPreview
                              key={p._id}
                              project={p}
                              index={index}
                           />
                        ))}
                  </ul>
               </Suspense>
            </main>
         </section>
      </main>
   )
}

export default Showcase

const PageHeadingParticule = ({title}: {title: string}) => (
   <section className={'relative'}>
      <TitleH2 className={twMerge('mx-auto animate-reveal px-0')}>{title}</TitleH2>
      <ShadowTitleAnimation title={title} />
   </section>
)

const SelectCategory = ({
   active = false,
   className,
   href,
   children,
}: PropsWithChildren<{
   className?: string
   href: string
   active: boolean
}>) => (
   <li
      className={twMerge(
         'select-none',
         active
            ? 'cursor-default font-semibold text-primary'
            : 'cursor-pointer text-primary/80 hover:text-primary',
         className
      )}>
      <Link href={href}>{children}</Link>
   </li>
)
