import Link from 'next/link'
import React from 'react'

export default function NotFound() {
   return (
      <div className="flex h-screen flex-col items-center justify-center gap-16">
         <h1 className="text-4xl font-bold">404</h1>
         <ul className={'prose space-y-3 text-center text-balance'}>
            <li>La page que vous recherchez semble introuvable pour le moment.</li>
            <li>Veuillez vérifier votre connexion internet et réessayez.</li>
         </ul>
         <Link
            className={'btn '}
            href={'/'}>
            Retour à l{"'"}accueil
         </Link>
      </div>
   )
}
