import React, { useState } from "react";
import { SidebarLabel, SLink, SLinkLabel, DropdownLink, Deployment } from "./ProfileStyles.jsx";
import {
  SLinkContainer,
} from "../../SidebarStyles.jsx";
import { useLocation } from "react-router-dom";

const Profile = ({ item, isOpen }) => {
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
        <SLink to={item.to} onClick={item.subNav && showSubnav}>
          <SLinkLabel onClick={item.subNav && showSubnav} isActive={pathname === item.to} isOpen={isOpen} >{item.label}</SLinkLabel>
          <Deployment isOpen={isOpen} onClick={item.subNav && showSubnav}>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </Deployment>
        </SLink>
      </SLinkContainer>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default Profile;
