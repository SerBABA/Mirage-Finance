import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkWrapper = styled(NavLink)`
  text-decoration: none;
  height: 100%;
  width: 100%;

  color: white;
  background-color: transparent;
  transition: all ease-in-out 150ms;

  display: flex;
  align-items: center;

  &:hover {
    background-color: white;
    color: #141b1f;
  }
`;

export const IconWrapper = styled.div`
  height: 50px;
  max-width: 48px;

  display: flex;
  justify-content: left;
  align-items: center;

  padding: 0 10px;
`;

export const LinkName = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 1rem;
`;
