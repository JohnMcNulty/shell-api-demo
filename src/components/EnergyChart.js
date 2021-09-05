import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import Plot from 'react-plotly.js';

function EnergyChart() {



    return (
        <div>
            {/* <canvas id="chart" className="my-4 w-100" width="900" height="380"></canvas> */}

            <div className="Wrapper">
                <Plot
                    data={[
                        {
                            x: [1, 2, 3],
                            y: [2, 6, 3],
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: 'red' },
                        },
                        { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                    ]}
                    layout={{ width: 880, height: 360, title: 'A Fancy Plot' }}
                />
            </div>
        </div>
    );
}

export default EnergyChart;
