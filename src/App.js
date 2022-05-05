import './styles/App.sass'
import { Theme } from './styles/Theme'
import { ThemeProvider } from '@mui/system'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import SearchPage from './pages/SearchPage'
import DetailPage from './pages/DetailPage'
import PaymentPage from './pages/PaymentPage'
import RegisterPage from './pages/RegisterPage'

// function PrivateRoute({ children }) {
//   const auth = localStorage.getItem('user');
//   return auth !== null ? children : <Navigate to="/login" />;
// }

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/main/search" element={<SearchPage />} />
            <Route path="/main/search/detail/:id" element={<DetailPage />} />
            <Route path="/main/pembayaran/:id" element={<PaymentPage />} />
            <Route
              path="*"
              element={
                <main style={{ padding: '1rem' }}>
                  <h1>404</h1>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
