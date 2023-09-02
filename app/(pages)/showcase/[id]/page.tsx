import {VideoPreview} from '@/app/(pages)/showcase/[id]/VideoPreview'
import {TitleH2} from '@/components/atom/SectionH2'
import {getImageSource, getProjectBySlug, getVideoSource} from '@/lib/sanityClient'
import Project, {ProjectDescription} from '@/schemas/project.schema'
import Link from 'next/link'
import React, {Suspense} from 'react'

const ProjectPage = async ({params}: {params: {id: string}}) => {
   const project: Project = await getProjectBySlug(params.id)
   const videoURL = getVideoSource(project)
   const thumbnailURL = getImageSource(project)!

   return (
      <main className={'flex h-screen w-screen flex-col items-center justify-between gap-16'}>
         <section className={'flex items-center bg-green-500/5'}>
            <Suspense fallback={<p>Loading....</p>}>
               {videoURL ? (
                  <VideoPreview videoURL={videoURL} />
               ) : (
                  <img
                     className={
                        'h-[50vh] object-cover object-center motion-safe:transition-all motion-safe:duration-1000 motion-safe:group-hover/card:scale-110'
                     }
                     src={thumbnailURL}
                     alt={'Image cannot be loaded'}
                  />
               )}
            </Suspense>
         </section>
         <section
            className={'flex min-h-[50vh] flex-grow flex-col items-center justify-center gap-1 '}>
            <TitleH2>Product Page</TitleH2>

            <h2 className={'text-4xl'}>{project.title}</h2>
            {project.description &&
               project.description.map((d: ProjectDescription) => {
                  return <p key={d._key}>{d.children[0].text}</p>
               })}
            <Link
               href={'/showcase'}
               className={'btn-outlined btn'}>
               All Projects
            </Link>
         </section>
      </main>
   )
}

export default ProjectPage
