import React from 'react';
import Plot from 'react-plotly.js';

class LineChart extends React.Component {
  render() {
    const {data, title} = this.props;
    
    var layout = {
      width: 700,
      height: 500,
      title: title,
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

export default LineChart;
