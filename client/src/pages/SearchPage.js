import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import ContentXl from '../components/Layout/ContentXl';
import Navbar from '../components/Layout/Navbar';
import ItemCard from '../components/Search/ItemCard';
import Footer from '../components/Layout/Footer';
import ContentLg from '../components/Layout/ContentLg';
import SearchFilter from '../components/Layout/SearchFilter';

const SearchPage = () => {
  const [search, setSearch] = useState('');
  const searchs = {
    tipeMobil: '',
    ukuranMobil: '',
    tahunMobil: '',
    jumlahPenumpang: '',
  };

  // console.log('filtering langsung', search);

  return (
    <>
      <Box className="Wrapper">
        <Box sx={{ background: '#F1F3FF' }}>
          <ContentXl>
            <Navbar />
            <Box sx={{ transform: 'translateY(45%)' }}>
              <SearchFilter searchFilter={(data) => setSearch(data)} />
            </Box>
          </ContentXl>
        </Box>
        <Box sx={{ background: '#FFFFFF', pt: 5 }}>
          <ContentLg>
            <Grid
              container
              spacing={4}
              sx={{
                my: 4,
              }}
            >
              <ItemCard search={search === '' ? searchs : search} />
            </Grid>
          </ContentLg>
        </Box>
      </Box>

      <Box className="Footer-wrapper-fluid" sx={{ background: '#FFFFFF' }}>
        <Footer />
      </Box>
    </>
  );
};

export default SearchPage;
