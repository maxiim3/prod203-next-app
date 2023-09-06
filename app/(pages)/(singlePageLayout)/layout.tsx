import {PropsWithChildren} from 'react'

export default function Layout({children}: PropsWithChildren) {
   return (
      <main
         className={'flex h-screen w-screen flex-col items-center justify-start bg-base-100 py-24'}>
         {children}
      </main>
   )
}
