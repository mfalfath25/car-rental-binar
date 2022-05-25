import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { Box, Stack } from '@mui/material'
import axios from 'axios'

ChartJS.register(ArcElement, Tooltip, Legend)

// export const data = {
//   labels: ['Small', 'Medium', 'Large'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//       ],
//       borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
//       borderWidth: 1,
//     },
//   ],
// }

const DonutChart = () => {
  const [cars, setCars] = useState([])
  const fetchData = () => {
    axios.get('http://localhost:5000/car').then((res) => {
      setCars(res.data)
      // console.log('CAR DATA: ', res.data)
    })
  }

  let ans = cars.reduce((agg, curr) => {
    let found = agg.find((x) => x.type === curr.type)
    if (found) {
      // found.colors.push(curr.color)
      found.count++
    } else {
      agg.push({
        type: curr.type,
        count: [curr.count],
      })
    }
    return agg
  }, [])

  const data = {
    labels: ['Small', 'Medium', 'Large'],
    datasets: [
      {
        label: '# of Votes',
        data: ans.map((x) => x.count),
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

  // console.log('ANS: ', ans)

  useEffect(() => {
    fetchData()
    // setMessage({ info: 'Hai', type: 'success' })
    // console.log(cars)
  }, [])
  return (
    <>
      <Box padding={'8px 16px'}>
        <Stack direction={'row'} width={'100%'}>
          <Box sx={{ width: '400px', height: '200px' }}>
            <p>Total Type</p>
            <Doughnut width={'50%'} options={{ maintainAspectRatio: false }} data={data} />
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default DonutChart
