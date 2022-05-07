import { Box, Button, Stack } from '@mui/material'
import React from 'react'

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
            console.log('Button clicked')
          }}
        >
          Logout
        </Button>
      </Stack>
    </div>
  )
}

export default Navbar
