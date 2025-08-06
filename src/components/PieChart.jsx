import React, { useMemo } from "react";
import { ResponsivePie } from "@nivo/pie";
import { mockPieData } from "../data/mockData";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

const PieChart = () => {
  const theme = useTheme();
  const colors = useMemo(
    () => tokens(theme.palette.mode),
    [theme.palette.mode]
  );
  const data = useMemo(() => mockPieData, []);

  const legends = useMemo(
    () => [
      {
        anchor: "bottom",
        direction: "row",
        translateY: 56,
        itemWidth: 100,
        itemHeight: 18,
        symbolShape: "circle",
      },
    ],
    []
  );

  const arcLabelsTextColor = useMemo(
    () => ({
      from: "color",
      modifiers: [["darker", 2]],
    }),
    []
  );

  const arcLinkLabelsColor = useMemo(() => ({ from: "color" }), []);

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
          color: colors.gray[600],
        },
      },
    }),
    [colors]
  );

  return (
    <div style={{ height: "75vh"}}>
      <ResponsivePie
        data={data}
        theme={nivoTheme}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.gray[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={arcLinkLabelsColor}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={arcLabelsTextColor}
        legends={legends}
      />
    </div>
  );
};

export default React.memo(PieChart);
