import React from "react";
import Layout from "../../layout/Layout";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";


const PieChartPage = () => {
  return (
    <Layout>
      <Header title="BAR CHART" desc="Bar Chart Page" />
      <PieChart/>
    </Layout>
  )
}

export default PieChartPage