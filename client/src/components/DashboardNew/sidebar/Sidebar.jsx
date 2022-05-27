import './sidebar.scss'
import { Link } from 'react-router-dom'
import { FiHome, FiTruck } from 'react-icons/fi'

const Sidebar = () => {
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
    </div>
  )
}

export default Sidebar
