import React from 'react'
import { Button, FormHelperText, Stack, TextField, Typography } from '@mui/material'
import { FiUpload } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const AddForm = () => {
  const navigate = useNavigate()

  return (
    <form>
      <Stack padding={2}>
        <Stack
          direction="row"
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography variant="body1" sx={{ minWidth: '140px', pr: '16px' }}>
            Nama
          </Typography>
          <TextField variant="outlined" size="small" sx={{ minWidth: '400px' }} />
        </Stack>
        <Stack
          direction="row"
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography variant="body1" sx={{ minWidth: '140px', pr: '16px' }}>
            Harga
          </Typography>
          <TextField variant="outlined" size="small" sx={{ minWidth: '400px' }} />
        </Stack>
        <Stack
          direction="row"
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Typography variant="body1" sx={{ minWidth: '140px', pr: '16px', pb: '20px' }}>
            Foto
          </Typography>
          <div>
            <TextField
              label={<FiUpload />}
              shrink={false}
              variant="outlined"
              size="small"
              sx={{ minWidth: '400px' }}
            />
            <FormHelperText id="component-helper-text">File size max. 2MB</FormHelperText>
          </div>
        </Stack>

        <Stack
          direction="row"
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Typography variant="body1" sx={{ minWidth: '140px', pr: '16px' }}>
            Start Rent
          </Typography>
          <Typography variant="body1">-</Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Typography variant="body1" sx={{ minWidth: '140px', pr: '16px' }}>
            Finish Rent
          </Typography>
          <Typography variant="body1">-</Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Typography variant="body1" sx={{ minWidth: '140px', pr: '16px' }}>
            Created At
          </Typography>
          <Typography variant="body1">-</Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Typography variant="body1" sx={{ minWidth: '140px', pr: '16px' }}>
            Updated At
          </Typography>
          <Typography variant="body1">-</Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            size="large"
            disableElevation
            sx={{ textTransform: 'none', fontWeight: 'bold' }}
            onClick={() => {
              navigate('/cars')
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="large"
            disableElevation
            sx={{ textTransform: 'none', fontWeight: 'bold' }}
            // onClick={() => {
            //   navigate('/cars/add-new')
            // }}
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}

export default AddForm
