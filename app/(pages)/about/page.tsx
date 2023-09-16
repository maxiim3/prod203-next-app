import ScrollingAreaFeature from '@/app/(pages)/about/scrolling-area-feature.client'
import React from 'react'

const About = () => {
   return (
      <main className={'w-screen py-24'}>
         <div
            id={'about-section-header'}
            className={'px-12 py-12 text-balance'}>
            <h1>About page</h1>
            <div>
               <p className={'mx-auto w-[65ch]'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate
                  libero maxime molestiae nam nisi perspiciatis temporibus totam voluptates
                  voluptatibus. Aspernatur assumenda dignissimos esse est illo magnam magni minima
                  necessitatibus nobis pariatur placeat, quibusdam recusandae sed sequi, temporibus?
                  Natus, nesciunt, sequi. Alias blanditiis commodi dolor fugit in nam, quis sequi.
               </p>
            </div>
         </div>
         <ScrollingAreaFeature />
      </main>
   )
}

export default About
