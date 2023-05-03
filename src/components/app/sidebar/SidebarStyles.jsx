import styled from "styled-components";
import { btnReset, v } from "../../../styles/constant/Variables.jsx";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
`;
export const ContainerSidebar = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  flex-direction: column;
  position: relative;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 4rem;
  transition: all 300ms ease;
  align-items: center;
  @media screen and (max-width: 768px) {
    position: fixed;
    z-index: 9;
    background: ${({ theme }) => theme.solidBg};
    width: 35%;
    padding-right: 1rem;
    height: 100%;
    span {
      color: ${({ theme }) => theme.textHeader};
      display: block;
    }
    svg {
      color: ${({ theme }) => theme.textHeader};
    }
  }
`;
export const ContainerBars = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    position: fixed;
    height: 1.5rem;
    width: 1.5rem;
    transform: ${({ isOpen }) => (!isOpen ? `initial` : `rotate(90deg)`)};
    background-color: ${({ theme }) => theme.bgAlpha};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
    padding: 5px;
    border-radius: ${v.borderRadius};
    align-items: center;
    svg {
      color: white;
    }
    :hover {
      background-color: ${({ theme }) => theme.bg};
      border-radius: 6px;
      width: 1.5rem;
    }
  }
`;
export const ContainerLogo = styled.div`
  display: flex;
  height: 4rem;
  font-weight: bold;
  font-size: 22px;
  align-items: center;
  justify-content: center;
  height: 3%;
  margin-bottom: 2rem;
  span {
    span {
      color: ${({ theme }) => theme.Selector};
    }
  }
  img {
    width: 4.5rem;
    height: 4.5rem;
  }
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    img {
      height: 3.5rem;
      width: 3.5rem;
    }
    span {
      display: flex;
      flex-direction: row;
      font-size: 14px;
      span {
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    img {
      height: 3.5rem;
      width: 3.5rem;
    }
    span {
      display: flex;
      flex-direction: row;
      font-size: 16px;
      span {
        font-size: 18px;
      }
    }
  }
`;
export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
export const ContainerMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 2rem;
  padding: 0.5rem;
  position: relative;
  transition: all 300ms ease;
  border-radius: ${v.borderRadius};
  font-size: 14px;
  margin: 2px 0;
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.hoverSelection};
  }
  &:last-child {
    bottom: 0rem;
    width: 100%;
  }
  &:active {
    background: var(--activeItem);
    margin-left: 0;
  }
  &:active::before {
    content: "";
    width: 8px;
    height: 100%;
    background: var(--pink);
    margin-right: calc(1rem - 8px);
  }
  @media screen and (max-width: 1200px) {
    span {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    span {
      display: block;
    }
    .last-child {
      position: relative;
      margin-top: 2rem;
    }
  }
`;
export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: ${v.tdSpacing} 0;
`;
export const STheme = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-top: 0.2rem;
`;
export const SThemeLabel = styled.span`
  display: block;
  flex: 1;
`;
export const SThemeToggler = styled.button`
  ${btnReset};
  margin: 0 auto;
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.bgThemeToggler};
  position: relative;
`;
export const IconModeTheme = styled.div`
  img {
    height: 16px;
  }
`;
export const SToggleThumb = styled.div`
  height: 18px;
  width: 18px;
  transform: ${({ isOpen }) => (!isOpen ? `rotate(0deg)` : `rotate(180deg)`)};
  position: absolute;
  top: 1px;
  bottom: 1px;
  transition: 0.2s ease right;
  right: calc(100% - 18px - 1px);
  border-radius: 50%;
  background: ${({ theme }) => theme.bgToggleThumb};
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const SLinkContainer = styled.div`
  background-color: ${({ theme, isActive }) =>
    !isActive ? `transparent` : theme.Selector};
  border-radius: ${v.borderRadius};
  margin: 2px 0;
  svg {
    color: ${({ theme, isActive }) =>
      !isActive ? theme.iconMenu : theme.svgSidebarMenuActive};
  }
  span {
    color: ${({ theme, isActive }) =>
      !isActive ? theme.textMenu : theme.svgSidebarMenuActive};
  }
  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.hoverSelection};
  }
  @media screen and (max-width: 1200px) {
    span {
      font-size: 12px;
    }
  }
`;

export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.ndxSpacing};
  display: flex;
  img {
    height: 30px;
  }
  svg {
    font-size: 20px;
  }
  @media screen and (max-width: 1200px) {
    padding: 0rem 0rem;
    svg {
      height: 14px;
    }
  }
`;

export const SLinkLabel = styled.span`
  margin: 0.3rem;
  display: ${({ isOpen }) => (!isOpen ? `none` : `block`)};
  flex: 1;
  height: fit-content;
  margin-left: ${v.smSpacing};
  font-size: 14px;
`;

export const SLinkNotification = styled.div`
  font-size: 14px;
  padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
  border-radius: calc(${v.borderRadius} / 2);
  background: ${({ theme }) => theme.primary};
  color: white;
  margin-right: ${v.mdSpacing};
`;
export const ContainerProfileInfo = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
`;
export const ContentPhtoInfo = styled.div`
  display: flex;
  width: 40%;
  height: auto;
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
export const ContentUserInfo = styled.div`
  display: flex;
  flex-direction:column;
  width: 60%;
  height: auto;
`;
