"use client";
import "./page.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { eliminarVacante } from "@/app/hooks";
import { obtenerVacantes } from "@/app/hooks";
import { QueryResultRow } from "@vercel/postgres";

type Vacante = {
    id: number;
    titulo: string;
    descripcion: string;
    requisitos: string;
    beneficios: string;
};

export function Vacantes({admin}: {admin: boolean}) {
    const [vacantes, setVacantes] = useState<Vacante[]>([]);

    function mapRowsToVacantes(rows: QueryResultRow[]): Vacante[] {
        return rows.map(row => ({
            id: Number(row.id),
            titulo: String(row.titulo),
            descripcion: String(row.descripcion),
            requisitos: String(row.requisitos),
            beneficios: String(row.beneficios),
        }));
    }

    const eliminar = async (id: number) => {
        await eliminarVacante(id);
        window.location.reload();
    }

    useEffect(()=> {
        const resBd = async () => {
            const res = await obtenerVacantes();

            if (res) setVacantes(mapRowsToVacantes(res));
            else alert("Ocurrio un error al obtener las vacantes, intenta más tarde");
        }

        resBd();
    }, []);

    return (
        <section className="container">
            {
                vacantes.length == 0 ? <h2>No hay vacantes por el momento</h2> : (
                    vacantes.map(vacante => (
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
                            admin ? <button className="botonEliminar" onClick={() => eliminar(vacante.id)}>Eliminar vacante</button> : null
                        }
                    </article>
                ))
                )
            }
        </section>
    )
}

// const listadoVacantes = [
//     {
//         id: 1,
//         titulo: "Recepcionista",
//         descripcion: "Responsable de atender a los huéspedes y gestionar las reservas.",
//         requisitos: ["Experiencia previa en recepción", "Habilidades de comunicación", "Conocimiento de sistemas de reservas"],
//         beneficios: ["Salario competitivo", "Descuentos en alojamiento y alimentos", "Oportunidades de crecimiento profesional"]
//     },
//     {
//         id: 2,
//         titulo: "Camarero/a",
//         descripcion: "Encargado de atender a los clientes en el restaurante y bar del hotel.",
//         requisitos: ["Experiencia en servicio al cliente", "Habilidades interpersonales", "Capacidad para trabajar en equipo"],
//         beneficios: ["Salario competitivo", "Descuentos en alojamiento y alimentos", "Oportunidades de crecimiento profesional"]
//     },
//     {
//         id: 3,
//         titulo: "Personal de limpieza",
//         descripcion: "Responsable de mantener las habitaciones y áreas comunes del hotel limpias y ordenadas.",
//         requisitos: ["Experiencia en limpieza", "Atención al detalle", "Capacidad para trabajar de manera independiente"],
//         beneficios: ["Salario competitivo", "Descuentos en alojamiento y alimentos", "Oportunidades de crecimiento profesional"]
//     }
// ];