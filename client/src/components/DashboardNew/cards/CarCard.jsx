import React, { useState } from 'react'
import './carcard.scss'
import { Button, Card, CardActions, CardContent, Typography, Stack, Modal } from '@mui/material'
import { FiKey, FiClock, FiTrash, FiEdit } from 'react-icons/fi'
import { Box } from '@mui/system'

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

const CarCard = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Card variant="outlined" sx={{ maxWidth: 350, maxHeight: 480 }}>
        <CardContent>
          <img
            src="https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="avatar"
            style={{ width: '100%', maxHeight: 240 }}
          />
          <Typography sx={{ fontWeight: 'bold', fontSize: 14, padding: '8px 0' }}>
            Nama / Tipe Mobil
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ fontWeight: 'bold', paddingBottom: '16px' }}
          >
            Rp. 430.000 / hari
          </Typography>
          <Stack direction="row" spacing={1} alignItems={'center'} sx={{ paddingBottom: '8px' }}>
            <FiKey size={16} color={'#8A8A8A'} />
            <Typography variant="body2">Start rent - Finish Rent</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems={'center'}>
            <FiClock size={16} color={'#8A8A8A'} />
            <Typography variant="body2">Updated at 4 Apr 2022, 09.00</Typography>
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
                // onClick={() => {
                //   navigate('/cars/add-new')
                // }}
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
                // onClick={() => {
                //   navigate('/cars/add-new')
                // }}
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
                Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  size="large"
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
