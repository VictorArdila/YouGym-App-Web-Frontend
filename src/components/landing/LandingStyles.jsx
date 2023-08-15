import styled from "styled-components";

export const LandingContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-size: cover;
  background-attachment: fixed;
`;
export const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;
export const SectionIntro = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgSectionTypePresentation};
`;
export const SectionOne = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgSectionTypeOne};
`;
export const SectionTwo = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgSectionTypeTwo};
`;
export const SectionThree = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgSectionTypeOne};
`;
export const SectionFour = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgSectionTypeTwo};
`;
export const SectionFive = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgSectionTypeOne};
`;
export const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  title {
    color: ${({ theme }) => theme.text};
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }
  p {
    padding-top: 20px;
    padding-right: 50px;
    padding-left: 50px;
    color: ${({ theme }) => theme.text};
    font-size: 21px;
    font-weight: 100;
    text-align: justify;
  }
`;
export const SilhouettePresentation = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
  justify-content: end;
  align-items: center;
  img {
    width: 78%;
    height: 85%;
  }
`;
export const Silhouette = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40%;
  justify-content: end;
  align-items: center;
  img {
    width: 78%;
    height: 85%;
  }
`;
export const TitleTag = styled.div`
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 8px 10px;
  background: linear-gradient(
    90.21deg,
    rgba(130, 5, 5, 0.5) -5.91%,
    rgba(26, 26, 26, 0.5) 111.58%
  );
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 20px;
  margin-bottom: 16px;
  display: inline-block;
`;
export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: center;
  svg {
    color: ${({ theme }) => theme.text};
    background: linear-gradient(
      90.21deg,
      rgba(130, 5, 5, 0.8) -5.91%,
      rgba(36, 36, 36, 0.5) 111.58%
    );
    font-size: 40px;
    :hover {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;
export const IntroTitle = styled.div`
  display: flex;
  width: 70%;
  height: 95vh;
  align-items: center;
  justify-content: center;
  p {
    box-sizing: border-box;
    text-transform: uppercase;
    font-size: 60px;
    font-weight: 700;
    font-family: "Oswald", sans-serif;
    text-align: center;
    color: ${({ theme }) => theme.text3};
    span {
      color: ${({ theme }) => theme.text};
      font-size: 60px;
      font-weight: 700;
      font-family: "Oswald", sans-serif;
      text-align: center;
    }
  }
`;
export const ProductImage = styled.img`
  max-width: 50%;
  height: auto;
`;
export const OffersSection = styled.section`
  display: flex;
  padding: 80px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  svg{
    color: ${({ theme }) => theme.text};
    font-size: 40px;
  }
`;

export const PlansContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70%;
  justify-content: center;
`;

export const PlanCard = styled.button`
  flex: 1;
  margin: 0 10px; 
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.bgSectionTypeTwo};
  cursor: pointer;
  :hover {
    background: linear-gradient(100.21deg,
    rgba(60, 5, 5, 0.8) 10%, /* Ajusta el porcentaje aquí */
    rgba(26, 26, 26, 0.8) 90%); /* Ajusta el porcentaje aquí */
    svg{
      margin-top:30px;
    }
  }
`;

export const PlanTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

export const PlanFeatures = styled.ul`
  list-style-type: none;
  padding: 0;
  li{
    color: ${({ theme }) => theme.text};
    font-size: 22px;
  }
`;

export const FeatureItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 5px;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 20px;
  color: ${({ theme }) => theme.textSidebar};
`;
