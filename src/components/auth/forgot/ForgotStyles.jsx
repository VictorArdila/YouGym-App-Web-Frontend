import styled from "styled-components";

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 95%;
  background: rgba(245, 245, 245, 0.7);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  img {
    width: 20%;
    border-radius: 50%;
    border: 1px solid #000000;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }
  h2 {
    margin-top: 10px;
    font-size: 30px;
    color: #000000;
  }
  p{
    padding-left: 20px;
    padding-right: 20px;
    font-size: 18px;
    text-align: center;
    color: #000000;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin-top: 40px;
  margin-bottom: 20px;
`;
