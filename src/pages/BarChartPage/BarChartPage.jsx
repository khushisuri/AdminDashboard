import React from "react";
import Layout from "../../layout/Layout";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const BarChartPage = () => {
  return (
    <Layout>
      <Header title="BAR CHART" desc="Bar Chart Page" />
      <BarChart />
    </Layout>
  );
};

export default BarChartPage;
