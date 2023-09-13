import {ProjectPreview} from '@/app/(pages)/projects/ProjectPreview'
import {ShadowTitleAnimation} from '@/app/(pages)/projects/ShadowTitleAnimation'
import {TitleH2} from '@/components/atom/SectionH2'
import mockedCategories from '@/mocked-content/categories.data.mocked'
import mockedProjects from '@/mocked-content/projects.data.mocked'
import {PageSlugAndCategoryParams} from '@/schemas/project.page.props.schema'
import Link from 'next/link'
import React, {PropsWithChildren, Suspense} from 'react'
import {twMerge} from 'tailwind-merge'

const Showcase = async ({searchParams}: PageSlugAndCategoryParams) => {
   // const projects = await getAllProjects()
   // const categories = await getAllCategories()
   const projects = mockedProjects
   const categories = mockedCategories

   return (
      <main className={'min-h-screen w-screen py-24'}>
         <section>
            <header className={'w-screen overflow-hidden'}>
               {/* TODO OVERFLOW Scroll on ul Nav container do not work*/}
               <nav>
                  <ul
                     className={
                        'mx-auto flex w-max items-center justify-center gap-4 overflow-x-auto px-2 py-8'
                     }>
                     <SelectCategory
                        href={'/projects'}
                        active={
                           !searchParams.category ||
                           !searchParams ||
                           searchParams?.category === 'all'
                        }>
                        All
                     </SelectCategory>
                     {categories.map(c => (
                        <SelectCategory
                           key={c.id}
                           active={searchParams && searchParams?.category === c?.slug}
                           href={`/projects?category=${c?.slug}`}>
                           {c.i18nValue.fr}
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
                              c => c.slug === searchParams.category
                           )?.id
                           return categories.find(c => activeCategoryReference === p.category._ref)
                        })
                        .map((p, index) => (
                           <ProjectPreview
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
