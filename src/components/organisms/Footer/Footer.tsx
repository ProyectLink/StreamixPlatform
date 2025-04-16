import { useLocation } from "react-router-dom";
import logofooter from "@assets/logofooter.svg";
import iconfb from "@assets/iconofacebookstreamix.svg";
import iconig from "@assets/iconoinstraganfooter.svg";
import icontik from "@assets/iconotiktokstreamix.svg";
import iconarrow from "@assets/iconarrowdrow.svg"
import "./footer.scss";
import { FooterBanner } from "../footer-banner/FooterBanner";
import { useState } from "react";
export const Footer = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const handleItemClick = (item: string) => {
    setActiveDropdown((prev) => (prev === item ? null : item)); // Alterna entre activo e inactivo
  };

  return (
    <footer className="footer">
      <div className="footer__contentall">
        {/* Renderizar el banner solo si no estamos en la ruta /login */}
        {location.pathname !== "/login" && <FooterBanner />}
        <div className="footer__grid">
          <div className="footer__colum1">
            <img className="footer__logo" src={logofooter} alt="logo footer" />
            <p>
              Solo somos un grupo de personas sin dinero para pagar Netflix.
            </p>
            <div className="footer__colum1-socials">
              <a href="#">
                <img src={iconfb} alt="Facebook" />
              </a>

              <a href="#">
                <img src={icontik} alt="TikTok" />
              </a>

              <a href="#">
                <img src={iconig} alt="Instagram" />
              </a>
            </div>
          </div>
          <ul className="footer__colum2">
            <li> Películas</li>
            <li>Series</li>
            <li>Estrenos</li>
            <li>Recién Agregados</li>
          </ul>

          <ul className="footer__colum3">
            <li>Sobre Streamix</li>
            <li   className={`footer__drowparent ${activeDropdown === "contact" ? "active" : ""}`}
              onClick={() => handleItemClick("contact")}
            >Mantente en Contacto <span><img src={iconarrow} alt=" icon drowp"/></span></li>
            <li>
              <div className="footer__drow">
                <p>Preguntas Frecuentes</p>
                <p>Sugerencias y Feedback</p>
              </div>
            </li>
          </ul>

          <ul className="footer__colum4">
            <li  className={`footer__drowparent ${activeDropdown === "legal" ? "active" : ""}`}
              onClick={() => handleItemClick("legal")} >Información legal <span><img src={iconarrow} alt=" icon drowp"/></span></li>
            <li>
              <div className="footer__drow">
                <p>Términos y Condiciones</p>
                <p>Política de Privacidad</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer__copy">© 2025 StreamixMovie</p>
    </footer>
  );
};
