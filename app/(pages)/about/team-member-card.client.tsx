'use client'

import Image from 'next/image'
import React from 'react'
import {twMerge} from 'tailwind-merge'

interface TeamMemberCardProps {
   firstName: string
   lastName: string
   imageSrc: string
   role: string[]
   isSelected: boolean
}

export default function TeamMemberCard({
   lastName,
   firstName,
   imageSrc,
   role,
   isSelected,
}: TeamMemberCardProps) {
   return (
      <article
         className={twMerge(
            'group relative flex flex-col items-center justify-between pb-6',
            'h-128 landscape:h-96 ',
            'cursor-pointer'
         )}>
         <figure className={'h-full w-full overflow-hidden'}>
            <Image
               className={twMerge(
                  'h-full w-full object-cover transition group-hover:scale-125 motion-safe:duration-700'
               )}
               width={'187'}
               height={'404'}
               src={imageSrc} // 👈 add this
               alt={''} // 👈 add this
            />
            <figcaption>Some text</figcaption>
         </figure>
         <main
            className={twMerge(
               'absolute top-[85%] flex flex-col items-center justify-center',
               'w-fit min-w-[128px] max-w-[160px]',
               'rounded-sm bg-base-200/90',
               'py-2',
               'text-balance'
            )}>
            <h3 className={'flex flex-col items-center  text-sm tracking-wide xs:text-base'}>
               <span>{firstName}</span>
               <span>{lastName}</span>
            </h3>
            <ul className={'mt-2'}>
               <>
                  {role.map((item, index) => (
                     <li
                        className={'text-center text-xs font-light md:text-sm'}
                        key={index}>
                        {item}
                     </li>
                  ))}
               </>
            </ul>
         </main>
      </article>
   )
}
