import Layout from "../../layout/Layout";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
const GeographyChartPage = () => {
  return (
    <Layout>
      <Header title="Geography Chart" desc="Geography Chart Page" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Layout>
  );
};

export default GeographyChartPage;
