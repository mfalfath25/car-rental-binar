import { Box } from '@mui/material'
import React from 'react'
import Content from '../components/Main/Content'
import Footer from '../components/Main/Footer'
import Hero from '../components/Main/Hero'
import Navbar from '../components/Main/Navbar'

const MainPage = () => {
  return (
    <>
      <Box className="Wrapper" sx={{ background: '#F1F3FF' }}>
        <Content>
          <Navbar />
          <Hero />
          <Footer />
        </Content>
      </Box>
    </>
  )
}

export default MainPage
