import React, { PropsWithChildren } from 'react';
import { Wrapper, WrapperProps } from './DashboardItem.elements';

export const DashboardItem = ({ gridRow, gridCol, children }: PropsWithChildren<WrapperProps>) => (
  <Wrapper gridRow={gridRow} gridCol={gridCol}>
    {children}
  </Wrapper>
);
