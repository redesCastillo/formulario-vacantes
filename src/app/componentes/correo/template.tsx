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

export function EmailTemplate({datos, pdf, titulo}: {datos: EmailTemplateProps, pdf: string, titulo: string}) {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>
      <h1>Nueva solicitud de empleo para {titulo}</h1>

      <h2>Datos generales de la persona: </h2>

      <ul style={{listStyle: "none", margin: "20px"}}>
        <li style={{marginTop: "10px"}}>Nombre: {datos.nombre}</li>
        <li style={{marginTop: "10px"}}>Apellidos: {datos.apellidos}</li>
        <li style={{marginTop: "10px"}}>Correo: {datos.correo}</li>
        <li style={{marginTop: "10px"}}>Teléfono: {datos.telefono}</li>
        <li style={{marginTop: "10px"}}>Edad: {datos.edad}</li>
        <li style={{marginTop: "10px"}}>Ciudad: {datos.ciudad}</li>
        <li style={{marginTop: "10px"}}>Disponibilidad: {datos.disponibilidad}</li>
        <li style={{marginTop: "10px"}}>Experiencia: {datos.experiencia}</li>
        <li style={{marginTop: "10px"}}>Ultimo Empleo: {datos.ultimoEmpleo}</li>
        <li style={{marginTop: "10px"}}>Logros: {datos.logros}</li>
        <li style={{marginTop: "10px"}}>Nivel de ingles: {datos.ingles}</li>
        <li style={{marginTop: "10px"}}>Idiomas que habla: {datos.idiomas}</li>
        <li style={{marginTop: "10px"}}>Habilidades: {datos.habilidades}</li>
        <li style={{marginTop: "10px"}}>Motivación: {datos.motivacion}</li>
        <li style={{marginTop: "10px"}}>Horario: {datos.horario}</li>
      </ul>

      <span>Curriculum de la persona interesada: <a style={{textDecoration: "none"}} href={pdf}>Click aquí</a></span>

    </div>
  );
}