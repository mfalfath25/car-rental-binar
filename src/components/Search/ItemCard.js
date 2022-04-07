import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'
import { FiUsers, FiSettings, FiCalendar } from 'react-icons/fi'
import axios from 'axios'

const ItemCard = () => {
  const [data, setData] = useState([])
  const baseUrl = 'https://rent-cars-api.herokuapp.com/admin/car'

  useEffect(() => {
    getCar()
  }, [])

  const getCar = () => {
    axios.get(`${baseUrl}`, {}).then((res) => {
      console.log(res.data)
      setData(res.data)
    })
  }

  // const getCar = async () => {
  //   try {
  //     const response = await axios.get(`${baseUrl}`, {}).then((res) => {
  //       console.log(res.data)
  //       setData(res.data)
  //     })
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <>
      {data.map((item, i) => (
        <Grid item xs={4} key={item.id}>
          <Card variant="outlined" sx={{ maxWidth: '333px' }}>
            <Box sx={{ m: '20px' }}>
              <CardContent sx={{ p: '8px' }}>
                <img
                  className="card-img"
                  src={require('../../assets/car-card.png')}
                  alt="card-img"
                />
                <Typography variant="body1">
                  {item.name} / {item.category}
                </Typography>
                <Typography
                  sx={{ fontSize: '18px', fontWeight: 'bold', my: 1 }}
                >
                  Rp. {item.price} / hari
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam quos eius quaerat doloremque.
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <FiUsers />
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    4 orang
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <FiSettings />
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    Manual
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <FiCalendar />
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    Tahun 2022
                    {/* {item.start_rent_at} - {item.finish_rent_at} */}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  sx={{ fontWeight: 'bold', background: '#5CB85F' }}
                >
                  Pilih Mobil
                </Button>
              </CardActions>
            </Box>
          </Card>
        </Grid>
      ))}
    </>
  )
}

export default ItemCard
