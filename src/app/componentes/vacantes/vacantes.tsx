import "./page.css";
import Link from "next/link";
import { eliminarVacante } from "@/app/hooks";

export function Vacantes({admin}: {admin: boolean}) {
    return (
        <section className="container">
            {
                listadoVacantes.map(vacante => (
                    <article key={vacante.id} className="job-description">
                        <Link href={`/${vacante.id}`}>
                            <h2>{vacante.titulo}</h2>
                            <p>{vacante.descripcion}</p>
                            <h3>Requisitos:</h3>
                            <span>{vacante.requisitos}</span>
                            <h3>Beneficios:</h3>
                            <span>{vacante.beneficios}</span>
                        </Link>
                        {
                            admin ? <button className="botonEliminar" onClick={() => eliminarVacante(vacante.id)}>Eliminar vacante</button> : null
                        }
                    </article>
                ))
            }
        </section>
    )
}

const listadoVacantes = [
    {
        id: 1,
        titulo: "Recepcionista",
        descripcion: "Responsable de atender a los huéspedes y gestionar las reservas.",
        requisitos: ["Experiencia previa en recepción", "Habilidades de comunicación", "Conocimiento de sistemas de reservas"],
        beneficios: ["Salario competitivo", "Descuentos en alojamiento y alimentos", "Oportunidades de crecimiento profesional"]
    },
    {
        id: 2,
        titulo: "Camarero/a",
        descripcion: "Encargado de atender a los clientes en el restaurante y bar del hotel.",
        requisitos: ["Experiencia en servicio al cliente", "Habilidades interpersonales", "Capacidad para trabajar en equipo"],
        beneficios: ["Salario competitivo", "Descuentos en alojamiento y alimentos", "Oportunidades de crecimiento profesional"]
    },
    {
        id: 3,
        titulo: "Personal de limpieza",
        descripcion: "Responsable de mantener las habitaciones y áreas comunes del hotel limpias y ordenadas.",
        requisitos: ["Experiencia en limpieza", "Atención al detalle", "Capacidad para trabajar de manera independiente"],
        beneficios: ["Salario competitivo", "Descuentos en alojamiento y alimentos", "Oportunidades de crecimiento profesional"]
    }
];