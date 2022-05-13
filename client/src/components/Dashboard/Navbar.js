import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Data } from '../../routes/Routing'
import { timedLogout } from '../../utils/timedLogout'

const Navbar = () => {
  const ctx = useContext(Data)

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
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Avatar
            alt={ctx.user.user === undefined ? ctx.user.role : ctx.user.user.displayName}
            src={ctx.user.user === undefined ? '' : ctx.user.user.photos[0]}
            sx={{ mr: 1 }}
          />
          <Typography variant="p" sx={{ mr: 2 }}>
            {ctx.user.user === undefined ? ctx.user.email : ctx.user.user.displayName}
          </Typography>
          <Button
            variant="contained"
            sx={{ fontWeight: 'bold', background: '#f34646' }}
            onClick={() => {
              timedLogout()
            }}
          >
            Logout
          </Button>
        </Box>
      </Stack>
    </div>
  )
}

export default Navbar
