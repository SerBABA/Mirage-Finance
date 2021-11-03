import React from "react";
import Layout, { GridLayout } from "components/Layout";
import SpendingChart from "components/spendingChart";
import DashboardItem from "components/DashboardItem";

export const Dashboard: React.FC = () => {
  return (
    <Layout>
      <GridLayout>
        <DashboardItem gridRow="1 / 2" gridCol="1 / 2">
          First Item
        </DashboardItem>
        <DashboardItem gridRow="2 / 3" gridCol="1 / 2">
          <SpendingChart />
        </DashboardItem>
      </GridLayout>
    </Layout>
  );
};

export default Dashboard;
