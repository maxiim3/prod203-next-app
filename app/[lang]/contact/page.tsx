import ContactForm from '@/app/[lang]/contact/contact-form.client'
import { SectionTitle } from '@/components/section-title'
import SinglePageLayoutTemplate from '@/components/single-page-layout.template'
import React from 'react'

// ? Adresse mail de contact : contact@prod203.com
const Contact = () => {
  return (
    <SinglePageLayoutTemplate className={'gap-3 xs:gap-9 md:gap-20'}>
      <SectionTitle>Contact</SectionTitle>
      <ContactForm />
    </SinglePageLayoutTemplate>
  )
}

export default Contact
