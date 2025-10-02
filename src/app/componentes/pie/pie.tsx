import "./page.css";
import { TerminosYCondiciones } from "../terminos/terminos";

export function Pie() {
    return (
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-section">
                <h4>📍 Ubicación</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d727.0070187418728!2d-96.13232287663298!3d15.756073664930202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c7226088ab760d%3A0x10846a11255ce0ed!2sHotel%20Castillo%20Huatulco%20%26%20Beach%20Club%204%20estrellas!5e0!3m2!1ses-419!2smx!4v1757009134932!5m2!1ses-419!2smx" width="400" height="300" style={{"border":"0"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="footer-section double">
                <h4>💼 Recursos Humanos</h4>
                <div className="contact-info">
                    <span>
                        <a href="tel:+52">Tel: +52 958 58 701 44 EXT. 615</a>
                    </span>
                    <span>
                        <a href="mailto:recursoshumanos@hotelcastillohuatulco.com">Email: recursoshumanos@hotelcastillohuatulco.com </a>
                    </span>
                </div>
                <h4>🌐 Síguenos</h4>
                <p className="social-links">
                    <a href="https://www.linkedin.com/company/hotel-castillo-huatulco/" target="_BLANK" rel="noreferrer">LinkedIn</a>
                    <a href="https://www.facebook.com/hotelcastillohux/" target="_BLANK" rel="noreferrer">Facebook</a>
                    <a href="https://mx.indeed.com/cmp/Hotel-Castillo-Huatulco" target="_BLANK" rel="noreferrer">Indeed</a>
                </p>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2025 Hotel Castillo Huatulco. Todos los derechos reservados.</p>
            <TerminosYCondiciones />
        </div>
    </footer>
    )

}

