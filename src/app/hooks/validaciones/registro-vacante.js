import { z } from 'zod';

export const formSchemaRegistroVacante = z.object({
  titulo: z.string().min(10, { error: 'Por favor, ingresa el titulo de la vacante' }),
  descripcion: z.string().min(20, { error: 'Por favor, ingresa una breve descripción del empleo' }),
  requisitos: z.string().min(7, { error: 'Por favor, ingresa al menos 1 requisito' }),
  beneficios: z.string().min(7, { error: 'Por favor, ingresa al menos 1 beneficio' }),
});