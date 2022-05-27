import React, { useContext } from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from 'chart.js'
import { Doughnut, Line } from 'react-chartjs-2'
import { Box, Stack } from '@mui/material'
import { Data } from '../../../routes/Routing'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Charts = () => {
  const { cars } = useContext(Data)

  const transformCarsType = (arr) => {
    let temp = []
    for (const i of arr) {
      temp.push(i.type)
    }
    temp = temp.reduce((acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc), {})
    return Object.keys(temp).map((key) => ({ type: key, count: temp[key] }))
  }

  const transformCarsModel = (arr) => {
    let temp = []
    for (const i of arr) {
      temp.push(i.model)
    }
    temp = temp.reduce((acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc), {})
    return Object.keys(temp).map((key) => ({ model: key, count: temp[key] }))
  }

  const transformCarsPrice = (arr) => {
    let temp = []
    for (const i of arr) {
      temp.push(i.price)
    }
    temp = temp.reduce((acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc), {})
    return Object.keys(temp).map((key) => ({ price: key, count: temp[key] }))
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  }

  const labels = transformCarsPrice(cars).map((x) => x.price)

  const data3 = {
    labels,
    datasets: [
      {
        label: 'Cars',
        data: transformCarsPrice(cars).map((x) => x.count),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  const data1 = {
    labels: transformCarsType(cars).map((x) => x.type),
    datasets: [
      {
        label: '# of Votes',
        data: transformCarsType(cars).map((x) => x.count),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  }

  const data2 = {
    labels: transformCarsModel(cars).map((x) => x.model),
    datasets: [
      {
        label: '# of Votes',
        data: transformCarsModel(cars).map((x) => x.count),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  }

  return (
    <>
      <Box px={'16px'} pb={'24px'} flex={true}>
        <Stack direction={'row'}>
          <Box sx={{ width: '400px', height: '200px' }}>
            <p>Type Range</p>
            <Doughnut width={'50%'} options={{ maintainAspectRatio: false }} data={data1} />
          </Box>

          <Box sx={{ width: '400px', height: '200px' }}>
            <p>Model Range</p>
            <Doughnut width={'50%'} options={{ maintainAspectRatio: false }} data={data2} />
          </Box>

          <Box sx={{ width: '400px', height: '200px' }}>
            <p>Price Range</p>
            <Line options={options} data={data3} />
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default Charts
