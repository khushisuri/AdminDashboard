import Layout from "../../layout/Layout";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { Box } from "@mui/material";

const LineChartPage = () => {
  return (
    <Layout>
      <Header title="LINE CHART" desc="Line Chart Page" />
      <Box height="75vh">
      <LineChart/>
      </Box>
    </Layout>
  );
};

export default LineChartPage;
