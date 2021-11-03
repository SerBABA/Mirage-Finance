import React from "react";
import Navbar from "../Navbar";
import { ChildrenWrapper, GridWrapper, Wrapper } from "./layout.elements";

export const PageLayout: React.FC<{}> = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
};

export const GridLayout: React.FC<{}> = ({ children }) => {
  return <GridWrapper>{children}</GridWrapper>;
};

export default PageLayout;
