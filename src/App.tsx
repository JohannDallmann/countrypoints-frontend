import { BrowserRouter as Router } from 'react-router-dom'
import './assets/css/App.css'
import Navbar from './routing/Navbar'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <Navbar />
      </ThemeProvider>
      
    </Router>
  )
}

export default App
