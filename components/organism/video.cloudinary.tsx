'use client'

import {CldVideoPlayer, CloudinaryVideoPlayer} from 'next-cloudinary'
import React, {useEffect, useRef} from 'react'

import {useMounted} from '@/hooks/useMounted'
import {useVideoSource, VideoSource} from '@/hooks/useVideoSource'
import {twMerge} from 'tailwind-merge'

export default function VideoCloudinary({videoSource, height}: {videoSource: any; height: string}) {
   const ENV_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
   const PATH = `https://res.cloudinary.com/${ENV_CLOUD_NAME}/video/upload/v1693588665/prod203`

   const VIDEO_SOURCE: VideoSource = Object.freeze({
      LOW: `${PATH}/${videoSource.low}.webm`,
      MEDIUM: `${PATH}/${videoSource.medium}.webm`,
      HIGH: `${PATH}/${videoSource.high}.webm`,
      VERY_HIGH: `${PATH}/${videoSource.veryHigh}.webm`,
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
         onMetadataLoad={({
            player,
            video,
         }: {
            player: CloudinaryVideoPlayer
            video: HTMLVideoElement
         }) => {
            video.playsInline = true
            video.style.height = `${height}`
            video.style.objectFit = 'cover'
            video.style.objectPosition = 'center'
         }}
         playerRef={playerRef}
         controls={false}
         videoRef={videoRef}
         src={VIDEO_SOURCE.HIGH}
         className={twMerge(
            'h-[100vh] w-[100%] object-contain object-center',
            'motion-safe:animate-[scaleAndFade_50ms_ease-out_both]'
         )}
      />
   )
}
