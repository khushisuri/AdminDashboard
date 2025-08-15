import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import Layout from "../../layout/Layout";
import Header from "../../components/Header";
import { Box, Typography } from "@mui/material";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID",
      flex: 1, },
    {
      field: "name",
      headerName: "Name",
    },
    {
      field: "email",
      headerName: "Email",
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,

      renderCell: ({ row }) => {
        return (
          <Typography
            color={colors.greenAccent[600]}
            sx={{
              display: "flex",
              alignItems: "center",
              m:"15px 0px"
            }}
          >
            {row.cost}
          </Typography>
        );
      },
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Layout>
      <Header title="Invoices" desc="List of Invoice balance"></Header>
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
          "& .MuiCheckbox-root ":{
            color:colors.greenAccent[600]
          },
          "& .Mui-checked":{
            color:`${colors.greenAccent[600]} !important`
          }
        }}
      >
        <DataGrid rows={mockDataInvoices} columns={columns} checkboxSelection/>
      </Box>
    </Layout>
  );
};

export default Invoices;
