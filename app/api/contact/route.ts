import {EmailTemplate} from '@/app/api/contact/email.template'
import ContactStaticContent from '@/static-content/contact.static.content'
import {NextResponse} from 'next/server'
import {Resend} from 'resend'

export async function POST(request: Request) {
   try {
      const resend = new Resend(process.env.NEXT_PRIVATE_RESEND_API_KEY)
      const {data: client} = await request.json()

      const responseFromResend = await resend.emails.send({
         from: ContactStaticContent.email, // We cannot send the email in the name of the client
         to: [ContactStaticContent.email], // Sending mail to us
         subject: `Nouveau message de ${client.name}`,
         react: EmailTemplate({
            name: client.name,
            message: client.message,
            email: client.email,
         }),
      })
      return NextResponse.json(responseFromResend)
   } catch (error) {
      return NextResponse.json({error: `Something wrong happened... ${error}`})
   }
}
