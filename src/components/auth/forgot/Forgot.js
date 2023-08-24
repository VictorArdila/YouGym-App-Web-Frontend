import React from "react";
import { BackgroundContainer, InputContainer } from "./ForgotStyles";
import { remember } from "../../../assets/Assets";
import { Button } from "../../../resources/buttons/Buttons";
import Input from "../../../resources/inputs/Input";

const Forgot = () => {
  return (
    <BackgroundContainer>
      <img src={remember} alt="logo" />
      <h2>Recuperar contraseña</h2>
      <p>
        Ingresa tu correo electrónico y te enviaremos un enlace para que puedas
        recuperar tu contraseña.
      </p>
      <InputContainer>
        <Input name="email" type="text" placeholder="Correo electrónico" />
        <Button content="Enviar" />
      </InputContainer>
    </BackgroundContainer>
  );
};

export default Forgot;
