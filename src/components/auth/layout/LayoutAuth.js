import React, { useState, useEffect } from "react";
import {
    fondoGYM,
    bgLoginImg1,
    bgLoginImg2,
    bgLoginImg3,
  } from "../../../assets/Assets";
import {
  BackgroundContainer,
  LoginContainer,
  LoginSection,
  CardPresentation,
} from "./LayoutAuthStyles";

const LayoutAuth = ({children}) => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // Controlar la opacidad
  const backgroundImages = [bgLoginImg1, bgLoginImg2, bgLoginImg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex(
        (prevIndex) => (prevIndex + 2) % backgroundImages.length
      );
    }, 10000); // Cambiado a 8 segundos para una transición más lenta

    return () => clearInterval(interval);
  }, []);
  const currentBackgroundImage = backgroundImages[backgroundIndex];
  return (
    <BackgroundContainer style={{ backgroundImage: `url(${fondoGYM})` }}>
      <LoginContainer>
        <LoginSection>
            {children}
        </LoginSection>
        <CardPresentation
          isVisible={isVisible}
          style={{ backgroundImage: `url(${currentBackgroundImage})` }}
        />
      </LoginContainer>
    </BackgroundContainer>
  );
};

export default LayoutAuth;
