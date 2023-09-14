import ProjectGallery from '@/app/(pages)/projects/project.gallery.client'
import React from 'react'

// const Projects = async ({searchParams}: PageSlugAndCategoryParams) => { /*Moved the logic in useSearchParams in projectGallery component*/
const Projects = async () => {
   return (
      <main className={'min-h-screen w-screen py-24'}>
         <ProjectGallery />
      </main>
   )
}

export default Projects
