import React from 'react'
import Sidebar from '../components/Dashboard/Sidebar'
import Main from '../components/Dashboard/Main'
import Navbar from '../components/Dashboard/Navbar'
import Sidenav from '../components/Dashboard/Sidenav'
import Content from '../components/Dashboard/Content'

const DashboardPage = () => {
  return (
    <div className="Dashboard">
      <Sidebar>
        <Sidenav />
      </Sidebar>
      <Main>
        <Navbar />
        <Content />
      </Main>
    </div>
  )
}

export default DashboardPage
