import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './app.scss'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <div id='Footer'>
          <Footer />
        </div>
      </Router>
      {/* <Home /> */}
    </>
  )
}

export default App
