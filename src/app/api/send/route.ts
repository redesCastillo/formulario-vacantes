import { Resend } from 'resend';
import { EmailTemplate } from '@/app/componentes';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const {datos, pdf, titulo} = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Vacantes-Castillo <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Nueva solicitud',
      react: EmailTemplate({ data: datos, pdf: pdf, titulo: titulo }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}