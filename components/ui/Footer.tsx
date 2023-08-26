import { classed } from '@tw-classed/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Footer() {
   return (
      <footer className={'bg-base-200'}>
         {/*<section className={'flex-grow-1 mx-auto'}>*/}
         {/*   <a*/}
         {/*      href={'#'}*/}
         {/*      className={twMerge(*/}
         {/*         'btn btn-primary ',*/}
         {/*         'border-none bg-base-200/50 text-primary backdrop-blur-sm',*/}
         {/*         'hover:bg-base-200',*/}
         {/*         'motion-safe:animate-[scaleAndFade_950ms_ease-out_950ms_forward]'*/}
         {/*      )}>*/}
         {/*      Retour en haut de la page*/}
         {/*   </a>*/}
         {/*</section>*/}
         <div className="relative flex flex-col items-center justify-center pt-8 pb-12 text-center gap-9 px-9 sm:flex-wrap sm:items-start xs:flex-wrap xs:justify-evenly xs:items-start xs:flex-row">
            <Section className={' order-2 xs:order-1'}>
               <SectionTitle>Liens rapides</SectionTitle>
               <Item>
                  <Link href={'/'}>Accueil</Link>
               </Item>
               <Item>
                  <Link href={'/showcase'}>Showcase</Link>
               </Item>
               <Item>
                  <Link href={'/about'} />
               </Item>
               <Item>
                  <Link href={'/contact'}>Contact</Link>
               </Item>
            </Section>
            <Section className={'xs:order-3 gap-2 xs:items'}>
               <SectionTitle>Suivez-nous</SectionTitle>
               <div className="flex flex-row items-center justify-between order-1 w-full px-2">
                  <a>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                     </svg>
                  </a>
                  <a> 
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                     </svg>
                  </a>
                  <a>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                     </svg>
                  </a>
               </div>
            </Section>

            <Section className='order-3 xs:order-2'>
               <SectionTitle>Légal</SectionTitle>
               <Item>Mentions Légales</Item>
               <Item>Données Personnelles</Item>
            </Section>
         </div>
         <section className={'flex-1'}>
            <img
            className='object-contain object-center mx-auto w-96 h-'
               src={'/assets/logo/prod203-white.webp'}
               alt={'Prod 203'}
            />
         </section>
         {/* <section
            className={
               'flex-grow-1 flex flex-wrap gap-2 border-t border-dashed border-primary/20 py-1'
            }>
            <Item className={'text-center font-thin'}>Maxime Tamburrini</Item>
            <Item>
               <strong className={'font-bold'}>Digital Solution Studio</strong>
            </Item>
         </section> */}
      </footer>
   )
}
const Section=  (props : PropsWithChildren<{ className?: string }>) => (
   <section className={twMerge('w-41 xs:text-left xs:items-start sm:text-left flex flex-col items-center justify-evenly', props.className)}>
      {props.children}
   </section>
)

 const SectionTitle = (props: PropsWithChildren<{ className?: string }>) => {
   return (
      <h3 className={twMerge('font-regular w-full font-semibold text-xl text-primary uppercase tracking-widest'
         , props.className)}>{props.children}</h3>
   )
}
const Item = classed(
   'li',
   'list-none text-base text-primary text-base sm:text-lg leading-loose tracking-wider font-regular',
   'hover:text-primary'
)




