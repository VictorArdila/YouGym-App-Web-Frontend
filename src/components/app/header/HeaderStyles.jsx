import styled from "styled-components";
import { v } from "../../../styles/constant/Variables.jsx";
import { Link } from "react-router-dom";

export const SHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 2.5rem;
  width: 100vw;
  background-color: black;
  align-items: center;
  margin-bottom: 0.5rem;
  border-radius: 12px;
`;
export const Title = styled.div`
  display: flex;
  width: 40%;
  flex-direction: row;
  justify-content: center;
  color: ${({ theme }) => theme.textHeader};
  h5 {
    background-color: ${({ theme }) => theme.bgTitle};
    color: ${({ theme }) => theme.Title};
  }
`;
export const SHeaderInfo = styled.div`
  border-bottom-left-radius: 12px;
  display: flex;
  flex-direction: row;
  height: 2.5rem;
  width: 60vw;
  background-color: black;
  align-items: center;
`;
export const SHeaderSesion = styled.div`
  display: flex;
  flex-direction: row;
  height: 2.5rem;
  width: 20vw;
  background-color: black;
  align-items: center;
  :hover {
    background-color: ${({ theme }) => theme.bgAlpha};
    border-radius: 8px;
    width: 20vw;
  }
`;
export const SHeaderCog = styled.div`
  display: flex;
  height: 2.5rem;
  width: 20vw;
  background-color: black;
  justify-content: center;
  border-bottom-right-radius: 12px;
`;
export const BottonBar = styled.div`
  display: flex;
  margin-left: 0.4rem;
  height: 1.5rem;
  width: 1.5rem;
  align-items: center;
  justify-content: center;
  svg {
    color: ${({ theme }) => theme.bgSVG};
  }
`;
export const RoutesPages = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  svg {
    color: ${({ theme }) => theme.textHeader};
  }
`;
export const TextHeader = styled.div`
  width: 50%;
  color: ${({ theme }) => theme.textHeader};
  align-items: center;
`;
export const PictureSesion = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  svg {
    color: ${({ theme }) => theme.textHeader};
  }
`;
export const CogApp = styled.div`
  display: flex;
  flex-direction:column;
  width: 95%;
  height:${({ isOpen }) => (!isOpen ? `5rem` : `3rem`)};
  justify-content:right;
`;
export const SLinkContainer = styled.div`
  border-radius: ${v.borderRadius};
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
  padding: ${v.tdSpacing} ${v.tdSpacing};
  display: flex;
  img {
    height: 12px;
    width: 12px;
  }
`;

export const SLinkLabel = styled.span`
  margin: 0.3rem;
  display: ${({ isOpen }) => (!isOpen ? `none` : `block`)};
  flex: 1;
  margin-left: ${v.smSpacing};
  font-size: 14px;
`;
