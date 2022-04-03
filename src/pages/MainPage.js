import { Box } from '@mui/material'
import React from 'react'
import Content from '../components/Layout/Content'
import Footer from '../components/Layout/Footer'
import Hero from '../components/Main/Hero'
import Navbar from '../components/Layout/Navbar'

const MainPage = () => {
  return (
    <>
      <Box className="Wrapper" sx={{ background: '#F1F3FF' }}>
        <Content>
          <Navbar />
          <Hero />
        </Content>
      </Box>
      <Box className="Footer-wrapper-absolute">
        <Footer />
      </Box>
    </>
  )
}

export default MainPage
