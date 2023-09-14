import React from 'react'
import {twMerge} from 'tailwind-merge'

const Label = ({id, label, className}: {label: string; id: string; className?: string}) => (
   <label
      htmlFor={id}
      className={twMerge(
         'font-base label label-text font-normal text-base-100/70 hover:cursor-pointer',
         className
      )}>
      {label}
   </label>
)

export default Label
