import styled from 'styled-components';
import { SCREEN_SIZES } from 'config/constants';

export const Wrapper = styled.div`
  background-color: #efefef;
  min-height: 100vh;
  width: 100%;
  height: 100%;
`;

export const ChildrenWrapper = styled.div`
  padding-top: 50px;
  transition: margin-left ease-in-out 300ms;

  @media (min-width: ${SCREEN_SIZES.medium}px) {
    margin-left: 50px;
  }
`;
