import {css} from "@/styled-system/css"

function VideoBanner() {
   return <section aria-label={"Video hero banner"} className="hero w-screen h-screen">
      <video autoPlay={true} muted={true} loop={true} controls={false}
             className={"object-cover object-center w-[100%] h-[100vh]"}>
         <source src="/assets/video/pexels-c-technical-7095057%20(540p).mp4" type="video/mp4" />
         <source src="/assets/video/pexels-c-technical-7095057%20(720p).mp4" type="video/mp4"
                 media="(min-width: 680px) and (max-width: 1080px)" />
         <source src="/assets/video/pexels-c-technical-7095057%20(1080p).mp4" type="video/mp4"
                 media="(min-width: 1080px) and (max-width: 1439px)" />
         <source src="/assets/video/pexels-c-technical-7095057%20(2160p).mp4" type="video/mp4"
                 media="(min-width: 1440px)" />
      </video>

      <div className="hero-overlay bg-opacity-20"></div>
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
