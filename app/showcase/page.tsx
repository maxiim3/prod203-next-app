import {SectionTitle, Text} from "@/app/UI"
import {ShadowTitleAnimation} from "@/app/showcase/ShadowTitleAnimation"
import Link from "next/link"
import React from "react"
import {twMerge} from "tailwind-merge"

const Showcase = () => {
   return (
      <main className={"min-h-screen w-screen py-24"}>
         <PageHeadingParticule title={"Showcase"} />

         <section>
            <header>
               <ul>
                  <li>All</li>
                  <li>Live</li>
                  <li>Commercial</li>
                  <li>Event</li>
               </ul>
            </header>
            <main>
               <ul
                  className={
                     "mx-auto grid max-w-[1440px] grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-12 xl:grid-cols-4"
                  }>
                  <ProjectPreview />
                  <ProjectPreview />
                  <ProjectPreview />
                  <ProjectPreview />
                  <ProjectPreview />
                  <ProjectPreview />
                  <ProjectPreview />
                  <ProjectPreview />
                  <ProjectPreview />
               </ul>
            </main>
         </section>
      </main>
   )
}

export default Showcase

const PageHeadingParticule = ({title}: {title: string}) => (
   <section className={"relative"}>
      <SectionTitle
         as={"h1"}
         className={twMerge("mx-auto animate-reveal px-0")}>
         {title}
      </SectionTitle>
      <ShadowTitleAnimation title={title} />
   </section>
)

const ProjectPreview = () => (
   <li className="group/card card h-full min-h-[260px] w-full min-w-[260px] overflow-hidden bg-base-100 shadow-xl">
      <Link href={"/showcase/project-page"}>
         <figure className="absolute left-0 top-0 h-full min-h-[260px] w-full min-w-[260px]">
            <img
               className={
                  "h-full min-h-[260px] w-full min-w-[260px] object-cover motion-safe:transition-all motion-safe:duration-1000 motion-safe:group-hover/card:scale-110"
               }
               src={
                  "https://lovelondonloveculture.com/wp-content/uploads/2017/07/20160908-ajw_3169.jpg"
               }
               alt="Shoes"
            />
         </figure>
         <div
            className={twMerge(
               "card-body m-4 rounded-[inherit] bg-base-100/60 motion-safe:scale-95 motion-safe:transition-all motion-safe:delay-75 motion-safe:duration-200",
               "group-hover/card:bg-base-100/90 motion-safe:group-hover/card:scale-105 "
            )}>
            <h3 className="card-title">Shoes!</h3>
         </div>
      </Link>
   </li>
)
