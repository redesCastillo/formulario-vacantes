import "./page.css";
import { Pie, Vacantes } from "../componentes";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <div>
            <Image src="/logo.png" alt="Login Icon" width={200} height={100} />
          </div>

          <div>
            <h1 className="main-title">Vacantes disponibles</h1>
            <div className="decorative-line"></div>
          </div>
        </div>
      </header>

      <main>
        <Vacantes admin={true} />
      </main>

      <Pie />
    </>
  );
}
