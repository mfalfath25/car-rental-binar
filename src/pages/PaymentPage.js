import { Box, Button } from '@mui/material';
import React from 'react';
import ContentLg from '../components/Layout/ContentLg';
import ContentXl from '../components/Layout/ContentXl';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';
import InfoBar from '../components/Payment/InfoBar';
import PaymentDetail from '../components/Payment/PaymentDetail';
import TransferInfo from '../components/Payment/TransferInfo';

const PaymentPage = () => {
  return (
    <>
      <Box className="Wrapper">
        <Box sx={{ background: '#F1F3FF' }}>
          <ContentXl>
            <Navbar />
            <Box sx={{ transform: 'translateY(45%)' }}>
              <InfoBar />
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
                <TransferInfo />
              </Box>
              <PaymentDetail />
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

export default PaymentPage;
