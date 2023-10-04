import {Skeleton} from '@/components/ui/skeleton'

export default function AboutPageLoader() {
   return (
      <div
         className={
            'flex h-screen w-screen items-center justify-center px-2 py-12 sm:px-3 sm:py-16 md:px-8 md:py-24'
         }>
         <Skeleton className={'h-full w-full'} />
      </div>
   )
}
