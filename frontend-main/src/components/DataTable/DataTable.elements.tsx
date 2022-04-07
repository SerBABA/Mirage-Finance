import styled from 'styled-components';

export const StyledDataTable = styled.div`
  background-color: aqua;
`;

type StyledRowProps = { numVals?: number };

export const StyledRow = styled.div<StyledRowProps>`
  background-color: aliceblue;
  display: grid;
  grid-template-columns: repeat(${(props) => props.numVals || 0}, minmax(10px, 1fr));
`;

export const StyledCell = styled.div`
  display: flex;
`;
