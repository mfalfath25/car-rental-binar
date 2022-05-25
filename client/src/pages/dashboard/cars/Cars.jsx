import React, { useEffect, useState } from 'react'
import './cars.scss'
import Breadcrumb from '../../../components/DashboardNew/breadcrumb/Breadcrumb'
import Navbar from '../../../components/DashboardNew/navbar/Navbar'
import Sidebar from '../../../components/DashboardNew/sidebar/Sidebar'
import SidebarExtend from '../../../components/DashboardNew/sidebar/SidebarExtend'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Alert, Box, Button, ButtonGroup, Grid, Stack } from '@mui/material'
import { FiPlus } from 'react-icons/fi'
import CarCard from '../../../components/DashboardNew/cards/CarCard'
import AddForm from '../../../components/DashboardNew/forms/AddForm'
import axios from 'axios'
import EditForm from '../../../components/DashboardNew/forms/EditForm'

const Cars = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams()
  const { pathname } = location
  const [breadcrumbs, setBreadcrumbs] = useState([])
  const [cars, setCars] = useState([])
  const [deleted, setDeleted] = useState(false)
  const [message, setMessage] = useState({
    info: '',
    type: '',
  })

  const handlePath = (path) => {
    switch (path) {
      case '/dashboard/cars':
        setBreadcrumbs([
          {
            key: '1',
            name: 'Cars',
            link: '/dashboard/cars',
          },
          {
            key: '2',
            name: 'List Car',
            link: '/dashboard/cars',
          },
        ])
        break
      case '/dashboard/cars/add-new':
        setBreadcrumbs([
          {
            key: '1',
            name: 'Cars',
            link: '/dashboard/cars',
          },
          {
            key: '2',
            name: 'List Car',
            link: '/dashboard/cars',
          },
          {
            key: '3',
            name: 'Add New Car',
            link: '/dashboard/cars/add-new',
          },
        ])
        break
      default:
        setBreadcrumbs([])
        break
    }
  }

  const fetchData = async () => {
    await axios
      .get('http://localhost:5000/car')
      .then((res) => {
        setCars(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // deleted === true? fetchData() : null

  useEffect(() => {
    handlePath(pathname)
    fetchData()
    // setMessage({ info: 'Hai', type: 'success' })
    // console.log(cars)
  }, [pathname])

  // console.log('PATH now: ', pathname)
  // console.log('PATH :id: ', id)
  console.log(pathname)
  // console.log(cars)
  console.log('TRUE GAK?', deleted)

  return (
    <div className="cars">
      <Sidebar />
      <SidebarExtend title={'CARS'} subtitle={'List Car'} />
      <div className="carsContainer">
        <Navbar />
        {pathname === '/dashboard/cars' ? (
          <>
            <Breadcrumb breadcrumbs={breadcrumbs} title={'List Car'} />
            {message.type ? (
              <Alert
                severity={message.type}
                sx={{ mx: 2, maxWidth: '524px' }}
                onClose={() => {
                  setMessage({ info: '', type: '' })
                }}
              >
                {message.info}
              </Alert>
            ) : null}
            <Stack direction="row" padding={2} sx={{ justifyContent: 'space-between' }}>
              <Stack>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                  <Button>All</Button>
                  <Button>Small</Button>
                  <Button>Medium</Button>
                  <Button>Large</Button>
                </ButtonGroup>
              </Stack>
              <Button
                variant="contained"
                disableElevation
                startIcon={<FiPlus />}
                onClick={() => {
                  navigate('/dashboard/cars/add-new')
                }}
              >
                Add New Car
              </Button>
            </Stack>
            <Box padding={2}>
              <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                {cars?.map((cars, id) => (
                  <Grid item xs={6} lg={4} xl={3} key={id}>
                    <CarCard
                      car={cars}
                      alertMessage={message}
                      deletes={(deleted) => setDeleted(deleted)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </>
        ) : null}
        {pathname === '/dashboard/cars/add-new' ? (
          <>
            <Breadcrumb breadcrumbs={breadcrumbs} title={'Add New Car'} />
            <AddForm />
          </>
        ) : null}
        {pathname === `/dashboard/cars/edit/${id}` ? (
          <>
            <Breadcrumb breadcrumbs={breadcrumbs} title={'Edit Car Data'} />
            <EditForm car={cars} />
          </>
        ) : null}
      </div>
    </div>
  )
}

export default Cars
