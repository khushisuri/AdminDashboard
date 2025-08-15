import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import Layout from "../../layout/Layout";
import Header from "../../components/Header";
import { Box, Typography } from "@mui/material";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" ,
      flex: 1,},
    {
      field: "name",
      headerName: "Name",
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box
            sx={{
              backgroundColor:
                row.access == "admin"
                  ? colors.greenAccent[600]
                  : colors.greenAccent[900],
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80%",
              borderRadius: "8px",
              cursor: "pointer",
              margin: "5px",
              gap: 1,
            }}
          >
            {row.access == "user" && <LockOpenOutlinedIcon />}
            {row.access == "admin" && <AdminPanelSettingsOutlinedIcon />}
            {row.access == "manager" && <SecurityOutlinedIcon />}
            <Typography>{row.access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Layout>
      <Header title="TEAM" desc="Managing the team members"></Header>
      <Box
        sx={{
          display:"flex",
          flexGrow: 1,
          flexShrink: 1,
          minheight: 600,
          width: "100%",
          "& . MuiDataGrid-cell": { justifyContent: "center" },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.blueAccent[600],
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: colors.blueAccent[600],
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Layout>
  );
};

export default Team;
