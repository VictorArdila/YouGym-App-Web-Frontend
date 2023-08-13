import React, { useEffect, useState } from "react";
import {
  LandingContainer,
  ContainerSection,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  Paragraph,
  Silhouette
} from "./LandingStyles";
import { landing, silhouette, silhouette2, silhouette3, silhouette4 } from "../../assets/Assets";
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
      <Header backgroundColor={headerBackground} />
      <ContainerSection>
        <SectionOne>
          <Paragraph>
            <h2>Section One</h2>
            <p>Section One</p>
          </Paragraph>
          <Silhouette>
           <img src={silhouette} alt="silhouette" />
          </Silhouette>
        </SectionOne>
        <SectionTwo>
          <Paragraph>
            <h2>Section Two</h2>
            <p>Section Two</p>
          </Paragraph>
          <Silhouette>
           <img src={silhouette2} alt="silhouette2" />
          </Silhouette>
        </SectionTwo>
        <SectionThree>
          <Paragraph>
            <h2>Section Three</h2>
            <p>Section Three</p>
          </Paragraph>
          <Silhouette>
           <img src={silhouette3} alt="silhouette3" />
          </Silhouette>
        </SectionThree>
        <SectionFour>
          <Paragraph>
            <h2>Section Four</h2>
            <p>Section Four</p>
          </Paragraph>
          <Silhouette>
           <img src={silhouette4} alt="silhouette4" />
          </Silhouette>
        </SectionFour>
      </ContainerSection>
      <Footer />
    </LandingContainer>
  );
};

export default Landing;
