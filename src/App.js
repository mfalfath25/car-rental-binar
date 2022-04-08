import './styles/App.sass'
import { Theme } from './styles/Theme'
import { ThemeProvider } from '@mui/system'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import SearchPage from './pages/SearchPage'
import DetailPage from './pages/DetailPage'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/main/search" element={<SearchPage />} />
            <Route path="/main/search/detail/:id" element={<DetailPage />} />
            <Route path="/" element={<Navigate to="/login" />} />
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
