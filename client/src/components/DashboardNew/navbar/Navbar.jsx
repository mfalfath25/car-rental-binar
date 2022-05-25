import './navbar.scss'
import React, { useContext } from 'react'
import {
  Avatar,
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
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
          {/* <div className="item">
            <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({ type: 'TOGGLE' })} />
          </div> */}
          {/* <div className="search" style={{ border: 'none' }}>
            <TextField defaultValue="" size="small" />
            <Button variant="outlined" onClick={() => {}}>
              Search
            </Button>
          </div> */}
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
            {/* <img
              src="https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="avatar"
            />
            <div className="username">benzworld</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
