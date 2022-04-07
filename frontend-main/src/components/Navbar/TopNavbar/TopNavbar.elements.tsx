import styled from 'styled-components';
import { SCREEN_SIZES } from 'config/constants';
import { Link } from 'react-router-dom';

export const TopNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;

  height: 50px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #69828c;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  display: none;
  align-items: center;

  padding-left: 0.1rem;

  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;

  color: white;

  @media (min-width: ${SCREEN_SIZES.medium}px) {
    display: flex;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  color: black;
  border: 1px #69828c solid;
  transition: border ease-in-out 150ms;

  margin: 0 0.5rem;

  height: 35px;
  width: 35px;

  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 1px #dfdfdf solid;
  }
`;

export const Icon = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;

export const LinkIconWrapper = styled(Link)``;
