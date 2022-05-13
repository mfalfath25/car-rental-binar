import { Avatar, Box, Button, Link, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Data } from '../../routes/Routing'
import { timedLogout } from '../../utils/timedLogout'
const pages = ['Our Services', 'Why Us', 'Testimonial', 'FAQ']

const Navbar = () => {
  const ctx = useContext(Data)
  const [display, setDisplay] = useState({
    alt: null,
    src: null,
    name: null,
  })

  const ctxChanger = (context) => {
    if (context.user.user) {
      switch (context.user.user.provider) {
        case 'google':
          setDisplay({
            alt: context.user.user.displayName,
            src: context.user.user.photos[0].value,
            name: context.user.user.displayName,
          })
          break
        case 'github':
          setDisplay({
            alt: context.user.user.displayName,
            src: context.user.user.photos[0].value,
            name: context.user.user.displayName,
          })
          break
        default:
          console.log('OAuth not supported')
      }
    } else {
      setDisplay({
        alt: context.user.role,
        src: '',
        name: context.user.email,
      })
    }
  }

  useEffect(() => {
    ctxChanger(ctx)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          <Avatar alt={display.alt} src={display.src} sx={{ mr: 1 }} />
          <Typography variant="p" sx={{ mr: 2 }}>
            {display.name}
          </Typography>
          <Button variant="contained" sx={{ background: '#f34646' }} onClick={timedLogout}>
            Logout
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Navbar
