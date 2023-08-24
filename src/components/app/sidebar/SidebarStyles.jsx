import styled from "styled-components";
import { v } from "../../../styles/constant/Variables";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgSidebar};
  width: ${({ isOpen }) => (!isOpen ? `77px` : v.sidebarWidth)};
  box-shadow: 0 0 2.3px ${({ theme }) => theme.border};
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  align-items: center;
  transition: width 0.3s ease;
`;
export const SidebarLogoContentainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  padding: 0.2rem 0;
  img {
    width: ${({ isOpen }) => (!isOpen ? `77px` : `50%`)};
  }
  h1 {
    font-size: 18px;
    color: ${({ theme }) => theme.text2};
    display: ${({ isOpen }) => (!isOpen ? `none` : `block`)};
  }
`;

export const SidebarMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  justify-content: center;
  h2 {
    font-size: 16px;
    color: ${({ theme }) => theme.text2};
  }
`;

export const SidebarMenuTitle = styled.div`
  display: flex;
  flex-direction: row;
  width:100%;
  justify-content: ${({ isOpen }) => (!isOpen ? `left` : `center`)};
  h2 {
    padding: 0.5rem;
    font-size: 16px;
    color: ${({ theme }) => theme.text2};
  }
`;
export const SidebarItemTitle = styled.div`
  display: flex;
  flex-direction: row;
  h2 {
    padding: 0.5rem;
    font-size: 16px;
    color: ${({ theme }) => theme.text2};
    display: ${({ isOpen }) => (!isOpen ? `none` : `block`)};
    transition: display 0.4s ease;
  }
`;
export const SidebarDivider = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  width: 90%;
  height: 0.02px;
  border: 1px solid ${({ theme }) => theme.border};
  margin-bottom: 8%;
`;
export const SidebarMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 0 2px ${({ theme }) => theme.border};
  height: 3rem;
  transition: background-color 0.3s ease;
  h3 {
    display: ${({ isOpen }) => (!isOpen ? `none` : `block`)};
    font-size: 16px;
    color: ${({ theme }) => theme.text2};
    text-align: center;
    transition: display 0.3s ease;
  }
  svg {
    margin: 0 1rem;
    font-size: 20px;
    color: ${({ theme }) => theme.text2};
  }
  :hover {
    background: linear-gradient(${({ theme }) => theme.Selector});
    background-color: transparent; /* Hacemos el fondo transparente para mostrar el gradiente */
    color: white; /* Cambiamos el color de texto para que sea legible */
    transition: background-color 0.3s ease;
    h3 {
      color: ${({ theme }) => theme.text};
    }
    svg {
      color: ${({ theme }) => theme.text};
    }
  }
  cursor: pointer;
`;
export const SidebarMenuSettings = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  h2 {
    font-size: 16px;
    color: ${({ theme }) => theme.text2};
  }
`;
export const SidebarMenuOut = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  h2 {
    font-size: 16px;
    color: ${({ theme }) => theme.text2};
  }
`;
