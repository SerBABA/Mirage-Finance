import styled from "styled-components";

type WrapperProps = {
  gridRow: string;
  gridCol: string;
};
export const Wrapper = styled.div<WrapperProps>`
  grid-row: ${(props) => `${props.gridRow}`};
  grid-column: ${(props) => `${props.gridCol}`};
  background-color: #fdfdfd;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`;
