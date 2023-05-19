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
