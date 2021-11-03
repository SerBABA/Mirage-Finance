import styled from "styled-components";
import screenSizes from "config/screen";

export const ContentWrapper = styled.div`
  background-color: #dfdfdf;
`;

export const TestimonialsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 4rem 0;
  margin: 0 auto;
  max-width: ${screenSizes.large}px;
`;

export const SpacingWrapper = styled.div`
  margin: 0 auto;

  @media (max-width: 647px) {
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  padding: 2rem 2rem;
  margin: 0.4rem auto;
  height: 100%;
  max-height: 30rem;

  background-color: #ffffff;
  box-shadow: 0.35rem 0.55rem 0.75rem #00000015;
  max-width: 260px;
  transition: all ease-in-out 250ms;

  &:hover {
    box-shadow: 0.55rem 0.75rem 0.5rem #0000003d;
    transform: translateY(1%);
  }

  @media (min-width: ${screenSizes.medium}px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  background-color: #6c808c3d;
`;

export const Text = styled.div`
  padding: 1.5rem 0;
  margin-bottom: auto;
  width: 100%;
`;

export const TextTitle = styled.h4`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  margin: 0;
  font-size: 1.5rem;
`;

export const TextJob = styled.h6`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  margin: 0;
  margin-bottom: 0.75em;
`;

export const TextDate = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 0.75rem;

  margin-left: auto;
`;

export const CenterItem = styled.div`
  height: 100%;
`;
