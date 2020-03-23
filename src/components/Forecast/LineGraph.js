import React from "react";
import { ResponsiveLine } from "@nivo/line";

//Wrapping component for @nivo/line. The date formats need investigated so bottom axis can be shown
export default ({ data, leftAxis = "", rightAxis = "" }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 16, right: 16, bottom: 50, left: 60 }}
    xScale={{
      type: "point"
    }}
    xFormat={{ format: "%s" }}
    yScale={{ type: "linear", stacked: false, min: "auto", max: "auto" }}
    yFormat={(y) => `${y}°F`}
    axisTop={null}
    axisBottom={null}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: leftAxis,
      legendOffset: -40,
      legendPosition: "middle"
    }}
    colors={{ scheme: "nivo" }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "seriesColor" }}
    pointLabel="y"
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[]}
  />
);