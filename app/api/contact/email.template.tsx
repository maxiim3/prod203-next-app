import * as React from 'react'

interface EmailTemplateProps {
   name: string
   email: string
   message: string
}

export const EmailTemplate = ({name, email, message}: EmailTemplateProps) => (
   <div
      className={
         'text-poppins mx-auto my-4 flex w-2/3 flex-col gap-4 rounded-3xl border-base-100/50 bg-primary text-base'
      }>
      <h1 className={'text-xl font-bold'}>Vous avez reçu un email de : {name}</h1>
      <p className={'font-italic font-sm'}>Email de {email}</p>
      <p>{message}</p>
   </div>
)
