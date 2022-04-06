import React from 'react'
import ContentXl from '../components/Layout/ContentXl'
import ContentLg from '../components/Layout/ContentLg'
import Navbar from '../components/Layout/Navbar'
import Info from '../components/Detail/Info'
import Footer from '../components/Layout/Footer'
import { Box } from '@mui/material'
import ItemCardDetail from '../components/Detail/ItemCardDetail'

const DetailPage = () => {
  return (
    <>
      <Box className="Wrapper" sx={{ background: '#F1F3FF' }}>
        <ContentXl>
          <Navbar />
        </ContentXl>
        <ContentLg>
          <Info />
          <ItemCardDetail />
        </ContentLg>
      </Box>
      <Box className="Footer-wrapper-fluid">
        <Footer />
      </Box>
    </>
  )
}

export default DetailPage
