import { Link } from "react-router-dom";
import styled from "styled-components";
import { v } from "../../../../styles/constant/Variables.jsx";

export const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  background: ${({ theme, isActive }) =>
    !isActive ? `transparent` : theme.bg3};
  margin: 8px 0;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 10px;
  :hover {
    border-radius: ${v.borderRadius};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
    border-left: 4px solid #632ce4;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: -6px;
`;

export const Deployment = styled.div`
  svg {
    height:18px;
    color: ${({ theme }) => theme.textHeader}
  }
`;

export const DropdownLink = styled(Link)`
  background: ${({ theme }) => theme.bgDrpdown};
  border-radius: ${v.borderRadius};
  height: 20px;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 10px;
  span {
    margin-left: 0.3rem;
  }
  @media screen and (max-width: 1200px) {
    span {
      margin-left: 0rem;
      font-size: 12px;
    }
  }
  @media screen and (max-width: 768px) {
    span {
      margin-left: 0.3rem;
    }
  }
  &:hover {
    border-radius: ${v.borderRadius};
    background: ${({ theme }) => theme.bgAlpha};
    cursor: pointer;
  }
`;
export const SLinkContainer = styled.div`
  display:flex;
  border-radius: ${v.borderRadius};
  margin: 2px 0;
  align-items:center;
  justify-content:right;
  height:20vw;
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
    height: 20px;
  }
  svg {
    font-size: 20px;
  }
  @media screen and (max-width: 1200px) {
    padding: 0rem 0rem;
    img {
      height: 20px;
    }
    svg {
      height: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0rem 0rem;
    img {
      height: 14px;
    }
    svg {
      height: 14px;
    }
  }
`;

export const SLinkLabel = styled.span`
  margin: 0.3rem;
  display: ${({ isOpen }) => (!isOpen ? `none` : `block`)};
  flex: 1;
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
