import { FormularioPostulacion } from "../componentes";
import "./page.css";

export default async function Vacante({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;

  return (
     <div className="container">
        <div className="form-header">
            <h1 className="form-title">Postúlate a Nuestras Vacantes</h1>
            <p className="form-subtitle">Hotel Castillo Huatulco & Beach Club</p>
        </div>

        <FormularioPostulacion id={id} />
    </div>
  )
}