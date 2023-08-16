import {SectionTitle} from "@/app/UI"
import {ShadowTitleAnimation} from "@/app/showcase/ShadowTitleAnimation"
import React from "react"
import {twMerge} from "tailwind-merge"

const Showcase = () => {
   return (
      <main className={"h-screen w-screen pt-24"}>
         <PageHeadingParticule title={"Showcase"} />
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
