import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { FiUsers } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const InfoBar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [tipeMobil, setTipeMobil] = useState('');
  const [date, setDate] = useState(new Date('2014-08-18T21:11:54'));
  const [waktuJemput, setWaktuJemput] = useState('');
  const [data, setData] = useState([]);
  const baseUrl = 'https://rent-cars-api.herokuapp.com/admin/car';

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`${baseUrl}`, {}).then((res) => {
        setData(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleTipeMobil = (value) => {
    setTipeMobil(value);
    console.log(value);
  };

  const handleDatePicker = (newValue) => {
    setDate(newValue);
  };

  const handleWaktuJemput = (event) => {
    setWaktuJemput(event.target.value);
  };

  const getSearchPage = () => {
    const path = `search`;
    const verifyPath = '/main/search';
    // eslint-disable-next-line no-unused-vars
    const checkPath = location.pathname !== verifyPath ? navigate(path) : '';
  };
  return (
    <>
      <Box
        className="search-filter"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flexGrow: 1,
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: '1100px', height: '70px' }}>
          <Typography sx={{ fontSize: '16px', fontWeight: 'bold', mb: 1 }}>
            Detail Pesananmu
          </Typography>
          <Grid container spacing={2} columns={{ sm: 9 }}>
            <Grid item xs={2}>
              <Box>
                <Typography>Tipe Driver</Typography>
                <Typography sx={{ color: '#8A8A8A' }}>Dengan sopir</Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <Typography>Tanggal</Typography>
                <Typography sx={{ color: '#8A8A8A' }}>27 Mar 2022</Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <Typography>Waktu Jemput/Antar</Typography>
                <Typography sx={{ color: '#8A8A8A' }}>10.00 WIB</Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <Typography>Jumlah Penumpang (optional)</Typography>
                <Typography sx={{ color: '#8A8A8A' }}>-</Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default InfoBar;
