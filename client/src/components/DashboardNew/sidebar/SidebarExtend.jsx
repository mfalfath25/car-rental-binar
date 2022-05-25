import React from 'react'
import { Link } from 'react-router-dom'
import './sidebarExtend.scss'

const SidebarExtend = (props) => {
  return (
    <div className="sbe">
      <div className="top">
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <span className="logoBar"></span>
        </Link>
      </div>
      <hr />
      <div className="sbe-bottom">
        <p className="sbe-title">{props.title}</p>
        <p className="sbe-subtitle">{props.subtitle}</p>
      </div>
    </div>
  )
}

export default SidebarExtend
