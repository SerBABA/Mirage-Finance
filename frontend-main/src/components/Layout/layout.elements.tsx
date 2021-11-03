import styled from "styled-components";
import screenSizes from "config/screen";

export const Wrapper = styled.div`
  background-color: #efefef;
  min-height: 100vh;
  width: 100%;
  height: 100%;
`;

export const ChildrenWrapper = styled.div`
  padding-top: 50px;
  transition: margin-left ease-in-out 300ms;

  @media (min-width: ${screenSizes.medium}px) {
    margin-left: 50px;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  margin: 1.25rem auto;
  grid-template-columns: 1fr;

  grid-row-gap: 0.4rem;
  margin: 0.5rem 0.8rem;
`;
