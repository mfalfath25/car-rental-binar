import './sidebar.scss'
import { Link, useLocation } from 'react-router-dom'
// import { DarkModeContext } from '../../context/darkModeContext'
import { useContext, useState } from 'react'
import { FiHome, FiTruck } from 'react-icons/fi'

const Sidebar = () => {
  // const { dispatch } = useContext(DarkModeContext)
  const location = useLocation()

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <span className="logo"></span>
        </Link>
      </div>
      <hr className="sb" />
      <div className="center">
        <ul>
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            <li>
              <FiHome className="icon" color="white" size={30} />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/dashboard/cars" style={{ textDecoration: 'none' }}>
            <li>
              <FiTruck className="icon" color="white" size={30} />
              <span>Cars</span>
            </li>
          </Link>
        </ul>
      </div>
      {/* <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({ type: 'LIGHT' })}></div>
        <div className="colorOption" onClick={() => dispatch({ type: 'DARK' })}></div>
      </div> */}
    </div>
  )
}

export default Sidebar
