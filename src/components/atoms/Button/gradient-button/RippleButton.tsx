import { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { useRipple } from "../hooks/useRipple";
import "./Gradientbtn.scss";

interface RippleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}
export const RippleButton = ({
  onClick,
  children = "Botón",
  className = "",
  ...props
}: RippleButtonProps) => {
  const [buttonRef, handleRipple] = useRipple();
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    handleRipple(e);      
    onClick?.(e);         
  };

  return (
    <button
      ref={buttonRef}
      className={`GradientBtn ${className}`.trim()}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};
