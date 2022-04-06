import React from 'react'
import ContentXl from '../components/Layout/ContentXl'
import ContentLg from '../components/Layout/ContentLg'
import Navbar from '../components/Layout/Navbar'
import Info from '../components/Detail/Info'
import Footer from '../components/Layout/Footer'
import ItemCardDetail from '../components/Detail/ItemCardDetail'
import { Box, Button } from '@mui/material'

const DetailPage = () => {
  return (
    <>
      <Box className="Wrapper" sx={{ background: '#F1F3FF' }}>
        <ContentXl>
          <Navbar />
        </ContentXl>
        <ContentLg>
          <Box
            sx={{
              my: 4,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Info />
            </Box>
            <ItemCardDetail />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 4,
            }}
          >
            <Button
              size="large"
              variant="contained"
              sx={{ fontWeight: 'bold', background: '#5CB85F' }}
            >
              Lanjutkan Pembayaran
            </Button>
          </Box>
        </ContentLg>
      </Box>
      <Box className="Footer-wrapper-fluid">
        <Footer />
      </Box>
    </>
  )
}

export default DetailPage
