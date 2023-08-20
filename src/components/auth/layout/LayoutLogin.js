import React from "react";
import Login from "../login/Login";
import { Screen, Container } from "./LayoutLoginStyles";

const LayoutLogin = ({ children }) => {
  return (
    <Screen>
      <Container>
        <Login>{children}</Login>
      </Container>
    </Screen>
  );
};
export default LayoutLogin;
