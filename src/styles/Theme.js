import { createTheme } from '@mui/material'

export const Theme = createTheme({
  typography: {
    fontFamily: `"Ubuntu", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,

    button: {
      textTransform: 'none',
    },
  },
})
