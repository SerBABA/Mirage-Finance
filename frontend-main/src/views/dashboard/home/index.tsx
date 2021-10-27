import React from "react";
import Navbar from "components/Navbar";
import SpendingChart from "components/spendingChart";

export const Dashboard: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#dfdfdf", minHeight: "100vh", width: "100%", height: "100%" }}>
      <Navbar></Navbar>
      <SpendingChart />
    </div>
  );
};

export default Dashboard;
