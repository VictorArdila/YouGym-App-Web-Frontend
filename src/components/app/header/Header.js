import React, { useState, useEffect, useContext } from "react";
import {
  HeaderContainer,
  HeaderTitleContainer,
  HeaderProfile,
  HeaderProfileItem,
  HeaderProfileData,
  HeaderThemeMode,
  HeaderInfoContainer,
  HeaderDateTimeContainer,
  HeaderSearchContainer,
  HeaderSearchInput,
  Theme,
  ThemeLabel,
  IconModeTheme,
  ThemeToggler,
  ToggleThumb,
} from "./HeaderStyles";
import { profile } from "./data/UserSesion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faClose,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../../App";
import { modeDark, modeLight } from "../../../assets/Assets";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Estado para controlar si el campo de búsqueda está abierto
  const { setTheme, theme } = useContext(ThemeContext);
  const [changeTheme, setChangeTheme] = useState(false);
  return (
    <HeaderContainer>
      <HeaderProfile>
        <HeaderProfileItem>
          <img src={profile.img} alt="profile" />
          <HeaderProfileData>
            <h3>{profile.name}</h3>
            {profile.subNav.map((item, index) => {
              if (index === 1) {
                return <h5>{item.email}</h5>;
              }
              return <></>;
            })}
          </HeaderProfileData>
        </HeaderProfileItem>
        <HeaderThemeMode>
          <Theme>
            <ThemeLabel>
              <h3>Modo {theme === "dark" ? "oscuro" : "claro"}</h3>
            </ThemeLabel>
            <ThemeToggler
              isActive={theme === "dark"}
              onClick={() =>
                setTheme((p) => (p === "light" ? "dark" : "light"))
              }
            >
              <IconModeTheme>
                <img src={modeLight} alt="logo" />
              </IconModeTheme>
              <ToggleThumb
                style={theme === "dark" ? { right: "1px" } : {}}
                isOpen={changeTheme}
                onClick={() => setChangeTheme((p) => !p)}
              >
                <FontAwesomeIcon
                  icon={theme === "dark" ? faAngleLeft : faAngleRight} // Cambiar el icono basado en el estado del tema
                />
              </ToggleThumb>
              <IconModeTheme>
                <img src={modeDark} alt="logo" />
              </IconModeTheme>
            </ThemeToggler>
          </Theme>
        </HeaderThemeMode>
      </HeaderProfile>
      <HeaderTitleContainer>
        <FontAwesomeIcon icon={faHome} />
        <h1>Inicio</h1>
      </HeaderTitleContainer>
      <HeaderInfoContainer>
        <HeaderDateTimeContainer>
          <HeaderDate />
          <HeaderTime />
        </HeaderDateTimeContainer>
        <HeaderSearchContainer>
          {!isSearchOpen ? ( // Mostrar el botón de búsqueda cuando el campo no está abierto
            <HeaderSearchInput onClick={() => setIsSearchOpen(true)}>
              <FontAwesomeIcon icon={faSearch} />
            </HeaderSearchInput>
          ) : (
            // Mostrar el campo de búsqueda cuando está abierto
            <HeaderSearchInput>
              <FontAwesomeIcon icon={faSearch} />
              <input type="text" placeholder="Buscar..." />
              <FontAwesomeIcon
                icon={faClose}
                onClick={() => setIsSearchOpen(false)}
              />
            </HeaderSearchInput>
          )}
        </HeaderSearchContainer>
      </HeaderInfoContainer>
    </HeaderContainer>
  );
};
const HeaderDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Actualizar cada segundo

    return () => clearInterval(interval);
  }, []);
  const dayOfWeek = currentDate.getDay();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  // Meses (0 = Enero, 1 = Febrero, ...)
  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  const formattedDate = `${dayOfWeek} ${months[month]} ${year}`;
  return (
    <div>
      <h3>{formattedDate}</h3>
    </div>
  );
};
const HeaderTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Actualizar cada segundo

    return () => clearInterval(interval);
  }, []);
  const hour = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const indicator = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12; // Convertir a formato de 12 horas

  const formattedTime = `${formattedHour}:${minutes
    .toString()
    .padStart(2, "0")} ${indicator}`;

  return (
    <div>
      <h5>{formattedTime}</h5>
    </div>
  );
};
export default Header;
