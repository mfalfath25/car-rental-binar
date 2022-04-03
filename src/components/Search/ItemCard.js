import React from 'react'
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

const card = (
  <>
    <Box sx={{ m: '20px' }}>
      <CardContent sx={{ p: '8px' }}>
        <img
          className="card-img"
          src={require('../../assets/car-card.png')}
          alt="card-img"
        />
        <Typography variant="body1">Nama/Tipe mobil</Typography>
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', my: 1 }}>
          Rp. 430.000 / hari
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos
          eius quaerat doloremque.
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
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <FiSettings />
          <Typography variant="body1" sx={{ ml: 1 }}>
            Manual
          </Typography>
        </Box>
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <FiCalendar />
          <Typography variant="body1" sx={{ ml: 1 }}>
            Tahun 2020
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
  </>
)

const ItemCard = () => {
  return (
    <>
      <Grid item sm={4}>
        <Card variant="outlined" sx={{ maxWidth: '333px' }}>
          {card}
        </Card>
      </Grid>
    </>
  )
}

export default ItemCard
