import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
var moment = require("moment"); // require

const EnergyChart = (props) => {
  const [graphData, setGraphData] = useState([]);

  const { activeRequest, chartData } = props;

  /* Chart data build function */
  /*
        data - chart data (from mock api)
        propName - the xAxis property i.e. energyDataType, recordDate or meterCode
        chartType - plotly chart type e.g. bar or scatter
        fnFormatLabel - optional function to format the xAxis label
    */
  const buildChart = (data, propName, chartType, fnFormatLabel) => {
    let xAxis = data
      .sort((a, b) => (a[propName] > b[propName] ? 1 : -1))
      .map((item) => {
        if (fnFormatLabel) {
          return fnFormatLabel(item[propName]);
        }

        return item[propName];
      });

    const min = data.map((item) => item.valueMinimum);
    const max = data.map((item) => item.valueMaximum);
    const med = data.map((item) => item.valueMedian);

    const traceMin = {
      x: xAxis,
      y: min,
      type: chartType,
      name: "minimum value",
    };
    const traceMax = {
      x: xAxis,
      y: max,
      type: chartType,
      name: "maximum value",
    };
    const traceMed = {
      x: xAxis,
      y: med,
      type: chartType,
      name: "median value",
    };

    const graph = [traceMin, traceMax, traceMed];
    setGraphData(graph);

    return graph;
  };

  // hooks to request build new chart data when source (json) changes
  useEffect(() => {
    if (!activeRequest || !activeRequest.value) {
      // null check
      return;
    }

    if (activeRequest.value === "date") {
      buildChart(chartData.date, "recordDate", "scatter", (dt) =>
        moment(dt, "YYYYMMDD", true).format("D-MMM-YY")
      );
    }
    if (activeRequest.value === "meter") {
      buildChart(
        chartData.meter,
        "meterCode",
        "bar",
        (meterCode) => `[${meterCode}]`
      );
    }
    if (activeRequest.value === "energyType") {
      buildChart(chartData.energyType, "energyDataType", "bar");
    }
  }, [chartData]);

  // return chart
  if (activeRequest && activeRequest.value && activeRequest.value === "date") {
    return (
      <div id="dateChart">
        <Plot
          data={graphData}
          layout={{ width: 960, height: 550, title: "Energy values by date" }}
        />
      </div>
    );
  }
  if (activeRequest && activeRequest.value && activeRequest.value === "meter") {
    return (
      <div id="meterChart">
        <Plot
          data={graphData}
          layout={{
            width: 960,
            height: 550,
            title: "Energy values by meter",
            barmode: "group",
          }}
        />
      </div>
    );
  }
  if (
    activeRequest &&
    activeRequest.value &&
    activeRequest.value === "energyType"
  ) {
    return (
      <div id="energyTypeChart">
        <Plot
          data={graphData}
          layout={{
            width: 960,
            height: 800,
            title: "Energy values by data type",
            barmode: "group",
            yaxis: {
              type: "log",
              autorange: true,
            },
            margin: {
              b: 300,
            },
          }}
        />
      </div>
    );
  }

  // no active request (i.e.button selected)
  return <div id="noData">Select a button to view chart data.</div>;
};

export default EnergyChart;
