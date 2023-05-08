import { Link } from "react-router-dom";
import styled from "styled-components";
import { v } from "../../../../../styles/constant/Variables";

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
export const SLink = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding: calc(${v.smSpacing} - 2px) 0;
`;
export const SLinkLabel = styled.span`
  margin: 0.3rem;
  display: ${({ isOpen }) => (!isOpen ? `none` : `block`)};
  flex: 1;
  height: fit-content;
  margin-left: ${v.smSpacing};
  font-size: 12px;
`;

export const SidebarLabel = styled.span`
  margin-left: -6px;
`;

export const Deployment = styled.div`
  display: ${({ isOpen }) => (!isOpen ? `none` : `block`)};
`;

export const DropdownLink = styled(Link)`
  background: ${({ theme }) => theme.bgDrpdown};
  height: 12px;
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
    }
  }
  @media screen and (max-width: 768px) {
    span {
      margin-left: 0.3rem;
    }
  }
  &:hover {
    background: ${({ theme }) => theme.bgAlpha};
    cursor: pointer;
  }
`;
export const ContentPhtoInfo = styled.div`
  display: flex;
  width: 40%;
  height: auto;
  border: none;
  border-radius: 25px;
  align-items: center;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    border-radius: 25px;
  }
`;
export const ContentUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: auto;
`;
