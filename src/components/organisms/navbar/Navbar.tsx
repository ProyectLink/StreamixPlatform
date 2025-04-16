import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RippleButton, InputEmailBanner } from "@components/atoms";
import logo from "@assets/logo.svg";
import { useScrollRef } from "@hooks/useScrollRef";
import { clsx } from "clsx";
import styles from "./navbar.module.scss";

export const navItems = [
  { label: "Inicio", href: "/", title: "Página de inicio" },
  { label: "Películas", href: "/peliculas", title: "Ver películas" },
  { label: "Series", href: "/series", title: "Ver series" },
  { label: "Estrenos", href: "/estrenos", title: "Ver estrenos" },
  {
    label: "Recién Agregados",
    href: "/recien-agregados",
    title: "Últimos agregados",
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { scrollRef } = useScrollRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollRef?.current
        ? scrollRef.current.scrollTop
        : window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    const scrollElement = scrollRef?.current || window;

    scrollElement.addEventListener("scroll", handleScroll);
    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, [scrollRef]);

  const handleContactClick = () => {
    navigate("/login");
  };

  return (
    <nav className={clsx(styles.navbar, isScrolled && styles.scrolled)}>
      <div className={styles.navbar__contentall}>
        <Link
          className={styles.navbar__logo_link}
          to={navItems[0].href}
          title={navItems[0].title}
        >
          <img className={styles.navbar__logo} src={logo} alt="Logo Streamix" />
        </Link>
        <ul className={styles.navbar__list}>
          {navItems.slice(1).map((item) => (
            <li key={item.href}>
              <Link
                className={styles["navbar__list-item"]}
                to={item.href}
                title={item.title}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.navbar__content}>
          <InputEmailBanner placeholder="" onChange={() => {}} name="" />
          <RippleButton
            className={styles.navbar__session}
            onClick={handleContactClick}
          >
            Iniciar Sesión
          </RippleButton>
        </div>
      </div>
    </nav>
  );
};
