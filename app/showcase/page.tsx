import {SectionTitle, Text} from "@/app/UI"
import {ShadowTitleAnimation} from "@/app/showcase/ShadowTitleAnimation"
import {client, imageUrlFor} from "@/lib/sanityClient"
import Category from "@/schemas/category.schema"
import Project from "@/schemas/project.schema"
import {classed} from "@tw-classed/react"
import Link from "next/link"
import React, {Suspense} from "react"
import {twMerge} from "tailwind-merge"

type PageWithParams = {
   params: {slug: string}
   searchParams: {category: string}
}
const Showcase = async ({params, searchParams}: PageWithParams) => {
   const projects = (await client.fetch(`*[_type == "project"]`)) satisfies Project[]

   const categories = (await client.fetch(`*[_type == "category"]`)) satisfies Category[]

   return (
      <main className={"min-h-screen w-screen py-24"}>
         <PageHeadingParticule title={"Showcase"} />

         <section>
            <header>
               <nav className={"mx-auto flex gap-4 px-2 py-8"}>
                  <CategoryLink
                     as={Link}
                     href={"/showcase"}
                     active={!searchParams || searchParams?.category === "all"}>
                     All
                  </CategoryLink>
                  {categories.map((c: Category) => (
                     <CategoryLink
                        key={c._id}
                        as={Link}
                        active={searchParams && searchParams?.category === c?.slug?.current}
                        href={`/showcase?category=${c?.slug?.current}`}>
                        {c.name}
                     </CategoryLink>
                  ))}
               </nav>
            </header>
            <main>
               <ul
                  className={
                     "mx-auto grid max-w-[1440px] grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-12 xl:grid-cols-4"
                  }>
                  <Suspense fallback={<p>Loading....</p>}>
                     {projects
                        .filter(p => {
                           if (!searchParams.category || searchParams.category === "all")
                              return true
                           const activeCategoryReference = categories.find(
                              c => c.slug.current === searchParams.category
                           )?._id
                           return categories.find(c => activeCategoryReference === p.category._ref)
                        })
                        .map(p => (
                           <ProjectPreview
                              key={p._id}
                              project={p}
                           />
                        ))}
                  </Suspense>
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

const ProjectPreview = ({project}: {project: Project}) => {
   console.log(project.slug.current)
   return (
      <li className="group/card card h-full min-h-[260px] w-full min-w-[260px] overflow-hidden bg-base-100 shadow-xl">
         <Link href={`/showcase/${project.slug.current}`}>
            <figure className="absolute left-0 top-0 h-full min-h-[260px] w-full min-w-[260px]">
               <img
                  className={
                     "h-full min-h-[260px] w-full min-w-[260px] object-cover motion-safe:transition-all motion-safe:duration-1000 motion-safe:group-hover/card:scale-110"
                  }
                  src={imageUrlFor(project.thumbnail).url()}
                  alt="Shoes"
               />
            </figure>
            <div
               className={twMerge(
                  "card-body m-4 rounded-[inherit] bg-base-100/60 motion-safe:scale-95 motion-safe:transition-all motion-safe:delay-75 motion-safe:duration-200",
                  "group-hover/card:bg-base-100/90 motion-safe:group-hover/card:scale-105 "
               )}>
               <h3 className="card-title">{project.title}</h3>
               {project.description &&
                  project.description.map(d => {
                     return <p key={d._key}>{d.children[0].text}</p>
                  })}
            </div>
         </Link>
      </li>
   )
}

const CategoryLink = classed("li", "select-none", {
   variants: {
      active: {
         true: "text-primary font-semibold cursor-default",
         false: "text-primary/80 hover:text-primary cursor-pointer",
      },
   },
})
