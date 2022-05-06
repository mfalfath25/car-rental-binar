import './styles/App.sass'
import { Theme } from './styles/Theme'
import { ThemeProvider } from '@mui/system'
import Routing from './routes/Routing'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Routing></Routing>
      </ThemeProvider>
    </div>
  )
}

export default App
