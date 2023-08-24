import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.bgApp};
  height: 100vh;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
`;
export const AppGlass = styled.div`
  display: flex;
  flex-direction: row;
  height: 95%;
  width: 95%;
  background: ${({ theme }) => theme.glass};
  box-shadow: 0 8px 32px 0 rgba(31, 31, 35, 0.37);
  backdrop-filter: blur(4px);
  border-radius: 2rem;
`;
export const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 98%;
  width: -webkit-fill-available;
  align-items: center;
`;
