import {client} from "@/lib/sanityClient"

const ProjectPage = async ({params}: {params: {id: string}}) => {
   console.log(params)
   const movies = await client.fetch(`*[_type == "movie"]`)

   console.log(movies)

   return (
      <div className={"flex h-screen w-screen items-center justify-center"}>
         <h1>Product Page</h1>
         <ul
            className={"m-4 flex h-48 w-128 flex-col gap-8 overflow-scroll rounded-xl p-8 ring-2 "}>
            {movies.map((movie: any) => (
               <div key={movie._id}>
                  <h2>{movie.title}</h2>
                  <p>{movie.releaseDate}</p>
               </div>
            ))}
         </ul>
      </div>
   )
}

export default ProjectPage
