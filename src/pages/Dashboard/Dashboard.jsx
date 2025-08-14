import React from "react";
import Layout from "../../layout/Layout";
import Header from "../../components/Header";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import StatBox from "../../components/StatBox";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../../components/LineChart";
import { mockTransactions } from "../../data/mockData";
import ProgressCircle from "../../components/ProgressCircle";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import { useMediaQuery } from "@mui/material";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const girdValuesbigScreens = `"a a a b b b c c c d d d"
  "a a a b b b c c c d d d"
  "a a a b b b c c c d d d"
  "e e e e e e e e f f f f"
  "e e e e e e e e f f f f"
  "e e e e e e e e f f f f"
  "e e e e e e e e f f f f"
  "e e e e e e e e f f f f"
  "g g g g h h h h i i i i"
  "g g g g h h h h i i i i"
  "g g g g h h h h i i i i"
  "g g g g h h h h i i i i"
  `;

  const girdValuesSmallScreens = `
  "a"
  "a"
  "b"
  "b"
  "c"
  "c"
  "d"
  "d"
  "e"
  "e"
  "e"
  "e"
  "f"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "i"
  "i"
  "i"
  `;
  return (
    <Layout>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={isSmallScreen ? "column" : "row"}
        mb="1rem"
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.gray[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
      <Box
        sx={
          isSmallScreen
            ? {
                display: "grid",
                gap: "20px",
                height: "80vh",
                overflow: "auto",
                gridTemplateAreas: girdValuesSmallScreens,
                gridAutoColumns: "1fr",
                gridAutoRows: "80px",
              }
            : {
                display: "grid",
                gap: "20px",
                height: "80vh",
                overflow: "auto",
                gridTemplateAreas: girdValuesbigScreens,
                gridTemplateColumns: "repeat(12,minmax(50px,1fr))",
                gridTemplateRows: "repeat(12,minmax(50px,1fr))",
              }
        }
      >
        <Box
          gridArea="a"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridArea="b"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridArea="c"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridArea="d"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridArea="e"
          backgroundColor={colors.primary[400]}
          padding={"25px"}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography>Revenue Generated</Typography>
              <Typography sx={{ color: colors.greenAccent[400] }}>
                $59,342,32
              </Typography>
            </Box>
            <DownloadOutlinedIcon color={colors.greenAccent[400]} />
          </Box>
          <Box height={"100%"} pb={"20px"}>
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box gridArea="f" backgroundColor={colors.primary[400]} overflow="auto">
          <Typography padding={"10px"} fontWeight={600}>
            Recent Transactions
          </Typography>
          {mockTransactions.map((tr) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                borderBottom: `6px solid ${colors.primary[800]}`,
              }}
            >
              <Box>
                <Typography color={colors.greenAccent[400]} fontWeight={600}>
                  {tr.txId}
                </Typography>
                <Typography> {tr.user}</Typography>
              </Box>
              <Typography>{tr.date}</Typography>
              <Typography
                sx={{
                  backgroundColor: colors.greenAccent[400],
                  borderRadius: "6px",
                  padding: "6px",
                }}
              >
                ${tr.cost}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          gridArea="g"
          backgroundColor={colors.primary[400]}
          padding={"22px"}
        >
          <Typography padding={"10px"} fontWeight={600}>
            Campaign
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ProgressCircle size="125" />
            <Typography color={colors.greenAccent[400]}>
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditure and costs</Typography>
          </Box>
        </Box>
        <Box
          gridArea="h"
          backgroundColor={colors.primary[400]}
          padding={"12px"}
        >
          <Typography padding={"10px"} fontWeight={600}>
            Sales Quantity
          </Typography>
          <Box height={"200px"} width="100%">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridArea="i"
          backgroundColor={colors.primary[400]}
          padding={"22px"}
        >
          <Typography padding={"10px"} fontWeight={600}>
            Geography based traffic
          </Typography>
          <Box height={"200px"} width={"100%"} overflow={"auto"}>
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Dashboard;
