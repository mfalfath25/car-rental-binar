import React, { useEffect, useRef, useState } from 'react';
import {
  FormControl,
  OutlinedInput,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Box,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const timer = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState();
  const [message, setMessage] = useState({
    info: '',
    type: '',
  });
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    try {
      await axios
        .post('https://rent-cars-api.herokuapp.com/admin/auth/login', data)
        .then((res) => {
          if (res.status === 201) {
            setUser({ id: '1', role: 'admin' });
            localStorage.setItem('user', JSON.stringify(user));
            if (!loading) {
              setSuccess(false);
              setLoading(true);
              setMessage({ info: 'Login Successful', type: 'success' });
              timer.current = setTimeout(() => {
                setSuccess(true);
                setLoading(false);
                navigate('/main');
              }, 2000);
            }
          }
        });
    } catch (error) {
      if (error.response.status === 400) {
        if (!loading) {
          setSuccess(false);
          setLoading(true);
          timer.current = setTimeout(() => {
            setSuccess(true);
            setLoading(false);
            setMessage({
              info: 'Invalid credentials: Wrong Password',
              type: 'warning',
            });
          }, 2000);
        }
      } else if (error.response.status === 404) {
        if (!loading) {
          setSuccess(false);
          setLoading(true);
          timer.current = setTimeout(() => {
            setSuccess(true);
            setLoading(false);
            setMessage({
              info: 'Invalid credentials: Email Not Found',
              type: 'warning',
            });
          }, 2000);
        }
      }
    }
  };

  return (
    <div className="LoginForm">
      {message ? (
        <Alert severity={message.type} sx={{ mb: 2 }}>
          {message.info}
        </Alert>
      ) : null}

      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <Typography variant="h6">Email</Typography>
          <OutlinedInput
            id="email-input"
            type="email"
            name="email"
            placeholder="Contoh: johndee@gmail.com"
            size="small"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Password
          </Typography>
          <OutlinedInput
            id="pass-input"
            type="password"
            name="password"
            placeholder="6+ Karakter"
            size="small"
            onChange={handleChange}
          />
        </FormControl>
        <Box sx={{ position: 'relative' }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{ mt: 3, py: 1 }}
          >
            Sign In
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: '#1a90ff',
                position: 'absolute',
                top: '50%',
                left: '48%',
              }}
            />
          )}
        </Box>
      </form>
    </div>
  );
};

export default LoginForm;
