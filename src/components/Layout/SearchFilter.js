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
import { useNavigate, useLocation } from 'react-router-dom'

const SearchFilter = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [tipeMobil, setTipeMobil] = useState('')
  const [date, setDate] = useState(new Date('2014-08-18T21:11:54'))
  const [waktuJemput, setWaktuJemput] = useState('')

  const handleTipeMobil = (value) => {
    setTipeMobil(value)
    console.log(value)
  }

  const handleDatePicker = (newValue) => {
    setDate(newValue)
  }

  const handleWaktuJemput = (event) => {
    setWaktuJemput(event.target.value)
  }

  const getSearchPage = () => {
    const path = `search`
    const verifyPath = '/main/search'
    // eslint-disable-next-line no-unused-vars
    const checkPath = location.pathname !== verifyPath ? navigate(path) : ''
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
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: '1100px', height: '70px' }}>
          <Grid container spacing={2} columns={{ sm: 9 }}>
            <Grid item xs={2}>
              <Box>
                <Typography>Tipe Mobil</Typography>
                <Box sx={{ width: '210px' }}>
                  <FormControl fullWidth>
                    <Select
                      value={tipeMobil}
                      onChange={(e) => handleTipeMobil(e.target.value)}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      size="small"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'APV'}>APV</MenuItem>
                      <MenuItem value={'Xenia'}>Xenia</MenuItem>
                      <MenuItem value={'Avanza'}>Avanza</MenuItem>
                      <MenuItem value={'Alphard'}>Alphard</MenuItem>
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
                onClick={() => {
                  props.searchFilter(tipeMobil)
                  getSearchPage()
                }}
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
