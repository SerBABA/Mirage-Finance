import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #bfcfd9;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

type IconWrapperProps = {
  size: number;
};

export const IconWrapper = styled.div<IconWrapperProps>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;

  background-color: #fff;
  animation: ${rotateAnimation} 5s linear infinite reverse;
`;

export const Icon = styled.div`
  animation: ${rotateAnimation} 2.5s linear infinite;

  width: 100%;
  height: 100%;

  background-color: #012e40;
`;

export const Title = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 2rem;

  margin-top: 1em;
`;
