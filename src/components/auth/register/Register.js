import React, { useState } from "react";
import {
  BackgroundContainer,
  InputContainer,
  CheckContiner,
} from "./RegisterStyles";
import { user } from "../../../assets/Assets";
import { Button } from "../../../resources/buttons/Buttons";
import Input from "../../../resources/inputs/Input";

const Register = () => {
  const [estaMarcado, setEstaMarcado] = useState(false);

  const handleCheckboxChange = () => {
    setEstaMarcado(!estaMarcado);
  };
  return (
    <BackgroundContainer>
      <img src={user} alt="logo" />
      <h2>Registrar usuario</h2>
      <InputContainer>
        <Input name="name" type="text" placeholder="Nombre completo" />
        <Input name="email" type="text" placeholder="Correo" />
        <Input type="password" placeholder="Contraseña" />
        <Input type="password" placeholder="Confirmar contraseña" />
      </InputContainer>
      <CheckContiner>
        <input
          type="checkbox"
          checked={estaMarcado}
          onChange={handleCheckboxChange}
        />
        <h6>Acepto los términos y condiciones</h6>
      </CheckContiner>
      <Button content="Registrarme" />
    </BackgroundContainer>
  );
};

export default Register;
