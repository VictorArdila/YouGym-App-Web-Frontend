import React from "react";
import { Button } from "../../../resources/buttons/Buttons";
import Input from "../../../resources/inputs/Input";
import { logoPNG } from "../../../assets/Assets";
import {
  BackgroundLogin,
  InputContainer,
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
  function handleRegister() {
    window.location.href = "/registrarme";
  }
  function handleForgot() {
    window.location.href = "/recuperar-contraseña";
  }
  return (
    <BackgroundLogin>
      <img src={logoPNG} alt="logo" />
      <h2>Iniciar Sesión</h2>
      <InputContainer>
        <Input name="username" type="text" placeholder="Usuario" />
        <Input type="password" placeholder="Contraseña" />
        <ButtonTextForgot onClick={handleForgot}>
          ¿Olvidaste tu contraseña?
        </ButtonTextForgot>
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
        <ButtonTextRegister onClick={handleRegister}>
          ¿No tienes una cuenta? crear una
        </ButtonTextRegister>
      </SocialContainer>
    </BackgroundLogin>
  );
};

export default Login;
