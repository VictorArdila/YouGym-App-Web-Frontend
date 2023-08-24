import React from "react";
import { ContentContainer  } from "./ContentStyles.jsx";

const Content = ({ children }) => {
  return (
    <ContentContainer>{children}</ContentContainer>
  );
};

export default Content;
