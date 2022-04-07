import { PropsWithChildren } from 'react';
import { GridWrapper } from './Grid.elements';

export const GridLayout = ({ children }: PropsWithChildren<{}>) => (
  <GridWrapper>{children}</GridWrapper>
);
