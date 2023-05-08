import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 3rem;
`;
export const ContainerLogo = styled.div`
  display: flex;
  width: 15%;
  height: 3rem;
  justify-content: center;
  align-items: center;
  span {
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.background};
    span {
      font-size: 22px;
      font-weight: 600;
      color: ${({ theme }) => theme.Selector};
    }
  }
`;
export const ContainerMenuHeader = styled.div`
  display: flex;
  width: 85%;
  height: 3rem;
  justify-content: end;
`;
export const ConytainerItems = styled.div`
  display: flex;
  width: 78%;
  height: 3rem;
  align-items: center;
  justify-content: end;
`;
export const ContainerSocial = styled.div`
  display: flex;
  width: 12%;
  height: 3rem;
  align-items: center;
  justify-content: center;
`;
export const ContainerButtonSocial = styled.div`
  display: flex;
  border: none;
  border-radius: 25px;
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.glass};
  align-items: center;
  justify-content: center;
  :hover {
    background: ${(props) => props.background};
  }
`;
export const ContainerButtonSign = styled.div`
  display: flex;
  width: 10%;
  height: 3rem;
  align-items: center;
  justify-content: center;
`;
export const DividerItem = styled.div`
  display: flex;
  background-color: gray;
  width: 0.05rem;
  height: 2rem;
  align-items: center;
`;
export const ButtoItemMenu = styled.div`
  display: flex;
  color: ${({ theme }) => theme.background};
  width: 6rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  :hover {
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.glass};
    color:black;
  }
`;
export const ButtonSocial = styled(FontAwesomeIcon)`
  display: flex;
  width: 1.2rem;
  height: 1.2rem;
  align-items: center;
  justify-content: center;
  :hover{
    color:white;
  }
`;
export const ButtonSign = styled.div`
  display: flex;
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.background};
  background-color: ${({ theme }) => theme.Selector};
  width: 5rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  :hover {
    border: none;
    border-radius: 4px;
    background: ${(props) => props.background};
  }
`;
