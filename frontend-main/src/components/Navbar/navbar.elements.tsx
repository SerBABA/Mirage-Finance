import styled from 'styled-components';
import { SCREEN_SIZES } from 'config/constants';

interface WrapperProps {
  open: boolean;
}

export const ContentWrapper = styled.div<WrapperProps>`
  top: 50px;
  width: ${(props) => (props.open ? '250px' : '0')};
  transition: width ease-in-out 300ms;

  min-height: 100vh;
  height: 100%;

  background-color: #141b1f;

  position: fixed;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;

  @media (min-width: ${SCREEN_SIZES.medium}px) {
    width: ${(props) => (props.open ? '250px' : '50px')};
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
`;
