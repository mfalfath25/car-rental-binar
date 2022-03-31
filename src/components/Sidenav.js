import { Box, Grid } from '@mui/material'
import React from 'react'
import NavIcon from './NavIcon'

const Sidenav = () => {
  return (
    <Box className="Sidenav">
      <div className="nav-head"></div>
      <NavIcon current_content="Dashboard" active />
      <NavIcon current_content="Cars" />
    </Box>
  )
}

export default Sidenav
