import { Box, Grid } from '@mui/material'
import React from 'react'
import ContentXl from '../components/Layout/ContentXl'
import Navbar from '../components/Layout/Navbar'
import ItemCard from '../components/Search/ItemCard'
import Footer from '../components/Layout/Footer'
import ContentLg from '../components/Layout/ContentLg'
import SearchFilter from '../components/Layout/SearchFilter'

const SearchPage = () => {
  return (
    <>
      <Box className="Wrapper" sx={{ background: '#F1F3FF' }}>
        <ContentXl>
          <Navbar />
          <Box sx={{ transform: 'translateY(25%)' }}>
            <SearchFilter />
          </Box>
          <ContentLg>
            <Grid
              container
              spacing={4}
              sx={{
                my: 4,
              }}
            >
              <ItemCard />
            </Grid>
          </ContentLg>
        </ContentXl>
      </Box>

      <Box className="Footer-wrapper-fluid">
        <Footer />
      </Box>
      {/* <Box className="Wrapper" sx={{ background: '#FFFFFF' }}></Box> */}
    </>
  )
}

export default SearchPage
