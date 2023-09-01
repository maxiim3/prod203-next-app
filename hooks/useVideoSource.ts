import {MutableRefObject, useCallback} from 'react'

/**
 * Interface for network information.
 */
export interface NetworkInformation extends EventTarget {
   downlink: number // Effective bandwidth estimate in Mbps
   downlinkMax: number // Maximum downlink speed in Mbps
   effectiveType: 'slow-2g' | '2g' | '3g' | '4g' // Effective type of the connection
   rtt: number // Round-trip time in ms
   saveData: boolean // Reduced data usage option
   type: 'bluetooth' | 'cellular' | 'ethernet' | 'none' | 'wifi' | 'wimax' | 'other' | 'unknown' // Type of connection
}

/**
 * Type for video sources available for the hook.
 */
export type VideoSource = {
   LOW: string
   MEDIUM: string
   HIGH: string
   VERY_HIGH: string
}

/**
 * Type for device screen sizes.
 */
export type DeviceScreens = {
   SIZE_SMALL: number
   SIZE_MEDIUM: number
   SIZE_LARGE: number
   SIZE_XLARGE: number
}

/**
 * Custom hook to determine the most appropriate video source based on network and screen size.
 *
 * @param {VideoSource} source - Object containing video source URLs for different resolutions.
 * @param {MutableRefObject<HTMLVideoElement | null>} videoRef - React ref for the video element.
 * @return {Object} - Object containing a function to set the video source.
 */
export default function useVideoSource(
   source: VideoSource,
   videoRef: MutableRefObject<HTMLVideoElement | null>
) {
   // Screen size definitions
   const DEVICE: DeviceScreens = Object.freeze({
      SIZE_SMALL: 479,
      SIZE_MEDIUM: 767,
      SIZE_LARGE: 1023,
      SIZE_XLARGE: 1279,
   })

   /**
    * Determine if the network connection is fast.
    *
    * @param {NetworkInformation | null} networkInfo - Network information object.
    * @return {boolean} - Whether the connection is considered fast.
    */
   const isFastConnection = (networkInfo: NetworkInformation | null): boolean => {
      return networkInfo
         ? networkInfo.downlink >= 5 &&
              (networkInfo.effectiveType === '4g' || networkInfo.effectiveType === '3g') &&
              networkInfo.rtt <= 100
         : false
   }

   /**
    * Check if high-resolution video can be used based on network conditions.
    *
    * @param {NetworkInformation | null} networkInfo - Network information object.
    * @return {boolean} - Whether high resolution can be used.
    */
   const canUseHighRes = (networkInfo: NetworkInformation | null): boolean => {
      return networkInfo?.saveData === false && isFastConnection(networkInfo)
   }

   /**
    * Get the most suitable video source based on screen width.
    *
    * @param {number} width - The screen width.
    * @param {VideoSource} source - Object containing video source URLs for different resolutions.
    * @return {string} - The best suitable video source URL.
    */
   const getSourceByWidth = (width: number, source: VideoSource): string => {
      if (width <= DEVICE.SIZE_SMALL) {
         return source.LOW
      } else if (width <= DEVICE.SIZE_MEDIUM) {
         return source.MEDIUM
      } else if (width <= DEVICE.SIZE_LARGE) {
         return source.HIGH
      } else {
         return source.VERY_HIGH
      }
   }

   /**
    * Function to set the most suitable video source.
    * This function should be called in your component to actually apply the changes to the video element.
    */
   const setVideoSource = useCallback(() => {
      const width = window.innerWidth
      const videoElement = videoRef.current
      const networkInfo: NetworkInformation | null = (navigator as any)?.connection || null

      let newSrc = ''

      // Low-res video for data saver or slow connection
      if (networkInfo?.saveData || !isFastConnection(networkInfo)) {
         newSrc = source.LOW
      }
      // Suitable resolution based on screen width and fast connection
      else if (canUseHighRes(networkInfo)) {
         newSrc = getSourceByWidth(width, source)
      }

      // Apply the new source to the video element
      if (videoElement) {
         videoElement.pause()
         videoElement.style.width = '100vw'
         videoElement.style.height = '100vh'
         videoElement.style.objectFit = 'cover'

         videoElement.src = newSrc
         videoElement.autoplay = true
         videoElement.muted = true
         videoElement.loop = true
         videoElement.controls = false
         videoElement.load()
         videoElement.play()
      }
   }, [])

   return {setVideoSource}
}
