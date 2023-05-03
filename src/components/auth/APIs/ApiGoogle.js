import React, { useState } from "react";
import { StyledGoogle } from "../../../resources/buttons/Buttons";

const ApiGoogle = ({ color }) => {
  const [user, setUser] = useState(null);
  const saveUserToJson = (user) => {
    const data = JSON.stringify(user);
    localStorage.setItem('User', data);
  };
  const responseGoogle = (response) => {
    const user = response.profileObj;
    saveUserToJson(user);
    setUser(user);
    console.log(user); // Guarda el objeto de usuario en el estado del componente
  };
  return (
    <StyledGoogle
      clientId="322568411120-qm8v464s7qok8qg79dk71jp2qesk9b76.apps.googleusercontent.com"
      buttonText=""
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      background={color}
    />
  );
};

export default ApiGoogle;
