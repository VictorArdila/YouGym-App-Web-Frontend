import React from "react";
import Cards from "../cards/Cards";
import Table from "../table/Table";
import { MainDashContainer } from "./MainDashStyles.jsx";

const MainDash = () => {
  return (
    <MainDashContainer>
      <h1>Inicio</h1>
      <Cards />
      <Table />
    </MainDashContainer>
  );
};

export default MainDash;
