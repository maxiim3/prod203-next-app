'use client'

import content from '@/app/[lang]/artists/artist-content.json'
import type {T_I18nPageParam} from '@/app/[lang]/page-params.schema'
import {SectionTitle} from '@/components/section-title'
import {cn} from '@/lib/utils'
import Image from 'next/image'
import {useCallback, useEffect, useState} from 'react'
import {createPortal} from 'react-dom'
import useLangParams from '../use-lang-params.hook'
import {useFetchAssets} from './useFetchAssets'

export default function Home({params}: T_I18nPageParam) {
   const {lang} = params
   const assets = useFetchAssets()
   const artistData = content

   return (
      <main className={'z-0 mx-auto w-screen py-24'}>
         <h1 className="sr-only">Artists</h1>
         <div className={'min-h-48 flex w-screen items-center justify-center'}>
            <div className={'box-border flex w-[calc(100vw-10px)] max-w-[990px] flex-col gap-8'}>
               {artistData.map(({artists, title}, key) => {
                  return (
                     <>
                        <SectionTitle key={`title-${key}`}>{title[lang]}</SectionTitle>
                        {Object.entries(artists).map(([key, value]) => (
                           <div
                              key={key}
                              className={
                                 'min-h-16 flex w-full flex-col-reverse items-center border border-primary/10 py-8 shadow-md md:flex-row'
                              }>
                              <ArtistImageContainer
                                 url={`/assets/artists/${value.assetdirectory}/`}
                                 assets={assets[value.assetdirectory]!}
                              />
                              <ArtistContent
                                 name={value.artist}
                                 text={value[lang]}
                              />
                           </div>
                        ))}
                     </>
                  )
               })}
            </div>
         </div>
      </main>
   )
}

function ArtistContent({text, name}: {text: string; name?: string}) {
   return (
      <div className="flex h-96 flex-[60%] flex-col items-center justify-center gap-4 bg-transparent p-8 text-white">
         {name && <strong className={'w-full text-lg'}>{name}</strong>}
         <p>{text}</p>
      </div>
   )
}

function buildURL(url: string, endpoint: string) {
   return url.concat(endpoint)
   // return String('http://localhost:3000').concat(url.concat(endpoint))
}

function ArtistImageContainer({url, assets}: {url: string; assets: string[]}) {
   const [selectedIndex, setSelectedIndex] = useState(0)
   const [openModal, setOpenModal] = useState(false)
   const selectedImage = useCallback(
      () => buildURL(url, assets[selectedIndex]!),
      [url, assets, selectedIndex]
   )

   const onOpen = (imageIndex: number) => {
      setSelectedIndex(imageIndex)
      setOpenModal(true)
   }

   const onClose = useCallback(() => setOpenModal(false), [])

   return (
      <div className="max-h-fill relative mx-auto flex h-auto flex-[40%] flex-wrap items-center justify-center gap-2">
         {assets?.map((imgURL, key) => (
            <div
               key={imgURL}
               className="group relative h-32 w-32 cursor-pointer overflow-clip rounded-sm"
               onClick={() => onOpen(key)}>
               <Image
                  className={
                     'aspect-square h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
                  }
                  width={4 * 40}
                  height={4 * 40}
                  src={buildURL(url, imgURL)}
                  alt={buildURL(url, imgURL)}
                  loading="lazy"
                  quality={20}
               />
            </div>
         ))}
         {openModal &&
            selectedImage() &&
            createPortal(
               <ImageModal
                  image={selectedImage()!}
                  closeModal={onClose}
               />,
               document.body
            )}
      </div>
   )
}

function ImageModal({image, closeModal}: {image: string; closeModal: any}) {
   const {lang} = useLangParams()

   useEffect(() => {
      const closeOnEscape = (key: KeyboardEvent) => key.key === 'Escape' && closeModal()
      document.addEventListener('keydown', closeOnEscape)

      return () => document.removeEventListener('keydown', closeOnEscape)
   }, [closeModal])

   return (
      <div className="fixed inset-0 flex h-screen w-screen items-center justify-center overflow-hidden bg-base-200/90 text-primary">
         <div className="relative w-full max-w-[680px] overflow-clip rounded-lg border-2 border-base-100/10 shadow-sm">
            <button
               className="color-primary text-md absolute right-4 top-4 rounded-lg bg-base-200/20 p-2 font-semibold uppercase underline underline-offset-4 transition-colors hover:bg-base-200/40"
               onClick={closeModal}>
               {lang === 'en' ? 'Close' : 'Fermer'}
            </button>
            <Image
               className={'aspect-square h-full w-full object-cover'}
               width={600}
               height={600}
               src={image}
               alt={image}
               loading="lazy"
               quality={100}
            />
         </div>
      </div>
   )
}

function Placeholder({type, text, name}: {type: 'image' | 'text'; text: string; name?: string}) {
   return (
      <div
         className={cn(
            `flex h-96 flex-col items-center justify-center p-8 `,
            type === 'image'
               ? 'flex-[40%] bg-slate-400 text-black'
               : 'flex-[60%] bg-transparent text-white',
            name && 'gap-4'
         )}>
         {name && <strong className={'w-full text-lg'}>{name}</strong>}
         {text}
      </div>
   )
}
