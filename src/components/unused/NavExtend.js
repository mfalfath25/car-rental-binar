import { Typography } from '@mui/material'
import React from 'react'

const NavExtend = ({ current_content, active }) => {
  return (
    <div className={`nav-extend ${active ? 'active' : ''}`}>
      <div className="content">
        {current_content === 'Dashboard' ? (
          <>
            <Typography variant="h6">DASHBOARD</Typography>
            <Typography variant="p">Dashboard</Typography>
          </>
        ) : (
          <>
            <Typography variant="h6">CARS</Typography>
            <Typography variant="p">List-Cars</Typography>
          </>
        )}
      </div>
    </div>
  )
}

export default NavExtend
