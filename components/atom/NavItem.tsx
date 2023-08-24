import {PropsWithChildren} from 'react'
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
         'relative text-xl font-thin uppercase tracking-wide text-primary',
         // 'before:content[""] before:absolute before:-bottom-2 before:w-full before:origin-left before:scale-0 before:border before:border-primary/40',
         'hover:text-primary/40',
         'delay-[25ms] duration-200 before:duration-700 motion-safe:transition-all ',
         // 'before:delay-75 hover:before:scale-100 motion-safe:before:transition-all',
         active && 'underline underline-offset-2',
         className
      )}
      {...props}>
      {children}
   </li>
)

export default NavItem
