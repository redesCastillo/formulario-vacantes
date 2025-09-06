import { Resend } from 'resend';
import { EmailTemplate } from '@/app/componentes';
import z from 'zod';
import { formSchemaSolicitudEmpleo } from '@/app/hooks';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST({datos, titulo, pdf}: {datos: z.infer<typeof formSchemaSolicitudEmpleo>, titulo: string, pdf: string}) {
  try {
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