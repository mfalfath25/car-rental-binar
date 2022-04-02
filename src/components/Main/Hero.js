import { Box, Typography } from '@mui/material'
import React from 'react'

const Hero = () => {
  return (
    <>
      <Box
        className="hero"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ width: '50%', my: 'auto' }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', pr: '50px' }}>
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </Typography>
          <Typography variant="body1" sx={{ pr: '220px', mt: '2rem' }}>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </Typography>
        </Box>

        <Box className="car-wrap">
          <Box className="car-hero"></Box>
          <img
            className="car-img"
            src={require('../../assets/car-hero.png')}
            alt="car-hero"
          />
        </Box>
      </Box>
    </>
  )
}

export default Hero
