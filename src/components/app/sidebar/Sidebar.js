import React, { useState } from "react";
import {
  SidebarContainer,
  SidebarLogoContentainer,
  SidebarMenuContainer,
  SidebarMenuTitle,
  SidebarDivider,
  SidebarItemTitle,
  SidebarMenuItem,
  SidebarMenuSettings,
  SidebarMenuOut,
} from "./SidebarStyles.jsx";
import { logoPNG } from "../../../assets/Assets.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBottleWater,
  faBox,
  faCashRegister,
  faCog,
  faGraduationCap,
  faRightFromBracket,
  faUser,
  faUserNinja,
  faUsersRays,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  function outSesion() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/Iniciar-sesion";
  }
  return (
    <SidebarContainer
      isOpen={sidebarOpen}
      onMouseEnter={() => setSidebarOpen((p) => !p)}
      onMouseLeave={() => setSidebarOpen((p) => !p)}
    >
      <SidebarLogoContentainer isOpen={sidebarOpen}>
        <img src={logoPNG} alt="logo" />
        <h1>YouGym App</h1>
      </SidebarLogoContentainer>
      <SidebarMenuContainer>
        <SidebarMenuTitle isOpen={!sidebarOpen}>
          <h2>Menu</h2>
        </SidebarMenuTitle>
        <SidebarDivider />
        <SidebarMenuItem isOpen={sidebarOpen}>
          <FontAwesomeIcon icon={faCashRegister} />
          <h3>Caja</h3>
        </SidebarMenuItem>
        <SidebarMenuItem isOpen={sidebarOpen}>
          <FontAwesomeIcon icon={faUser} />
          <h3>Clientes</h3>
        </SidebarMenuItem>
        <SidebarMenuItem isOpen={sidebarOpen}>
          <FontAwesomeIcon icon={faUserNinja} />
          <h3>Entrenadores</h3>
        </SidebarMenuItem>
        <SidebarMenuItem isOpen={sidebarOpen}>
          <FontAwesomeIcon icon={faGraduationCap} />
          <h3>Clases</h3>
        </SidebarMenuItem>
        <SidebarMenuItem isOpen={sidebarOpen}>
          <FontAwesomeIcon icon={faBox} />
          <h3>Productos</h3>
        </SidebarMenuItem>
        <SidebarMenuItem isOpen={sidebarOpen}>
          <FontAwesomeIcon icon={faBottleWater} />
          <h3>Planes</h3>
        </SidebarMenuItem>
        <SidebarMenuItem isOpen={sidebarOpen}>
          <FontAwesomeIcon icon={faUsersRays} />
          <h3>Membresias</h3>
        </SidebarMenuItem>
        <SidebarMenuSettings>
          <SidebarItemTitle isOpen={sidebarOpen}>
            <h2>Configuración</h2>
          </SidebarItemTitle>
          <SidebarDivider />
          <SidebarMenuItem isOpen={sidebarOpen}>
            <FontAwesomeIcon icon={faCog} spin />
            <h3>Ajustes</h3>
          </SidebarMenuItem>
        </SidebarMenuSettings>
        <SidebarMenuOut>
          <SidebarMenuItem onClick={outSesion} isOpen={sidebarOpen}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            <h3>Cerrar sesión</h3>
          </SidebarMenuItem>
        </SidebarMenuOut>
      </SidebarMenuContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
