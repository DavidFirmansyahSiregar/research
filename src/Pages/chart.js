import React from 'react'
import './pages.css';

import { Line } from 'react-chartjs-2';
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

export const Data = () => {
  const data = {
    labels:["Nov 1","Nov 2","Nov 3","Nov 4","Nov 5","Nov 6","nov 7","Nov 8", "Nov 9", "Nov 10"],
    datasets: [{
      data: [8, 7.8, 6, 8, 7, 5, 6, 4, 7.2],
      borderColor: 'f26c6d',
      pointBorderColor: 'white',
    },
    { data: [5, 8, 7, 6.6, 6, 7, 4, 7, 5.5],
      borderColor: '#F4898A',
      pointBorderColor: 'red',}
  ],
  }
    const handleInput = {

    }

  return (
    <div>
      <div className='chart-1'>
        <Line data={data}></Line>
      </div>    
    </div>

  )
}
