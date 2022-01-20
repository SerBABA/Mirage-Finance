import React, { useState } from "react";
import {
  ContentWrapper,
  IconWrapper,
  LinkName,
  NavLinks,
  NavLinkWrapper,
} from "./navbar.elements";
import HomeSVG from "assets/icons/HomeSVG";
import TopNavComponent from "./TopNav";
import { useMatch, useResolvedPath } from "react-router-dom";

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleSideNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <TopNavComponent
        toggleSideNavbar={toggleSideNavbar}
        showSideNavbar={showNavbar}
      />
      <ContentWrapper open={showNavbar}>
        <NavLinks>
          <NavbarLink name="Home" icon={<HomeSVG />} to="/dashboard/home" />
          <NavbarLink
            name="Projection"
            icon={<HomeSVG />}
            to="/dashboard/projection"
          />
          <NavbarLink name="Other" icon={<HomeSVG />} to="/dashboard/other" />
        </NavLinks>
      </ContentWrapper>
    </>
  );
};

type NavbarLinkProps = {
  name: string;
  to: string;
  icon: JSX.Element;
};

/**
 * A side navbar link component, which contains the name and the to link.
 * @param props Contains the name of the link and the to link string.
 */
const NavbarLink: React.FC<NavbarLinkProps> = ({ name, icon, to }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavLinkWrapper
      to={to}
      style={match ? { backgroundColor: "white", color: "#141b1f" } : {}}
    >
      <IconWrapper>{icon}</IconWrapper>
      <LinkName>{name}</LinkName>
    </NavLinkWrapper>
  );
};

export default Navbar;
