import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import { timedLogout } from '../../utils/timedLogout'

const Navbar = () => {
  return (
    <div className="navbar">
      <Stack
        spacing={2}
        direction="row"
        sx={{
          display: 'flex',
          p: 2,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>Navbar</Box>
        <Button
          variant="contained"
          sx={{ fontWeight: 'bold', background: '#5CB85F' }}
          onClick={() => {
            timedLogout()
          }}
        >
          Logout
        </Button>
      </Stack>
    </div>
  )
}

export default Navbar
