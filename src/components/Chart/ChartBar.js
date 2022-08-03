import React from "react";
import "./ChartBar.css";

const ChartBar = ({ i, value, maxValue, label }) => {
  console.log(maxValue);
  const barFillHeight =
    maxValue > 0 ? `${Math.round((value / maxValue) * 100)}%` : "0%";

  return (
    <div key={i} className="chart-bar">
      <div className="chart-bar__inner ">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
