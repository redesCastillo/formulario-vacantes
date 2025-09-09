"use server";
import { createPool } from "@vercel/postgres";

export async function validarVacante(id: string) {
    try {
        const pool = createPool({
            connectionString: process.env.DATABASE_URL
        });
    
        const res = await pool.sql`SELECT titulo from vacantes where id = ${id}`;
        
        const {rows} = res;
        await pool.end();

        const tituloVacante = rows[0].titulo;

        if (tituloVacante) return tituloVacante;
        else return false;
        
    } catch (error) {
        console.log("Ocurrio un error al registrar la vacante en la BD: ", error);
    }
}