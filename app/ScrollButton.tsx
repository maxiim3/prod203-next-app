'use client'

import {twMerge} from 'tailwind-merge'

export const ScrollButton = ({
   sectionID,
   className,
}: {
   sectionID: '#services' | '#about' | '#references' | '#'
   className?: string
}) => {
   return (
      <div className={'absolute bottom-0 z-50 grid w-full place-content-center py-2'}>
         <a
            style={{rotate: '.5turn'}}
            href={sectionID}
            className={twMerge(
               'flex h-16 w-16 items-center justify-center  rounded-2xl border-none bg-base-100/5 p-1 text-xl font-bold uppercase text-primary backdrop-blur-md backdrop:opacity-0',
               className
            )}>
            <svg
               width="48"
               height="48"
               viewBox="0 0 256 256"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  fill="currentColor"
                  d="M202.83 114.83a4 4 0 0 1-5.66 0L132 49.66V216a4 4 0 0 1-8 0V49.66l-65.17 65.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0l72 72a4 4 0 0 1 0 5.66Z"
               />
            </svg>
         </a>
      </div>
   )
}
