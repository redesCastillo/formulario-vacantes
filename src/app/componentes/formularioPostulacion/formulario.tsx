"use client";
import { formSchemaSolicitudEmpleo, validarVacante } from "@/app/hooks";
import {zodResolver} from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

export function FormularioPostulacion({id}: {id: string}) {
    const [pdf, setPdf] = useState("");

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(formSchemaSolicitudEmpleo)
    })

    const onSubmit = async (data: z.infer<typeof formSchemaSolicitudEmpleo>) => {
        const res = await validarVacante(id);

        if (!res) {
            alert("La vacante no existe o ya fue eliminada");
        }
        else {
            // enviar el correo
            try {
                const enviarCorreo = await fetch("/api/send", {
                    body: JSON.stringify({data, pdf, titulo: res}),
                    headers: {"Content-Type": "aplicacion/json"},
                    method: "POST"
                })
    
                if (enviarCorreo.ok) {
                    alert("Solicitud enviada correctamente")
                }else {
                    alert("Ocurrio un error")
                }
                
            } catch (error) {
                console.log("Ocurrio un error al enviar el correo de la solicitud: ", error)
            }
            // console.log(data);
        }
  }

    return (
        <div className="form-body">
            <div className="success-message" id="successMessage">
                ¡Gracias! Tu solicitud ha sido enviada correctamente. Nos pondremos en contacto contigo pronto.
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <!-- Información Personal --> */}
                <div className="form-section">
                    <h2 className="section-title">Información Personal</h2>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">Nombre(s) <span className="required">*</span></label>
                            <input type="text" id="firstName" {...register("nombre")} required/>
                            {errors.nombre && <span style={{color: "red"}}>{errors.nombre.message}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Apellidos <span className="required">*</span></label>
                            <input type="text" id="lastName" {...register("apellidos")} required/>
                            {errors.apellidos && <span style={{color: "red"}}>{errors.apellidos.message}</span>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico <span className="required">*</span></label>
                            <input type="email" id="email" {...register("correo")} required/>
                            {errors.correo && <span style={{color: "red"}}>{errors.correo.message}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Teléfono <span className="required">*</span></label>
                            <input type="tel" id="phone" {...register("telefono")} required/>
                            {errors.telefono && <span style={{color: "red"}}>{errors.telefono.message}</span>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="age">Edad</label>
                            <input type="number" id="age" {...register("edad")} min="18" max="65"/>
                            {errors.edad && <span style={{color: "red"}}>{errors.edad.message}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">Ciudad de Residencia</label>
                            <input type="text" id="city" {...register("ciudad")} />
                            {errors.ciudad && <span style={{color: "red"}}>{errors.ciudad.message}</span>}
                        </div>
                    </div>
                    <div className="form-group">
                            <label htmlFor="availability">Disponibilidad <span className="required">*</span></label>
                            <select id="availability" {...register("disponibilidad")} required>
                                <option value="">Selecciona tu disponibilidad</option>
                                <option value="inmediata">Inmediata</option>
                                <option value="1-semana">En 1 semana</option>
                                <option value="2-semanas">En 2 semanas</option>
                                <option value="1-mes">En 1 mes</option>
                            </select>
                            {errors.disponibilidad && <span style={{color: "red"}}>{errors.disponibilidad.message}</span>}
                        </div>
                </div>

                {/* <!-- Experiencia Laboral --> */}
                <div className="form-section">
                    <h2 className="section-title">Experiencia Laboral</h2>
                    
                    <div className="form-group full-width">
                        <label htmlFor="experience">Experiencia en Hotelería/Turismo</label>
                        <select id="experience" {...register("experiencia")} >
                            <option value="">Selecciona tu experiencia</option>
                            <option value="sin-experiencia">Sin experiencia</option>
                            <option value="menos-1-ano">Menos de 1 año</option>
                            <option value="1-3-anos">1-3 años</option>
                            <option value="3-5-anos">3-5 años</option>
                            <option value="mas-5-anos">Más de 5 años</option>
                        </select>
                        {errors.experiencia && <span style={{color: "red"}}>{errors.experiencia.message}</span>}
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="lastJob">Último Empleo (Empresa y Puesto)</label>
                        <input type="text" id="lastJob" {...register("ultimoEmpleo")} placeholder="Ej: Hotel Paradise - Recepcionista"/>
                        {errors.ultimoEmpleo && <span style={{color: "red"}}>{errors.ultimoEmpleo.message}</span>}
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="workExperience">Describe tu experiencia laboral relevante</label>
                        <textarea id="workExperience" {...register("logros")} placeholder="Cuéntanos sobre tu experiencia previa, logros..."></textarea>
                        {errors.logros && <span style={{color: "red"}}>{errors.logros.message}</span>}
                    </div>
                </div>

                {/* <!-- Habilidades e Idiomas --> */}
                <div className="form-section">
                    <h2 className="section-title">Habilidades e Idiomas</h2>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="englishLevel">Nivel de Inglés</label>
                            <select id="englishLevel" {...register("ingles")} >
                                <option value="">Selecciona tu nivel</option>
                                <option value="nulo">Nulo</option>
                                <option value="basico">Básico</option>
                                <option value="intermedio">Intermedio</option>
                                <option value="avanzado">Avanzado</option>
                                <option value="nativo">Nativo</option>
                            </select>
                            {errors.ingles && <span style={{color: "red"}}>{errors.ingles.message}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="otherLanguages">Otros Idiomas</label>
                            <input type="text" id="otherLanguages" {...register("idiomas")} placeholder="Francés, Alemán, etc."/>
                            {errors.idiomas && <span style={{color: "red"}}>{errors.idiomas.message}</span>}
                        </div>
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="skills">Habilidades Especiales</label>
                        <textarea id="skills" {...register("habilidades")} placeholder="Menciona habilidades como: atención al cliente, manejo de sistemas POS, cocina, primeros auxilios, etc."></textarea>
                        {errors.habilidades && <span style={{color: "red"}}>{errors.habilidades.message}</span>}
                    </div>
                </div>

                {/* <!-- Documentos --> */}
                <div className="form-section curriculum-section">
                    <h2 className="section-title">Documentos</h2>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="resume">Currículum (CV)</label>
                            <div className="file-upload-wrapper">
                                <div className="file-upload">
                                    <label htmlFor="resume" className="file-upload-label">
                                        📄 Subir CV (PDF)
                                    </label>
                                    <CldUploadWidget options={{resourceType: "image",clientAllowedFormats: ["jpg", "jpeg", "png", "gif", "webp"]}} uploadPreset="app-naroa" onSuccess={(res) => {
                                            if (typeof res.info === "object" && "secure_url" in res.info) {
                                                setPdf((res.info as { secure_url: string }).secure_url);
                                            }
                                        }} >
                                            {({open}) => {
                                                return <button className="btn-imagen" onClick={() => open()}>Sube tu curriculum</button>
                                            }}
                                    </CldUploadWidget>
                                </div>
                                <div className="file-name" id="resumeFileName"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Información Adicional --> */}
                <div className="form-section">
                    <h2 className="section-title">Información Adicional</h2>
                    
                    <div className="form-group full-width">
                        <label htmlFor="motivation">¿Por qué te interesa trabajar en Hotel Castillo Huatulco?</label>
                        <textarea id="motivation" {...register("motivacion")} placeholder="Comparte tu motivación para unirte a nuestro equipo..."></textarea>
                        {errors.motivacion && <span style={{color: "red"}}>{errors.motivacion.message}</span>}
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="schedule">Horario de Preferencia</label>
                        <select id="schedule" {...register("horario")} >
                            <option value="">Selecciona tu preferencia</option>
                            <option value="matutino">Matutino (6:00 AM - 2:00 PM)</option>
                            <option value="vespertino">Vespertino (2:00 PM - 10:00 PM)</option>
                            <option value="nocturno">Nocturno (10:00 PM - 6:00 AM)</option>
                            <option value="flexible">Horario flexible</option>
                        </select>
                        {errors.horario && <span style={{color: "red"}}>{errors.horario.message}</span>}
                    </div>

                    <div className="checkbox-group">
                        <input type="checkbox" id="dataConsent" {...register("terminos")} required/>
                        <label htmlFor="dataConsent">Acepto el tratamiento de mis datos personales conforme a los Terminos y Condiciones <span className="required">*</span></label>
                        {errors.terminos && <span style={{color: "red"}}>{errors.terminos.message}</span>}
                    </div>
                </div>

                <button type="submit" className="submit-btn">Enviar Solicitud</button>
            </form>
        </div>
    )
}
