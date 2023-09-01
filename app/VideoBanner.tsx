'use client'

import {CldVideoPlayer} from 'next-cloudinary'
import 'next-cloudinary/dist/cld-video-player.css'
import React, {Suspense, useEffect, useRef, useState} from 'react'

import useVideoSource, {VideoSource} from '@/hooks/useVideoSource'
import {twMerge} from 'tailwind-merge'

export function VideoBanner() {
   const VIDEO_SOURCE: VideoSource = Object.freeze({
      LOW: 'https://res.cloudinary.com/dumtd7dhj/video/upload/v1693588665/prod203/prod203_capsule_herobanner_360p.webm',
      MEDIUM:
         'https://res.cloudinary.com/dumtd7dhj/video/upload/v1693588665/prod203/prod203_capsule_herobanner_480p.webm',
      HIGH: 'https://res.cloudinary.com/dumtd7dhj/video/upload/v1693588665/prod203/prod203_capsule_herobanner_720p.webm',
      VERY_HIGH:
         'https://res.cloudinary.com/dumtd7dhj/video/upload/v1693588665/prod203/prod203_capsule_herobanner_1080p.webm',
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
         {/*<video*/}
         {/*   ref={videoRef}*/}
         {/*   autoPlay={true}*/}
         {/*   muted={true}*/}
         {/*   loop={true}*/}
         {/*   playsInline*/}
         {/*/>*/}
         <CldVideoPlayer
            width="1920"
            videoRef={videoRef}
            height="1080"
            src="https://res.cloudinary.com/dumtd7dhj/video/upload/v1693588665/prod203/prod203_capsule_herobanner_720p.webm"
            className={twMerge(
               'h-[100vh] w-[100%] object-contain object-center',
               'motion-safe:animate-[scaleAndFade_50ms_ease-out_both]'
            )}
            muted={true}
            loop={true}
            controls={false}
            quality={'auto'}
         />
      </Suspense>
   )
}
