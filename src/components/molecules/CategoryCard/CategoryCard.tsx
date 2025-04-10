import "./categorycard.scss";

interface CategoryCardProps {
  imageUrl: string;
  title: string;
  isLoading?: boolean;
}

export const CategoryCard = ({
  imageUrl,
  title,
  isLoading = false,
}: CategoryCardProps) => {
  return (
    <div className="category-card">
      {isLoading ? (
        <div className="category-card__skeleton">
          <div className="category-card__skeleton-image"></div>
          <div className="category-card__skeleton-title"></div>
        </div>
      ) : (
        <>
          <img
            src={imageUrl}
            alt={title}
            className="category-card__image"
            loading="lazy"
          />
          <div className="category-card__overlay">
            <h3 className="category-card__title">{title}</h3>
          </div>
        </>
      )}
    </div>
  );
};
