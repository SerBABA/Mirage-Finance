import styled from "styled-components";
import { Link } from "react-router-dom";
import screenSizes from "config/screen";

export const ContentWrapper = styled.div`
  background-color: #141b1f;
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 3rem;
  padding: 3rem;
  max-width: ${screenSizes.large}px;

  @media (min-width: ${screenSizes.mediumLarge}px) {
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

  @media (min-width: ${screenSizes.mediumLarge}) {
    margin: 0 3em;
  }
`;

export const DescriptionText = styled.div`
  color: white;
  display: grid;
  row-gap: 1em;

  @media (min-width: ${screenSizes.mediumLarge}px) {
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

  @media (min-width: ${screenSizes.mediumLarge}px) {
    max-width: fit-content;
  }
`;
