import styled from "styled-components";
import GoogleLogin from 'react-google-login';

export const Button = ({ content }) => {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
  background: linear-gradient(to right, #7D0000 0%, #00000c 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;
export const StyledGoogle = styled(GoogleLogin)`
  height: 3.5rem !important;
  width: 3.5rem !important;
  background: ${(props) => props.background} !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  border-radius: 4rem !important;
  color: white !important;
  cursor: pointer !important;
  div{
    border-radius: 4rem !important;
    padding:0rem !important;
    margin-right:0rem !important;
  }
  span{
    display:none !important;
  }
`;