import React from 'react'

export default function Loading() {
   return (
      <main
         className={
            'absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center'
         }>
         <span className="loading loading-infinity loading-lg"></span>
      </main>
   )
}
