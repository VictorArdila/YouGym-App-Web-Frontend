import styled from "styled-components";

export const RightSides = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-top: 1rem; */
  width: 95%;
  justify-content: space-evenly;
  @media screen and (max-width: 1200px) {
    justify-content: flex-start;
    margin-top: 3rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0;
  }
`;
export const Update = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const CustomerReview = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
