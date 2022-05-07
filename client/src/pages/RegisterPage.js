import { Grid, Typography } from '@mui/material'
import React from 'react'
import RegisterBase from '../components/Register/RegisterBase'
import RegisterForm from '../components/Register/RegisterForm'

const RegisterPage = () => {
  return (
    <div className="Auth">
      <RegisterBase />
      <div className="content">
        <Grid alignItems="center" justifyContent="center" sx={{ mx: 10 }}>
          <Grid item className="header">
            <div className="car-vector"></div>
            <Typography variant="h5" sx={{ my: 3, fontWeight: 'bold' }}>
              Register your account
            </Typography>
          </Grid>
          <Grid item>
            <RegisterForm />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default RegisterPage
