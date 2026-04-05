import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1).max(100),
  company: z.string().max(100).optional(),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
})

export async function POST(req: Request) {
  const body = await req.json()
  const result = schema.safeParse(body)

  if (!result.success) {
    return NextResponse.json({ error: 'Ongeldige invoer' }, { status: 400 })
  }

  const { name, company, email, message } = result.data

  const resend = new Resend(process.env.RESEND_API_KEY)

  await resend.emails.send({
    from: 'Jobmarketing <noreply@jobmarketing.nl>',
    to: 'morrislandman@outlook.com',
    replyTo: email,
    subject: `Nieuw contactbericht van ${name}`,
    text: [
      `Naam: ${name}`,
      company ? `Bedrijf: ${company}` : '',
      `E-mail: ${email}`,
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n'),
  })

  return NextResponse.json({ ok: true })
}
