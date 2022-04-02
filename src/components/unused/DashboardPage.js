import React from 'react'
import Sidebar from '../components/Sidebar'
import Main from './Main'
import Navbar from '../components/Navbar'
import Sidenav from '../components/Sidenav'

const DashboardPage = () => {
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

export default DashboardPage
