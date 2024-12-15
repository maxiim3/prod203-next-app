'use client'

import ImageBuilder from '@/lib/sanity/image.builder'
import {ProjectFactory} from '@/lib/sanity/project'
import {ChevronLeftIcon, ChevronRightIcon, Cross1Icon} from '@radix-ui/react-icons'
import {AspectRatio, Box, Button, Flex, Grid, Section} from '@radix-ui/themes'
import Image from 'next/image'
import React, {useMemo, useRef, useState} from 'react'
import {twMerge} from 'tailwind-merge'

type T_ProjectFactory = ReturnType<typeof ProjectFactory>
export default function ImagesGallery({pictures}: {pictures: T_ProjectFactory['gallery']}) {
   const arrayOfPictures = useMemo(
      () =>
         pictures!.map(img => {
            const builder = ImageBuilder(img)
            // console.log(builder)
            return builder.url()
         }),
      [pictures]
   )

   const modalRef = useRef(null)
   const [isModalOpen, setIsModalOpen] = useState(false)
   const [currentImage, setCurrentImage] = useState<number>(1)

   function handleOnClick(i: number) {
      setCurrentImage(i)
      setIsModalOpen(true)
   }

   function closeModal() {
      setIsModalOpen(false)
   }

   function nextImage() {
      if (currentImage === arrayOfPictures.length - 1) return setCurrentImage(0)

      // if( document.startViewTransition)
      //   return  document.startViewTransition(() => setCurrentImage(i => i + 1))
      return setCurrentImage(i => i + 1)
   }

   function previousImage() {
      if (currentImage === 0) return setCurrentImage(arrayOfPictures.length - 1)

      // @ts-ignore
      // return document.startViewTransition(() => setCurrentImage(i => i - 1))
      return setCurrentImage(i => i - 1)
   }

   // @ts-ignore
   let activeImage = arrayOfPictures[currentImage]!

   return (
      <Section
         aria-label={"Galerie d'images"}
         size={'1'}
         className={'relative'}
         width={'100%'}>
         {/*Gallery*/}
         <Grid
            columns={{initial: '1', xs: '2', sm: '3', md: '4'}}
            gap={'3'}
            rows={'auto'}>
            <>
               {arrayOfPictures.map((imgSrc, index) => (
                  <AspectRatio
                     ratio={1}
                     onClick={() => handleOnClick(index)}
                     className={'group cursor-pointer overflow-hidden'}
                     key={index}>
                     <Image
                        fill={true}
                        className={twMerge(
                           'object-cover opacity-80 transition motion-safe:duration-700',
                           'group-hover:scale-125 group-hover:opacity-100'
                        )}
                        src={imgSrc || '/image-placeholder.png'}
                        alt={'placeholder'}
                     />
                  </AspectRatio>
               ))}
            </>
         </Grid>
         {/*MODAL*/}
         {/*Todo Add Accessibility to navigate between images*/}
         <Box
            className={twMerge(
               'fixed left-0 top-0 z-50 h-[100vh] w-[100vw] bg-black/90 backdrop-blur-sm',
               isModalOpen ? 'block' : 'hidden'
            )}
            ref={modalRef}>
            <Flex
               justify={'center'}
               align={'center'}
               height={'100%'}>
               <Box
                  className={
                     'aspect-square w-full p-2 sm:w-2/3 md:w-1/2 landscape:h-2/3 landscape:w-auto'
                  }>
                  <AspectRatio ratio={1}>
                     <Image
                        fill={true}
                        className={twMerge('h-full w-full object-cover object-center')}
                        src={activeImage}
                        alt={'placeholder'}
                     />
                  </AspectRatio>
               </Box>
            </Flex>
            <Box className={'absolute left-0 top-0 h-full w-full'}>
               <Flex
                  height={'100%'}
                  justify={'between'}
                  align={'center'}
                  px={'1'}>
                  <Button
                     variant={'ghost'}
                     onClick={previousImage}
                     size={'4'}>
                     <ChevronLeftIcon
                        width={'64'}
                        height={'64'}
                     />
                  </Button>
                  <Button
                     variant={'ghost'}
                     onClick={nextImage}
                     size={'4'}>
                     <ChevronRightIcon
                        width={'64'}
                        height={'64'}
                     />
                  </Button>
               </Flex>
            </Box>

            <Button
               className={'absolute right-6 top-12'}
               variant={'ghost'}
               radius={'full'}
               onClick={() => setIsModalOpen(false)}
               size={'4'}>
               <Cross1Icon
                  width={'44'}
                  height={'44'}
               />
            </Button>
         </Box>
      </Section>
   )
}
