
import ContactFormComponent from '@/app/contact/ContactFormComponent'
import React from 'react'

// ? Adresse mail de contact : contact@prod203.com
const Contact = () => {
   return (
      <main className={'flex h-screen w-screen items-center justify-center pt-24'}>
         <ContactFormComponent />
      </main>
   )

}

export default Contact
