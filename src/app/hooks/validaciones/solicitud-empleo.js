import { z } from 'zod';

export const formSchemaSolicitudEmpleo = z.object({
  nombre: z.string().min(4, { error: 'Por favor, ingresa tu nombre' }),
  apellidos: z.string().min(5, { error: 'Por favor, ingresa tus apellidos' }),
  correo: z.email({ error: 'Por favor, ingresa tu correo' }),
  telefono: z.coerce.number({error:"El dato que pasaste no es un numero"}).min(1111111111, { error: 'Por favor, ingresa tu numero de telefono' }),
  edad: z.coerce.number({error: "El dato que pasaste no es un numero"}).min(18, {error: "Debes ser mayor de edad para postularte por este medio"}) ,
  ciudad: z.string().min(5, {error: "Por favor ingresa tu lugar de residencia"}),
  disponibilidad: z.enum(['inmediata', '1-semana', '2-semanas', '1-mes'], { error: 'Por favor, selecciona una disponibilidad aproximada' }),
  experiencia: z.enum(['sin-experiencia', 'menos-1-ano', '1-3-anos', '3-5-anos','mas-5-anos'], { error: 'Por favor, selecciona un tipo de experiencia' }),
  ultimoEmpleo: z.string().min(10, {error: "Si no tienes ultimo empleo pon ninguno - por cuanto tiempo"}),
  logros: z.string().min(5, {error: "Por favor pon al menos 1"}),
  ingles: z.enum(["nulo", "basico", "intermedio", "avanzado", "nativo"], {error: "Selecciona 1 nivel de ingles"}),
  idiomas: z.string().optional(),
  habilidades: z.string().min(8, {error: "Pon al menos 1 habilidad"}),
  motivacion: z.string().min(20, {error: "Por favor añade una breve descripción"}),
  horario: z.enum(["matutino", "vespertino", "nocturno", "flexible"]),
  terminos: z.boolean().refine(value => value === true, {error: "Debes aceptar los terminos y condiciones"})
});