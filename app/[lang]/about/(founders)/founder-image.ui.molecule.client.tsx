import {Founder, Founders, type T_FounderEnum} from '@/app/[lang]/about/(founders)/founder.factory'
import {useFounderTabsStore} from '@/app/[lang]/about/(founders)/use-founder-tabs.store'
import {type T_TabStore} from '@/app/[lang]/about/tab-store.generic.schema'
import useLangParams from '@/app/[lang]/use-lang-params.hook'
import {cn} from '@/lib/utils'
import Image from 'next/image'
import React, {type ComponentPropsWithoutRef} from 'react'

type ImageComponentProps = {
   img: ComponentPropsWithoutRef<'img'>
   founderKey: T_FounderEnum
}
type TypeOfStore = T_TabStore<T_FounderEnum, Founder>
export default function ImageComponent({img, founderKey}: ImageComponentProps) {
   const {lang} = useLangParams()

   const founderStore: TypeOfStore = useFounderTabsStore((store: TypeOfStore) => store)

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
