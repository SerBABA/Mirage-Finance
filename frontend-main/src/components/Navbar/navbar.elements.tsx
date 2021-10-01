import { Link } from "react-router-dom";
import styled from "styled-components";
import screenSize from "config/screen";

interface WrapperProps {
  open: boolean;
}

export const ContentWrapper = styled.div<WrapperProps>`
  top: 50px;
  width: ${(props) => (props.open ? "250px" : "0")};
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

  @media (min-width: ${screenSize.medium}px) {
    width: ${(props) => (props.open ? "250px" : "50px")};
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

export const NavLinkWrapper = styled(Link)`
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
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1rem;
`;
