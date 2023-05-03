import React from "react";
import Login from "./../login/Login";
import { Screen, Container } from "./LayoutLoginStyles";
import { fondoGYM } from "./../../../resources/Resources";

const LayoutLogin = ({ children }) => {
  return (
    <Screen style={{ backgroundImage: `url(${fondoGYM})` }}>
      <Container>
        <Login>{children}</Login>
      </Container>
    </Screen>
  );
};
export default LayoutLogin;
