import {TitleH2} from '@/components/atom/SectionH2'
import mockedProjects from '@/mocked-content/projects.data.mocked'
import Link from 'next/link'
import React from 'react'

const ProjectPage = async ({
   params,
}: {
   params: {
      id: string
   }
}) => {
   console.log(params.id)
   const project = mockedProjects.find(project => project.slug === params.id)!
   // const project: Project = await getProjectBySlug()
   // const videoURL = getVideoSource(project)
   // const thumbnailURL = getImageSource(project)!

   return (
      <main className={'flex h-screen w-screen flex-col items-center justify-between gap-16'}>
         <section className={'flex items-center bg-green-500/5'}>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            {/*<Suspense fallback={<p>Loading....</p>}>*/}
            {/*   <VideoCloudinary*/}
            {/*      height={`${window.innerHeight / 3}px`}*/}
            {/*      videoSource={{*/}
            {/*         low: 'prod203_capsule_herobanner_360p',*/}
            {/*         medium: 'prod203_capsule_herobanner_480p',*/}
            {/*         high: 'prod203_capsule_herobanner_720p',*/}
            {/*         veryHigh: 'prod203_capsule_herobanner_1080p',*/}
            {/*      }}*/}
            {/*   />*/}
            {/*) : (*/}
            {/*   <Image*/}
            {/*      width={1440}*/}
            {/*      height={720}*/}
            {/*      className={*/}
            {/*         'h-[50vh] object-cover object-center motion-safe:transition-all motion-safe:duration-1000 motion-safe:group-hover/card:scale-110'*/}
            {/*      }*/}
            {/*      src={thumbnailURL}*/}
            {/*      alt={'Image cannot be loaded'}*/}
            {/*   />*/}
            {/*)}*/}
            {/*</Suspense>*/}
         </section>
         <section
            className={'flex min-h-[50vh] flex-grow flex-col items-center justify-center gap-1 '}>
            <TitleH2>Product Page</TitleH2>

            <h2 className={'text-4xl'}>{project.title}</h2>
            {project.i18nDescription &&
               project.i18nDescription.fr.map(d => {
                  return <p key={d._key}>{d.children[0].text}</p>
               })}
            <Link
               href={'/projects'}
               className={'btn-outlined btn'}>
               All Projects
            </Link>
         </section>
      </main>
   )
}

export default ProjectPage
