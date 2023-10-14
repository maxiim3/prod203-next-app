import {useEffect, useRef} from 'react'

export const useCarousel = () => {
   const carouselRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      const slider = carouselRef.current
      let isDown = false
      let startX: number
      let scrollLeft: number

      const handleMouseDown = (e: MouseEvent) => {
         isDown = true
         startX = e.pageX - (slider?.offsetLeft || 0)
         scrollLeft = slider?.scrollLeft || 0
      }

      const handleMouseLeave = () => {
         isDown = false
      }

      const handleMouseUp = () => {
         isDown = false
      }

      const handleMouseMove = (e: MouseEvent) => {
         if (!isDown) return
         console.log(window.devicePixelRatio)
         e.preventDefault()
         requestAnimationFrame(() => {
            const x = e.clientX - (slider?.offsetLeft || 0) // 👈 changed to clientX
            const walk = (x - startX) * 2 // scroll-fast
            console.log(x, walk)
            if (slider) {
               slider.scrollLeft = scrollLeft - walk
            }
         })
      }

      if (slider) {
         slider.addEventListener('mousedown', handleMouseDown)
         slider.addEventListener('mouseleave', handleMouseLeave)
         slider.addEventListener('mouseup', handleMouseUp)
         slider.addEventListener('mousemove', handleMouseMove)
      }

      return () => {
         if (slider) {
            slider.removeEventListener('mousedown', handleMouseDown)
            slider.removeEventListener('mouseleave', handleMouseLeave)
            slider.removeEventListener('mouseup', handleMouseUp)
            slider.removeEventListener('mousemove', handleMouseMove)
         }
      }
   }, [])

   return carouselRef
}
