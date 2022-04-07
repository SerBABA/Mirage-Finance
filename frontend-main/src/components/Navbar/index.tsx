import React, { useState } from 'react';
import { ContentWrapper, NavLinks } from './Navbar.elements';
import { NavLink } from './NavLink';
import { HouseIcon } from 'assets/icons/HouseIcon';
import { TopNavbar } from './TopNavbar';

export const Navbar: React.FC = () => {
  const [show, setShow] = useState(false);

  const toggleNav = () => setShow(!show);

  return (
    <>
      <TopNavbar onToggle={toggleNav} show={show} />
      <ContentWrapper open={show}>
        <NavLinks>
          <NavLink name="Home" icon={<HouseIcon size={30} />} to="/dashboard/home" />
          <NavLink name="Projection" icon={<HouseIcon size={30} />} to="/dashboard/projection" />
          <NavLink name="Other" icon={<HouseIcon size={30} />} to="/dashboard/other" />
        </NavLinks>
      </ContentWrapper>
    </>
  );
};
