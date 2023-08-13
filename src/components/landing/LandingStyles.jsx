import styled from "styled-components";

export const LandingContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-size: cover;
  background-attachment: fixed;
`;
export const ContainerSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;
export const SectionOne = styled.div`
  display: flex;
  width: 100%;
  height:90vh;
  background-color: ${({ theme }) => theme.bgSectionTypeOne};
`;
export const SectionTwo = styled.div`
  display: flex;
  width: 100%;
  height:90vh;
  background-color: ${({ theme }) => theme.bgSectionTypeTwo};
`;
export const SectionThree = styled.div`
  display: flex;
  width: 100%;
  height:90vh;
  background-color: ${({ theme }) => theme.bgSectionTypeOne};
`;
export const SectionFour = styled.div`
  display: flex;
  width: 100%;
  height:90vh;
  background-color: ${({ theme }) => theme.bgSectionTypeTwo};
`;
export const Paragraph = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 60%;
title{
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  font-weight: 600;
  text-align: center;
}
p{
  padding-top: 20px;
  padding-right:50px;
  padding-left:50px;
  color: ${({ theme }) => theme.text};
  font-size: 21px;
  font-weight: 100;
  text-align: justify;
}
`;
export const Silhouette = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40%;
  justify-content:end;
  align-items: center;
  img{
    width: 78%;
    height: 85%;
  }
`;
export const TitleTag = styled.div`
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 8px 10px;
  background: linear-gradient(90.21deg, rgba(130, 5, 5, 0.5) -5.91%, rgba(26, 26, 26, 0.5) 111.58%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 20px;
  margin-bottom: 16px;
  display: inline-block;
`;