import { Grid, Typography } from '@mui/material'
import React from 'react'
import LoginBase from '../components/LoginBase'
import LoginForm from '../components/LoginForm'

const LoginPages = () => {
  return (
    <div className="Login">
      <LoginBase />
      <div className="content">
        <Grid direction="column" alignItems="center" justifyContent="center">
          <Grid item className="header">
            <div className="car-vector"></div>
            <Typography variant="h4" sx={{ my: 3 }}>
              Welcome, Admin BCR
            </Typography>
          </Grid>
          <Grid item>
            <LoginForm />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default LoginPages
