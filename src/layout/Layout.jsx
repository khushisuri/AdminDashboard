import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          p: 1,
          mx: 1,
          flexShrink: 1,
          minHeight: "100vh", 
          overflow: "auto",
        }}
      >
        <Topbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
