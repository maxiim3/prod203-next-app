import {classed} from '@tw-classed/react'
import {JSX, PropsWithChildren} from 'react'
import {twMerge} from 'tailwind-merge'
//
// const NavItem = classed(
//    'li',
//    'uppercase font-poppins',
//    'text-right text-5xl sm:text-7xl',
//    'text-center md:text-xl lg:text-2xl xl:text-3xl'
// )
//

interface NavItemProps extends PropsWithChildren {
   className?: string
   active?: boolean
   props?: any
}

const NavItem = ({children, active, className, ...props}: NavItemProps) => (
   <li
      className={twMerge(
         'text-xl uppercase tracking-wide text-primary',
         'hover:text-primary/40',
         'delay-[25ms] duration-200 motion-safe:transition-all',
         active && 'underline underline-offset-2',
         className
      )}
      {...props}>
      {children}
   </li>
)

export default NavItem
