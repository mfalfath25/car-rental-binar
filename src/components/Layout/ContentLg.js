import { Container } from '@mui/material'
import React from 'react'

const ContentLg = ({ children }) => {
  return (
    <>
      <Container maxWidth="lg">{children}</Container>
    </>
  )
}

export default ContentLg
