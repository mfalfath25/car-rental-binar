import { Avatar, Box, Button, Link, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Data } from '../../routes/Routing'
import { timedLogout } from '../../utils/timedLogout'
const pages = ['Our Services', 'Why Us', 'Testimonial', 'FAQ']

const Navbar = () => {
  const ctx = useContext(Data)

  return (
    <>
      <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between', py: '1rem' }}>
        <a href="/main">
          <Box className="Logo"></Box>
        </a>
        <Box className="nav-links" sx={{ display: 'flex', alignItems: 'center' }}>
          {pages.map((page) => (
            <Link key={page} underline="none" href={'/' + page} sx={{ px: '3' }}>
              <Typography textAlign="center" sx={{ pr: '2rem', color: '#000000' }}>
                {page}
              </Typography>
            </Link>
          ))}
          <Avatar
            alt={ctx.user.user === undefined ? ctx.user.role : ctx.user.user.displayName}
            src={ctx.user.user === undefined ? '' : ctx.user.user.photos[0]}
            sx={{ mr: 1 }}
          />
          <Typography variant="p" sx={{ mr: 2 }}>
            {ctx.user.user === undefined ? ctx.user.email : ctx.user.user.displayName}
          </Typography>
          {/* <Link className="custom-link" underline="none" sx={{ color: '#000000' }} onClick={timedLogout}>
            Logout
          </Link> */}
          <Button variant="contained" sx={{ background: '#f34646' }} onClick={timedLogout}>
            Logout
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Navbar
