import ContactForm from '@/components/_archive/(pages)/contact/contact-form.client'
import SinglePageLayoutTemplate from '@/components/ui/single-page-layout.template'
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
