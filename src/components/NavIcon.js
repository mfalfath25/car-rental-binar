import React from 'react'
import { HouseDoor, Truck } from 'react-bootstrap-icons'

const NavIcon = ({ current_content, active }) => {
  return (
    <div className={`nav-item ${active ? 'active' : ''}`}>
      <div className="nav-icon">
        {current_content === 'Dashboard' ? (
          <HouseDoor size="32" />
        ) : (
          <Truck size="32" />
        )}
      </div>
      <p className="nav-name">{current_content}</p>
    </div>
  )
}

export default NavIcon
