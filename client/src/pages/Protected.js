import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, LinearProgress, Typography } from '@mui/material'

const Protected = (props) => {
  let navigate = useNavigate()

  const fetchData = async () => {
    let token = localStorage.getItem('token')
    await axios
      .get('http://localhost:5000/protected', {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data.user)
        props.saveUser(res.data.user)
        if (res.data.user.role === 'user') {
          navigate('/main')
        } else if (res.data.user.role === 'admin') {
          navigate('/dashboard')
        }
      })
      .catch((err) => {
        console.log(err)
        navigate('/login')
      })
  }

  const fetcherTimeout = () => {
    setTimeout(() => {
      fetchData()
    }, 1000)
  }

  useEffect(() => {
    fetcherTimeout()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography variant="h5" sx={{ mb: 3 }}>
          Authenticating...
        </Typography>
        <Box sx={{ width: '20%' }}>
          <LinearProgress />
        </Box>
      </Box>
    </>
  )
}

export default Protected
