import React, { useEffect } from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from '@mui/material'
import { FiUsers, FiSettings, FiCalendar } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setButton, fetchItems } from '../../redux/actions/itemActions'
import { getYear } from '../../utils/getYear'
import { formatDate } from '../../utils/formatDate'

const ItemCard = (props) => {
  const bt = useSelector((state) => state.buttonText.buttonText)
  const data = useSelector((state) => state.items.items)
  // const dataCar = useSelector((state) => state.cars.cars);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const datafull = [data, dataCar];

  useEffect(() => {
    dispatch(setButton('Pilih Mobil'))
    dispatch(fetchItems())
    // dispatch(fetchCars());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(data)
  const handleCard = (id) => {
    const path = `detail/${id}`
    navigate(path)
  }

  return (
    <>
      {typeof data !== 'undefined' ? (
        data
          ?.filter(
            (item) =>
              item.name.includes(props.search.tipeMobil) &&
              item.type.includes(props.search.ukuranMobil) &&
              item.model.includes(props.search.modelMobil) &&
              item.passenger.includes(props.search.jumlahPenumpang)
          )
          .map((item) => (
            <Grid item xs={4} key={item._id}>
              <Card
                variant="outlined"
                sx={{
                  display: 'flex',
                  height: '100%',
                  maxWidth: '333px',
                }}
              >
                <Box
                  sx={{
                    m: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <CardContent sx={{ p: '8px' }}>
                    <img
                      src={`/uploads/${item.image}`}
                      alt="card-img"
                      style={{ width: '100%', maxHeight: 240 }}
                    />
                    <Typography variant="body1">
                      {item.name} / {item.type}
                    </Typography>

                    <Typography sx={{ fontSize: '18px', fontWeight: 'bold', my: 1 }}>
                      Rp. {Number(item.price).toLocaleString()} / hari
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      {item.description}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <FiUsers />
                      <Typography variant="body1" sx={{ ml: 1 }}>
                        {item.passenger} orang
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <FiSettings />
                      <Typography variant="body1" sx={{ ml: 1 }}>
                        {item.model}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <FiCalendar />
                      <Typography variant="body1" sx={{ ml: 1 }}>
                        {formatDate(item.startRent)} - {formatDate(item.finishRent)}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ mt: 'auto' }}>
                    <Button
                      fullWidth
                      size="large"
                      variant="contained"
                      sx={{
                        fontWeight: 'bold',
                        background: '#5CB85F',
                      }}
                      onClick={() => handleCard(item._id)}
                    >
                      {bt}
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
          ))
      ) : (
        <Box sx={{ display: 'flex', mx: 'auto' }}>
          <CircularProgress />
        </Box>
      )}
    </>
  )
}

export default ItemCard
