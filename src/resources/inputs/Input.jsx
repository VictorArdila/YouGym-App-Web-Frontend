import styled from "styled-components";
export default function Input({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
  margin-bottom: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(30, 30, 30, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: 1px solid rgba(5, 5, 5, 0.4);
  outline: none;
  color: #000000;
  font-size: 1rem;
  font-weight: 600;
  :hover{
    border: 2px solid rgba(5, 5, 5, 0.8);
  }
  &:focus {
    display: inline-block;
    box-shadow: 0.1rem rgba(1, 1, 1, 0.5);
    backdrop-filter: blur(12rem);
    border-radius: 1rem;
  }
  &::placeholder {
    color: rgba(20, 20,20, 0.65);
    font-weight: 600;
    font-size: 1rem;
  }
`;
