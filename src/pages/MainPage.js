import { Box } from '@mui/material'
import React from 'react'
import ContentXl from '../components/Layout/ContentXl'
import Navbar from '../components/Layout/Navbar'
import Hero from '../components/Main/Hero'
import Footer from '../components/Layout/Footer'
import SearchFilter from '../components/Layout/SearchFilter'

const MainPage = () => {
  return (
    <>
      <Box className="Wrapper" sx={{ background: '#F1F3FF' }}>
        <ContentXl>
          <Navbar />
          <Hero />
        </ContentXl>
      </Box>
      <SearchFilter />
      <Box className="Footer-wrapper-fluid">
        <Footer />
      </Box>
    </>
  )
}

export default MainPage
