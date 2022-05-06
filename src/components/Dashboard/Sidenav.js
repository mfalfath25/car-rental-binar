import { Box, Stack } from '@mui/material'
import React from 'react'
import NavIcon from './NavIcon'
import NavExtend from './NavExtend'

const Sidenav = () => {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Box className="Sidenav">
          <div className="nav-head"></div>
          <NavIcon current_content="Dashboard" active />
          <NavIcon current_content="Cars" />
        </Box>
        <Box className="Sidenav-extend">
          <NavExtend current_content="Dashboard" active />
        </Box>
      </Stack>
    </>
  )
}

export default Sidenav
