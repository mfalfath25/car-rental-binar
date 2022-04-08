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
import { useNavigate } from 'react-router-dom'

const ItemCard = (props) => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const baseUrl = 'https://rent-cars-api.herokuapp.com/admin/car'

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get(`${baseUrl}`, {}).then((res) => {
        console.log(res)
        setData(res.data)
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleCard = (id) => {
    const path = `detail/${id}`
    navigate(path)
    // window.location.href = `/main/search/${id}`
  }

  // const getFilteredCar = () => {
  //   if (props.search) {
  //     const filteredData = data.filter((item) => {
  //       return Object.keys(item).some((key) =>
  //         item[key].toLowerCase().includes(props.search.toLowerCase())
  //       )
  //     })
  //     setData(filteredData)
  //   } else {
  //     setData(res.data)
  //   }
  // }

  return (
    <>
      {data
        .filter((item) => item.name.includes(props.search))
        .map((item) => (
          <Grid item xs={4} key={item.id}>
            <Card variant="outlined" sx={{ maxWidth: '333px' }}>
              <Box sx={{ m: '20px' }}>
                <CardContent sx={{ p: '8px' }}>
                  <img className="card-img" src={item.image} alt="card-img" />
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
                    onClick={() => handleCard(item.id)}
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
