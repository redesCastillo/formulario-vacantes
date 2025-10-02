import "./page.css";
import { Pie, Vacantes } from "./componentes";
import Image from "next/image";
import bcrypt from "bcryptjs";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <div>
            <Image src="/logo.png" alt="Login Icon" width={200} height={100} />
          </div>

          <div>
            <h1 className="main-title">Vacantes</h1>
            <div className="decorative-line"></div>
            <h2 className="subtitle">¡Únete a nuestro equipo!</h2>
          </div>
        </div>
      </header>

      <main>
        <Vacantes admin={false} />
      </main>

      <Pie />
    </>
  );
}

