import { useState } from 'react'
import LineChart from './graphs/LineChart'
import axios from 'axios'
import { useUserStore } from '../stores/userStore';

export const Graph4 = () => {

  const user = useUserStore((state) => state.user);


  const [month, setMonth] = useState('1')
  const [year, setYear] = useState('2023')


  const [data, setData] = useState([])

  const title = "Graph 4"

  const groupByName = (data) => {

    const final = []
    let d = {}
    data.forEach((item) => {
      if (!d[item.name]) {
        d[item.name] = {
          x: [],
          y: [],
          name: item.name,
          type: item.type
        }
      }
      d[item.name].x.push(item.x)
      d[item.name].y.push(item.y)
    })

    for (let key in d) {
      final.push(d[key])
    }
    return final

  }

  const generate = () => {

  }

  let finalData;

  const handleSubmit = () => {
    axios.post('http://localhost:3001/customer/graph/totalprice/device', {
      month: month,
      year: year
    }, {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    }).then((response) => {
      console.log(response.data);
      setData(response.data);
      finalData = response.data.map((item) => {
        return {
          x: item.time,
          y: item.total_price,
          name: item.deviceregid,
          type: 'scatter'
        }
      })

      setData(groupByName(finalData));

      generate();
    })

      
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
    <label htmlFor="month">Month</label>
     <select id='month' value={month} onChange={(e) => setMonth(e.target.value)}>
      <option value="">Select a Month</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </select>
  </div>

  <div className='flex-row flex gap-2 justify-center'>
    <label htmlFor="year">Year</label>
    <select id='year' value={year} onChange={(e) => setYear(e.target.value)} className='justify-start'>
      <option value="">Select a Year</option>
      <option value="2023">2023</option>
      <option value="2022">2022</option>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
      <option value="2019">2019</option>
      <option value="2018">2018</option>
    </select>
  </div>
  </div>

  <div>
  <button type="submit" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Generate</button>
  </div>
</div>
    </div>
  )
}
