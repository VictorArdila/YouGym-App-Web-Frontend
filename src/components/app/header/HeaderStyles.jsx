import styled from "styled-components";
import { btnReset } from "../../../styles/constant/Variables.jsx";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  background: ${({ theme }) => theme.bg};
  width: 98%;
  height: 65px;
  margin: 1%;
`;
export const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  width: 20%;
  svg{
    color: ${({ theme }) => theme.text2};
    font-size: 20px;
    margin-right: 1%;
  }
  h1 {
    font-size: 22px;
    color: ${({ theme }) => theme.text2};
    font-weight: 540;
    font-family: "Trebuchet MS", sans-serif;
  }
`;
export const HeaderProfile = styled.div`
  display: flex;
  width: 40%;
  height: 100%;
`;
export const HeaderProfileItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  height: 60%;
  padding: 0.5%;
  border-radius: 5px;
  margin: 0.5%;
  img {
    width: 55px;
    height: 55px;
    border-radius: 20%;
    box-shadow: 0 0 2px ${({ theme }) => theme.border};
    margin-right: 1%;
    :hover {
      width: 80px;
      height: 80px;
      transition: width 0.5s, height 0.5s;
      box-shadow: 0 0 2px ${({ theme }) => theme.border};
    }
  }
  :hover {
    box-shadow: 0 0 2px ${({ theme }) => theme.border};
  }
`;
export const HeaderProfileData= styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  h3 {
    font-size: 18px;
    font-weight: 540;
    color: ${({ theme }) => theme.textHeader};
    text-align: center;
    align-self: center;
    :hover {
      color: ${({ theme }) => theme.text2};
    }
  }
  h5{
    font-size: 14px;
    font-weight: 540;
    color: ${({ theme }) => theme.textHeader};
    text-align: center;
    align-self: center;
    :hover {
      color: ${({ theme }) => theme.text2};
    }
  }
`;
export const HeaderThemeMode = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  align-items: center;
  justify-content: center;
`;
export const Theme = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-top: 0.2rem;
`;
export const ThemeLabel = styled.span`
  display: block;
  flex: 1;
  h3 {
    font-size: 18px;
    font-weight: 540;
    color: ${({ theme }) => theme.textHeader};
    text-align: center;
    margin-right: 1%;
  }
`;
export const ThemeToggler = styled.button`
  ${btnReset};
  display: flex;
  flex-direction: row;
  cursor: pointer;
  width: 50px;
  height: 25px;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background: ${({ theme }) => theme.bgThemeToggler};
  position: relative;
`;
export const IconModeTheme = styled.div`
  img {
    height: 20px;
  }
`;
export const ToggleThumb = styled.div`
  ${btnReset};
  height: 24px;
  width: 24px;
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
  svg {
    color: ${({ theme }) => theme.text2};
  }
`;
export const HeaderInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  justify-content: end;
  padding-right: 1%;
`;
export const HeaderDateTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  border-radius: 5px;
  margin: 0.5%;
  h3 {
    font-size: 18px;
    font-weight: 540;
    color: ${({ theme }) => theme.textHeader};
    text-align: center;
    align-self: center;
    :hover {
      color: ${({ theme }) => theme.text2};
      transition: color 0.5s;
    }
  }
  h5 {
    font-size: 14px;
    font-weight: 540;
    color: ${({ theme }) => theme.textHeader};
    text-align: center;
    align-self: center;
    :hover {
      font-size: 22px;
      color: ${({ theme }) => theme.text2};
      transition: font-size 0.5s;
    }
  }
  :hover {
    box-shadow: 0 0 2px ${({ theme }) => theme.border};
  }
`;
export const HeaderSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 1%;
`;
export const HeaderSearchInput = styled.div`
  display: flex;
  flex-direction: row;
  border: 0.05px solid rgba(224, 224, 234, 0.8);
  border-radius: 5px;
  background: rgba(244, 244, 234, 0.8);
  width: -webkit-fill-available;
  svg {
    font-size: 20px;
    margin: 1%;
    color: rgba(25, 25, 25, 0.6);
    :hover {
      font-size: 22px;
      color: rgba(5, 5, 5, 0.8);
      transition: font-size 0.5s, color 0.5s;
    }
    cursor: pointer;
  }
  input {
    width: 100%;
    height: 70%;
    background: rgba(244, 244, 234, 0.8);
    border: none;
    font-size: 18px;
    &:focus {
      outline: none;
    }
  }
  :hover {
    border: 0.05px solid rgba(224, 224, 234, 0.8);
    border-radius: 5px;
    background: rgba(214, 214, 214, 0.8);
    border: 0.05px solid rgba(22, 22, 23, 0.8);
    transition: border 0.5s, background 0.5s;
  }
`;
