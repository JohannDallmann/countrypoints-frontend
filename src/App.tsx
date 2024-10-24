import { BrowserRouter as Router } from 'react-router-dom'
import './assets/css/App.css'
import Navbar from './routing/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  )
}

export default App
