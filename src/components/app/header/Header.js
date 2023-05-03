import React, { useState } from "react";
import {
  SHeader,
  SHeaderInfo,
  SHeaderSesion,
  SHeaderCog,
  BottonBar,
  RoutesPages,
  TextHeader,
  Title,
  PictureSesion,
  CogApp,
} from "./HeaderStyles.jsx";
import Dropdown from "./dropdown/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { settings } from "./data/HeaderData";
import { faServer, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [expanded, setExpaned] = useState(true);
  return (
    <SHeader>
      <SHeaderInfo>
        <BottonBar></BottonBar>
        <RoutesPages>
          <FontAwesomeIcon icon={faServer} />
        </RoutesPages>
        <TextHeader>
          <h5>Inicio</h5>
        </TextHeader>
        <Title>
          <h5>You</h5>
          <h4>Gym</h4>
        </Title>
      </SHeaderInfo>
      <SHeaderSesion>
        <PictureSesion>
          <FontAwesomeIcon icon={faUserCircle} />
        </PictureSesion>
        <TextHeader>
          <h5>Usuario</h5>
        </TextHeader>
      </SHeaderSesion>
      <SHeaderCog>
      </SHeaderCog>
    </SHeader>
  );
};

export default Header;
