import React from "react";
import { LandingContainer, ContainerSection } from "./LandingStyles";
import { landing } from "../../assets/Assets";
import Header from "./header/Header";

const Landing = () => {
  return (
    <LandingContainer style={{ backgroundImage: `url(${landing})` }}>
      <Header />
      <ContainerSection>
        
      </ContainerSection>
    </LandingContainer>
  );
};

export default Landing;
