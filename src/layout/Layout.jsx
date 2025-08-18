import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Box, useMediaQuery } from "@mui/material";

const Layout = ({ children }) => {
  const isMobileView = useMediaQuery("(max-Width:600px)");
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
          width:isMobileView?"80%":"auto"
        }}
      >
        <Topbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
