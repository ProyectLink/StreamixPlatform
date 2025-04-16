import "./cardmovie.scss";
import { useScrollFade } from "@hooks/animations/useScrollFade"; // Asegúrate de que esta ruta esté bien


interface CardMovieProps {
  title?: string;
  releaseYear?: string;
  duration?: string;
  quality?: string;
  poster?: string;
  sagaName?: string;
  video_url?: string;
  sagaOrder?: string;
}

export const CardMovie = ({
  title = "Título no disponible",
  releaseYear = "N/A",
  duration = "N/A",
  quality = "",
  poster = "https://res.cloudinary.com/dzrygwkqm/image/upload/v1738206471/sonic_3_qzp0d2.webp",
  sagaName = "",
  video_url = "",
  sagaOrder = "",
} : CardMovieProps) => {
    const [ref, isVisible] = useScrollFade<HTMLAnchorElement>(0.35);
  return (
    <a
      ref={ref}
      className={`moviecard ${isVisible ? "fade-in" : "fade-out"}`}
      data-saga-name={sagaName || "Sin saga"}
      data-saga-order={sagaOrder || "0"}
      href={video_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <figure className="moviecard__figure">
        <img
          src={poster}
          alt={`Poster de ${title}`}
          className="moviecard__figureimage"
        />
        {quality && <span className="moviecard__quality">{quality}</span>}
      </figure>
      <div className="moviecard__content">
        <h3 className="moviecard__title">{title}</h3>
        <div className="moviecard__footer">
          <p className="moviecard__paragraph">
            <span className="moviecard__info">{releaseYear}</span> -
            <span className="moviecard__info"> {duration} min</span>
          </p>
          <span className="moviecard__type">Peli</span>
        </div>
      </div>
    </a>
  );
};
