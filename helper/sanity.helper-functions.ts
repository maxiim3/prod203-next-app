import CategoryClassFactory from '@/design-pattern/category.class-factory'
import ProjectClassFactory from '@/design-pattern/project.class-factory'
import sanityClient from '@/design-pattern/sanity-client.singleton'
import {T_Category} from '@/schemas/category.sanity.schema'
import {T_Project} from '@/schemas/project.sanity.schema'
import imageUrlBuilder from '@sanity/image-url'

// Using the fetchData function
export const getAllProjects = async () => {
   const projectsResponses: T_Project[] = await sanityClient.fetch(`*[_type == "project"]`)
   const projects: ProjectClassFactory[] = projectsResponses.map(projectRes => {
      return new ProjectClassFactory(projectRes)
   })

   return projects
}

export const getProjectBySlug = async (slug: string) => {
   const projectsResponses = await sanityClient.fetch(
      `*[_type == "project" && slug.current =="${slug}"]`
   )
   const project = new ProjectClassFactory(projectsResponses[0])

   return project
}

export const getAllCategories = async () => {
   const categoriesResponses: T_Category[] = await sanityClient.fetch(`*[_type == "category"]`)
   const categories = categoriesResponses.map(category => {
      return new CategoryClassFactory(category)
   })

   return categories
}

/**
 * Helper function for using the current sanity image url. It will return the url of the preview image based on the DATA_SOURCE (production or preview)
 * - imageUrlFor(source).url()
 *  *        - imageUrlFor(source).width(200).url()
 *  *        - imageUrlFor(source).height(200).url()
 *  *        - source can be any image object from sanity
 * @param project
 */
export function getImageSource(project: ProjectClassFactory) {
   const imageBuilder = imageUrlBuilder(sanityClient)
   return imageBuilder?.image(project.thumbnail)?.url()
}

/**
 * Helper function for using the current sanity video url. It will return the url of the preview video based on the DATA_SOURCE (production or preview)
 * - imageUrlFor(source).url()
 * *        - imageUrlFor(source).width(200).url()
 * *        - imageUrlFor(source).height(200).url()
 * *        - source can be any image object from sanity
 * @param project
 */
export function getVideoSource(project: ProjectClassFactory) {
   return project.cloudinaryVideoSources
}
