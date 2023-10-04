import ImagesGallery from '@/app/[lang]/projects/[id]/images-gallery.client'
import LoadingProjectPage from '@/app/[lang]/projects/[id]/loading'
import {ProjectFactory} from '@/lib/sanity/project'
import {SanityStoreFactory} from '@/lib/sanity/sanity-store.factory'
import {getAllCategories, getProjectBySlug} from '@/lib/sanity/service'
import {cn} from '@/lib/utils'
import {I_PageI18nParams} from '@/schemas/i18n.page.props.schema'
import {Container, Flex, Heading, Link as RadixLink, Section, Text} from '@radix-ui/themes'
import Link from 'next/link'
import React, {ComponentPropsWithoutRef, Suspense} from 'react'

export const revalidate = 2

const getContentLakeData = async (id: string) => {
   const project: Awaited<ReturnType<typeof ProjectFactory>> = await getProjectBySlug(id)
   const categories: Awaited<ReturnType<typeof getAllCategories>> = await getAllCategories()
   return new SanityStoreFactory([project], categories)
}

type ProjectPageProps = {
   params: {
      id: string
   }
} & I_PageI18nParams

const ProjectPage = async ({params}: ProjectPageProps) => {
   const store = await getContentLakeData(params.id)
   const project = store.projects[0]
   const YoutubeEmbedded = ({url}: {url: string}) => (
      <iframe
         className={'aspect-video w-full object-contain object-center'}
         src={`https://www.youtube.com/embed/${url}`}
         title="YouTube video player"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullScreen></iframe>
   )
   const CategoryTitle = ({className, children}: ComponentPropsWithoutRef<'h2'>) => (
      <h2 className={cn('text-base font-semibold uppercase', className)}>{children}</h2>
   )
   const CategoryContainer = ({className, children}: ComponentPropsWithoutRef<'li'>) => (
      <li className={cn('flex flex-col items-center gap-1 px-1 py-0', className)}>{children}</li>
   )
   const CategoryContent = ({className, children}: ComponentPropsWithoutRef<'li'>) => (
      <li className={cn('text-sm md:text-base', className)}>{children}</li>
   )
   const CategoryDivider = () => <div className={'divider px-0 py-0 sm:divider-horizontal'} />

   return (
      <main className={'w-screen py-12 md:py-24'}>
         <Suspense fallback={<LoadingProjectPage />}>
            <Container
               mt={{initial: '2', sm: '4'}}
               px={'2'}
               width={'100%'}
               size={'3'}
               className={'mx-auto h-full max-w-7xl'}>
               <Section
                  size={'1'}
                  width={'100%'}>
                  <Flex
                     className={'w-full pl-4 text-sm sm:pl-2 md:text-base xl:pl-0'}
                     gap={'2'}
                     justify={'start'}
                     align={'center'}>
                     <RadixLink asChild>
                        <Link href={'/projects'}>
                           {params.lang === 'en' ? 'Project' : 'Projets'}
                        </Link>
                     </RadixLink>
                     <Text className={'event-none select-none font-poppins font-normal'}>/</Text>
                     <Heading
                        as={'h1'}
                        size={'3'}
                        className={'py-8 text-center font-poppins font-normal'}>
                        {project?.title[params.lang]}
                     </Heading>
                  </Flex>
               </Section>
               <header className={'flex flex-col justify-between gap-2 sm:gap-1 md:gap-2'}>
                  <span
                     role={'separator'}
                     className={'divider w-full'}
                  />

                  <ul
                     className={
                        'flex flex-col justify-between gap-0 px-2 text-center !font-poppins !font-light !text-primary text-balance sm:flex-row sm:gap-0 sm:px-1 md:px-8'
                     }>
                     <CategoryContainer>
                        <CategoryTitle>Services</CategoryTitle>
                        <ul className={' flex-col items-center justify-center '}>
                           {project?.services.map((service, i) => {
                              return <li key={i}>{service[params.lang]}</li>
                           })}
                        </ul>
                     </CategoryContainer>
                     <CategoryDivider />
                     {project?.client && (
                        <>
                           <CategoryContainer>
                              <CategoryTitle>Clients</CategoryTitle>
                              <ul>
                                 {project?.client.map((client, i) => {
                                    return <li key={i}>{client}</li>
                                 })}
                              </ul>
                           </CategoryContainer>
                           <CategoryDivider />{' '}
                        </>
                     )}
                     {project?.marque && (
                        <>
                           <CategoryContainer>
                              <CategoryTitle>
                                 {params.lang === 'en' ? 'Brand' : 'Marque'}
                              </CategoryTitle>
                              <ul>
                                 <CategoryContent key={project.marque}>
                                    {project.marque}
                                 </CategoryContent>
                              </ul>
                           </CategoryContainer>
                           <CategoryDivider />
                        </>
                     )}
                     {/*  <CategoryContainer>
                        <CategoryTitle>Categories</CategoryTitle>
                        <ul>
                           {project?.categories.map((category, i) => {
                              return (
                                 <CategoryContent key={i}>
                                    {category.name[params.lang]}
                                 </CategoryContent>
                              )
                           })}
                        </ul>
                     </CategoryContainer>
                     <CategoryDivider />*/}
                     <CategoryContainer>
                        <CategoryTitle>{params.lang === 'en' ? 'Year' : 'Année'}</CategoryTitle>
                        <ul>
                           <CategoryContent key={`date${project.releaseDate}`}>
                              {new Date(project.releaseDate).getFullYear()}
                           </CategoryContent>
                        </ul>
                     </CategoryContainer>
                     <CategoryDivider />
                     {project.awards && (
                        <CategoryContainer>
                           <CategoryTitle>{params.lang === 'en' ? 'Awards' : 'Prix'}</CategoryTitle>
                           <ul>
                              {project?.awards.map((award, i) => {
                                 return <CategoryContent key={i}>{award}</CategoryContent>
                              })}
                           </ul>
                        </CategoryContainer>
                     )}
                  </ul>

                  <span
                     role={'separator'}
                     className={'divider w-full'}
                  />
               </header>
               <div className={'flex flex-col items-center justify-center px-2 py-12 '}>
                  <div
                     className={
                        'prose flex w-full flex-col gap-2 px-3 !font-poppins text-sm !font-light leading-loose tracking-wide !text-primary sm:gap-3 sm:text-base'
                     }>
                     {project?.description &&
                        project?.description[params.lang]?.map(block => {
                           return block.children.map(text => {
                              return (
                                 <p
                                    className={'m-0 max-w-[85ch] p-0 text-left md:max-w-[105ch]'}
                                    key={text._key}>
                                    {text.text}
                                 </p>
                              )
                           })
                        })}
                  </div>
               </div>

               <section className={'flex w-full flex-col'}>
                  {project?.youtubeVideoURL && (
                     <figcaption className={'aspect-video w-full'}>
                        <YoutubeEmbedded url={project?.youtubeVideoURL} />
                     </figcaption>
                  )}
               </section>
               {project?.gallery && <ImagesGallery pictures={project.gallery} />}
            </Container>
         </Suspense>
      </main>
   )
}

export default ProjectPage
