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

    return (
      <Plot
        data={data}
      />
    );
  }
}

export default BarGraph;
