import {ProjectPreview} from '@/app/(pages)/showcase/ProjectPreview'
import {ShadowTitleAnimation} from '@/app/(pages)/showcase/ShadowTitleAnimation'
import {TitleH2} from '@/components/atom/SectionH2'
import {getCategories, getProjects} from '@/lib/sanityClient'
import Category from '@/schemas/category.schema'
import Project from '@/schemas/project.schema'
import PageWithParams from '@/types/pageWithParams'
import {classed} from '@tw-classed/react'
import Link from 'next/link'
import React, {Suspense} from 'react'
import {twMerge} from 'tailwind-merge'

const Showcase = async ({params, searchParams}: PageWithParams) => {
   const projects: Project[] = await getProjects()

   const categories: Category[] = await getCategories()

   return (
      <main className={'min-h-screen w-screen py-24'}>
         <PageHeadingParticule title={'Showcase'} />

         <section>
            <header>
               <nav className={'mx-auto flex gap-4 px-2 py-8'}>
                  <CategoryLink
                     as={Link}
                     href={'/showcase'}
                     active={!searchParams || searchParams?.category === 'all'}>
                     All
                  </CategoryLink>
                  {categories.map((c: Category) => (
                     <CategoryLink
                        key={c._id}
                        as={Link}
                        active={searchParams && searchParams?.category === c?.slug?.current}
                        href={`/showcase?category=${c?.slug?.current}`}>
                        {c.name}
                     </CategoryLink>
                  ))}
               </nav>
            </header>
            <main>
               <Suspense fallback={<p>Loading....</p>}>
                  <ul
                     className={
                        'mx-auto grid max-w-[1440px] grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-12 xl:grid-cols-4'
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
                        .map(p => (
                           <ProjectPreview
                              key={p._id}
                              project={p}
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

const CategoryLink = classed('li', 'select-none', {
   variants: {
      active: {
         true: 'text-primary font-semibold cursor-default',
         false: 'text-primary/80 hover:text-primary cursor-pointer',
      },
   },
})
