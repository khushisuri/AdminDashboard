import React, { useMemo } from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { mockGeographyData } from "../data/mockData";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { geoFeatures } from "../data/mockGeoFeatures";

const GeographyChart = ({isDashboard = false})=> {
  const theme = useTheme();
  const colors = useMemo(
    () => tokens(theme.palette.mode),
    [theme.palette.mode]
  );
  const data = useMemo(() => mockGeographyData, []);
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
      !isDashboard
        ? [
            {
              anchor: "bottom-left",
              direction: "column",
              justify: true,
              translateX: 20,
              translateY: -100,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: "left-to-right",
              itemTextColor: "#444444",
              itemOpacity: 0.85,
              symbolSize: 18,
            },
          ]
        : undefined,
    [isDashboard]
  );
  return (
    <ResponsiveChoropleth /* or Choropleth for fixed dimensions */
      data={data}
      features={geoFeatures.features}
      theme={nivoTheme}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="nivo"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      enableGraticule={true}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"
      legends={legends}
    />
  );
};

export default React.memo(GeographyChart);
