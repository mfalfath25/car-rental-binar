import { Box, Button, Link, Typography } from '@mui/material'
import React from 'react'

const pages = ['Our Services', 'Why Us', 'Testimonial', 'FAQ']

const Navbar = () => {
  return (
    <>
      <Box
        component="div"
        sx={{ display: 'flex', justifyContent: 'space-between', py: '1rem' }}
      >
        <Box className="Logo"></Box>
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
          <Button variant="contained" sx={{ background: '#5CB85F' }}>
            Register
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Navbar
