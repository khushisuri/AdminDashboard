import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import Layout from "../../layout/Layout";
import Header from "../../components/Header";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery("(max-width(900px)");

  const columns = [
    { field: "id", headerName: "ID",
       flex: isSmallScreen ? 0 : 1 },
    { field: "registrarId", headerName: "REGISTRAR ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zipcode",
      flex: 1,
    },
  ];

  return (
    <Layout>
      <Header
        title="Contacts"
        desc="List of Contacts for Future Reference"
      ></Header>
      <Box
        sx={{
          height: 600,
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
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
         showToolbar
        />
      </Box>
    </Layout>
  );
};

export default Contacts;
