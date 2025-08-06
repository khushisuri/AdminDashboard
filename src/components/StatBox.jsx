import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import ProgressCircle from "./ProgressCircle";
import { tokens } from "../theme";

const StatBox = ({ progress, title, subtitle, icon, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%" m="0 30px">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.gray[100] }}
          >
            {title}
          </Typography>
        </Box>
        <ProgressCircle progress={progress} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
