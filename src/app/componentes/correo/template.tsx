interface EmailTemplateProps {
  nombre : string,
  apellidos: string,
  correo: string,
  telefono: number,
  edad: number,
  ciudad: string,
  disponibilidad: string,
  experiencia: string,
  ultimoEmpleo: string,
  logros: string,
  ingles: string,
  idiomas?: string,
  habilidades: string,
  motivacion: string,
  horario: string,
  terminos: boolean
}

export function EmailTemplate({data, pdf, titulo}: {data: EmailTemplateProps, pdf: string, titulo: string}) {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>
      <h1>Nueva solicitud de empleo para {titulo}</h1>

      <h2>Datos generales de la persona: </h2>

      <ul style={{listStyle: "none", margin: "20px"}}>
        <li style={{marginTop: "10px"}}>Nombre: {data.nombre}</li>
        <li style={{marginTop: "10px"}}>Apellidos: {data.apellidos}</li>
        <li style={{marginTop: "10px"}}>Correo: {data.correo}</li>
        <li style={{marginTop: "10px"}}>Teléfono: {data.telefono}</li>
        <li style={{marginTop: "10px"}}>Edad: {data.edad}</li>
        <li style={{marginTop: "10px"}}>Ciudad: {data.ciudad}</li>
        <li style={{marginTop: "10px"}}>Disponibilidad: {data.disponibilidad}</li>
        <li style={{marginTop: "10px"}}>Experiencia: {data.experiencia}</li>
        <li style={{marginTop: "10px"}}>Ultimo Empleo: {data.ultimoEmpleo}</li>
        <li style={{marginTop: "10px"}}>Logros: {data.logros}</li>
        <li style={{marginTop: "10px"}}>Nivel de ingles: {data.ingles}</li>
        <li style={{marginTop: "10px"}}>Idiomas que habla: {data.idiomas}</li>
        <li style={{marginTop: "10px"}}>Habilidades: {data.habilidades}</li>
        <li style={{marginTop: "10px"}}>Motivación: {data.motivacion}</li>
        <li style={{marginTop: "10px"}}>Horario: {data.horario}</li>
      </ul>

      <span>Curriculum de la persona interesada: <a style={{textDecoration: "none"}} href={pdf}>Click aquí</a></span>

    </div>
  );
}