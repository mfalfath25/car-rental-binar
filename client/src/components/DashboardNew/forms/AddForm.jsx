import React, { useState } from 'react'
import {
  Button,
  FormHelperText,
  MenuItem,
  Select,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material'
// import { FiUpload } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Item = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '16px',
}))

const AddForm = () => {
  const navigate = useNavigate()
  const [fileName, setFileName] = useState('')
  const [car, setCar] = useState({
    name: '',
    type: '',
    price: 0,
    model: '',
    image: fileName,
    description: '',
    passenger: 0,
    startRent: '',
    finishRent: '',
  })

  const handleFile = (e) => {
    setFileName(e.target.files[0])
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setCar({ ...car, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log('FORM DATA', [...data])

    axios
      .post('http://localhost:5000/car/add', data)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <Stack padding={2}>
        <Item>
          <Typography variant="body1" sx={{ minWidth: '140px', pr: '16px' }}>
            Nama
          </Typography>
          <TextField
            onChange={handleChange}
            name="name"
            variant="outlined"
            size="small"
            sx={{ minWidth: '400px' }}
          />
        </Item>
        <Item>
          <Typography variant="body1" sx={{ minWidth: '140px', pr: '16px' }}>
            Tipe
          </Typography>
          <Select
            size="small"
            value={car.type}
            name="type"
            onChange={handleChange}
            sx={{ minWidth: '140px' }}
          >
            <MenuItem value={'small'}>Small</MenuItem>
            <MenuItem value={'medium'}>Medium</MenuItem>
            <MenuItem value={'large'}>Large</MenuItem>
          </Select>
          <Typography variant="body1" sx={{ minWidth: '80px', pl: '40px' }}>
            Model
          </Typography>
          <Select
            size="small"
            value={car.model}
            name="model"
            onChange={handleChange}
            sx={{ minWidth: '140px' }}
          >
            <MenuItem value={'manual'}>Manual</MenuItem>
            <MenuItem value={'automatic'}>Automatic</MenuItem>
          </Select>
        </Item>
        <Item>
          <Typography variant="body1" sx={{ minWidth: '140px', pr: '16px' }}>
            Penumpang
          </Typography>
          <TextField
            onChange={handleChange}
            name="passenger"
            variant="outlined"
            type="number"
            size="small"
            sx={{ minWidth: '400px' }}
          />
        </Item>
        <Item>
          <Typography variant="body1" sx={{ minWidth: '140px', pr: '16px' }}>
            Harga
          </Typography>
          <TextField
            onChange={handleChange}
            name="price"
            variant="outlined"
            type="number"
            size="small"
            sx={{ minWidth: '400px' }}
          />
        </Item>
        <Item>
          <Typography variant="body1" sx={{ minWidth: '140px', pr: '16px' }}>
            Description
          </Typography>
          <TextField
            multiline
            onChange={handleChange}
            name="description"
            variant="outlined"
            size="small"
            sx={{ minWidth: '400px' }}
          />
        </Item>
        <Item>
          <Typography variant="body1" sx={{ minWidth: '140px', pr: '16px', pb: '20px' }}>
            Foto
          </Typography>
          <div>
            <input onChange={handleFile} type="file" filename="image" name="image" />
            <FormHelperText id="component-helper-text">File size max. 2MB</FormHelperText>
          </div>
        </Item>
        <Item sx={{ mb: 3 }}>
          <Typography variant="body1" sx={{ minWidth: '140px', pr: '16px' }}>
            Start Rent
          </Typography>
          <input onChange={handleChange} type="date" name="startRent" id="date" />
          {/* <Typography variant="body1">-</Typography> */}
        </Item>
        <Item sx={{ mb: 3 }}>
          <Typography variant="body1" sx={{ minWidth: '140px', pr: '16px' }}>
            Finish Rent
          </Typography>
          <input onChange={handleChange} type="date" name="finishRent" id="date" />
          {/* <Typography variant="body1">-</Typography> */}
        </Item>
        <Item sx={{ mb: 3 }}>
          <Typography variant="body1" sx={{ minWidth: '140px', pr: '16px' }}>
            Created At
          </Typography>
          <Typography variant="body1">-</Typography>
        </Item>
        <Item sx={{ mb: 3 }}>
          <Typography variant="body1" sx={{ minWidth: '140px', pr: '16px' }}>
            Updated At
          </Typography>
          <Typography variant="body1">-</Typography>
        </Item>
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
            type="submit"
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
