import {EmailTemplate} from '@/app/contact/EmailTemplate'
import {NextResponse} from 'next/server'
import {Resend} from 'resend'

export async function POST(request: Request) {
   try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      const formData: {email: string; name: string; message: string} = await request.json()
      const data = await resend.emails.send({
         from: 'maxime@digitalsolution.studio',
         to: ['maxime@digitalsolution.studio', formData.email],
         subject: `Nouveau message de ${formData.name}`,
         react: EmailTemplate({
            name: formData.name,
            message: formData.message,
            email: formData.email,
         }),
      })
      console.log(data)
      return NextResponse.json(data)
   } catch (error) {
      return NextResponse.json({error})
   }
}
