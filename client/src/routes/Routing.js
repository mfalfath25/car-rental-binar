import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'

import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'
import SearchPage from '../pages/SearchPage'
import DetailPage from '../pages/DetailPage'
import PaymentPage from '../pages/PaymentPage'
import RegisterPage from '../pages/RegisterPage'
import Home from '../pages/dashboard/home/Home'
import Protected from '../pages/Protected'
import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import Cars from '../pages/dashboard/cars/Cars'
import InvoicePage from '../pages/InvoicePage'

export const Data = createContext()

const Routing = () => {
  const [user, setUser] = useState(null)
  const [cars, setCars] = useState([])

  const getUser = async () => {
    try {
      await axios
        .get('http://localhost:5000/auth/login/success', {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': true,
          },
        })
        .then((res) => {
          setUser(res.data)
        })
    } catch (err) {
      console.log(err)
    }
  }

  const getCar = async () => {
    try {
      await axios.get('http://localhost:5000/car/').then((res) => {
        setCars(res.data)
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUser()
    getCar()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // console.log('STATE USER: ', user)

  return (
    <BrowserRouter>
      <Data.Provider value={{ user, cars }}>
        <Routes>
          <Route path="/login" element={user ? <Navigate to={'/main'} /> : <LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/protected" element={<Protected saveUser={(user) => setUser(user)} />} />
          {user ? (
            <>
              <Route path="/dashboard" element={<Home />} />
              <Route path="/dashboard/cars" element={<Cars />} />
              <Route path="/dashboard/cars/edit/:id" element={<Cars />} />
              <Route path="/dashboard/cars/add-new" element={<Cars />} />
              <Route path="/main" element={<MainPage />} />
              <Route path="/main/search" element={<SearchPage />} />
              <Route path="/main/search/detail/:id" element={<DetailPage />} />
              <Route path="/main/pembayaran/:id" element={<PaymentPage />} />
              <Route path="/main/pembayaran/invoice/:id" element={<InvoicePage />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: '1rem' }}>
                    <h1>404</h1>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </Data.Provider>
    </BrowserRouter>
  )
}

export default Routing
