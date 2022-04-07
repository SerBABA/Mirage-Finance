import { PropsWithChildren } from 'react';
import { Navbar } from '../Navbar';
import { ChildrenWrapper, Wrapper } from './layout.elements';

export const Layout = ({ children }: PropsWithChildren<{}>) => (
  <Wrapper>
    <Navbar />
    <ChildrenWrapper>{children}</ChildrenWrapper>
  </Wrapper>
);
