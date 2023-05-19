import React, { useEffect, useState } from "react";
import {
  LandingContainer,
  ContainerSection,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
} from "./LandingStyles";
import { landing } from "../../assets/Assets";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Landing = () => {
  const [headerBackground, setHeaderBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 80) {
        setHeaderBackground("rgb(51, 51, 51, .7)");
      } else {
        setHeaderBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <LandingContainer style={{ backgroundImage: `url(${landing})` }}>
      <Header backgroundColor={headerBackground}/>
      <ContainerSection>
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
        <SectionThree></SectionThree>
        <SectionFour></SectionFour>
      </ContainerSection>
      <Footer />
    </LandingContainer>
  );
};

export default Landing;
