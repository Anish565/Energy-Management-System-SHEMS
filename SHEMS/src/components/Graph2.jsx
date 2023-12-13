import React from 'react'
import LineChart from './graphs/LineChart'

export const Graph2 = () => {
   
    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter'
      };
  
      var trace2 = {
        x: [1, 2, 3, 4],
        y: [16, 5, 11, 9],
        type: 'scatter'
      };
  
      var data = [trace1, trace2];

  const title = "Graph 2"
  const generate = () => {

  }
  return (
    <div className='container'>
      <h1>{title}</h1>
        <div>
          <LineChart data={data} title={title}/>
        </div>
        <div>
  <div className='flex-col flex gap-5 min-w-md'>
    <div className='flex-row flex gap-2 justify-center'>
    <label for="month">Month</label>
    <select id='month'>
      <option value="">Select a Month</option>
      <option value="option1">1</option>
      <option value="option2">2</option>
      <option value="option3">3</option>
      <option value="option4">4</option>
      <option value="option5">5</option>
      <option value="option6">6</option>
      <option value="option7">7</option>
      <option value="option8">8</option>
      <option value="option9">9</option>
      <option value="option10">10</option>
      <option value="option11">11</option>
      <option value="option12">12</option>
    </select>
  </div>

  <div className='flex-row flex gap-2 justify-center'>
    <label for="year">Year</label>
    <select id='year' className='justify-start'>
      <option value="">Select a Year</option>
      <option value="year1">2023</option>
      <option value="year2">2022</option>
      <option value="year3">2021</option>
      <option value="year4">2020</option>
      <option value="year5">2019</option>
      <option value="year6">2018</option>

    </select>
  </div>
  </div>

  <div>
  <button type="submit" onClick={generate} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Generate</button>
  </div>
</div>
    </div>
  )
}
