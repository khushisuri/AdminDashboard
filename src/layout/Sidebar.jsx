import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { tokens } from "../theme";
import humanIcon from "../assets/human.png";

const SidebarComp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState();
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Box
      sx={{
        "& .ps-sidebar-root": { border: 0 },
        "& .ps-menu-root": {
          background: colors.primary[400],
          height: "100vh",
          color: theme.palette.mode == "dark" ? "#fcfcfc" : colors.primary[900],
        },
        "& .ps-menu-button:hover": {
          backgroundColor: `${colors.blueAccent[400]} !important`,
        },
      }}
    >
      <Sidebar>
        <Menu>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <Typography variant="p">ADMIN</Typography>
            <IconButton
              sx={{
                color:
                  theme.palette.mode == "dark"
                    ? "#fcfcfc"
                    : colors.primary[900],
              }}
            >
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={humanIcon}
                alt="user_logo"
                style={{ height: "100%", width: "100%" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: 2,
                py:1
              }}
            >
              <Typography variant="h2">Alex Parish</Typography>
              <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
                VP Admin
              </Typography>
            </Box>
          </Box>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarComp;
