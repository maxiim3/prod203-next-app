import {Artist} from '@/lib/sanity/artist'
import {CategoryFactory, type T_Category} from '@/lib/sanity/category'
import {ProjectFactory, type T_Project} from '@/lib/sanity/project'
import sanityClient from '@/lib/sanity/sanity-client'

// Using the fetchData function
export const getAllProjects = async () => {
   const projectsResponses: T_Project[] = await sanityClient.fetch(`*[_type == "project"]`)
   const projects: ReturnType<typeof ProjectFactory>[] = projectsResponses.map(projectRes =>
      ProjectFactory(projectRes)
   )
   return projects
}

export const getProjectBySlug = async (slug: string) => {
   const projectsResponses = await sanityClient.fetch(
      `*[_type == "project" && slug.current =="${slug}"]`
   )
   return ProjectFactory(projectsResponses[0])
}

export const getAllCategories = async () => {
   const categoriesResponses: T_Category[] = await sanityClient.fetch(`*[_type == "category"]`)
   const categories: ReturnType<typeof CategoryFactory>[] = categoriesResponses.map(category =>
      CategoryFactory(category)
   )

   return categories
}

export const getAllArtists = async () => {
   const artistResponse: Artist.Artist[] = await sanityClient.fetch(`*[_type == "artist"]`)
   const artists: Artist.UiModel[] = artistResponse.map(artist => Artist.ArtistFactory(artist))

   return artists
}
