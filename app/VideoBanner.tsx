'use client'

import React, {Suspense, useEffect, useRef, useState} from 'react'
import {twMerge} from 'tailwind-merge'

export function VideoBanner() {
   const videoRef = useRef(null)
   const [isMounted, setIsMounted] = useState(false)

   useEffect(() => {
      setIsMounted(true)
      return () => {
         setIsMounted(false)
      }
   }, [])

   useEffect(() => {
      const videoElement = videoRef.current as null | HTMLVideoElement
      const handleError = (e: any) => {
         console.error('Video error', e)
      }

      if (videoElement) {
         videoElement?.addEventListener('error', handleError)
         videoElement?.load()
         console.log('Video element is Loaded')
         videoElement?.play()
      }

      return () => {
         if (videoElement) {
            videoElement?.removeEventListener('error', handleError)
         }
      }
   }, [isMounted])

   return (
      <Suspense fallback={<p>Loading Video..</p>}>
         <video
            ref={videoRef}
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline
            className={twMerge(
               'h-[100vh] w-[100%] object-cover object-center',
               'motion-safe:animate-[scaleAndFade_50ms_ease-out_both]'
            )}>
            <source
               src="/assets/video/pexels-c-technical-7095057%20(540p).mp4"
               type="video/mp4"
               media="(max-width: 680px)"
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
      </Suspense>
   )
}
