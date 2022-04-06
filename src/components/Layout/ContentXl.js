import { Container } from '@mui/material'
import React from 'react'

const ContentXl = ({ children }) => {
  return (
    <>
      <Container maxWidth="xl">{children}</Container>
    </>
  )
}

export default ContentXl
