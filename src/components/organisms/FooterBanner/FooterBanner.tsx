import playbanner from "@assets/iconplaybanner.svg";
import "./footerbaner.scss";
import { EmailSubscriptionForm } from "@components/molecules/EmailSubscriptionForm/EmailSubscriptionForm";

export const FooterBanner = () => {
  return (
    <div className="footer__banner">
      <div className="footer__banner-texts">
        <h3 className="footer__banner-title">No Te Pierdas Nada</h3>
        <p>
          Suscríbete y recibe noticias, contenido exclusivo y ofertas
          especiales. Solo deja tu correo y sé parte de la acción. ¡Prometemos
          no hacerte spoilers! 😉
        </p>
      </div>
      <div className="footer__banner-play">
        <img
          className="footer__banner-stiker"
          src={playbanner}
          alt="Play Button"
        />
      </div>

      <EmailSubscriptionForm />
    </div>
  );
};
