"use server";
import { createPool } from "@vercel/postgres";

export async function obtenerVacantes() {
    try {
        const pool = createPool({
            connectionString: process.env.DATABASE_URL
        })

        const vacantes = await pool.sql`SELECT * FROM vacantes`;
        await pool.end();

        if (vacantes) return vacantes.rows;
        else return false;

    } catch (error) {
        console.error("Ocurrio un error al obtener los productos de la BD: ", error);
    }

}