import {css} from "@/styled-system/css"

function VideoBanner() {
   return <section aria-label={"Video hero banner"} className="hero min-h-screen">
      <video controls>
         <source src="{/*Path*/}" type="video/mp4" media="(min-width: 800px)" />
         <source src="{/*Path*/}" type="video/mp4" media="(min-width: 500px) and (max-width: 799px)" />
         <source src="{/*Path*/}" type="video/mp4" media="(max-width: 499px)" />
         <source src="/*Path*/" type="video/mp4" />
      </video>

      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
         <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">PROD203</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
               exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
         </div>
      </div>
   </section>
}

export default function Home() {
   return (
      <main>
         <VideoBanner />
      </main>
   )
}
