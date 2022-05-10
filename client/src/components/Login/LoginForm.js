import React, { useEffect, useRef, useState } from 'react'
import {
  FormControl,
  OutlinedInput,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Box,
  Link,
  Stack,
} from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

const LoginForm = () => {
  const navigate = useNavigate()
  const timer = useRef()
  const baseURL = 'https://rent-cars-api.herokuapp.com'
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState()
  const [message, setMessage] = useState({
    info: '',
    type: '',
  })
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const value = e.target.value
    setData({
      ...data,
      [e.target.name]: value,
    })
  }

  useEffect(() => {
    return () => {
      clearTimeout(timer.current)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // })
    try {
      await axios.post(`${baseURL}/admin/auth/login`, data).then((res) => {
        if (res.status === 201) {
          setUser({ id: '1', role: 'admin' })
          localStorage.setItem('user', JSON.stringify(user.role))
          if (!loading) {
            setLoading(true)
            timer.current = setTimeout(() => {
              setMessage({ info: 'Login Successful', type: 'success' })
            }, 1000)
            timer.current = setTimeout(() => {
              setLoading(false)
              navigate('/main')
            }, 2000)
          }
        }
      })
    } catch (error) {
      if (error.response.status === 400) {
        if (!loading) {
          setLoading(true)
          timer.current = setTimeout(() => {
            setLoading(false)
            setMessage({
              info: 'Invalid credentials: Wrong Password',
              type: 'warning',
            })
          }, 2000)
        }
      } else if (error.response.status === 404) {
        if (!loading) {
          setLoading(true)
          timer.current = setTimeout(() => {
            setLoading(false)
            setMessage({
              info: 'Invalid credentials: Email Not Found',
              type: 'warning',
            })
          }, 2000)
        }
      }
    }
  }

  const googleAuth = () => {
    window.open('http://localhost:5000/auth/google', '_self')
  }

  return (
    <div className="LoginForm">
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
            role="input-email"
          />
        </FormControl>
        <FormControl fullWidth>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Password
          </Typography>
          <OutlinedInput
            id="pass-input"
            type="password"
            name="password"
            placeholder="6+ Karakter"
            size="small"
            onChange={handleChange}
            role="input-password"
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
            role="button-login"
          >
            Sign In
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
        <Link href="register" underline="hover">
          {'Create account? Register'}
        </Link>
        <Button
          variant="outlined"
          startIcon={<FcGoogle />}
          onClick={googleAuth}
        >
          Sign In with Google
        </Button>
        <Button variant="outlined" startIcon={<FaGithub />}>
          Sign In with Github
        </Button>
      </Stack>
    </div>
  )
}

export default LoginForm
