import { useEffect } from "react";
import "./loadingscreen.scss"

export const LoadingScreen = ({ text = "LOADING" }) => {
  useEffect(() => {
    const audio = new Audio("music/sonido_para la_web.mp3");
    audio.play().catch((error) => console.error("Error al reproducir sonido", error));
  }, []); // Se ejecuta solo una vez al montar el componente
  return (
    
    <div className="loading-screen">
    <div className="loading-screen__text">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="loading-screen__letter"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  </div>
  )
}
