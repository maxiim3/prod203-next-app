import ImagesGallery from '@/app/(pages)/projects/[id]/images-gallery.client'
import {ProjectFactory} from '@/lib/sanity/project'
import {getAllCategories, getProjectBySlug} from '@/lib/sanity/service'
import {Box, Container, Flex, Heading, Link as RadixLink, Section, Text} from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import {twMerge} from 'tailwind-merge'

export const revalidate = 2
const ProjectPage = async ({
   params,
}: {
   params: {
      id: string
   }
}) => {
   const project: Awaited<ReturnType<typeof ProjectFactory>> = await getProjectBySlug(params.id)
   const categories: Awaited<ReturnType<typeof getAllCategories>> = await getAllCategories()
   return (
      <main className={'w-screen py-12 md:py-24'}>
         <Container
            mt={{initial: '2', sm: '4'}}
            px={'2'}
            width={'100%'}
            size={'3'}
            className={'h-full'}>
            <Section
               size={'1'}
               width={'100%'}>
               <Flex
                  className={'w-full'}
                  gap={'2'}
                  justify={'start'}
                  align={'center'}>
                  <RadixLink asChild>
                     <Link href={'/projects'}>Project</Link>
                  </RadixLink>
                  <Text className={'event-none select-none font-poppins font-normal'}>/</Text>
                  <Heading
                     as={'h1'}
                     size={'3'}
                     className={'py-8 text-center font-poppins font-normal'}>
                     {project.title.fr}
                  </Heading>
               </Flex>
            </Section>
            <header className={'flex flex-col justify-between gap-2'}>
               <span
                  role={'separator'}
                  className={'divider w-full'}
               />

               <ul className={'flex justify-between px-8'}>
                  <li className={'flex flex-col items-center gap-3'}>
                     <h2 className={'text-lg font-semibold uppercase'}>Services</h2>
                     <ul>
                        {project?.services.map((service, i) => {
                           return <li key={i}>{service.fr}</li>
                        })}
                     </ul>
                  </li>
                  <li className={'flex flex-col items-center gap-3'}>
                     <h2 className={'text-lg font-semibold uppercase'}>Category</h2>
                     <ul>
                        {project?.category.map((category, i) => {
                           const retrieveCat = categories.find(cat => {
                              console.log(cat._id === category._ref)
                              return cat._id === category._ref
                           })!
                           console.log(retrieveCat)
                           return <li key={i}>{retrieveCat?.displayedValue?.fr}</li>
                        })}
                     </ul>
                  </li>
               </ul>

               <span
                  role={'separator'}
                  className={'divider w-full'}
               />
            </header>
            <div className={'flex flex-col items-center justify-center px-2 py-12 '}>
               <div
                  className={
                     'prose flex w-full max-w-[70ch] flex-col items-center justify-center gap-3 text-center text-sm leading-relaxed text-balance sm:text-base md:text-lg'
                  }>
                  {project?.description &&
                     project?.description?.fr?.map(block => {
                        return block.children.map(text => {
                           return <p key={text._key}>{text.text}</p>
                        })
                     })}
               </div>
            </div>

            <section className={'flex w-full flex-col'}>
               <figcaption className={'aspect-video w-full'}>
                  <YoutubeEmbeded url={project.youtubeVideoURL} />
               </figcaption>
            </section>
            {project.gallery && <ImagesGallery pictures={project.gallery} />}
         </Container>
      </main>
   )
}

const YoutubeEmbeded = ({url}: {url: string}) => (
   <iframe
      className={'aspect-video w-full object-contain object-center'}
      src={`https://www.youtube.com/embed/${url}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen></iframe>
)

type ClassName = {
   className?: string
}
const BoxPlaceHolder = ({
   className,
   children,
}: ClassName & {
   children?: React.ReactElement
}) => (
   <Box
      width={'100%'}
      className={twMerge('h-96 bg-gray-800/40', className)}>
      {children}
   </Box>
)

export default ProjectPage
