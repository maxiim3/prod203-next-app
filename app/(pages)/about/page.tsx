import ScrollingAreaFeature from '@/app/(pages)/about/scrolling-area-feature.client'
import {Heading} from '@/components/atom/heading.atom'
import React from 'react'

const About = () => {
   return (
      <main className={'w-screen py-24'}>
         <section
            id={'about-section-header'}
            className={'flex flex-col items-center gap-2 px-12 py-12 text-balance'}>
            <Heading className={'text-center'}>À propos de nous</Heading>
            <div>
               <p className="mb-3 text-center text-gray-300 dark:text-gray-400">
                  {/*<p className={'mx-auto lg:w-[65ch]'}>*/}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate
                  libero maxime molestiae nam nisi perspiciatis temporibus totam voluptates
                  voluptatibus. Aspernatur assumenda dignissimos esse est illo magnam magni minima
                  necessitatibus nobis pariatur placeat, quibusdam recusandae sed sequi, temporibus?
                  Natus, nesciunt, sequi. Alias blanditiis commodi dolor fugit in nam, quis sequi.
               </p>
            </div>
         </section>
         <ScrollingAreaFeature />
      </main>
   )
}

export default About
