import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 40vh;
  background-color: #000;
  display: flex;
`;
export const FooterLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
export const FooterLeft = styled.div`
  padding-top: 40px;
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; //alinea horizontalmente
  justify-content: center; //alinea verticalmente
`;
export const FooterCenter = styled.div`
  padding-top: 40px;
  width: 34%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; //alinea horizontalmente
  justify-content: center; //alinea verticalmente
`;
export const FooterRight = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; //alinea horizontalmente
  justify-content: center; //alinea verticalmente
`;
export const Footertitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    margin-right: 5px;
    height: 50px;
    width: 50px;
  }
  svg {
    margin-right: 5px;
    height: 25px;
    width: 25px;
  }
`;
export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FooterSocial = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  svg {
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    height: 25px;
    width: 25px;
  }
`;
export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  input{
    width: 100%;
    height: 25px;
    border-radius: 5px;
    border: none;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  textarea{
    width: 100%;
    height: 55px;
    border-radius: 5px;
    border: none;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
