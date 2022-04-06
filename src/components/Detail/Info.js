import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material'
import { FiChevronDown } from 'react-icons/fi'

const Info = () => {
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          width: '605px',
          borderRadius: '8px',
        }}
      >
        <Box component="div" sx={{ m: '20px' }}>
          <CardContent
            sx={{
              p: '8px',
              '&:last-child': {
                pb: '0',
              },
            }}
          >
            <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
              Tentang Paket
            </Typography>
            <Typography variant="body1" sx={{ my: 1 }}>
              Include
            </Typography>
            <Box sx={{ mx: '20px' }}>
              <ul className="info-list">
                <li>
                  Apa saja yang termasuk dalam paket misal durasi max 12 jam
                </li>
                <li>Sudah termasuk bensin selama 12 jam </li>
                <li>Sudah termasuk Tiket Wisata</li>
                <li>Sudah termasuk pajak</li>
              </ul>
            </Box>
            <Typography variant="body1" sx={{ my: 1 }}>
              Exclude
            </Typography>
            <Box sx={{ ml: '20px' }}>
              <ul className="info-list">
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            </Box>
            <Accordion
              className="accordion"
              sx={{
                '&:before': {
                  display: 'none',
                },
                '&:after': {
                  display: 'none',
                },
                boxShadow: 'none',
                m: '0',
              }}
            >
              <AccordionSummary
                expandIcon={<FiChevronDown />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ p: '0' }}
              >
                <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                  Refund, Reschedule, Overtime
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ p: '8px', ml: '14px' }}>
                  <ul className="info-list">
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </Box>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Box>
      </Card>
    </>
  )
}

export default Info
