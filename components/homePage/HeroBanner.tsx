export function HeroBanner() {
   const useFadeIn = (delay: number) => `motion-safe:animate-[fadeIn_750ms_ease-out${delay ? "_" + delay + "ms" : ""}_both]`
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

      <main className="hero-overlay bg-opacity-20 relative"></main>
      <article className="hero-content text-center text-neutral-content">
         <article className={"text-primary mx-auto "}>
            <h1
               className={`text-5xl tracking-tighter font-black` + useFadeIn(75)}>PROD203</h1>
            <p className={useFadeIn(250)}>Jamais 203
               Productions</p>
         </article>

         <button className="btn btn-primary absolute bottom-4 ">Get Started</button>
      </article>
   </section>
}
