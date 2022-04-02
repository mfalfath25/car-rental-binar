import React from 'react'
import { Box, Grid, Icon, Link, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiTwitch,
} from 'react-icons/fi'

const pages = ['Our Services', 'Why Us', 'Testimonial', 'FAQ']

const Footer = () => {
  return (
    <>
      <Box className="Footer">
        <Grid container spacing={3} justifyContent="space-evenly">
          <Grid item xs={3}>
            <Typography variant="body1" sx={{ mb: '1rem' }}>
              Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
            </Typography>
            <Typography variant="body1" sx={{ mb: '1rem' }}>
              binarcarrental@gmail.com
            </Typography>
            <Typography variant="body1">081-233-334-8080</Typography>
          </Grid>
          <Grid item xs={3}>
            {pages.map((page) => (
              <Link key={page} underline="none" href={'/' + page}>
                <Typography
                  sx={{
                    mb: '1rem',
                    ml: '4rem',
                    color: '#000000',
                    fontWeight: 'bold',
                  }}
                >
                  {page}
                </Typography>
              </Link>
            ))}
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" sx={{ mb: '1rem' }}>
              Connect with us
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <Box className="footer-socials">
                <FiFacebook className="footer-icon" size={24} />
              </Box>
              <Box className="footer-socials">
                <FiInstagram className="footer-icon" size={24} />
              </Box>
              <Box className="footer-socials">
                <FiTwitter className="footer-icon" size={24} />
              </Box>
              <Box className="footer-socials">
                <FiMail className="footer-icon" size={24} />
              </Box>
              <Box className="footer-socials">
                <FiTwitch className="footer-icon" size={24} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" sx={{ mb: '1rem' }}>
              Copyright Binar 2022
            </Typography>
            <Box className="Logo"></Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Footer
