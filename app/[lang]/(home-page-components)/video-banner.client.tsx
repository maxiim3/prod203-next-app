'use client'

import {useMounted} from '@/hooks/useMounted'
import {useVideoSource, VideoSource} from '@/hooks/useVideoSource'
import {CldVideoPlayer, CloudinaryVideoPlayer} from 'next-cloudinary'
import React, {useEffect, useRef} from 'react'
import {twMerge} from 'tailwind-merge'

export default function VideoBanner() {
   const BASE_URL = 'https://res.cloudinary.com'
   const CLOUDINARY_ENV = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

   const VIDEO_SOURCE: VideoSource = Object.freeze({
      LOW: `${BASE_URL}/${CLOUDINARY_ENV}/video/upload/v1693588665/prod203/prod203_capsule_herobanner_360p.webm`,
      MEDIUM: `${BASE_URL}/${CLOUDINARY_ENV}/video/upload/v1693588665/prod203/prod203_capsule_herobanner_480p.webm`,
      HIGH: `${BASE_URL}/${CLOUDINARY_ENV}/video/upload/v1693588665/prod203/prod203_capsule_herobanner_720p.webm`,
      VERY_HIGH: `${BASE_URL}/${CLOUDINARY_ENV}/video/upload/v1693588665/prod203/prod203_capsule_herobanner_1080p.webm`,
   })
   const videoRef = useRef<HTMLVideoElement | null>(null)
   const playerRef = useRef<CloudinaryVideoPlayer | null>(null)
   const isMounted = useMounted()
   const {setVideoSource} = useVideoSource(VIDEO_SOURCE, videoRef)

   useEffect(() => {
      isMounted && setVideoSource()
   }, [isMounted, setVideoSource])

   /*Handle Load Failed on no internet : Display an image placeholder instead of the video*/
   if (!isMounted) {
      return (
         <>
            <h1>Waiting....</h1>
         </>
      )
   }
   return (
      <CldVideoPlayer
         width={1920}
         height={1080}
         autoPlay={'always'}
         loop={true}
         muted={true}
         onError={() => <p>Something went wrong</p>}
         onMetadataLoad={({video}: {player: CloudinaryVideoPlayer; video: HTMLVideoElement}) => {
            video.playsInline = true
            video.style.height = `${window.innerHeight}px`
            video.style.objectFit = 'cover'
            video.style.objectPosition = 'center'
         }}
         playerRef={playerRef}
         controls={false}
         videoRef={videoRef}
         src={VIDEO_SOURCE.VERY_HIGH}
         className={twMerge(
            'mx-auto h-[100%] max-w-[1600px] object-contain object-center',
            'motion-safe:animate-[scaleAndFade_50ms_ease-out_both]'
         )}
      />
   )
}
