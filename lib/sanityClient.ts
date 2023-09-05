import {mockedCategories, mockedProjects} from '@/lib/mocked_data'
import Category from '@/schemas/category.schema'
import Project from '@/schemas/project.schema'
import imageUrlBuilder from '@sanity/image-url'
import {createClient} from 'next-sanity'

type DATASOURCE_TYPE = 'sanity' | 'mocked'
export const DATA_SOURCE: DATASOURCE_TYPE = 'mocked'

export const client = createClient({
   projectId: 'lo6ab3qt',
   dataset: 'production',
   useCdn: false,
   apiVersion: '2023-08-19',
})

// Using the fetchData function
export const getProjects = async () => {
   return fetchData<Project>(`*[_type == "project"]`)
}

export const getProjectBySlug = async (slug: string) => {
   const projects = await fetchData<Project>(`*[_type == "project" && slug.current =="${slug}"]`)
   return projects[0]
}

export const getCategories = async () => {
   return fetchData<Category>(`*[_type == "category"]`)
}

export async function fetchData<T>(query: string) {
   switch (DATA_SOURCE) {
      case 'sanity':
         return await client.fetch(query)
      case 'mocked':
         if (query.includes('_type == "project"') && query.includes('slug.current')) {
            const slug = query
               .trim()
               .split('&&')[1]
               .match(/"([^"]+)"/)![1]! as string
            return mockedProjects.filter(project => project.slug.current === slug) as T
         } else if (query.includes('_type == "project"')) {
            return mockedProjects as unknown as T[]
         } else if (query.includes('_type == "category"')) {
            return mockedCategories as unknown as T[]
         }
         break
      default:
         return []
   }
}

/**
 * Helper function for using the current sanity image url. It will return the url of the preview image based on the DATA_SOURCE (production or preview)
 * - imageUrlFor(source).url()
 *  *        - imageUrlFor(source).width(200).url()
 *  *        - imageUrlFor(source).height(200).url()
 *  *        - source can be any image object from sanity
 * @param project
 */
export function getImageSource(project: Project) {
   switch (DATA_SOURCE) {
      case 'sanity':
         const imageBuilder = imageUrlBuilder(client)
         return imageBuilder?.image(project.thumbnail)?.url()
      case 'mocked':
         return project.thumbnail.asset._ref
   }
}

/**
 * Helper function for using the current sanity video url. It will return the url of the preview video based on the DATA_SOURCE (production or preview)
 * - imageUrlFor(source).url()
 * *        - imageUrlFor(source).width(200).url()
 * *        - imageUrlFor(source).height(200).url()
 * *        - source can be any image object from sanity
 * @param project
 */
export function getVideoSource(project: Project) {
   switch (DATA_SOURCE) {
      case 'sanity':
         const videoRef = project.preview.asset['_ref'].split('-')[1]

         const extension = 'mp4' // Assuming the video is in mp4 format. You might need to adjust this based on your actual video format.
         const dataset = 'production'
         return `https://cdn.sanity.io/files/${process.env.PROJECT_ID}/${dataset}/${videoRef}.${extension}`

      case 'mocked':
         return project.preview.asset._ref
   }
}
