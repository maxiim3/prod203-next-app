import ContactForm from '@/app/[lang]/contact/contact-form.client'
import SinglePageLayoutTemplate from '@/components/single-page-layout.template'
import React from 'react'

// ? Adresse mail de contact : contact@prod203.com
const Contact = () => {
   return (
      <SinglePageLayoutTemplate>
         <ContactForm />
      </SinglePageLayoutTemplate>
   )
}

export default Contact
