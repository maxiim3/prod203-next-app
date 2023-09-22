import ImagesGallery from '@/app/(pages)/projects/[id]/images-gallery.client'
import generateArrayHelper from '@/helper/generate-array.helper-function'
import {ProjectFactory} from '@/lib/sanity/project'
import {getProjectBySlug} from '@/lib/sanity/service'
import {
   AspectRatio,
   Box,
   Container,
   Flex,
   Heading,
   Link as RadixLink,
   Section,
   Separator,
   Text,
} from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import {twMerge} from 'tailwind-merge'

export const revalidate = 2

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

const ProjectPage = async ({
   params,
}: {
   params: {
      id: string
   }
}) => {
   console.log(params.id)
   /*
   const project = mockedProjects.find(project => project.slug === params.id)!
*/
   const project: Awaited<ReturnType<typeof ProjectFactory>> = await getProjectBySlug(params.id)
   // const project: Project = await getProjectBySlug()
   // const videoURL = getVideoSource(project)
   // const thumbnailURL = getImageSource(project)!

   return (
      <main className={'sw-screen py-12 md:py-24'}>
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
                     as={'h2'}
                     size={'3'}
                     className={'py-8 text-center font-poppins font-normal'}>
                     {project.title.fr}
                  </Heading>
               </Flex>
            </Section>

            <Separator
               size={'4'}
               orientation="horizontal"
            />

            <Section size={'1'}>
               <Flex
                  direction={'row'}
                  wrap={'wrap'}
                  gap={'4'}
                  role={'list'}
                  align={'center'}
                  justify={{initial: 'center', sm: 'between'}}>
                  {/* column*/}
                  <>
                     {generateArrayHelper(4).map(i => (
                        <Flex
                           key={i}
                           role={'listitem'}
                           direction={'column'}>
                           <Heading as={'h3'}>Category {i}</Heading>
                           <Text>Lorem ipsum</Text>
                           <Text>Lorem ipsum</Text>
                           <Text>Lorem ipsum</Text>
                           <Text>Lorem ipsum</Text>
                        </Flex>
                     ))}
                  </>
               </Flex>
            </Section>

            <Separator
               size={'4'}
               orientation="horizontal"
            />

            <Section
               role={'main'}
               size={'1'}>
               <Flex direction={'column'}>
                  <Section
                     aria-label={'project description'}
                     width={'100%'}
                     size={'1'}>
                     <Flex
                        direction={{
                           initial: 'column',
                           sm: 'row',
                        }}
                        gap={{initial: '6', xs: '9', sm: '2', md: '4'}}
                        className={'w-full'}>
                        <AspectRatio ratio={16 / 9}>
                           <Flex
                              align={{initial: 'end', sm: 'center'}}
                              height={'100%'}
                              justify={'center'}>
                              <iframe
                                 className={'aspect-video w-full object-contain object-center'}
                                 src="https://www.youtube.com/embed/TKmeWdaPYuA?si=E-jBV9-PsRvbWzIT"
                                 title="YouTube video player"
                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                 allowFullScreen></iframe>
                           </Flex>
                        </AspectRatio>

                        <AspectRatio ratio={16 / 9}>
                           <Flex
                              align={{initial: 'start', sm: 'center'}}
                              height={'100%'}
                              justify={'center'}>
                              {project?.description &&
                                 project?.description?.fr?.map(d => {
                                    return <Text key={d._key}>{d.children[0].text}</Text>
                                 })}
                           </Flex>
                        </AspectRatio>
                     </Flex>
                  </Section>

                  <ImagesGallery pictures={project.gallery} />
               </Flex>
            </Section>
         </Container>
      </main>
   )
}

export default ProjectPage
