import { Container } from '@mui/material'
import React from 'react'

const Content = ({ children }) => {
  return (
    <>
      <Container maxWidth="xl">{children}</Container>
    </>
  )
}

export default Content
