import {useEffect, useRef} from 'react'

export default function usePerformanceProfiler(componentName: string) {
   const performanceStart = useRef(performance.now())
   console.time('start')

   useEffect(() => {
      console.log(componentName)
      const end = performance.now()
      const delta = end - performanceStart.current
      console.timeEnd('start')
      console.log('delta : ', delta)
   })
}
