import React, { useEffect, useRef, useState } from 'react'
import { FormControl, OutlinedInput, Button, Typography, Alert, CircularProgress, Box, Link, Stack } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

const LoginForm = () => {
  const navigate = useNavigate()
  const timer = useRef()
  const BaseURL = 'http://localhost:5000'
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({
    info: '',
    type: '',
  })
  // const [data, setData] = useState({
  //   email: '',
  //   password: '',
  // })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const handleChange = (e) => {
  //   const value = e.target.value
  //   setData({
  //     ...data,
  //     [e.target.name]: value,
  //   })
  // }

  useEffect(() => {
    // return () => {
    //   clearTimeout(timer.current)
    // }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(data.email, data.password)
    console.log(email, password)

    await axios
      .post(`${BaseURL}/login`, { email, password })
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.data.token))
        console.log(res)
        navigate('/protected')
      })
      .catch((err) => {
        console.log(err)
      })
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
            onChange={(event) => setEmail(event.target.value)}
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
            onChange={(event) => setPassword(event.target.value)}
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
        <Button variant="outlined" startIcon={<FcGoogle />} onClick={googleAuth}>
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
