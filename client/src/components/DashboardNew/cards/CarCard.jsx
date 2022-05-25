import React, { useState } from 'react'
import './carcard.scss'
import { Button, Card, CardActions, CardContent, Typography, Stack, Modal } from '@mui/material'
import { FiKey, FiClock, FiTrash, FiEdit } from 'react-icons/fi'
import { Box } from '@mui/system'
import { toRupiah } from '../../../utils/toRupiah'
import { formatDate } from '../../../utils/formatDate'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 280,
  bgcolor: '#fff',
  borderRadius: 2,
  p: 4,
}

const CarCard = (props) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  // console.log(props.alertMessage)
  const handleClose = () => setOpen(false)

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/car/delete/${props.car._id}`).then((res) => {
      console.log(res)
      props.deletes(true)
      props.setCars((items) => items.filter((item) => item._id !== props.car._id))
      handleClose()
      // window.location.reload()
    })
  }

  return (
    <>
      <Card variant="outlined" sx={{ maxWidth: 350, minWidth: 285, maxHeight: 480 }}>
        <CardContent>
          <img
            src={`/uploads/${props.car.image}`}
            alt=""
            style={{ width: '100%', maxHeight: 240 }}
          />
          <Typography sx={{ fontWeight: 'bold', fontSize: 14, padding: '8px 0' }}>
            {props.car.name} / {props.car.type}
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ fontWeight: 'bold', paddingBottom: '16px' }}
          >
            {toRupiah(props.car.price)} / hari
          </Typography>
          <Stack direction="row" spacing={1} alignItems={'center'} sx={{ paddingBottom: '8px' }}>
            <FiKey size={16} color={'#8A8A8A'} />
            <Typography variant="body2">
              {formatDate(props.car.startRent)} - {formatDate(props.car.finishRent)}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems={'center'}>
            <FiClock size={16} color={'#8A8A8A'} />
            <Typography variant="body2">Updated at {formatDate(props.car.updatedAt)}</Typography>
          </Stack>
        </CardContent>
        <CardActions sx={{ padding: 0 }}>
          <Box sx={{ width: '100%', padding: '0 16px 16px 16px' }}>
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between' }}>
              <Button
                fullWidth
                variant="outlined"
                size="large"
                disableElevation
                startIcon={<FiTrash />}
                color="error"
                sx={{ color: '#FA2C5A', textTransform: 'none', fontWeight: 'bold' }}
                onClick={handleOpen}
              >
                Delete
              </Button>
              <Button
                fullWidth
                variant="contained"
                size="large"
                disableElevation
                startIcon={<FiEdit />}
                color="success"
                sx={{ background: '#5CB85F', textTransform: 'none', fontWeight: 'bold' }}
                onClick={() => {
                  navigate(`/dashboard/cars/edit/${props.car._id}`)
                }}
              >
                Edit
              </Button>
            </Stack>
          </Box>
        </CardActions>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Stack
              direction="column"
              spacing={2}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <img
                src={require('../../../assets/dashboard/deleteModal.png')}
                alt=""
                className="avatar"
                style={{ width: 'auto', maxHeight: 160 }}
              />
              <Typography
                id="modal-modal-title"
                variant="body1"
                component="h2"
                sx={{ fontWeight: 'bold' }}
              >
                Menghapus Data Mobil
              </Typography>
              <Typography
                id="modal-modal-description"
                variant="body2"
                sx={{ mt: 2, textAlign: 'center' }}
              >
                Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus data{' '}
                {props.car._id}?
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  // type="submit"
                  onClick={handleDelete}
                  disableElevation
                  sx={{ textTransform: 'none', fontWeight: 'bold' }}
                >
                  Ya
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  disableElevation
                  sx={{ textTransform: 'none', fontWeight: 'bold' }}
                  onClick={handleClose}
                >
                  Tidak
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default CarCard
