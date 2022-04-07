import React, { useState } from 'react'
import { Box } from '@mui/material'
import ContentXl from '../components/Layout/ContentXl'
import Navbar from '../components/Layout/Navbar'
import Hero from '../components/Main/Hero'
import Footer from '../components/Layout/Footer'
import SearchFilter from '../components/Layout/SearchFilter'

const MainPage = () => {
  const [data, setData] = useState('')

  return (
    <>
      <Box className="Wrapper" sx={{ background: '#F1F3FF' }}>
        <ContentXl>
          <Navbar />
          <Hero />
        </ContentXl>
      </Box>

      <Box sx={{ transform: 'translateY(-50%)' }}>
        <SearchFilter searchFilter={(data) => setData(data)} />
      </Box>
      <Box className="Footer-wrapper-fluid">
        <Footer />
      </Box>
    </>
  )
}

export default MainPage
