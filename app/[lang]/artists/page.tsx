'use client'

import content from '@/app/[lang]/artists/artist-content.json'
import type {T_I18nPageParam} from '@/app/[lang]/page-params.schema'
import {SectionTitle} from '@/components/section-title'
import {cn} from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import useLangParams from '../use-lang-params.hook'
import {useFetchAssets} from './useFetchAssets'

interface NodeContent {
   en: string
   fr: string
}
type NodeType = 'text-regular' | 'text-bold' | 'link' | 'line-break'
interface GenericNode<T = NodeType> {
   type: T
   content: NodeContent
}

interface TextBold extends GenericNode<'text-regular'> {}
interface TextNormal extends GenericNode<'text-bold'> {}
interface TextLink extends GenericNode<'link'> {
   url: string
}
interface LineBreak extends Pick<GenericNode<'line-break'>, 'type'> {}

type TextNode = TextBold | TextNormal | TextLink | LineBreak

function MapTextNodes({node}: {node: TextNode}) {
   const {lang} = useLangParams()

   if (!node) return

   switch (node?.type) {
      case 'link':
         return <Link href={node?.url}>{node?.content[lang]}</Link>
      case 'text-regular':
         return <span className="m-0 p-0">{node?.content[lang]}</span>
      case 'text-bold':
         return <b className="font-semibold">{node?.content[lang]}</b>
      case 'line-break':
         return <br />
   }
}

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
                        {Object.entries(artists).map(([artistKey, artistValue], index) => (
                           <div
                              key={artistKey}
                              className={cn(
                                 'min-h-16 flex w-full flex-col-reverse items-center border border-primary/10 py-8 shadow-md md:flex-row',
                                 {'md:flex-row-reverse': (index + key) % 2 === 0}
                              )}>
                              <ArtistContent
                                 name={artistValue.artist}
                                 textNodes={artistValue.textNodes}
                              />
                              <ArtistImageContainer
                                 url={`/assets/artists/${artistValue.assetdirectory}/`}
                                 assets={assets[artistValue.assetdirectory]!}
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

function ArtistContent({textNodes, name}: {textNodes: TextNode[]; name?: string}) {
   return (
      <div
         className={
            'flex h-96 flex-[60%] flex-col items-center justify-center gap-4 bg-transparent p-8 text-white'
         }>
         {name && <strong className={'w-full text-lg'}>{name}</strong>}
         <article className="leading-relaxed">
            {textNodes.map((node, key) => (
               <MapTextNodes
                  key={key}
                  node={node}
               />
            ))}
         </article>
      </div>
   )
}

function buildURL(url: string, endpoint: string) {
   return url.concat(endpoint)
   // return String('http://localhost:3000').concat(url.concat(endpoint))
}

function ArtistImageContainer({url, assets}: {url: string; assets: string[]}) {

   return (
      <div className="max-h-fill relative mx-auto flex h-96 flex-[40%] flex-wrap items-center justify-center gap-2">
         {assets
            ?.filter(item => {
               console.log(item)
               return item.startsWith('ok')
            })
            .map((imgURL, key) => (
               <div
                  key={imgURL}
                  className="relative h-96 w-96 overflow-clip rounded-sm">
                  <Image
                     className={'aspect-square h-full w-full object-cover'}
                     width={4 * 96}
                     height={4 * 96}
                     src={buildURL(url, imgURL)}
                     alt={buildURL(url, imgURL)}
                     loading="lazy"
                     quality={20}
                  />
               </div>
            ))}
      </div>
   )
}
