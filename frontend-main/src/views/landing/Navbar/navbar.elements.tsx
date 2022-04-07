import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  height: 5rem;
  width: 100%;
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Navbar = styled.nav`
  height: 100%;
  margin-top: 0;
  padding: 0 2em;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: white;
`;

export const Links = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  color: #fff;

  display: flex;
  flex-direction: column;
`;

export const ListLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 1em 0.75em;

  &:hover {
    color: #dfdfdf;
  }
`;

interface GoToTopWrapperProps {
  show: boolean;
}

export const GoToTopWrapper = styled.div<GoToTopWrapperProps>`
  position: fixed;
  width: 30px;
  height: 30px;
  bottom: 1.5rem;
  color: white;
  right: 1.5rem;
  display: ${(props) => (props.show ? '' : 'none')};

  background-color: #00000040;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 50%;
  z-index: 999;

  &:hover {
    color: #cfcfcf;
  }
`;
