import ProjectsPage from '@/app/(pages)/projects/projects-page.client'
import {CategoryFactory} from '@/lib/sanity/category'
import {ProjectFactory} from '@/lib/sanity/project'
import {getAllCategories, getAllProjects} from '@/lib/sanity/service'
import React, {Suspense} from 'react'

const getContentLakeData = async () => {
   const projects = await getAllProjects()
   const categories = await getAllCategories()

   return {
      projects,
      categories,
   } as {
      projects: ReturnType<typeof ProjectFactory>[]
      categories: ReturnType<typeof CategoryFactory>[]
   }
}

// const Projects = async ({searchParams}: PageSlugAndCategoryParams) => { /*Moved the logic in useSearchParams in projectGallery component*/
const Projects = async () => {
   const store = await getContentLakeData()

   return (
      <main className={'min-h-screen w-screen py-24'}>
         <Suspense fallback={'Loading Data'}>
            <ProjectsPage data={store} />
         </Suspense>
      </main>
   )
}

export default Projects
