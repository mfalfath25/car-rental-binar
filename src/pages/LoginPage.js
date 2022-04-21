import { Grid, Typography } from '@mui/material';
import React from 'react';
import LoginBase from '../components/Login/LoginBase';
import LoginForm from '../components/Login/LoginForm';

const LoginPage = () => {
  return (
    <div className="Login">
      <LoginBase />
      <div className="content">
        <Grid alignItems="center" justifyContent="center">
          <Grid item className="header">
            <div className="car-vector"></div>
            <Typography variant="h5" sx={{ my: 3, fontWeight: 'bold' }}>
              Welcome, Admin BCR
            </Typography>
          </Grid>
          <Grid item>
            <LoginForm />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LoginPage;
