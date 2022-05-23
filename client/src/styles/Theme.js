import { createTheme } from '@mui/material'

export const Theme = createTheme({
  // palette: {
  //   primary: {
  //     blue_1: '#0D28A6',
  //     blue_2: '#CFD4ED',
  //   },
  //   secondary: {
  //     mono_1: '#000000',
  //     mono_2: '#8A8A8A',
  //     mono_3: '#ffffff',
  //   },
  // },
  typography: {
    fontFamily: `'Plus Jakarta Sans', 'Helvetica', 'Arial', sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,

    button: {
      textTransform: 'none',
    },
  },
})
