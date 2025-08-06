import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { tokens } from "../theme";
import humanIcon from "../assets/human.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import LinearScaleOutlinedIcon from "@mui/icons-material/LinearScaleOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import { Link } from "react-router-dom";

const SidebarComp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setIsSelected] = useState("Dashboard");

  const Item = ({ title, to, icon, selected, setIsSelected }) => {
    console.log(selected, title);

    return (
      <MenuItem
        component={<Link to={to} />}
        icon={icon}
        active={selected == title}
        onClick={() => setIsSelected(title)}
      >
        {title}
      </MenuItem>
    );
  };

  return (
    <Box
      sx={{
        "& .ps-sidebar-container": { background: colors.primary[400] },
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
      <Sidebar collapsed={isCollapsed}>
        <Menu>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px",
              cursor: "pointer",
            }}
            onClick={() => setIsCollapsed((prev) => !prev)}
          >
            {!isCollapsed && <Typography variant="p">ADMIN</Typography>}
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
          {!isCollapsed && (
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
                  py: 1,
                }}
              >
                <Typography variant="h2">Alex Parish</Typography>
                <Typography
                  variant="h5"
                  sx={{ color: colors.greenAccent[500] }}
                >
                  VP Admin
                </Typography>
              </Box>
            </Box>
          )}
          <Item
            title="Dashboard"
            to="/dashboard"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setIsSelected={setIsSelected}
          />
          <Typography
            variant="h6"
            color={colors.gray[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Data
          </Typography>
          <Item
            title="Manage Team"
            to="/team"
            icon={<PeopleAltOutlinedIcon />}
            selected={selected}
            setIsSelected={setIsSelected}
          />
          <Item
            title="Contacts"
            to="/contacts"
            icon={<ImportContactsOutlinedIcon />}
            selected={selected}
            setIsSelected={setIsSelected}
          />
          <Item
            title="Invoices Balances"
            to="/invoices"
            icon={<ArticleOutlinedIcon />}
            selected={selected}
            setIsSelected={setIsSelected}
          />

          <Typography
            variant="h6"
            color={colors.gray[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Pages
          </Typography>
          <Item
            title="Profile Form"
            to="/profile"
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setIsSelected={setIsSelected}
          />
          <Item
            title="Calendar"
            to="/calendar"
            icon={<CalendarMonthOutlinedIcon />}
            selected={selected}
            setIsSelected={setIsSelected}
          />
          <Item
            title="FAQ Page"
            to="/faq"
            icon={<QuizOutlinedIcon />}
            selected={selected}
            setIsSelected={setIsSelected}
          />
          <Typography
            variant="h6"
            color={colors.gray[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Charts
          </Typography>
          <Item
            title="Bar Chart"
            to="/barchart"
            icon={<SignalCellularAltOutlinedIcon />}
            selected={selected}
            setIsSelected={setIsSelected}
          />
          <Item
            title="Pie Chart"
            to="/pie"
            icon={<DonutLargeOutlinedIcon />}
            selected={selected}
            setIsSelected={setIsSelected}
          />
          <Item
            title="Line Chart"
            to="/line"
            icon={<LinearScaleOutlinedIcon />}
            selected={selected}
            setIsSelected={setIsSelected}
          />
          <Item
            title="Geography"
            to="/geography"
            icon={<RoomOutlinedIcon />}
            selected={selected}
            setIsSelected={setIsSelected}
          />
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarComp;
