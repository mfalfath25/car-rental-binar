import { Box, Grid } from '@mui/material'
import React from 'react'
import Content from '../components/Layout/Content'
import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Navbar'
import ItemCard from '../components/Search/ItemCard'

const SearchPage = () => {
  return (
    <>
      <Box className="Wrapper" sx={{ background: '#F1F3FF' }}>
        <Content>
          <Navbar />
          <Box
            className="ItemCard"
            sx={{
              mx: 'auto',
              justifyContent: 'center',
              maxWidth: '1080px',
              background: '#5CB85F',
            }}
          >
            <Grid
              container
              justifyContent="space-between"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              <ItemCard />
            </Grid>
          </Box>
        </Content>
      </Box>
      <Box className="Footer-wrapper-fluid">
        <Footer />
      </Box>
      {/* <Box className="Wrapper" sx={{ background: '#FFFFFF' }}></Box> */}
    </>
  )
}

export default SearchPage
