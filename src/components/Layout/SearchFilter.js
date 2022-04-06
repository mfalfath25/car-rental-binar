import React, { useState } from 'react'
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
} from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { FiUsers } from 'react-icons/fi'

const SearchFilter = () => {
  const [tipeDriver, setTipeDriver] = useState('')
  const [date, setDate] = useState(new Date('2014-08-18T21:11:54'))
  const [waktuJemput, setWaktuJemput] = useState('')

  const handleDatePicker = (newValue) => {
    setDate(newValue)
  }
  const handleTipeDriver = (event) => {
    setTipeDriver(event.target.value)
  }

  const handleWaktuJemput = (event) => {
    setWaktuJemput(event.target.value)
  }
  return (
    <>
      <Box
        className="search-filter"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flexGrow: 1,
          transform: 'translateY(-20%)',
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: '1100px', height: '70px' }}>
          <Grid container spacing={2} columns={{ sm: 9 }}>
            <Grid item xs={2}>
              <Box>
                <Typography>Tipe Driver</Typography>
                <Box sx={{ width: '210px' }}>
                  <FormControl fullWidth>
                    <Select
                      value={tipeDriver}
                      onChange={handleTipeDriver}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      size="small"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'Dengan Sopir'}>Dengan Sopir</MenuItem>
                      <MenuItem value={'Tanpa Sopir'}>
                        Tanpa Sopir (lepas kunci)
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <Typography>Tanggal</Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    inputFormat="MM/dd/yyyy"
                    value={date}
                    onChange={handleDatePicker}
                    renderInput={(params) => (
                      <TextField size="small" {...params} />
                    )}
                  />
                </LocalizationProvider>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <Typography>Waktu Jemput/Ambil</Typography>
                <Box sx={{ width: '210px' }}>
                  <FormControl fullWidth>
                    <Select
                      value={waktuJemput}
                      onChange={handleWaktuJemput}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      size="small"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'8'}>08.00</MenuItem>
                      <MenuItem value={'9'}>09.00</MenuItem>
                      <MenuItem value={'10'}>10.00</MenuItem>
                      <MenuItem value={'11'}>11.00</MenuItem>
                      <MenuItem value={'12'}>12.00</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <Typography>Jumlah Penumpang (optional)</Typography>
                <OutlinedInput
                  id="jumlah-penumpang"
                  type="text"
                  name="jumlah-penumpang"
                  placeholder="Jumlah Penumpang"
                  size="small"
                  endAdornment={
                    <InputAdornment position="end">
                      <FiUsers />
                    </InputAdornment>
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={1} sx={{ mt: 'auto', mb: '0.25rem' }}>
              <Button
                variant="contained"
                sx={{ fontWeight: 'bold', background: '#5CB85F' }}
              >
                Cari Mobil
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  )
}

export default SearchFilter
