'use client'

import {CldVideoPlayer, CloudinaryVideoPlayer} from 'next-cloudinary'
import React, {useEffect, useRef, useState} from 'react'

import {useVideoSource, VideoSource} from '@/hooks/useVideoSource'
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
   const playerRef = useRef<CloudinaryVideoPlayer | null>(null)
   const [isMounted, setIsMounted] = useState(false)
   const {setVideoSource} = useVideoSource(VIDEO_SOURCE, videoRef)

   useEffect(() => {
      setIsMounted(true)
      return () => {
         setIsMounted(false)
      }
   }, [])

   useEffect(() => {
      isMounted && setVideoSource()
   }, [isMounted, setVideoSource])

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
         onMetadataLoad={({
            player,
            video,
         }: {
            player: CloudinaryVideoPlayer
            video: HTMLVideoElement
         }) => {
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
            'h-[100vh] w-[100%] object-contain object-center',
            'motion-safe:animate-[scaleAndFade_50ms_ease-out_both]'
         )}
      />
   )
}
