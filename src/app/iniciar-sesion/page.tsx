"use client";
import "./page.css";
import Image from "next/image";
import { formSchemaLogin, iniciarSesion } from "../hooks";
import {zodResolver} from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function IniciarSesion() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(formSchemaLogin)
    });

    const router = useRouter();

    const onSubmit = async (data: z.infer<typeof formSchemaLogin>) => {
        try {
            const res = await iniciarSesion(data);

            if (res) {
                router.push("/registrar-vacante");
                
            }else {
                alert("EL usuario y/o ocntraseña ingresados son incorrectos")
            }

        } catch (error) {
            console.log("Ocurrio un error al asignar un token de sesion: ", error);
        }
    };

    return (
        <div className="container">
            <div className="form-header">
                <h1 className="form-title">Iniciar Sesión</h1>
                <Image src="/logo.png" alt="Login Icon" width={200} height={100} />
            </div>

            <form className="formulario-login" onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <label htmlFor="usuario">Usuario</label>
                    <input type="text" id="usuario" {...register("usuario")} required />
                    {errors.usuario && <span style={{color: "red"}}>{errors.usuario.message}</span>}
                </div>

                <div>
                    <label htmlFor="contra">Contraseña</label>
                    <input type="password" id="contra" {...register("contrasena")} required />
                    {errors.contrasena && <span style={{color: "red"}}>{errors.contrasena.message}</span>}
                </div>

                <button className="boton" type="submit">Ingresar</button>
            </form>

        </div>
    );
}