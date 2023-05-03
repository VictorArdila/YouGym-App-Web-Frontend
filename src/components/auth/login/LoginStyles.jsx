import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;
export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(125, 5, 5, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 80vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 70vw;
    height: 85vh;
  }
  @media only screen and (min-width: 768px) {
    width: 70vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 50vw;
    height: 90vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 40vw;
    height: 90vh;
  }
  img {
    height: 60px;
  }
`;

export const WelcomeText = styled.h2`
  text-align: center;
  margin: 1rem 0 2rem 0;
`;
export const ContainerUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin-right: 0.5rem;
  }
`;
export const ContainerSeePasword = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const IconSesion = styled.div`
  svg {
    margin-right: 0.5rem;
  }
`;
export const ButtonSeePasword = styled.div``;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin: 1rem 0 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWith = styled.h5`
  cursor: pointer;
`;

export const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, rgb(45,45,45,.4) 0%, rgb(25,25,25,.4) 79%);
  margin: 0.5rem 0 0.5rem 0;
  backdrop-filter: blur(25px);
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0 1rem 0;
  width: 80%;
`;

export const HiperLink = styled.h4`
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
  cursor: pointer;
`;
export const LabelYouGym = styled.div`
  display: flex;
`;

