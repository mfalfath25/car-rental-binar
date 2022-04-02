import './styles/App.sass'
import { Theme } from './styles/Theme'
import { ThemeProvider } from '@mui/system'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
// import TestPage from './pages/TestPage'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Main" element={<MainPage />} />
            {/* <Route path="/test" element={<TestPage />} /> */}
            {/* <Route path="/dash" element={<DashboardPage />} /> */}
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
