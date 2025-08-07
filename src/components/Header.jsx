import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";

const Header = ({ title, desc }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box marginBottom={"22px"}>
      <Typography
        sx={{
          textTransform: "capitalize",
          fontWeight: "bold",
          color: colors.gray[100],
        }}
        variant="h1"
      >
        {title}
      </Typography>
      <Typography variant="p" sx={{ color: colors.greenAccent[400] }}>
        {desc}
      </Typography>
    </Box>
  );
};

export default Header;
