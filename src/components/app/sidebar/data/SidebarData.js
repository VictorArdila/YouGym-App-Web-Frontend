import React, { useContext } from "react";
import { logoSVG } from "../../../../assets/Assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlipIcon } from "../../../../resources/icons/Icons";
import {
  faAngleDown,
  faAngleUp,
  faBottleWater,
  faCalendar,
  faCashRegister,
  faCog,
  faDashboard,
  faDumbbell,
  faSignOut,
  faTasks,
  faUser,
  faUsers,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const user = JSON.parse(sessionStorage.getItem('user'))|| [
  {
    img: "",
    label: "",
    to: "#",
    subNav: [
      {
        title: "",
        path: "#",
      },
      {
        title: "",
        path: "#",
      },
      {
        title: "",
        path: "#",
      },
    ],
  },
];
export const profileArray = [
  {
    img: user.imageUrl,
    label: user.name,
    to: "#",
    subNav: [
      {
        title: "user.rol",
        path: "#",
      },
      {
        title: user.email,
        path: "#",
      },
      {
        title: "user.TipoSesion",
        path: "#",
      },
    ],
  },
];
export const linksArray = [
  {
    label: "Menu Dash",
    icon: <FlipIcon icon={faDashboard} />,
    to: "#",
    iconClosed: <FontAwesomeIcon icon={faAngleDown} />,
    iconOpened: <FontAwesomeIcon icon={faAngleUp} />,
    notification: 0,
    subNav: [
      {
        title: "YouGym",
        path: "#",
        icon: <img src={logoSVG} alt="logo" />,
      },
      {
        title: "CatchTweets",
        path: "#",
        icon: <FontAwesomeIcon icon={faTwitter} />,
      },
    ],
  },
  {
    label: "Caja Registradora",
    icon: <FlipIcon icon={faCashRegister} />,
    to: "#",
    notification: 3,
  },
  {
    label: "Usuarios",
    icon: <FlipIcon icon={faUsers} />,
    to: "#",
    iconClosed: <FontAwesomeIcon icon={faAngleDown} />,
    iconOpened: <FontAwesomeIcon icon={faAngleUp} />,
    notification: 0,
    subNav: [
      {
        title: "Entrenador",
        path: "#",
        icon: <FontAwesomeIcon icon={faUserTie} />,
      },
      {
        title: "Cliente",
        path: "#",
        icon: <FontAwesomeIcon icon={faUser} />,
      },
      {
        title: "Administrador",
        path: "#",
        icon: <FontAwesomeIcon icon={faUserTie} />,
      },
    ],
  },
  {
    label: "Body Center",
    icon: <FlipIcon icon={faDumbbell} />,
    to: "#",
    iconClosed: <FontAwesomeIcon icon={faAngleDown} />,
    iconOpened: <FontAwesomeIcon icon={faAngleUp} />,
    notification: 1,
    subNav: [
      {
        title: "Progreso",
        path: "#",
        icon: <FontAwesomeIcon icon={faCalendar} />,
      },
      {
        title: "Tareas",
        path: "#",
        icon: <FontAwesomeIcon icon={faTasks} />,
      },
    ],
  },
  {
    label: "Servicio",
    icon: <FlipIcon icon={faBottleWater} />,
    to: "#",
    iconClosed: <FontAwesomeIcon icon={faAngleDown} />,
    iconOpened: <FontAwesomeIcon icon={faAngleUp} />,
    notification: 1,
  },
];
export const settingsLinksArray = [
  {
    label: "Configuracion",
    icon: <FontAwesomeIcon icon={faCog} spin />,
    to: "#",
    iconClosed: <FontAwesomeIcon icon={faAngleDown} />,
    iconOpened: <FontAwesomeIcon icon={faAngleUp} />,
    notification: 1,
  },
];
export const secondaryLinksArray = [
  {
    label: "Salir",
    icon: <FlipIcon icon={faSignOut} />,
    to: "/login",
    iconClosed: <FontAwesomeIcon icon={faAngleDown} />,
    iconOpened: <FontAwesomeIcon icon={faAngleUp} />,
  },
];
