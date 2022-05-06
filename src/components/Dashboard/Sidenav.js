import { Box } from '@mui/material'
import React from 'react'
import NavIcon from './NavIcon'
import NavExtend from './NavExtend'

const Sidenav = () => {
  return (
    <>
      <Box className="Sidenav">
        <div className="nav-head"></div>
        <NavIcon current_content="Dashboard" active />
        <NavIcon current_content="Cars" />
      </Box>
      <Box className="Sidenav-extend">
        <NavExtend current_content="Dashboard" active />
      </Box>
    </>
  )
}

export default Sidenav
