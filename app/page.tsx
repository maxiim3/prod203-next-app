import PresentationInView from "@/app/PresentationInView"
import Icons from "@/lib/Icons"
import React from "react"
import {twMerge} from "tailwind-merge"

/* NOTE about animation
 * Animation is done within TailwindCSS - IN LINE -> animate-[keyframe...custom] - for the element of this page : Header apparition, title and subtitle apparition
 * The Button is animated in tailwind.config.js -> animate-revealFromBottom
 * I do not use framer motion here to keep the ability to use SSR
 * */
export default function Home() {
   return (
      <main>
         <section
            id={"hero"}
            aria-label={"Video hero banner"}
            className="hero h-screen w-screen">
            <video
               autoPlay={true}
               muted={true}
               loop={true}
               controls={false}
               className={twMerge(
                  "h-[100vh] w-[100%] object-cover object-center",
                  "motion-safe:animate-[scaleAndFade_50ms_ease-out_both]"
               )}>
               <source
                  src="/assets/video/pexels-c-technical-7095057%20(540p).mp4"
                  type="video/mp4"
               />
               <source
                  src="/assets/video/pexels-c-technical-7095057%20(720p).mp4"
                  type="video/mp4"
                  media="(min-width: 680px) and (max-width: 1080px)"
               />
               <source
                  src="/assets/video/pexels-c-technical-7095057%20(1080p).mp4"
                  type="video/mp4"
                  media="(min-width: 1080px) and (max-width: 1439px)"
               />
               <source
                  src="/assets/video/pexels-c-technical-7095057%20(2160p).mp4"
                  type="video/mp4"
                  media="(min-width: 1440px)"
               />
            </video>

            <main className="hero-overlay relative bg-opacity-20"></main>
            <article className="hero-content text-center text-neutral-content">
               <article className={"mx-auto select-none text-primary "}>
                  <h1
                     className={twMerge(
                        `font-black tracking-tighter`,
                        "text-6xl md:text-7xl lg:text-8xl",
                        "motion-safe:animate-[scaleAndFade_800ms_ease-out_1.11s_both]"
                     )}>
                     PROD203
                  </h1>
                  <p className={"motion-safe:animate-[scaleAndFade_800ms_ease-out_1.22s_both]"}>
                     Jamais 203 Productions
                  </p>
               </article>

               <a
                  href={"/#description"}
                  className={twMerge(
                     "btn btn-primary absolute bottom-4",
                     "border-none bg-base-100/50 backdrop-blur-sm",
                     "motion-safe:animate-revealFromBottom",
                     "hover:bg-base-100",
                     "group"
                  )}>
                  <Icons.Arrow
                     className={
                        "animate-bounce text-2xl text-primary/75 group-hover:scale-105 group-hover:animate-none"
                     }
                  />
               </a>
            </article>
         </section>

         <PresentationInView />
      </main>
   )
}
