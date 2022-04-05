import { Box } from '@mui/material'
import React from 'react'
import Info from '../components/Detail/Info'
import Content from '../components/Layout/Content'
import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Navbar'

const DetailPage = () => {
  return (
    <>
      <Box className="Wrapper" sx={{ background: '#F1F3FF' }}>
        <Content>
          <Navbar />
          <Info />
        </Content>
      </Box>
      <Box className="Footer-wrapper-fluid">
        <Footer />
      </Box>
    </>
  )
}

export default DetailPage
