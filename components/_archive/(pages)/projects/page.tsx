import Loading from '@/components/_archive/(pages)/projects/loading'
import ProjectsPage from '@/components/_archive/(pages)/projects/projects-page.client'
import {SanityStoreFactory} from '@/lib/sanity/sanity-store.factory'
import {getAllCategories, getAllProjects} from '@/lib/sanity/service'
import React, {Suspense} from 'react'

export const revalidate = 2

const getContentLakeData = async () => {
   const projects = await getAllProjects()
   const categories = await getAllCategories()
   return Object.freeze(new SanityStoreFactory(projects, categories))
}

// const Projects = async ({searchParams}: PageSlugAndCategoryParams) => { /*Moved the logic in useSearchParams in projectGallery component*/
const Projects = async () => {
   const {projects, categories} = await getContentLakeData()

   return (
      <main className={'min-h-screen w-screen py-24'}>
         <Suspense fallback={<Loading />}>
            <ProjectsPage store={{projects: projects, categories: categories}} />
         </Suspense>
      </main>
   )
}

export default Projects
