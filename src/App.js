import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import LayoutApp from "./components/layout/LayoutApp";
import Routes from "./Routes";
import { GlobalStyle } from "./styles/global/GlobalStyles.jsx";
import { darkTheme, lightTheme } from "./styles/themes/Theme.jsx";

export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>YouGym App</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <>
          <LayoutApp>
            <Routes />
          </LayoutApp>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
export default App;
