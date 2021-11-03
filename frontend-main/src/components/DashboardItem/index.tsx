import React from "react";
import { Wrapper } from "./DashboardItem.elements";

type DashboardItemProps = {
  gridRow: string;
  gridCol: string;
};

const DashboardItem: React.FC<DashboardItemProps> = ({ gridRow, gridCol, children }) => {
  return (
    <Wrapper gridRow={gridRow} gridCol={gridCol}>
      {children}
    </Wrapper>
  );
};

export default DashboardItem;
