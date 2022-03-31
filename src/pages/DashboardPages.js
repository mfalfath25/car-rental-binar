import React from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Sidenav from '../components/Sidenav'

const DashboardPages = () => {
  return (
    <div className="Dashboard">
      <Sidebar>
        <Sidenav />
      </Sidebar>
      <Main>
        <Navbar />
      </Main>
    </div>
  )
}

export default DashboardPages
