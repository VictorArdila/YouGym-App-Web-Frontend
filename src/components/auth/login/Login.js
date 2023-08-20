import React, { useState, useEffect } from "react";
import { Button } from "../../../resources/buttons/Buttons";
import Input from "../../../resources/inputs/Input";
import {
  logoPNG,
  fondoGYM,
  bgLoginImg1,
  bgLoginImg2,
  bgLoginImg3,
} from "../../../assets/Assets";
import {
  BackgroundContainer,
  LoginContainer,
  LoginSection,
  InputContainer,
  CardPresentation,
  ButtonTextForgot,
  SocialContainer,
  ButtonTextRegister,
} from "./LoginStyles";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import ApiGoogle from "../APIs/ApiGoogle";

const Login = ({ children }) => {
  // const FacebookBackground =
  //   "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  // const TwitterBackground =
  //   "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  const GoogleBackground =
    "linear-gradient(to right, #FFFFFF 0%, ##FFFFFF 40%, ##FFFFFF 100%)";
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // Controlar la opacidad
  const backgroundImages = [bgLoginImg1, bgLoginImg2, bgLoginImg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 2) % backgroundImages.length);
    }, 10000); // Cambiado a 8 segundos para una transición más lenta

    return () => clearInterval(interval);
  }, []);

  const currentBackgroundImage = backgroundImages[backgroundIndex];
  return (
    <BackgroundContainer style={{ backgroundImage: `url(${fondoGYM})` }}>
      <LoginContainer>
        <LoginSection>
          <img src={logoPNG} alt="logo" />
          <h2>Iniciar Sesión</h2>
          <InputContainer>
            <Input name="username" type="text" placeholder="Usuario" />
            <Input type="password" placeholder="Contraseña" />
            <ButtonTextForgot>¿Olvidaste tu contraseña?</ButtonTextForgot>
          </InputContainer>
          <Button content="Acceder" />
          <SocialContainer>
            <h3>O inicia sesión con</h3>
            {/* <Icon color={FacebookBackground}>
            <FontAwesomeIcon icon={faFacebook} />
          </Icon> */}
            <ApiGoogle color={GoogleBackground} />
            {/* <Icon color={TwitterBackground}>
            <FontAwesomeIcon icon={faTwitter} />
          </Icon> */}
            <ButtonTextRegister>
              ¿No tienes una cuenta? crear una
            </ButtonTextRegister>
          </SocialContainer>
        </LoginSection>
        <CardPresentation isVisible={isVisible} style={{ backgroundImage: `url(${currentBackgroundImage})` }} />
      </LoginContainer>
    </BackgroundContainer>
  );
};

export default Login;
