import { Link } from "react-router-dom";
import "./sectionheader.scss";

interface SectionHeaderProps {
  title: string;
  onSeeAll?: () => void; 
  route?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  onSeeAll,
  route,
}) => {
  return (
    <div className="header-section">
      <div className="header-section__contentall">
        <div className="header-section__container">       
        <h2 className="header-section__title">{title}</h2>
        <div className="header-section__line"></div>
        <div>
          {route ? (
            <Link to={route} className="header-section__see-all bg-amber-600">
              Ver Todo →
            </Link>
          ) : (
            // Si no hay ruta, usamos el onSeeAll
            <button
              className="header-section__see-all bg-amber-600"
              onClick={onSeeAll}
            >
              Ver Todo →
            </button>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};
