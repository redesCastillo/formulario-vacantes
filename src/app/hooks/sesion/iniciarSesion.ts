"use server";
import { formSchemaLogin } from "../validaciones/login";
import z from "zod";
import { createSession } from "./login";
import bcrypt from "bcryptjs";
import { createPool } from "@vercel/postgres";

export const iniciarSesion = async (data: z.infer<typeof formSchemaLogin>) => {
    try {
        const pool = createPool({
            connectionString: process.env.DATABASE_URL,
        })

        if (!pool) {
            throw new Error("La conexión a la base de datos no está inicializada")
        }

        const resBd = await pool.sql`SELECT contra from admin where usuario = ${data.usuario}`;

        const {rows} = resBd;
        await pool.end();
        
        const bdContrasena = rows[0].contra;

        if (bdContrasena) {
            const match = await bcrypt.compare(data.contrasena, bdContrasena);

            if (match) {
                await createSession(data.usuario);
            }
            else {
                return false;
            }
        }


    } catch (error) {
        console.log("Ocurrio un error al asignar un token de sesion: ", error);
    }
};