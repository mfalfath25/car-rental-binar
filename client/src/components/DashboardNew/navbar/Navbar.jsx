import './navbar.scss'
import { useContext } from 'react'
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { FiMenu, FiSearch } from 'react-icons/fi'

const Navbar = () => {
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
            <img
              src="https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="avatar"
            />
            <div className="username">benzworld</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
