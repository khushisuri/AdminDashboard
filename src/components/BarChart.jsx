import React, { useMemo } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { mockBarData } from "../data/mockData";
import { tokens } from "../theme";
import { Box, useTheme } from "@mui/material";

const BarChart = ({isDashboard=false}) => {
  const theme = useTheme();
  const colors = useMemo(() => tokens(theme.palette.mode), [theme.palette.mode]);
  const data = useMemo(() => mockBarData, []);

  const legends = useMemo(() => !isDashboard?[
    {
      dataFrom: "keys",
      anchor: "bottom-right",
      direction: "column",
      translateX: 120,
      itemsSpacing: 3,
      itemWidth: 100,
      itemHeight: 16,
    },
  ]:undefined, [isDashboard]);

  const nivoTheme = useMemo(() => ({
    axis: {
      domain: { line: { stroke: colors.gray[100] } },
      legend: { text: { fill: colors.gray[100] } },
      ticks: {
        line: { stroke: colors.gray[100], strokeWidth: 1 },
        text: { fill: colors.gray[100] },
      },
    },
    legends: {
      text: { fill: colors.gray[100] },
    },
    tooltip: {
    container: {  
      color: colors.gray[600],    
    },
  },
  }), [colors.gray]);

  return (
     <Box
      sx={{
        minwidth: "350px",
        overflow:"hidden",
        width:isDashboard?"350px":"100%",
        height: isDashboard ? "100%" : "70vh",
        flex: 1,
        minWidth: 0,
      }}
    >
      <ResponsiveBar
        data={data}
        theme={nivoTheme}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        legends={legends}
        axisBottom={{ legend: "country (indexBy)", legendOffset: 32 }}
        axisLeft={{ legend: "food", legendOffset: -40 }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      />
    </Box>
  );
};

export default React.memo(BarChart);