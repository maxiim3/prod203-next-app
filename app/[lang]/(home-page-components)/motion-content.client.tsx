import React, {ComponentPropsWithoutRef} from 'react'
import {twMerge} from 'tailwind-merge'

const MotionContent = ({children, className}: ComponentPropsWithoutRef<'main'>) => {
   return (
      <main
         className={twMerge(
            'min-h-xl flex w-full flex-col gap-12 overflow-hidden md:overflow-visible',
            className
         )}>
         {children}
      </main>
   )
}
// const MotionContent = ({children, className}: ComponentPropsWithoutRef<'main'>) => {
//    return (
//       <motion.main
//          initial={{opacity: 0}}
//          exit={{opacity: 1}}
//          whileInView={{opacity: 1}}
//          transition={{
//             duration: 0.65,
//             delay: 0.25,
//             type: 'spring',
//             stiffness: 260,
//             damping: 20,
//             staggerDirection: -1,
//          }}
//          className={twMerge(
//             'min-h-xl flex w-full flex-col gap-12 overflow-hidden md:overflow-visible',
//             className
//          )}>
//          {children}
//       </motion.main>
//    )
// }
export default MotionContent
