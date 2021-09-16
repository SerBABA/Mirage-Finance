import React, { useState } from "react";
import { ContentWrapper } from "./navbar.elements";

interface ToggleIconProps {
  show: boolean;
  toggleHandle: () => void;
}

const ToggleIcon: React.FC<ToggleIconProps> = ({ show, toggleHandle }) => {
  return <div onClick={toggleHandle}>{show ? "X" : "|||"}</div>;
};

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const navbarToggleHandler = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <ToggleIcon show={showNavbar} toggleHandle={navbarToggleHandler}></ToggleIcon>
      <ContentWrapper open={showNavbar}></ContentWrapper>
    </>
  );
};

export default Navbar;
