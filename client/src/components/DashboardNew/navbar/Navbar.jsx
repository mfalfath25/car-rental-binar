import './navbar.scss'
import React, { useContext } from 'react'
import { Avatar, Box, Button, Typography } from '@mui/material'
import { FiMenu, FiSearch } from 'react-icons/fi'
import { Data } from '../../../routes/Routing'
import { timedLogout } from '../../../utils/timedLogout'

const Navbar = () => {
  const ctx = useContext(Data)

  return (
    <div className="navbar">
      <div className="wrapper">
        <FiMenu size={24} />
        <div className="items">
          <div className="search">
            <FiSearch size={16} />
            <input type="text" placeholder="Search" />
          </div>
          <div className="item">
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Avatar
                alt={ctx.user.user === undefined ? ctx.user.role : ctx.user.user.displayName}
                src={ctx.user.user === undefined ? '' : ctx.user.user.photos[0]}
                sx={{ mr: 1, width: '32px', height: '32px' }}
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
