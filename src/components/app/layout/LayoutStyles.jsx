import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  height: 100vh;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
`;
export const AppGlass = styled.div`
  display: grid;
  height: 97%;
  width: 97%;
  background: ${({ theme }) => theme.glass};
  border-radius: 2rem;
  gap: 16px;
  grid-template-columns: 11rem auto 20rem;
  overflow: hidden;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 10% 50% auto;
    overflow-y: scroll;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
