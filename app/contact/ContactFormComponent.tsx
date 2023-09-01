'use client'

import {useMounted} from '@/hooks/useMounted'
import Link from 'next/link'
import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {twMerge} from 'tailwind-merge'

//region Organisms
export default function ContactFormComponent() {
   const {
      register,
      handleSubmit,
      formState: {errors},
   } = useForm()

   const [isFormSubmitted, setIsFormSubmitted] = useState(false)
   const [isSubmittedWithSuccess, setIsSubmittedWithSuccess] = useState(false)
   const isMounted = useMounted()

   if (!isMounted) return <p>Loading Form...</p>

   if (isFormSubmitted)
      return (
         <div className="flex max-h-[640px] w-full flex-col gap-4 bg-clrPrimary-100 px-9  py-12 text-base-100 sm:max-w-[540px] sm:rounded-lg">
            {isSubmittedWithSuccess ? (
               <>
                  <h1 className="text-center text-2xl font-bold">Merci pour votre message</h1>
                  <p className="text-center">Nous vous répondrons dans les plus brefs délais</p>
                  <Link
                     href={'/'}
                     className={'btn btn-primary'}>
                     Retour à l{"'"}accueil
                  </Link>
               </>
            ) : (
               <>
                  <h1 className="text-center text-2xl font-bold">Une erreur est survenue</h1>
                  <Link
                     href={'/contact'}
                     onClick={() => setIsFormSubmitted(false)}
                     className={'btn btn-primary'}>
                     Réessayer
                  </Link>
               </>
            )}
         </div>
      )
   return (
      <form
         onSubmit={handleSubmit(data => {
            const submit = fetch(`/api/contact`, {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify(data),
            })

            submit.then(res => {
               console.log(res)
               if (res.status === 200 || res.status === 201 || res.status === 204) {
                  setIsSubmittedWithSuccess(true)
               }
               if (res.status === 500) {
                  setIsSubmittedWithSuccess(false)
               }
               if (res.status === 400) {
                  setIsSubmittedWithSuccess(false)
               }
               setIsFormSubmitted(true)
            })
         })}
         className={
            'flex max-h-[640px] w-full flex-col gap-3 bg-clrPrimary-100 px-9  py-12 text-base-100 sm:max-w-[540px] sm:rounded-lg'
         }>
         <div className="form-control w-full">
            <Label
               id={'name'}
               label={'Nom'}
            />
            <input
               id={'name'}
               defaultValue={'test'}
               {...register('name', {required: true, maxLength: 80, minLength: 3})}
               placeholder={'Nom'}
               aria-invalid={errors.name ? 'true' : 'false'}
               className="input input-bordered w-full bg-primary/70 font-normal tracking-wide text-base-100/70" // 👈 add this for Tailwind styling
            />
            {errors.name && (
               <label className={twMerge('label ')}>
                  <span className={twMerge('label-text-alt text-error')}>
                     {(() => {
                        if (errors.name?.type === 'required') return 'Name is required'
                        if (errors.name?.type === 'maxLength') return 'Name is too long'
                        if (errors.name?.type === 'minLength') return 'Name is too short'
                     })()}
                  </span>
               </label>
            )}
         </div>
         <div className="form-control w-full">
            <Label
               id={'email'}
               label={'Addresse Mail'}
            />
            <input
               {...register('email', {
                  required: true,
                  maxLength: 80,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
               })}
               defaultValue={'testEmail@mail.com'}
               id={'email'}
               aria-invalid={errors.email ? 'true' : 'false'}
               aria-label={'Addresse Mail'}
               type={'email'}
               placeholder={'Addresse Mail'}
               className="input input-bordered w-full bg-primary/70 font-normal tracking-wide text-base-100/70"
            />
            {errors.email && (
               <label className={twMerge('label ')}>
                  <span className={twMerge('label-text-alt text-error')}>
                     {(() => {
                        if (errors.email?.type === 'required') return 'Email is required'
                        if (errors.email?.type === 'maxLength') return 'Name is too long'
                        if (errors.email?.type === 'pattern') return 'Email is not valid'
                     })()}
                  </span>
               </label>
            )}
         </div>
         <div className="form-control w-full">
            <Label
               id={'message'}
               label={'Entrez votre message'}
            />
            <textarea
               defaultValue={'test message'}
               {...register('message', {required: true, maxLength: 500})}
               id={'message'}
               aria-invalid={errors.message ? 'true' : 'false'}
               rows={4}
               aria-label={'Entrez votre message'}
               className="textarea textarea-bordered h-24 bg-primary/70 text-base font-normal leading-loose tracking-wide text-base-100/70"
               placeholder={'Entrez votre message'}
            />
            {errors.message && (
               <label className={twMerge('label ')}>
                  <span className={twMerge('label-text-alt text-error')}>
                     {(() => {
                        if (errors.message?.type === 'required') return 'Name is required'
                        if (errors.message?.type === 'maxLength') return 'Name is too long'
                     })()}
                  </span>
               </label>
            )}
         </div>

         <button
            type={'submit'}
            disabled={false}
            className="btn btn-md">
            Submit
         </button>
      </form>
   )
}
//endregion

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
