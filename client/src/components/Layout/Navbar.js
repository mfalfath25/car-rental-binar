import { Box, Button, Link, Typography } from '@mui/material'
import React from 'react'

const pages = ['Our Services', 'Why Us', 'Testimonial', 'FAQ']

const Navbar = () => {
  const logout = () => {
    window.open('http://localhost:5000/auth/logout', '_self')
  }
  return (
    <>
      <Box
        component="div"
        sx={{ display: 'flex', justifyContent: 'space-between', py: '1rem' }}
      >
        <a href="/main">
          <Box className="Logo"></Box>
        </a>
        <Box
          className="nav-links"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          {pages.map((page) => (
            <Link
              key={page}
              underline="none"
              href={'/' + page}
              sx={{ px: '3' }}
            >
              <Typography
                textAlign="center"
                sx={{ pr: '2rem', color: '#000000' }}
              >
                {page}
              </Typography>
            </Link>
          ))}
          <Button
            variant="contained"
            sx={{ background: '#f34646' }}
            onClick={logout}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Navbar
