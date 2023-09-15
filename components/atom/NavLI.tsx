import {PropsWithChildren} from 'react'
import {twMerge} from 'tailwind-merge'

interface NavItemProps extends PropsWithChildren {
   className?: string
   active?: boolean
   props?: any
}

const NavLI = ({children, active, className, ...props}: NavItemProps) => (
   <li
      className={twMerge(
         'relative font-poppins text-xl font-extralight uppercase tracking-wide text-primary',
         // 'before:content[""] before:absolute before:-bottom-2 before:w-full before:origin-left before:scale-0 before:border before:border-primary/40',
         'hover:text-primary/40',
         'delay-[25ms] duration-200 before:duration-700 motion-safe:transition-all ',
         // 'before:delay-75 hover:before:scale-100 motion-safe:before:transition-all',
         active && 'cursor-default select-none underline underline-offset-8',
         className
      )}
      {...props}>
      {children}
   </li>
)

export default NavLI
