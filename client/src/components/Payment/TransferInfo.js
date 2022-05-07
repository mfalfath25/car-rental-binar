import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';

const TransferInfo = () => {
  const [view, setView] = useState('');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  console.log(view);
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          maxWidth: '780px',
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
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
              Pilih Bank Transfer
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, mb: 3 }}>
              Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
              atau Mobile Banking
            </Typography>

            <ToggleButtonGroup
              orientation="vertical"
              value={view}
              exclusive
              onChange={handleChange}
              fullWidth
            >
              <Stack direction="column" spacing={2}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Chip
                    label="BCA"
                    variant="outlined"
                    sx={{ width: 'max-content', borderRadius: '8px' }}
                  />
                  <ToggleButton
                    value="bca"
                    aria-label="list"
                    sx={{
                      color: '#000000',
                      width: '100%',
                      p: 0,
                      border: 'none',
                      justifyContent: 'flex-start',
                      ml: 2,
                    }}
                  >
                    BCA Transfer
                  </ToggleButton>
                </Box>
                <Divider variant="middle" />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Chip
                    label="BNI"
                    variant="outlined"
                    sx={{ width: 'max-content', borderRadius: '8px' }}
                  />
                  <ToggleButton
                    value="bni"
                    aria-label="module"
                    sx={{
                      color: '#000000',
                      width: '100%',
                      p: 0,
                      border: 'none',
                      justifyContent: 'flex-start',
                      ml: 2,
                    }}
                  >
                    BNI Transfer
                  </ToggleButton>
                </Box>
                <Divider variant="middle" />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Chip
                    label="Mandiri"
                    variant="outlined"
                    sx={{ width: 'max-content', borderRadius: '8px' }}
                  />
                  <ToggleButton
                    value="mandiri"
                    aria-label="quilt"
                    sx={{
                      color: '#000000',
                      width: '100%',
                      p: 0,
                      border: 'none',
                      justifyContent: 'flex-start',
                      ml: 2,
                    }}
                  >
                    Mandiri Transfer
                  </ToggleButton>
                </Box>
              </Stack>
            </ToggleButtonGroup>

            {/* <Accordion
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
              <AccordionDetails sx={{ p: '0' }}>
                <Box sx={{ pl: '8px', ml: '14px' }}>
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
            </Accordion> */}
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default TransferInfo;
