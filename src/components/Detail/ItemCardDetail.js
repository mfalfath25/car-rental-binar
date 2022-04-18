import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { FiUsers, FiSettings, FiCalendar } from 'react-icons/fi';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setButton } from '../../redux/actions/itemActions';

const ItemCardDetail = () => {
  const bt = useSelector((state) => state.buttonText.buttonText);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const { id } = useParams();
  const baseUrl = `https://rent-cars-api.herokuapp.com/admin/car/${id}`;

  useEffect(() => {
    getData();
    dispatch(setButton('Lanjutkan pembayaran'));
  });

  const getData = async () => {
    try {
      const response = await axios.get(`${baseUrl}`, {}).then((res) => {
        console.log(res);
        setData(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Grid item sx={{ mb: '4rem' }}>
        <Card variant="outlined" sx={{ maxWidth: '333px' }}>
          <Box sx={{ m: '20px' }}>
            <CardContent sx={{ p: '8px' }}>
              <img className="card-img" src={data.image} alt="card-img" />
              <Typography sx={{ fontSize: '18px', fontWeight: 'bold', my: 1 }}>
                {data.name} / {data.category}
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
                  4 orang
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
                  Manual
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
                  Tahun 2020
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="body1" sx={{ mb: 1, mt: 4 }}>
                  Total
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 'bold', mb: 1, mt: 4 }}
                >
                  Rp. {Number(data.price).toLocaleString()}
                </Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                size="large"
                variant="contained"
                sx={{ fontWeight: 'bold', background: '#5CB85F' }}
              >
                {bt}
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Grid>
    </>
  );
};

export default ItemCardDetail;
