import React from 'react'
import { Breadcrumbs, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

const Breadcrumb = (props) => {
  return (
    <>
      {props ? (
        <Box padding={props.breadcrumbs.length === 0 ? 0 : 2}>
          <Breadcrumbs separator={<FiChevronRight />} aria-label="breadcrumb">
            {props.breadcrumbs.map((item) => {
              return (
                <Link
                  underline="hover"
                  key={item.key}
                  to={item.link}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {item.name}
                </Link>
              )
            })}
          </Breadcrumbs>
        </Box>
      ) : null}
      <Box sx={{ padding: '8px 16px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {props.title}
        </Typography>
      </Box>
    </>
  )
}

export default Breadcrumb
