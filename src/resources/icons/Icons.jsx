import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon = ({ color, children }) => {
  return <StyledIcon background={color}>{children}</StyledIcon>;
};

const StyledIcon = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  background: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: white;
  cursor: pointer;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
const flip = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
`;
export const FlipIcon = styled(FontAwesomeIcon)`
  &:hover {
    animation: ${flip} 0.5s forwards;
  }
`;
