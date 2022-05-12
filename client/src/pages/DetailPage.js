import React from 'react';
import ContentXl from '../components/Layout/ContentXl';
import ContentLg from '../components/Layout/ContentLg';
import Navbar from '../components/Layout/Navbar';
import Info from '../components/Detail/Info';
import Footer from '../components/Layout/Footer';
import ItemCardDetail from '../components/Detail/ItemCardDetail';
import { Box, Button } from '@mui/material';
import SearchFilter from '../components/Layout/SearchFilter';
import { useNavigate, useLocation } from 'react-router-dom';

const DetailPage = () => {
  const disabled = true;
  const navigate = useNavigate();
  const location = useLocation();

  const getLastPath = (path) => path.substring(path.lastIndexOf('/') + 1);

  const getPembayaranPage = () => {
    const path = getLastPath(location.pathname);
    navigate(`/main/pembayaran/${path}`);
  };
  return (
    <>
      <Box className="Wrapper">
        <Box sx={{ background: '#F1F3FF' }}>
          <ContentXl>
            <Navbar />
            <Box sx={{ transform: 'translateY(45%)' }}>
              <SearchFilter disabled={disabled} />
            </Box>
          </ContentXl>
        </Box>
        <Box sx={{ background: '#FFFFFF' }}>
          <ContentLg>
            <Box
              sx={{
                mt: 12,
                mb: 3,
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
                onClick={() => getPembayaranPage()}
              >
                Lanjutkan Pembayaran
              </Button>
            </Box>
          </ContentLg>
        </Box>
        <Box className="Footer-wrapper-fluid" sx={{ background: '#FFFFFF' }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default DetailPage;
