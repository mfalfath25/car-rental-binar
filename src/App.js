import './styles/App.sass'
import { Theme } from './styles/Theme'
import { ThemeProvider } from '@mui/system'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'

import LoginPages from './pages/LoginPages'
import DashboardPages from './pages/DashboardPages'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPages />} />
            <Route path="/dash" element={<DashboardPages />} />
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
