import React from "react";
import { Container, AppGlass, AppContent } from "./LayoutStyles.jsx";
import Sidebar from "../sidebar/Sidebar.js";
import Header from "../header/Header.js";

const Layout = ({children}) => {
  return (
    <Container>
      <AppGlass>
        <Sidebar />
        <AppContent>
          <Header />
          {children}
        </AppContent>
      </AppGlass>
    </Container>
  );
};

export default Layout;
