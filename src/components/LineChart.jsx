import React, { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import { mockLineData, mockPieData } from "../data/mockData";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = useMemo(
    () => tokens(theme.palette.mode),
    [theme.palette.mode]
  );
  const data = useMemo(() => mockLineData, []);
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  const nivoTheme = useMemo(
    () => ({
      axis: {
        domain: {
          line: {
            stroke: colors.gray[100],
          },
        },
        legend: {
          text: {
            fill: colors.gray[100],
          },
        },
        ticks: {
          line: {
            stroke: colors.gray[100],
            strokeWidth: 1,
          },
          text: {
            fill: colors.gray[100],
          },
        },
      },
      legends: {
        text: {
          fill: colors.gray[100],
        },
      },
      tooltip: {
        container: {
          color: colors.primary[500],
        },
      },
    }),
    [colors]
  );
  const legends = useMemo(
    () =>
      isDashboard && isMobileScreen
        ? undefined
        : [
            {
              anchor: "bottom-right",
              direction: "column",
              translateX: 100,
              itemWidth: 80,
              itemHeight: 22,
              symbolShape: "circle",
            },
          ],
    [isDashboard, isMobileScreen]
  );
  return (
    <ResponsiveLine /* or Line for fixed dimensions */
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      theme={nivoTheme}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
      curve="catmullRom"
      axisBottom={{
        legend: "transportation",
        legendOffset: 36,
        format: (value) => (isMobileScreen ? value.slice(0, 1) : value)
      }}
      axisLeft={{ legend: "count", legendOffset: -40 }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "seriesColor" }}
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={legends}
    />
  );
};

export default LineChart;
