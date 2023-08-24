import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  LandingContainer,
  SectionsContainer,
  SectionIntro,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
  Paragraph,
  SilhouettePresentation,
  Silhouette,
  TitleTag,
  IntroTitle,
  IntroContainer,
  OffersContainer,
  Container,
  PlansContainer,
  PlanCard,
  PlanTitle,
  PlanFeatures,
  FeatureItem,
  Price,
  ForumContainer,
  ForumForm,
  ForumTitle,
  ForumTitleBody,
  ForumBody,
  ForumQuestionBody,
  ForumCommentsContainer,
  ForumAddComment,
  ForumComments,
  Comment,
  FlexHorizontalText,
  CommentsContainer,
  ServicesContainer,
  ServiceForm,
  ServiceListWrapper,
  ServiceList,
  ServiceItem,
  ServiceTitle,
  ServiceDescription,
  ItemCategory,
  ItemIcon,
  ScrollArrow,
} from "./LandingStyles";
import {
  landing,
  silhouetteInitial,
  silhouette,
  silhouette2,
  silhouette3,
  silhouette4,
  silhouette5,
  sectionIntroContent,
  sectionOneContent,
  sectionTwoContent,
  sectionThreeContent,
  sectionFourContent,
  sectionFiveContent,
} from "../../assets/Assets";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleDoubleUp,
  faCashRegister,
  faDumbbell,
  faUsers,
  faBox,
  faBottleWater,
  faUserNinja,
  faUserTie,
  faCalendar,
  faCreditCard,
  faReceipt,
  faGift,
  faUsersRays,
  faGraduationCap,
  faCalendarCheck,
  faBell,
  faCommentDots,
  faBriefcase,
  faUsersViewfinder,
  faHeadset,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);
  const sectionFourRef = useRef(null);
  const sectionFiveRef = useRef(null);
  const [hoveredOffer, setHoveredOffer] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textPresentation, setText] = useState("");
  const [delta, setDelta] = useState(120 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [sectionIntroContent.phrase];
  const period = 1500;
  const listRef = useRef(null);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [textPresentation]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, textPresentation.length - 1)
      : fullText.substring(0, textPresentation.length + 1);

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
  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollLeft += 100;
    }
  };
  return (
    <LandingContainer style={{ backgroundImage: `url(${landing})` }}>
      <Header
        backgroundColor={headerBackground}
        sectionRefs={{
          sectionOneRef,
          sectionTwoRef,
          sectionThreeRef,
          sectionFourRef,
          sectionFiveRef,
        }}
      />
      <SectionsContainer>
        <SectionIntro>
          <IntroContainer>
            <IntroTitle>
              <p>
                {sectionIntroContent.initialPhrase}{" "}
                <span className="txt-rotate" dataPeriod="1000">
                  <span className="wrap">{textPresentation}</span>
                </span>
              </p>
            </IntroTitle>
            <Link
              to="#"
              onClick={() =>
                sectionOneRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <FontAwesomeIcon icon={faAngleDoubleDown} bounce />
            </Link>
          </IntroContainer>
          <SilhouettePresentation>
            <img src={silhouetteInitial} alt="silhouette" />
          </SilhouettePresentation>
        </SectionIntro>
        <SectionOne ref={sectionOneRef}>
          <Paragraph>
            <TitleTag>
              <h3>{sectionOneContent.tag}</h3>
            </TitleTag>
            <h1>{sectionOneContent.title}</h1>
            <p>{sectionOneContent.parragraph}</p>
          </Paragraph>
          <Silhouette>
            <img src={silhouette} alt="silhouette" />
          </Silhouette>
        </SectionOne>
        <SectionTwo ref={sectionTwoRef}>
          <Paragraph>
            <h1>{sectionTwoContent.title}</h1>
            <p>{sectionTwoContent.parragraph}</p>
          </Paragraph>
          <Silhouette>
            <img src={silhouette2} alt="silhouette2" />
          </Silhouette>
        </SectionTwo>
        <SectionThree ref={sectionThreeRef}>
          <Container>
            <ServicesContainer>
              <Paragraph>
                <h1>{sectionThreeContent.title}</h1>
                <p>{sectionThreeContent.parragraph}</p>
              </Paragraph>
              <ServiceForm>
                <ScrollArrow onClick={scrollLeft}>
                  <FontAwesomeIcon icon={faAngleDoubleLeft} fade />
                </ScrollArrow>
                <ServiceListWrapper ref={listRef}>
                  <ServiceList>
                    {sectionThreeContent.services.map((service, index) => (
                      <Item
                        key={index}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        service={service} // Pasa los datos del servicio al componente
                      />
                    ))}
                  </ServiceList>
                </ServiceListWrapper>
                <ScrollArrow onClick={scrollRight}>
                  <FontAwesomeIcon icon={faAngleDoubleRight} fade />
                </ScrollArrow>
              </ServiceForm>
            </ServicesContainer>
          </Container>
          <Silhouette>
            <img src={silhouette3} alt="silhouette3" />
          </Silhouette>
        </SectionThree>
        <SectionFour ref={sectionFourRef}>
          <OffersContainer>
            <Paragraph>
              <TitleTag>
                <h1>{sectionFourContent.title}</h1>
              </TitleTag>
            </Paragraph>
            <PlansContainer>
              {sectionFourContent.plains.map((plan, index) => (
                <PlanCard
                  key={index}
                  onMouseEnter={() => setHoveredOffer(index)}
                  onMouseLeave={() => setHoveredOffer(null)}
                >
                  <PlanTitle>{plan.name}</PlanTitle>
                  <PlanFeatures>
                    <FeatureItem>{plan.item1}</FeatureItem>
                    <FeatureItem>{plan.item2}</FeatureItem>
                    <FeatureItem>{plan.item3}</FeatureItem>
                    {/* Add other features here */}
                  </PlanFeatures>
                  <Price>${plan.price}/mes</Price>
                  {hoveredOffer === index && <HoverIconsPlan />}
                </PlanCard>
              ))}
            </PlansContainer>
          </OffersContainer>
          <Silhouette>
            <img src={silhouette4} alt="silhouette4" />
          </Silhouette>
        </SectionFour>
        <SectionFive ref={sectionFiveRef}>
          <ForumContainer>
            <ForumForm>
              <ForumTitle>
                <h1>{sectionFiveContent.title}</h1>
              </ForumTitle>
              <ForumBody>
                <ForumTitleBody>
                  <p>{sectionFiveContent.titleBody}</p>
                </ForumTitleBody>
                <ForumQuestionBody>
                  <p>{sectionFiveContent.questionBody}</p>
                </ForumQuestionBody>
                <ForumCommentsContainer>
                  <ForumAddComment>
                    <h3>{sectionFiveContent.addComentary}</h3>
                    <br />
                    <input type="text" placeholder="Escribe tu nombre" />
                    <br />
                    <input type="text" placeholder="Escribe tu correo" />
                    <br />
                    <input type="text" placeholder="Tema del comentario" />
                    <br />
                    <textarea placeholder="Escribe tu comentario" />
                    <br />
                    <button>Enviar</button>
                  </ForumAddComment>
                  <ForumComments>
                    <h3>{sectionFiveContent.titleComentary}</h3>
                    <br />
                    <CommentsContainer>
                      <Comment>
                        <h5>{sectionFiveContent.commentTitleExample}</h5>
                        <p>{sectionFiveContent.commentExample}</p>
                        <FlexHorizontalText>
                          <h6>
                            <FontAwesomeIcon icon={faCalendarCheck} />
                            {sectionFiveContent.commentDay}
                          </h6>
                          <h6>
                            <FontAwesomeIcon icon={faClock} />
                            {sectionFiveContent.commentHour}
                          </h6>
                          <p>Responder</p>
                        </FlexHorizontalText>
                      </Comment>
                    </CommentsContainer>
                  </ForumComments>
                </ForumCommentsContainer>
              </ForumBody>
            </ForumForm>
          </ForumContainer>
          <Silhouette>
            <img src={silhouette5} alt="silhouette5" />
          </Silhouette>
        </SectionFive>
      </SectionsContainer>
      <Footer />
    </LandingContainer>
  );
};
const Item = ({ service }) => {
  const faIcons = {
    faCashRegister,
    faUsers,
    faBox,
    faBottleWater,
    faUserNinja,
    faUserTie,
    faCalendar,
    faCreditCard,
    faReceipt,
    faGift,
    faUsersRays,
    faGraduationCap,
    faDumbbell,
    faCalendarCheck,
    faBell,
    faCommentDots,
    faBriefcase,
    faUsersViewfinder,
    faHeadset,
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ServiceItem
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ServiceTitle>{service.serviceTitle}</ServiceTitle>
      <ServiceDescription>{service.serviceDescription}</ServiceDescription>
      <ItemCategory>{service.category}</ItemCategory>
      <ItemCategory>{service.plan}</ItemCategory>
      <ItemIcon isHovered={isHovered}>
        <FontAwesomeIcon icon={faIcons[service.icon]} fade />
      </ItemIcon>
    </ServiceItem>
  );
};
const HoverIconsPlan = () => (
  <>
    <FontAwesomeIcon icon={faAngleDoubleUp} bounce />
    <FontAwesomeIcon icon={faDumbbell} fade />
  </>
);

export default Landing;
