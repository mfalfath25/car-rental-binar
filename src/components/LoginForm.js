import React from 'react'
import { FormControl, OutlinedInput, Button, Typography } from '@mui/material'

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <Typography variant="h6">Email</Typography>
          <OutlinedInput
            id="email-input"
            name="email"
            placeholder="Contoh: johndee@gmail.com"
            size="small"
          />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Password
          </Typography>
          <OutlinedInput
            id="pass-input"
            name="password"
            placeholder="6+ Karakter"
            size="small"
          />
          <Button />
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
