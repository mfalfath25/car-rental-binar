import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { FiUsers, FiSettings, FiCalendar, FiChevronDown } from 'react-icons/fi';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PaymentDetail = () => {
  // const [data, setData] = useState([]);
  // const { id } = useParams();
  // const baseUrl = `https://rent-cars-api.herokuapp.com/admin/car/${id}`;

  // useEffect(() => {
  //   getData();
  // });

  // const getData = async () => {
  //   try {
  //     const response = await axios.get(`${baseUrl}`, {}).then((res) => {
  //       console.log(res);
  //       setData(res.data);
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <Grid item sx={{ mb: '4rem' }}>
        <Card variant="outlined" sx={{ width: '405px' }}>
          <Box sx={{ m: '20px' }}>
            <CardContent sx={{ p: '8px' }}>
              <Typography sx={{ fontSize: '16px', fontWeight: 'bold', my: 1 }}>
                Nama/Tipe Mobil
              </Typography>
              <Stack direction="row" spacing={2}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <FiUsers />
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    4 orang
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <FiSettings />
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    Manual
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <FiCalendar />
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    Tahun 2020
                  </Typography>
                </Box>
              </Stack>

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
                  <Typography sx={{ fontSize: '16px' }}>Total</Typography>
                  <Typography
                    sx={{ fontSize: '16px', fontWeight: 'bold', ml: 'auto' }}
                  >
                    Rp. {Number(1000000).toLocaleString()}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: '0' }}>
                  <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                    Harga
                  </Typography>
                  <Box sx={{ pl: '8px', ml: '14px', mb: 2 }}>
                    <ul className="info-list">
                      <Stack direction="row">
                        <li>1 Mobil dengan sopir</li>
                        <Typography
                          sx={{
                            fontSize: '16px',
                            ml: 'auto',
                          }}
                        >
                          Rp. {Number(1000000).toLocaleString()}
                        </Typography>
                      </Stack>
                    </ul>
                  </Box>

                  <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                    Biaya Lainnya
                  </Typography>
                  <Box sx={{ pl: '8px', ml: '14px', mb: 2 }}>
                    <ul className="info-list">
                      <Stack direction="row">
                        <li>Pajak</li>
                        <Typography
                          sx={{
                            fontSize: '16px',
                            ml: 'auto',
                            color: '#5CB85F',
                          }}
                        >
                          Termasuk
                        </Typography>
                      </Stack>
                      <Stack direction="row">
                        <li>Biaya makan sopir</li>
                        <Typography
                          sx={{
                            fontSize: '16px',
                            ml: 'auto',
                            color: '#5CB85F',
                          }}
                        >
                          Termasuk
                        </Typography>
                      </Stack>
                    </ul>
                  </Box>

                  <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                    Belum Termasuk
                  </Typography>
                  <Box sx={{ pl: '8px', ml: '14px', mb: 2 }}>
                    <ul className="info-list">
                      <Stack direction="row">
                        <li>Bensin</li>
                      </Stack>
                      <Stack direction="row">
                        <li>Tol dan parkir</li>
                      </Stack>
                    </ul>
                  </Box>

                  <Divider variant="middle" />

                  <Stack direction="row">
                    <Typography
                      sx={{ fontSize: '16px', fontWeight: 'bold', mt: 2 }}
                    >
                      Total
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        mt: 2,
                        ml: 'auto',
                      }}
                    >
                      Rp. {Number(1000000).toLocaleString()}
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                size="large"
                variant="contained"
                sx={{ fontWeight: 'bold', background: '#5CB85F' }}
              >
                Bayar
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Grid>
    </>
  );
};

export default PaymentDetail;
