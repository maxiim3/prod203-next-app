import {SectionTitle} from "@/app/UI"
import {VideoPreview} from "@/app/showcase/[id]/VideoPreview"
import {client, imageUrlFor, videoUrlFor} from "@/lib/sanityClient"
import Project, {ProjectDescription} from "@/schemas/project.schema"
import Link from "next/link"
import React, {Suspense} from "react"

const ProjectPage = async ({params}: {params: {id: string}}) => {
   console.log(params)
   const project = (
      await client.fetch(`*[_type == "project" && slug.current =="${params.id}"]`)
   )[0] satisfies Project

   const videoURL = videoUrlFor(project)

   return (
      <main className={"flex h-screen w-screen flex-col items-center justify-between gap-16"}>
         <section className={"flex items-center bg-green-500/5"}>
            <Suspense
               fallback={
                  <img
                     className={
                        "h-[50vh] object-cover object-center motion-safe:transition-all motion-safe:duration-1000 motion-safe:group-hover/card:scale-110"
                     }
                     src={imageUrlFor(project.thumbnail).url()}
                     alt="Shoes"
                  />
               }>
               {videoURL ? (
                  <VideoPreview videoURL={videoURL} />
               ) : (
                  <img
                     className={
                        "h-[50vh] object-cover object-center motion-safe:transition-all motion-safe:duration-1000 motion-safe:group-hover/card:scale-110"
                     }
                     src={imageUrlFor(project.thumbnail).url()}
                     alt="Shoes"
                  />
               )}
            </Suspense>
         </section>
         <section
            className={"flex min-h-[50vh] flex-grow flex-col items-center justify-center gap-1 "}>
            <SectionTitle>Product Page</SectionTitle>

            <h2 className={"text-4xl"}>{project.title}</h2>
            {project.description &&
               project.description.map((d: ProjectDescription) => {
                  return <p key={d._key}>{d.children[0].text}</p>
               })}
            <Link
               href={"/showcase"}
               className={"btn-outlined btn"}>
               All Projects
            </Link>
         </section>
      </main>
   )
}

export default ProjectPage
