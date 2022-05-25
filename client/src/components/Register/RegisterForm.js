import React, { useEffect, useState } from 'react'
import { FormControl, OutlinedInput, Button, Typography, Alert, CircularProgress, Box, FormControlLabel, Checkbox, Link, Stack } from '@mui/material'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  const navigate = useNavigate()
  const baseURL = 'http://localhost:5000'
  const [isAdmin, setIsAdmin] = useState('user')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({
    info: '',
    type: '',
  })
  const [registerData, setRegisterData] = useState({
    email: null,
    password: null,
    role: isAdmin,
  })

  const handleChange = (e) => {
    const value = e.target.value
    setRegisterData({ ...registerData, [e.target.name]: value })
  }

  const handleToggle = () => {
    isAdmin === 'user' ? setIsAdmin('admin') : setIsAdmin('user')
    setRegisterData({ ...registerData, role: isAdmin === 'user' ? 'admin' : 'user' })
  }

  // console.log(isAdmin)
  // console.log('Data register ', registerData)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (Object.keys(registerData).length === 0) {
      setMessage({ info: 'Please fill all the fields', type: 'warning' })
    } else {
      await axios
        .post(`${baseURL}/register`, { registerData })
        .then((res) => {
          console.log('submitting registration data: ', res)
          if (!loading) {
            setLoading(true)
            setTimeout(() => {
              setMessage({ info: 'Registration Successful: 200 Success', type: 'success' })
            }, 2000)
            setTimeout(() => {
              navigate('/login')
            }, 1000)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  useEffect(() => {}, [])

  return (
    <div className="RegisterForm">
      {message.type ? (
        <Alert severity={message.type} sx={{ mb: 2 }}>
          {message.info}
        </Alert>
      ) : null}

      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <Typography variant="h6">Email</Typography>
          <OutlinedInput
            id="email-input"
            type="email"
            name="email"
            placeholder="Contoh: johndee@gmail.com"
            size="small"
            onChange={handleChange}
            required={true}
          />
        </FormControl>
        <FormControl fullWidth>
          <Typography variant="h6" sx={{ pt: 2 }}>
            Password
          </Typography>
          <OutlinedInput id="pass-input" type="password" name="password" placeholder="6+ Karakter" size="small" onChange={handleChange} required={true} />
        </FormControl>
        <FormControl fullWidth>
          <FormControlLabel
            sx={{ m: 0, pt: 2, justifyContent: 'start' }}
            variant="h6"
            label="Register as Admin"
            labelPlacement="start"
            control={<Checkbox defaultChecked={false} onChange={handleToggle} />}
          />
        </FormControl>
        <Box sx={{ position: 'relative' }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{
              mt: 3,
              py: 1,
              fontWeight: 'bold',
            }}
          >
            Sign Up
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: '#1a90ff',
                position: 'absolute',
                top: '50%',
                left: '48%',
              }}
            />
          )}
        </Box>
      </form>
      <Stack spacing={2} sx={{ pt: 2 }}>
        <Link href="login" underline="hover">
          {'Already have an account? Login'}
        </Link>
        {/* <Button variant="outlined" startIcon={<FcGoogle />}>
          Sign Up with Google
        </Button>
        <Button variant="outlined" startIcon={<FaGithub />}>
          Sign Up with Github
        </Button> */}
      </Stack>
    </div>
  )
}

export default RegisterForm
