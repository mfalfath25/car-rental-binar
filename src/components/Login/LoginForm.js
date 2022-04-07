import React, { useState } from 'react'
import { FormControl, OutlinedInput, Button, Typography } from '@mui/material'
import axios from 'axios'

const LoginForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
    axios
      .post('https://rent-cars-api.herokuapp.com/admin/auth/login', data)
      .then((response) => {
        console.log(response.status)
        console.log(response.data.token)
        if (response.status === 201) {
          localStorage.setItem('token', response.data.token)
          window.location.href = '/main'
        }
      })
  }

  return (
    <div className="LoginForm">
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
          />
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
          />
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, py: 1 }}
        >
          Sign In
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
