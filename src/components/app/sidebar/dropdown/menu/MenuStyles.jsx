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

export const SidebarLabel = styled.span`
  margin-left: -6px;
`;

export const Deployment = styled.div`
  display: ${({ isOpen }) => (!isOpen ? `none` : `block`)};
`;

export const DropdownLink = styled(Link)`
  background: ${({ theme }) => theme.bgDrpdown};
  border-radius: ${v.borderRadius};
  height: 30px;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 10px;
  span{
    margin-left:0.3rem;
  }
  @media screen and (max-width: 1200px) {
    span {
      margin-left:0rem;
    }
  }
  @media screen and (max-width: 768px) {
    span {
      margin-left:0.3rem;
    }
  }
  &:hover {
    border-radius: ${v.borderRadius};
    background: ${({ theme }) => theme.bgAlpha};
    cursor: pointer;
  }
`;
