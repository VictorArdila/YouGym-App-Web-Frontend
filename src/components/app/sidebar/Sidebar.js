import React, { useContext, useState } from "react";
import {
  ContainerSidebar,
  ContainerBars,
  ContainerLogo,
  ContainerMenu,
  Divider,
  STheme,
  SThemeToggler,
  SToggleThumb,
  IconModeTheme,
  ContainerProfileInfo,
  ContentPhtoInfo,
  ContentUserInfo,
} from "./SidebarStyles.jsx";
import { logoPNG, modeDark, modeLight, user } from "../../../assets/Resources";
import {
  profileArray,
  linksArray,
  secondaryLinksArray,
  settingsLinksArray,
} from "./data/SidebarData";
import Menu from "./dropdown/menu/Menu";
import Profile from "./dropdown/profile/Profile";
import { motion } from "framer-motion";
import { faAngleLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../../../App";

const Sidebar = () => {
  const [expanded, setExpaned] = useState(true);
  const { setTheme, theme } = useContext(ThemeContext);
  const [changeTheme, setChangeTheme] = useState(false);
  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);
  return (
    <>
      <ContainerBars
        style={expanded ? { left: "38%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
        isOpen={expanded}
      >
        <FontAwesomeIcon icon={faBars} />
      </ContainerBars>
      <ContainerSidebar
        as={motion.div}
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <ContainerLogo>
          <img src={logoPNG} alt="logo" />
          <span>
            You<span>G</span>ym
          </span>
        </ContainerLogo>
        <Divider />
        <ContainerProfileInfo>
          <ContentPhtoInfo>
            <img src={user} alt="logo" />
          </ContentPhtoInfo>
          <ContentUserInfo>
            {profileArray.map((item, index) => {
              return <Profile isOpen={expanded} item={item} key={index} />;
            })}
          </ContentUserInfo>
        </ContainerProfileInfo>
        <ContainerMenu>
          <Divider />
          {linksArray.map((item, index) => {
            return <Menu isOpen={expanded} item={item} key={index} />;
          })}
          {/* signoutIcon */}
          <Divider />
          {settingsLinksArray.map((item, index) => {
            return <Menu isOpen={expanded} item={item} key={index} />;
          })}
          <Divider />
          {secondaryLinksArray.map((item, index) => {
            return <Menu isOpen={expanded} item={item} key={index} />;
          })}
        </ContainerMenu>
        <STheme>
          <IconModeTheme>
            <img src={modeLight} alt="logo" />
          </IconModeTheme>
          <SThemeToggler
            isActive={theme === "dark"}
            onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
          >
            <SToggleThumb
              style={theme === "dark" ? { right: "1px" } : {}}
              isOpen={changeTheme}
              onClick={() => setChangeTheme((p) => !p)}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </SToggleThumb>
          </SThemeToggler>
          <IconModeTheme>
            <img src={modeDark} alt="logo" />
          </IconModeTheme>
        </STheme>
      </ContainerSidebar>
    </>
  );
};

export default Sidebar;
