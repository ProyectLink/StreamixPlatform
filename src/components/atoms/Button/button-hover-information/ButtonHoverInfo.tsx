import {  ReactNode } from "react";
import "./buttonhoverinfo.scss";

interface ButtonHoverInfoProps  {
    onClick?: () => void;
    children?: ReactNode;
    className?: string;
}

export const ButtonHoverInfo = ({
  onClick,
  children = "Botón",
  className = "",
}: ButtonHoverInfoProps) => {
  return (
    <button
      className={`ButtonHoverInfo ${className}`.trim()}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
