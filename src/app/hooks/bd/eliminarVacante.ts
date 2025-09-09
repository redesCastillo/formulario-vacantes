"use server";
import { createPool } from "@vercel/postgres";

export async function eliminarVacante(id: number) {
    try {
        const pool = createPool({
            connectionString: process.env.DATABASE_URL
        });
    
        await pool.sql`DELETE FROM vacantes where id = ${id}`;
        await pool.end();
        
    } catch (error) {
        console.log("Ocurrio un error al registrar la vacante en la BD: ", error);
    }
}