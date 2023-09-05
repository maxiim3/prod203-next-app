'use client' // Error components must be Client Components
import React, {useEffect} from 'react'

export default function Error({
   error,
   reset,
}: {
   error: Error & {digest?: string}
   reset: () => void
}) {
   useEffect(() => {
      // Log the error to an error reporting service
      console.info(error)
   }, [error])

   return (
      <>
         <div
            className={
               'mx-auto flex h-full w-screen flex-col items-center justify-center gap-8 py-32'
            }>
            <h2>Something went wrong!</h2>
            <button
               className={'btn btn-outline'}
               onClick={
                  // Attempt to recover by trying to re-render the segment
                  () => reset()
               }>
               Try again
            </button>
         </div>
      </>
   )
}
