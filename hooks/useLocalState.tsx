//region Molecules
import {useFormContext} from '@/app/contact/ContactFormComponent'
import React, {useCallback, useEffect, useState} from 'react'

export const useLocalState = (key: 'name' | 'email' | 'message') => {
   const [hasBeenFocused, setHasBeenFocused] = useState(false)
   const context = useFormContext() // we consume the context here
   const [isValidInput, setIsValidInput] = useState<'init' | 'valid' | 'invalid'>('init') // 👈 Local state for validation status
   const [feedbackMessage, setFeedbackMessage] = useState<null | string>(null) // 👈 Local state for feedback message
   const [localState, setLocalState] = useState(() => {
      if (hasBeenFocused) return context.state[key]
      return ''
   }) // 👈 Local state for validation status
   const updateInputNameContext = useCallback(() => {
      if (!hasBeenFocused) return

      let isValid = false
      let feedbackLength = ''
      let feedbackContent = ''

      if (localState.length < 3 || localState.length > 45) {
         isValid = false
         feedbackLength = 'must be between 3 and 45 characters'
      } else if (/[^a-zA-Z\s]/.test(localState)) {
         isValid = false
         feedbackContent = 'should not contain numbers or special characters'
      }

      setIsValidInput(isValid ? 'valid' : 'invalid') // 👈 Update local state
      const handleFeedbackMessage = () => {
         if (feedbackLength && feedbackContent) return `${feedbackLength} and ${feedbackContent}`
         if (feedbackLength) return feedbackLength
         if (feedbackContent) return feedbackContent
         return ''
      }
      setFeedbackMessage(`Name : ${handleFeedbackMessage()}`) // 👈 Update feedback message

      if (!isValid) return

      context.setName(localState) // 👈 Update global state
   }, [])

   const updateInputEmailContext = useCallback(() => {
      if (!hasBeenFocused) return

      let isValid = false
      let feedback = ''

      const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (localState.match(mailRegex)) {
         isValid = false
         feedback = 'Email must be valid'
      }

      setIsValidInput(isValid ? 'valid' : 'invalid') // 👈 Update local state
      setFeedbackMessage(feedback) // 👈 Update feedback message

      if (!isValid) return

      context.setEmail(localState) // 👈 Update global state
   }, [])

   const updateInputMessageContext = useCallback(() => {
      if (!hasBeenFocused) return

      let isValid = false
      let feedback = ''

      if (localState.length < 3 || localState.length > 300) {
         isValid = false
         feedback = 'Message must be between 3 and 300 characters'
      }

      setIsValidInput(isValid ? 'valid' : 'invalid') // 👈 Update local state
      setFeedbackMessage(feedback) // 👈 Update feedback message

      if (!isValid) return

      context.setMessage(localState) // 👈 Update global state
   }, [])

   const updateLocalState = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
         setLocalState(e.target.value)
         setHasBeenFocused(true)
      },
      []
   )

   const updateInputHasFocus = useCallback(() => {
      setHasBeenFocused(true)
   }, [])

   useEffect(() => {
      if (key === 'name') {
         updateInputNameContext()
      } else if (key === 'email') {
         updateInputEmailContext()
      } else if (key === 'message') {
         updateInputMessageContext()
      }

      // log all states
      console.log('key', key)
      console.log('localState', localState)
      console.log('isValidInput', isValidInput)
      console.log('feedbackMessage', feedbackMessage)
      console.log('hasBeenFocused', hasBeenFocused)
   }, [localState])

   return {
      localState,
      updateLocalState,
      isValidInput,
      feedbackMessage,
      updateInputHasFocus,
   }
}
