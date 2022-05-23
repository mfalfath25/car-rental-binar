import React, { useEffect, useState } from 'react'
import './cars.scss'
import Breadcrumb from '../../../components/DashboardNew/breadcrumb/Breadcrumb'
import Navbar from '../../../components/DashboardNew/navbar/Navbar'
import Sidebar from '../../../components/DashboardNew/sidebar/Sidebar'
import SidebarExtend from '../../../components/DashboardNew/sidebar/SidebarExtend'
import { useLocation, useNavigate } from 'react-router-dom'
import { Box, Button, ButtonGroup, Grid, Stack } from '@mui/material'
import { FiPlus } from 'react-icons/fi'
import CarCard from '../../../components/DashboardNew/cards/CarCard'
import AddForm from '../../../components/DashboardNew/forms/AddForm'

const Cars = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const [breadcrumbs, setBreadcrumbs] = useState([])

  const handlePath = (path) => {
    // eslint-disable-next-line default-case
    switch (path) {
      case '/cars':
        setBreadcrumbs([
          {
            key: '1',
            name: 'Cars',
            link: '/cars',
          },
          {
            key: '2',
            name: 'List Car',
            link: '/cars',
          },
        ])
        break
      case '/cars/add-new':
        setBreadcrumbs([
          {
            key: '1',
            name: 'Cars',
            link: '/cars',
          },
          {
            key: '2',
            name: 'List Car',
            link: '/cars',
          },
          {
            key: '3',
            name: 'Add New Car',
            link: '/cars/add-new',
          },
        ])
        break
    }
  }

  useEffect(() => {
    handlePath(pathname)
  }, [pathname])

  return (
    <div className="cars">
      <Sidebar />
      <SidebarExtend title={'CARS'} subtitle={'List Car'} />
      <div className="carsContainer">
        <Navbar />
        {pathname === '/cars' ? (
          <>
            <Breadcrumb breadcrumbs={breadcrumbs} title={'List Car'} />
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
                  navigate('/cars/add-new')
                }}
              >
                Add New Car
              </Button>
            </Stack>
            <Box padding={2}>
              <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                <Grid item xs={6} md={4}>
                  <CarCard />
                </Grid>
                <Grid item xs={6} md={4}>
                  <CarCard />
                </Grid>
                <Grid item xs={6} md={4}>
                  <CarCard />
                </Grid>
              </Grid>
            </Box>
          </>
        ) : null}
        {pathname === '/cars/add-new' ? (
          <>
            <Breadcrumb breadcrumbs={breadcrumbs} title={'Add New Car'} />
            <AddForm />
          </>
        ) : null}
      </div>
    </div>
  )
}

export default Cars
