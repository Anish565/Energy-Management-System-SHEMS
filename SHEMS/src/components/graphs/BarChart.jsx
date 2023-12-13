import React from 'react';
import Plot from 'react-plotly.js';

class BarGraph extends React.Component {
  render() {
    var data = [
      {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        type: 'bar'
      }
    ];

    var layout = {
      width: 700,
      height: 500,
      title: "Bar Graph",
      margin: {
        l: 50, // left margin
        r: 50, // right margin
        b: 50, // bottom margin
        t: 50, // top margin
        pad: 10 // padding
      }
    }

    return (
      <Plot data={data} layout={layout}/>
    );
  }
}

export default BarGraph;
