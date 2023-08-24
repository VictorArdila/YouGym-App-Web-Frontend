import styled from "styled-components";

export const BackgroundLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  width: 100%;
  height: 95%;
  background: rgba(245, 245, 245, 0.7);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  img{
    width: 20%;
  }
  h2{
    margin-top: 10px;
    font-size: 30px;
    color: #000000;
  }
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
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin-top: 40px;
  margin-bottom: 20px;
`;
export const ButtonTextForgot = styled.div`
  width: 76%;
  color: #000000;
  text-align: right;
  font-weight: 600;
  font-size: 18px;
  :hover {
    color: rgba(130, 5, 5);
  }
  cursor: pointer;
`;
export const ButtonTextRegister = styled.div`
  width: 76%;
  color: #000000;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  margin-top: 10px;
  :hover {
    color: rgba(130, 5, 5);
  }
  cursor: pointer;
`;
export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  align-items: center;
  justify-items: space-between; 
  h3{
    color: #000000;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 10px;
  }
`;
