import styled from "styled-components";
import screenSize from "config/screen";

export const TopNav = styled.nav`
  position: fixed;
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

  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  font-weight: 300;

  color: white;

  @media (min-width: ${screenSize.medium}px) {
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

  margin: 0 0.5rem;

  height: 35px;
  width: 35px;
  border-radius: 50%;
`;

export const Icon = styled.img`
  background-color: white;
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;
