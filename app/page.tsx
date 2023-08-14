import {twMerge} from "tailwind-merge"
import React from "react"
import Icons from "@/lib/Icons"
import {SectionTitle, Text} from "@/app/UI"

export default function Home() {
   return (
      <main>
         <section id={"hero"} aria-label={"Video hero banner"} className="hero w-screen h-screen">
            <video autoPlay={true} muted={true} loop={true} controls={false}
                   className={twMerge("object-cover object-center w-[100%] h-[100vh]", "motion-safe:animate-[scaleAndFade_50ms_ease-out_both]")}>
               <source src="/assets/video/pexels-c-technical-7095057%20(540p).mp4" type="video/mp4" />
               <source src="/assets/video/pexels-c-technical-7095057%20(720p).mp4" type="video/mp4"
                       media="(min-width: 680px) and (max-width: 1080px)" />
               <source src="/assets/video/pexels-c-technical-7095057%20(1080p).mp4" type="video/mp4"
                       media="(min-width: 1080px) and (max-width: 1439px)" />
               <source src="/assets/video/pexels-c-technical-7095057%20(2160p).mp4" type="video/mp4"
                       media="(min-width: 1440px)" />
            </video>

            <main className="hero-overlay bg-opacity-20 relative"></main>
            <article className="hero-content text-center text-neutral-content">
               <article className={"text-primary mx-auto "}>
                  <h1
                     className={twMerge(`tracking-tighter font-black`,
                        "text-6xl md:text-7xl lg:text-8xl",
                        "motion-safe:animate-[scaleAndFade_750ms_ease-out_25ms_both]")}>PROD203</h1>
                  <p className={"motion-safe:animate-[scaleAndFade_750ms_ease-out_450ms_both]"}>Jamais 203
                     Productions</p>
               </article>

               <a href={"/#description"}
                  className={
                     twMerge("btn btn-primary absolute bottom-4",
                        "bg-base-100/50 backdrop-blur-sm border-none",
                        "motion-safe:animate-revealFromBottom",
                        "hover:bg-base-100",
                        "group",
                     )
                  }>
                  <Icons.Arrow
                     className={"text-2xl animate-bounce text-primary/75 group-hover:animate-none group-hover:scale-105"} />
               </a>
            </article>
         </section>

         <section id="description" className={"w-screen h-screen relative flex justify-center items-center"}>
            <main className={"px-1 sm:px-2 space-y-8"}>
               {/* eslint-disable-next-line react/no-unescaped-entities */}
               <SectionTitle>Mettez votre projet entre les mains <span
                  className={"text-clrPrimary-300"}>{"d'experts."}</span></SectionTitle>
               {/* eslint-disable-next-line react/no-unescaped-entities */}
               <div className={"flex flex-col justify-center items-center gap-4"}><Text>Chez Jamais 203 Productions,
                  nous fusionnons passion et expertise pour
                  créer des contenus
                  sonores
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  d'une qualité inégalée.</Text>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <Text>Nous vous accompagnerons de l'idée initiale à la réalisation finale, garantissant une réponse à
                     vos
                     exigences les plus élevées.</Text></div>
            </main>

            <a href={"#"}
               className={
                  twMerge(
                     "btn btn-primary absolute bottom-4",
                     "bg-base-200/50 backdrop-blur-sm border-none text-primary",
                     "hover:bg-base-200",
                     "motion-safe:animate-[scaleAndFade_950ms_ease-out_950ms_forward]")
               }>
               Back top</a>
         </section>
      </main>
   )
}


