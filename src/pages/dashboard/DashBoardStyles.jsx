import styled from "styled-components";

export const DasboardContainer = styled.div`
  display: flex;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2.3fr 1fr; /* Definimos dos columnas en lugar de tres */
  grid-template-rows: 1fr; /* Definimos una fila */
  gap: 10px; /* Espacio entre columnas */
  overflow: hidden;
  h3{
    color: #000;
    font-size: 60px;
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr; /* Cambiamos a una columna en pantallas pequeñas */
    overflow-y: scroll;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    overflow-y: scroll;
  }
`;
export const SectionOne = styled.div`
    display: flex;
    h3{
        color: #000;
    }
`;
export const SectionTwo = styled.div`
    display: flex;
    
`;