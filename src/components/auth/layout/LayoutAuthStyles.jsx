import styled from "styled-components";

export const BackgroundContainer = styled.div`
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
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  width: 70%;
  height: 80%;
  //Estilos para modo telefono
  @media only screen and (max-width: 260px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (max-width: 320px) {
    width: 80%;
    height: 90%;
  }
  @media only screen and (max-width: 360px) {
    width: 80%;
    height: 80%;
  }
  @media only screen and (max-width: 411px) {
    width: 70%;
    height: 85%;
  }
  @media only screen and (max-width: 768px) {
    width: 70%;
    height: 80%;
  }
  @media only screen and (max-width: 1024px) {
    width: 75%;
    height: 60%;
  }
`;
export const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  width: 50%;
  height: 95%;
`;
export const CardPresentation = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  background: rgba(1, 1, 1, 0.7);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  background-size: contain;
  background-position: center;
  background-attachment: scroll;
  background-repeat: no-repeat;
  transition: opacity 0.5s ease-in-out; /* Agregar la transición CSS */
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)}; /* Controlar la opacidad */
  img {
    width: 60%;
  }
`;