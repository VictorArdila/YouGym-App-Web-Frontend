import React from "react";
import {
  FooterContainer,
  FooterLayout,
  FooterLeft,
  FooterCenter,
  FooterRight,
  Footertitle,
  FooterText,
  FooterSocial,
  FooterContact,
} from "./FooterStyles";
import { logoWhite } from "../../../assets/Assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCloud,
  faCubes,
  faLaptop,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLayout>
        <FooterLeft>
          <Footertitle>
            <img src={logoWhite} alt="silhouette3" />
            <h3>InnoByte</h3>
          </Footertitle>
          <FooterText>
            <p>© 2023 InnoByte. All rights reserved</p>
            <p>Terms of Service Privacy Policy</p>
          </FooterText>
        </FooterLeft>
        <FooterCenter>
          <Footertitle>
            <h3>Servicios</h3>
          </Footertitle>
          <FooterText>
            <Footertitle>
              <FontAwesomeIcon icon={faCloud} />
              <p>Desarrollo paginas web</p>
            </Footertitle>
            <Footertitle>
              <FontAwesomeIcon icon={faMobileAlt} />
              <p>Desarrollo aplicaciones mobiles</p>
            </Footertitle>
            <Footertitle>
              <FontAwesomeIcon icon={faLaptop} />
              <p>Desarrollo de software</p>
            </Footertitle>
            <Footertitle>
              <FontAwesomeIcon icon={faCubes} />
              <p>Diseño UI/UX</p>
            </Footertitle>
          </FooterText>
        </FooterCenter>
        <FooterRight>
          <Footertitle>
            <h3>Contacto</h3>
          </Footertitle>
          <Footertitle>
            <h4>Redes Sociales</h4>
          </Footertitle>
          <FooterSocial>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faWhatsapp} />
          </FooterSocial>
          <FooterContact>
            <Footertitle>
              <h4>Chatea con nosotros</h4>
            </Footertitle>
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Correo" />
            <textarea placeholder="Mensaje" />
          </FooterContact>
        </FooterRight>
      </FooterLayout>
    </FooterContainer>
  );
};

export default Footer;
