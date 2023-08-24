import Icons from '@/lib/Icons'
import {nanoid} from 'nanoid'
import React from 'react'

export default function StaticClientBanner() {
   return (
      <div className={'hidden max-w-4xl justify-center gap-8 md:flex  md:flex-wrap'}>
         {clients.map(client => (
            <span key={nanoid()}>
               <client.Icon className="mx-5 text-5xl text-base-100/50 md:text-6xl" />
            </span>
         ))}
      </div>
   )
}

export const clients = [
   {
      title: 'Canal+',
      content: 'Canal+',
      Icon: Icons.Calendar,
   },
   {
      title: 'M6',
      content: 'M6',
      Icon: Icons.CloseFull,
   },
   {
      title: 'Balenciaga',
      content: 'Balenciaga',
      Icon: Icons.Mixing,
   },
   {
      title: 'Nike',
      content: 'Nike',
      Icon: Icons.Pizza1,
   },
   {
      title: 'DisneyLand Paris',
      content: 'DisneyLand Paris',
      Icon: Icons.Disney,
   },
   {
      title: 'Citroen',
      content: 'Citroen',
      Icon: Icons.Pizza3,
   },
   {
      title: 'Le Puy Du Fou',
      content: 'Le Puy Du Fou',
      Icon: Icons.Disney,
   },
   {
      title: '24h Le Mans',
      content: '24h Le Mans',
      Icon: Icons.Calendar,
   },
   {
      title: 'Chateau Fort Sedan',
      content: 'Chateau Fort Sedan',
      Icon: Icons.Disney,
   },
   {
      title: 'Edith Piaf Symphonique',
      content: 'Edith Piaf Symphonique',
      Icon: Icons.React,
   },
   {
      title: 'Mon Plus Beau Noel',
      content: 'Mon Plus Beau Noel',
      Icon: Icons.Disney,
   },
   {
      title: 'Studio Canal',
      content: 'Studio Canal',
      Icon: Icons.CloseOutline,
   },
   {
      title: 'Coca Cola',
      content: 'Coca Cola',
      Icon: Icons.Piano,
   },
   {
      title: 'Credit Agricole',
      content: 'Credit Agricole',
      Icon: Icons.Arrow,
   },
]
