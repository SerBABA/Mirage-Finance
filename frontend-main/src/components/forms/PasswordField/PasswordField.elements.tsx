import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
`;

export const InputWrapper = styled.div`
  grid-area: 1 / 1;
`;

export const ShowPassword = styled.div`
  width: 25%;
  font-size: 0.75rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  padding: 0.6em 0;
  margin-left: auto;
  margin-bottom: auto;

  grid-area: 1 / 1;
  z-index: 1;

  transition: color ease-in-out 150ms;
  &:hover {
    color: #141b1f50;
  }
`;
