import { useRef, RefObject } from "react";

interface RippleOptions {
  color?: string;
  duration?: number;
}
type ApplyRipple = (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;

export const useRipple = (
  options: RippleOptions = {}
): [RefObject<HTMLButtonElement | null>, ApplyRipple] => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const applyRipple: ApplyRipple = (e) => {
    const button = buttonRef.current;
    if (!button) return;

    const { top, left } = button.getBoundingClientRect();

    const overlay = document.createElement("span");
    overlay.className = "ripple-effect";

    if (options.color) {
      overlay.style.setProperty("--ripple-color", options.color);
    }

    if (options.duration) {
      overlay.style.setProperty("--ripple-duration", `${options.duration}ms`);
    }

    overlay.style.left = `${e.clientX - left}px`;
    overlay.style.top = `${e.clientY - top}px`;

    button.appendChild(overlay);
    overlay.addEventListener("animationend", () => overlay.remove());
  };

  return [buttonRef, applyRipple];
};
