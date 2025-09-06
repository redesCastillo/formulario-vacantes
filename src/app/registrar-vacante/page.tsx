"use client";
import "./page.css";
import Image from "next/image";
import { formSchemaRegistroVacante, deleteSession, registrarVacante } from "../hooks";
import {zodResolver} from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";

// TODO:
// Integracion de cloudinary
// crear contraseña con bcrypt

export default function RegistrarVacante() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(formSchemaRegistroVacante)
    });

    const onSubmit = async (data: z.infer<typeof formSchemaRegistroVacante>) => {
        // console.log(data);
        const res = await registrarVacante(data);

        if (!res) alert("No se pudo registrar la vacante, ocurrio un error");
    };

    const logout = async () => {
        await deleteSession();
        redirect("/");
    }

    return (
        <div className="container">
            <div className="form-header">
                <h1 className="form-title">Registrar Vacante</h1>
                <Image src="/logo.png" alt="Login Icon" width={200} height={100} />
            </div>

            <form className="formulario-registro" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="nombreVacante">Nombre de la Vacante:</label>
                    <input type="text" id="nombreVacante" {...register("titulo")} required />
                    {errors.titulo && <span style={{color: "red"}}>{errors.titulo.message}</span>}
                </div>

                <div>
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea id="descripcion" {...register("descripcion")} required placeholder="Qué actividades se realizaran"></textarea>
                    {errors.descripcion && <span style={{color: "red"}}>{errors.descripcion.message}</span>}
                </div>

                <div>
                    <label htmlFor="requisitos">Requisitos:</label>
                    <textarea id="requisitos" {...register("requisitos")} required placeholder="Separalos con una coma"></textarea>
                    {errors.requisitos && <span style={{color: "red"}}>{errors.requisitos.message}</span>}
                </div>

                <div>
                    <label htmlFor="beneficios">Beneficios:</label>
                    <textarea id="beneficios" {...register("beneficios")} required placeholder="Separalos con una coma"></textarea>
                    {errors.beneficios && <span style={{color: "red"}}>{errors.beneficios.message}</span>}
                </div>

                <button type="submit" className="boton">Registrar Vacante</button>
            </form>

            <div className="divSesion">
                <button className="botonCerrarSesion" onClick={logout}>Cerrar Sesión</button>
            </div>
        </div>
    )
}