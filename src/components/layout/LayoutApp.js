import React from "react";
import { LayoutAppContainer, LayoutAppContent } from "./LayoutAppStyles";

const LayoutApp = ({ children }) => {
  return (
    <LayoutAppContainer>
      <LayoutAppContent>{children}</LayoutAppContent>
    </LayoutAppContainer>
  );
};

export default LayoutApp;
