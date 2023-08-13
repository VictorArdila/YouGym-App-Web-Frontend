import React, { useEffect, useState } from "react";
import {
  LandingContainer,
  ContainerSection,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  Paragraph,
  Silhouette,
  TitleTag,
} from "./LandingStyles";
import {
  landing,
  silhouette,
  silhouette2,
  silhouette3,
  silhouette4,
} from "../../assets/Assets";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Landing = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Una solución para gestionar tu gimnasio.", "Tu asistente virtual de gimnasio.", "La forma moderna de administrar tu centro fitness." ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
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
            <TitleTag>
              <h3>YouGym App</h3>
            </TitleTag>
            <h1>
              {`¡YouGym!`}{" "}
              <span
                className="txt-rotate"
                dataPeriod="1000"
                data-rotate='[ "Una solución para gestionar tu gimnasio.", "Tu asistente virtual de gimnasio.", "La forma moderna de administrar tu centro fitness." ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
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
