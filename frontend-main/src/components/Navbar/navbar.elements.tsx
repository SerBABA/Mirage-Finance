import styled from "styled-components";

interface WrapperProps {
  open: boolean;
}

export const ContentWrapper = styled.div<WrapperProps>`
  width: 100%;
  max-width: ${(props) => (props.open ? "320px" : "0")};

  min-height: 100vh;
  height: 100%;

  background-color: aquamarine;

  position: fixed;
`;
