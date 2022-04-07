import styled, { keyframes } from 'styled-components';
import TitleImageResource from '../../assets/TitleBackground.jpg';
import { Link } from 'react-router-dom';
import { SCREEN_SIZES } from 'config/constants';

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
  font-family: 'Roboto', sans-serif;
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
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  margin: 0;
  margin-bottom: 1rem;
`;

export const ContentWrapper = styled.div`
  &:nth-child(odd) {
    background-color: #dfdfdf;
  }

  &:nth-child(even) {
    background-color: #141b1f;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 3rem;
  padding: 3rem;
  max-width: ${SCREEN_SIZES.large}px;

  @media (min-width: ${SCREEN_SIZES.mediumLarge}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;

    padding: 5rem 3rem;
    margin: 0 auto;
  }
`;

export const DescriptionImage = styled.img`
  position: relative;
  width: auto;
  height: 100%;
  max-width: 750px;
`;

export const DescriptionImageWrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-width: ${SCREEN_SIZES.mediumLarge}) {
    margin: 0 3em;
  }
`;

export const DescriptionText = styled.div`
  color: white;
  display: grid;
  row-gap: 1em;

  @media (min-width: ${SCREEN_SIZES.mediumLarge}px) {
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const DescLink = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: transparent;
  border: 1px white solid;
  padding: 0.5em 1em;
  text-align: center;
  transition: all ease-in-out 150ms;
  height: fit-content;

  &:hover {
    color: black;
    background-color: white;
    border: 1px white solid;
  }

  @media (min-width: ${SCREEN_SIZES.mediumLarge}px) {
    max-width: fit-content;
  }
`;

export const TestimonialsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 4rem 0;
  margin: 0 auto;
  max-width: ${SCREEN_SIZES.large}px;
`;

export const SpacingWrapper = styled.div`
  margin: 0 auto;

  @media (max-width: 647px) {
    height: 100%;
  }
`;

export const CenterItem = styled.div`
  height: 100%;
`;
