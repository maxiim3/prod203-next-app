'use client'

import {Founders, type T_FounderEnum} from '@/app/[lang]/about/(factories)/founder.factory'
import {type T_FounderStore} from '@/app/[lang]/about/(store)/store.types'
import {useFounderTabsStore} from '@/app/[lang]/about/(store)/use-founder-tabs.store'
import useLangParams from '@/app/[lang]/use-lang-params.hook'
import {cn} from '@/lib/utils'
import Image from 'next/image'
import React, {type ComponentPropsWithoutRef} from 'react'

export default function FounderImage({
   img,
   founderKey,
}: {
   img: ComponentPropsWithoutRef<'img'>
   founderKey: T_FounderEnum
}) {
   const {lang} = useLangParams()

   const founderStore: T_FounderStore = useFounderTabsStore((store: T_FounderStore) => store)

   const setActive = () => founderStore.setActiveTab(founderKey)
   const isActive = founderStore.activeTab === founderKey

   const founderName = Founders.get(founderKey)?.title[lang]

   return (
      <li
         className={'group hover:cursor-pointer'}
         data-selected={isActive}
         onClick={setActive}>
         <figure // todo Error cn not working
            className={'h-full w-full overflow-hidden'}>
            <Image
               data-selected={isActive}
               className={cn(
                  'group:transition-all h-full w-full scale-100 object-cover saturate-50 group-hover:scale-110 motion-safe:duration-700',
                  isActive && 'scale-110 saturate-100'
               )}
               width={'187'}
               height={'404'}
               src={img.src!}
               alt={img.alt!}
            />
            <figcaption>{founderName}</figcaption>
         </figure>
      </li>
   )
}
