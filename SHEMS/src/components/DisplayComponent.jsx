import React from 'react'
import BarGraph from './graphs/BarChart'
import LineChart from './graphs/LineChart'

export const DisplayComponent = () => {
  return (
    <div className='container'>

        <div id="graphroom">
            <h1 className='text-7xl'>Graphs here</h1>
        </div>
        <div>
          <BarGraph/>
        </div>
        <LineChart/>
    </div>
  )
}
