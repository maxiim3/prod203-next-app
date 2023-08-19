"use client"

import React from "react"

export function VideoPreview({videoURL}: {videoURL: string}) {
   return (
      <fieldset className={"group/video relative"}>
         <video
            className={`w-screen`}
            controls={false}
            autoPlay={true}
            loop
            onMouseEnter={e => {
               e.currentTarget.muted = false
               const svgUri =
                  "data:image/svg+xml,%3Csvg width='128' height='128' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='white' opacity='0.5' d='M14.395 3.902c.798-.748 2.105-.182 2.105.912v18.37c0 1.094-1.306 1.66-2.105.912L9.458 19.47a1.75 1.75 0 0 0-1.196-.473H5.25A3.25 3.25 0 0 1 2 15.747v-3.492a3.25 3.25 0 0 1 3.25-3.25h3.011c.445 0 .873-.17 1.197-.473l4.937-4.63Zm5.958 4.4a.75.75 0 1 0-1.2.9A7.962 7.962 0 0 1 20.75 14c0 1.8-.594 3.46-1.597 4.797a.75.75 0 1 0 1.2.9A9.461 9.461 0 0 0 22.25 14a9.46 9.46 0 0 0-1.897-5.697Z'/%3E%3C/svg%3E"
               e.currentTarget.style.cursor = `url("${svgUri}") 14 14, pointer`
            }}
            onMouseLeave={e => {
               e.currentTarget.muted = true
            }}
            muted={true}
            src={videoURL}>
            You Browser cannot read Videos
         </video>
         <svg
            width="128"
            height="128"
            viewBox="0 0 32 32"
            className={
               "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-80 group-hover/video:hidden"
            }
            xmlns="http://www.w3.org/2000/svg">
            <path
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M9.5 21H8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h7l6.586-6.586C22.846 3.154 25 4.047 25 5.828V6m0 8.5v11.672c0 1.781-2.154 2.674-3.414 1.414L17 23M7 28L29 6"
            />
         </svg>
      </fieldset>
   )
}
