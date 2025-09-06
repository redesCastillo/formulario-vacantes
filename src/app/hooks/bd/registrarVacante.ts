"use server";
import { createPool } from "@vercel/postgres";
import {z} from "zod";
import { formSchemaRegistroVacante } from "../validaciones/registro-vacante";

export async function registrarVacante(data: z.infer<typeof formSchemaRegistroVacante>) {
    try {
        const pool = createPool({
            connectionString: process.env.DATABASE_URL
        });
    
        const res = await pool.sql`INSERT INTO vacantes(titulo, descripcion, requisitos, beneficios) values(${data.titulo}, ${data.descripcion}, ${data.requisitos}, ${data.beneficios})`;
        await pool.end();

        if (!res) return false;
        
    } catch (error) {
        console.log("Ocurrio un error al registrar la vacante en la BD: ", error);
    }
}