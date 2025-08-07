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

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Layout>
      <Box display="flex" justifyContent="space-between" alignItems="center">
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
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="140px"
        gap="20px"
        height={"80vh"}
        overflow={"auto"}
      >
        <Box
          gridColumn="span 3"
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
          gridColumn="span 3"
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
          gridColumn="span 3"
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
          gridColumn="span 3"
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
          gridColumn="span 8"
          gridRow="span 2"
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
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
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
                borderBottom: `6px solid ${colors.primary[500]}`,
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
          gridColumn="span 4"
          gridRow="span 2"
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
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding={"12px"}
        >
          <Typography padding={"10px"} fontWeight={600}>
            Sales Quantity
          </Typography>
          <Box height={"200px"}  width="100%" >
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
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
