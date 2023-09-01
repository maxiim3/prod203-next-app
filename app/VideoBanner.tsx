'use client'

import useVideoSource, {VideoSource} from '@/hooks/useVideoSource'
import React, {Suspense, useEffect, useRef, useState} from 'react'
import {twMerge} from 'tailwind-merge'

export function VideoBanner() {
   const VIDEO_SOURCE: VideoSource = Object.freeze({
      LOW: '/assets/video/capsule-web_20230831_01_360p.webm',
      MEDIUM: '/assets/video/capsule-web_20230831_02_sd_480p.webm',
      HIGH: '/assets/video/capsule-web_20230831_03_hd_720pp.webm',
      VERY_HIGH: '/assets/video/capsule-web_20230831_04_fhd_1080p.webm',
      ULTRA_HIGH: '/assets/video/capsule-web_20230831_05_uhd_4k.webm',
   })

   const videoRef = useRef<HTMLVideoElement | null>(null)
   const [isMounted, setIsMounted] = useState(false)
   const {setVideoSource} = useVideoSource(VIDEO_SOURCE, videoRef)

   useEffect(() => {
      setIsMounted(true)
      return () => {
         setIsMounted(false)
      }
   }, [])

   useEffect(() => {
      setVideoSource()
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
            )}
         />
      </Suspense>
   )
}
