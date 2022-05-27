import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import ContentLg from '../components/Layout/ContentLg'
import ContentXl from '../components/Layout/ContentXl'
import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Navbar'
import InfoBar from '../components/Payment/InfoBar'
import { FiCheckCircle } from 'react-icons/fi'
import PaymentDetail from '../components/Payment/PaymentDetail'
import TransferInfo from '../components/Payment/TransferInfo'
import InvoiceSection from '../components/Invoice/InvoiceSection'

const InvoicePage = () => {
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
              }}
            >
              <Stack direction={'column'} sx={{ m: 'auto', alignItems: 'center' }}>
                <FiCheckCircle size={'50px'} color={'#57ba57'} />
                <Typography variant={'h5'} mb={2}>
                  Pembayaran Berhasil
                </Typography>
                <Typography variant={'body1'} mb={2}>
                  Tunjukkan invoice ini ke petugas BCR di titik temu.
                </Typography>
                <Box>
                  <InvoiceSection></InvoiceSection>
                </Box>
              </Stack>
            </Box>
          </ContentLg>
        </Box>
        <Box className="Footer-wrapper-fluid" sx={{ background: '#FFFFFF' }}>
          <Footer />
        </Box>
      </Box>
    </>
  )
}

export default InvoicePage
