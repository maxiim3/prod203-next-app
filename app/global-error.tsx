'use client' // Error components must be Client Components
import React from 'react'

export default function GlobalError({
   error,
   reset,
}: {
   error: Error & {digest?: string}
   reset: () => void
}) {
   return (
      <html>
         <body>
            <div
               className={
                  'mx-auto flex h-full w-screen flex-col items-center justify-center gap-8 py-32'
               }>
               <h1>Il semblerait que quelque chose ne ce soit pas passé comme prévu</h1>
               <p>Vérifiez peut-être votre connexion internet.</p>
               <p>Sinon réessayez plus tard.</p>
               <p>En attendant vous pouvez écouter quelques-une de nos compositions sur Spotify</p>
               {/*TODO mettre lien Spotify*/}
               <button
                  className={'btn btn-outline'}
                  onClick={
                     // Attempt to recover by trying to re-render the segment
                     () => reset()
                  }>
                  Try again
               </button>
            </div>
         </body>
      </html>
   )
}
