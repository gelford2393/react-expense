import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const dataPointsVal = dataPoints.map((data) => data.value);
  const totalMaxVal = Math.max(...dataPointsVal);
  return (
    <div className="chart">
      {dataPoints.map((data, i) => {
        return (
          <ChartBar
            key={i}
            i={i}
            value={data.value}
            maxValue={totalMaxVal}
            label={data.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
