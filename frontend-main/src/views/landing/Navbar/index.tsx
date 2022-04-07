import { UpArrow } from 'assets/icons/UpArrow';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  NavbarWrapper,
  Navbar as NavbarElement,
  Logo,
  Links,
  ListLink,
  GoToTopWrapper,
} from './navbar.elements';

export const Navbar = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleScroll = async () => setShowGoTop(document.documentElement.scrollTop > 0);

  const scrollTop = async () => {
    window.scroll({
      behavior: 'smooth',
      top: 0,
    });
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <NavbarWrapper>
        <NavbarElement>
          <Logo>Mirage Finance</Logo>
          <Links>
            <ListLink to="/login">Login</ListLink>
          </Links>
        </NavbarElement>
      </NavbarWrapper>
      <GoToTopWrapper show={showGoTop} onClick={scrollTop}>
        <UpArrow />
      </GoToTopWrapper>
    </>
  );
};
