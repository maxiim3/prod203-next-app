import {useAnimate, useInView} from 'framer-motion'
import {useEffect} from 'react'

export default function useAnimateProjectCards() {
   const [containerRef, animateContainer] = useAnimate()
   const isInView = useInView(containerRef)

   useEffect(() => {
      // console.log(isInView)
      if (isInView) {
         animateContainer(
            containerRef.current,
            {
               opacity: [0, 0.4, 1],
            },
            {
               duration: 0.5,
               delay: 0.5,
            }
         )
      }
   }, [isInView, animateContainer, containerRef])
   return containerRef // todo fix the animation with intersection observer
}
