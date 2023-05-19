import React from "react";
import {
  HeaderContainer,
  ContainerLogo,
  ContainerMenuHeader,
  ContainerSocial,
  ContainerButtonSign,
  ConytainerItems,
  DividerItem,
  ButtoItemMenu,
  ButtonSign,
  ButtonSocial,
  ContainerButtonSocial,
} from "./HeaderStyles";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Header = ({ backgroundColor }) => {
  const colorFacebook =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const colorWhatsapp =
    "linear-gradient(to right, #00bb2d 0%, #00ea38 40%, #9CEC8F 100%)";
  const labelYouGym = "linear-gradient(to right, #B03535 0%, #201F1F 50%)";
  const colorInstagram =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const linkFacebook = () => {
    window.open("https://www.facebook.com/BlueCodeFullStack", "_blank"); // URL de la página de Facebook que deseas redireccionar
  };
  const linkInstagram = () => {
    window.open("https://www.instagram.com/bluecode_full_stack/", "_blank"); // URL de la página de Facebook que deseas redireccionar
  };
  return (
    <HeaderContainer backgroundColor={backgroundColor}>
      <ContainerLogo>
        <span>
          You<span>G</span>ym
        </span>
      </ContainerLogo>
      <ContainerMenuHeader>
        <ConytainerItems>
          <DividerItem />
          <ButtoItemMenu>Inicio</ButtoItemMenu>
          <DividerItem />
          <ButtoItemMenu>Producto</ButtoItemMenu>
          <DividerItem />
          <ButtoItemMenu>Ofertas</ButtoItemMenu>
          <DividerItem />
          <ButtoItemMenu>Foro</ButtoItemMenu>
          <DividerItem />
          <ButtoItemMenu>Acerca</ButtoItemMenu>
          <DividerItem />
        </ConytainerItems>
        <ContainerSocial>
          <ContainerButtonSocial
            background={colorInstagram}
            onClick={linkInstagram}
          >
            <ButtonSocial icon={faInstagram} onClick={linkInstagram} />
          </ContainerButtonSocial>
          <ContainerButtonSocial background={colorWhatsapp}>
            <ButtonSocial icon={faWhatsapp} />
          </ContainerButtonSocial>
          <ContainerButtonSocial
            background={colorFacebook}
            onClick={linkFacebook}
          >
            <ButtonSocial icon={faFacebook} onClick={linkFacebook} />
          </ContainerButtonSocial>
        </ContainerSocial>
        <ContainerButtonSign>
          <ButtonSign background={labelYouGym}>Ingresar</ButtonSign>
        </ContainerButtonSign>
      </ContainerMenuHeader>
    </HeaderContainer>
  );
};

export default Header;
