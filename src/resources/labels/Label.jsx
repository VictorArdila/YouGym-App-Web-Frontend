import styled from "styled-components";

export default function Label({ color, children }) {
  return <StyledLabel background={color}>{children}</StyledLabel>;
}

const StyledLabel = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  height: auto;
  width: auto;
  background: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
