import React, { useEffect, useRef, useState } from 'react'
import {
  FormControl,
  OutlinedInput,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Box,
  FormControlLabel,
  Checkbox,
  Link,
} from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  const navigate = useNavigate()
  const timer = useRef()
  const baseURL = 'https://rent-cars-api.herokuapp.com'
  const [registerAsAdmin, setRegisterAsAdmin] = useState(false)
  const [isAdmin, setIsAdmin] = useState('customer')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({
    info: '',
    type: '',
  })
  const [dataCustomer, setDataCustomer] = useState({
    email: '',
    password: '',
  })
  const [dataAdmin, setDataAdmin] = useState({
    email: '',
    password: '',
    role: 'admin',
  })

  const handleToggle = (e) => {
    setRegisterAsAdmin(e.target.checked ? true : false)
    setIsAdmin(e.target.checked ? 'admin' : 'customer')
  }

  const handleChange = (e) => {
    const value = e.target.value
    if (registerAsAdmin === true) {
      setDataAdmin({
        ...dataAdmin,
        [e.target.name]: value,
      })
    } else {
      setDataCustomer({
        ...dataCustomer,
        [e.target.name]: value,
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    if (registerAsAdmin === true) {
      data.set('email', String(dataAdmin.email))
      data.set('password', String(dataAdmin.password))
      data.set('role', String(dataAdmin.role))
    } else {
      data.set('email', String(dataCustomer.email))
      data.set('password', String(dataCustomer.password))
      data.delete('role')
    }
    console.log(
      'FormData: has admin role? ',
      data.has('role'),
      'post to:',
      isAdmin
    )
    try {
      await axios
        .post(`${baseURL}/${isAdmin}/auth/register`, data)
        .then((res) => {
          if (res.status === 201) {
            if (!loading) {
              setLoading(true)
              timer.current = setTimeout(() => {
                setMessage({ info: 'Register Successful', type: 'success' })
              }, 1000)
              timer.current = setTimeout(() => {
                setLoading(false)
                navigate('/login')
              }, 2000)
            }
          }
        })
    } catch (error) {
      // console.log(error)
      if (error.response.status === 400) {
        if (!loading) {
          setLoading(true)
          timer.current = setTimeout(() => {
            setLoading(false)
            setMessage({
              info: 'Invalid format / Email already exist',
              type: 'warning',
            })
          }, 2000)
        }
      }
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(timer.current)
    }
  }, [])

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
          <OutlinedInput
            id="pass-input"
            type="password"
            name="password"
            placeholder="6+ Karakter"
            size="small"
            onChange={handleChange}
            required={true}
          />
        </FormControl>
        <FormControl fullWidth>
          <FormControlLabel
            sx={{ m: 0, pt: 2, justifyContent: 'start' }}
            variant="h6"
            label="Register as Admin"
            labelPlacement="start"
            control={
              <Checkbox checked={registerAsAdmin} onChange={handleToggle} />
            }
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
            Register
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
      <Box sx={{ pt: 2 }}>
        <Link href="login" underline="hover">
          {'Already have account? Login'}
        </Link>
      </Box>
    </div>
  )
}

export default RegisterForm
