import styled, { keyframes } from "styled-components";
import TitleImageResource from "../../assets/title-background.jpg";

export const Main = styled.main``;

export const TitleWrapper = styled.div`
  background-image: url(${TitleImageResource});
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 200;
  text-align: center;

  color: white;
`;

const mouseUpDownAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(15%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const TitleScrolliconWrapper = styled.div`
  position: absolute;
  color: white;
  cursor: pointer;
  transition: 150ms ease-in-out;

  bottom: 2em;

  &:hover {
    color: #8ec35b;
    animation: ${mouseUpDownAnimation} infinite 1s ease-in-out;
  }
`;

export const H3 = styled.h3`
  font-size: 2.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  margin: 0;
  margin-bottom: 1rem;
`;
