import ProjectPageLoader from '@/app/[lang]/projects/loading'
import ProjectsPage from '@/app/[lang]/projects/projects-page.client'
import {SanityStoreFactory} from '@/lib/sanity/sanity-store.factory'
import {getAllCategories, getAllProjects} from '@/lib/sanity/service'
import React, {Suspense} from 'react'

import type {T_I18nPageParam} from '@/app/[lang]/page-params.schema'

export const revalidate = 2

const getContentLakeData = async () => {
   const projects = await getAllProjects()
   const categories = await getAllCategories()
   return Object.freeze(new SanityStoreFactory(projects, categories))
}

// const Projects = async ({searchParams}: PageSlugAndCategoryParams) => { /*Moved the logic in useSearchParams in projectGallery component*/
const Projects = async ({params}: T_I18nPageParam) => {
   const {projects, categories} = await getContentLakeData()

   return (
      <main className={'min-h-screen w-screen py-24'}>
         <Suspense fallback={<ProjectPageLoader />}>
            <ProjectsPage
               store={{projects: projects, categories: categories}}
               lang={params.lang}
            />
         </Suspense>
      </main>
   )
}

export default Projects
