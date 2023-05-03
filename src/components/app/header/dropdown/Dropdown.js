import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  SidebarLabel,
  DropdownLink,
  Deployment,
  SLinkContainer,
  SLink,
  SLinkIcon,
} from "./DropdownStyles.jsx";

const SubMenu = ({ item, isOpen }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  const { pathname } = useLocation();
  return (
    <>
      <SLinkContainer
        key={item.label}
        isActive={pathname === item.to}
        isOpen={isOpen}
      >
        <SLink to={item.to}>
        <Deployment isOpen={isOpen} onClick={item.subNav && showSubnav}>
            {item.subNav && subnav
              ? item.icon
              : item.subNav
              ? item.icon
              : null}
          </Deployment>
        </SLink>
      </SLinkContainer>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              <SLinkIcon>{item.icon}</SLinkIcon>
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
