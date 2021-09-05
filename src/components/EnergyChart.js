import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
var moment = require('moment'); // require

const EnergyChart = (props) => {

    const [graphData, setGraphData] = useState([])

    const { activeRequest, chartData } = props;

    /* Chart data build functions */
    const buildMeterChart = (data) => {
        let xAxis = data.meter
            .sort((a, b) => (a.meterCode > b.meterCode) ? 1 : -1)
            .map(item => `[${item.meterCode}]`);

        const min = data.meter.map(item => item.valueMinimum);
        const max = data.meter.map(item => item.valueMaximum);
        const med = data.meter.map(item => item.valueMedian);

        const traceMin = { x: xAxis, y: min, type: 'bar', name: 'minimum value' }
        const traceMax = { x: xAxis, y: max, type: 'bar', name: 'maximum value' }
        const traceMed = { x: xAxis, y: med, type: 'bar', name: 'median value' }

        const graph = [traceMin, traceMax, traceMed]
        setGraphData(graph);

        return graph;
    }

    const buildEnergyTypeChart = (data) => {
        let xAxis = data.energyType
            .sort((a, b) => (a.energyDataType > b.energyDataType) ? 1 : -1)
            .map(item => item.energyDataType);

        const min = data.energyType.map(item => item.valueMinimum);
        const max = data.energyType.map(item => item.valueMaximum);
        const med = data.energyType.map(item => item.valueMedian);

        const traceMin = { x: xAxis, y: min, type: 'bar', name: 'minimum value' }
        const traceMax = { x: xAxis, y: max, type: 'bar', name: 'maximum value' }
        const traceMed = { x: xAxis, y: med, type: 'bar', name: 'median value' }

        const graph = [traceMin, traceMax, traceMed]
        setGraphData(graph);

        return graph;
    }

    const buildDateChart = (data) => {

        const xAxis = data.date
            .sort((a, b) => (a.recordDate > b.recordDate) ? 1 : -1)
            .map(item => {
                return moment(item.recordDate, 'YYYYMMDD', true).format("DD MMM YY"); // format to friendly style
            });

        const min = data.date.map(item => item.valueMinimum);
        const max = data.date.map(item => item.valueMaximum);
        const med = data.date.map(item => item.valueMedian);

        const traceMin = { x: xAxis, y: min, type: 'scatter', name: 'minimum value' }
        const traceMax = { x: xAxis, y: max, type: 'scatter', name: 'maximum value' }
        const traceMed = { x: xAxis, y: med, type: 'scatter', name: 'median value' }

        const graph = [traceMin, traceMax, traceMed]
        setGraphData(graph);

        return graph;
    }

    // hooks to request build new chart data when source (json) changes
    useEffect(() => {

        if (!activeRequest || !activeRequest.value) { // null check
            return
        }

        if (activeRequest.value === 'date') {
            buildDateChart(chartData)
        }
        if (activeRequest.value === 'meter') {
            buildMeterChart(chartData)
        }
        if (activeRequest.value === 'energyType') {
            buildEnergyTypeChart(chartData)
        }
    }, [chartData])


    // return chart
    if (activeRequest && activeRequest.value && activeRequest.value === 'date') {
        return (<div id="dateChart">
            <Plot
                data={graphData}
                layout={{ width: 960, height: 550, title: 'Energy values by date' }}
            />
        </div>)
    }
    if (activeRequest && activeRequest.value && activeRequest.value === 'meter') {
        return (<div id="meterChart">
            <Plot
                data={graphData}
                layout={{ width: 960, height: 550, title: 'Energy values by meter', barmode: 'group' }}
            />
        </div>)
    }
    if (activeRequest && activeRequest.value && activeRequest.value === 'energyType') {
        return (<div id="energyTypeChart">
            <Plot
                data={graphData}
                layout={{
                    width: 960, height: 800, title: 'Energy values by data type', barmode: 'group', yaxis: {
                        type: 'log',
                        autorange: true,

                    },
                    margin: {
                        b: 300
                    }
                }}
            />
        </div>)
    }

    // no active request (i.e.button selected)
    return (<div id="noData">
        Select a button to view chart data.
    </div>)

}

export default EnergyChart;
