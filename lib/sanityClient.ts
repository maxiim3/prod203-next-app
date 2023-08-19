import Project from "@/schemas/project.schema"
import imageUrlBuilder from "@sanity/image-url"
import {createClient} from "next-sanity"

export const client = createClient({
   projectId: "lo6ab3qt",
   dataset: "production",
   useCdn: false,
   apiVersion: "2023-08-19",
})

export const imageBuilder = imageUrlBuilder(client)

/**
 * Helper function for using the current sanity image builder
 * usage : - imageUrlFor(source).url()
 *        - imageUrlFor(source).width(200).url()
 *        - imageUrlFor(source).height(200).url()
 *        - source can be any image object from sanity
 * @param source
 */
export const imageUrlFor = (source: any) => imageBuilder.image(source)

/**
 * Helper function for using the current sanity video url
 * usage : - videoUrlFor(project)
 *       - project can be any project object from sanity
 * @param project
 */
export function videoUrlFor(project: Project) {
   const videoRef = project?.preview?.asset["_ref"].split("-")[1]

   if (!videoRef) return null

   const extension = "mp4" // Assuming the video is in mp4 format. You might need to adjust this based on your actual video format.
   const dataset = "production"
   const videoURL = `https://cdn.sanity.io/files/${process.env.PROJECT_ID}/${dataset}/${videoRef}.${extension}`
   return videoURL
}
