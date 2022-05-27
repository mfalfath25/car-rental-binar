import './home.scss'
import Sidebar from '../../../components/DashboardNew/sidebar/Sidebar'
import SidebarExtend from '../../../components/DashboardNew/sidebar/SidebarExtend'
import Navbar from '../../../components/DashboardNew/navbar/Navbar'
import Breadcrumb from '../../../components/DashboardNew/breadcrumb/Breadcrumb'
import Datatable from '../../../components/DashboardNew/datatable/Datatable'
import Charts from '../../../components/DashboardNew/charts/Charts'

const Home = () => {
  const breadcrumbs = [
    {
      key: '1',
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      key: '2',
      name: 'Dashboard',
      link: '/dashboard',
    },
  ]

  return (
    <div className="home">
      <Sidebar />
      <SidebarExtend title={'DASHBOARD'} subtitle={'Dashboard'} />
      <div className="homeContainer">
        <Navbar />
        <Breadcrumb breadcrumbs={breadcrumbs} title={'Dashboard'} />
        <Charts />
        <Datatable />
      </div>
    </div>
  )
}

export default Home
