import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import Login from './Login'
import Register from './Register'
import './App.css'

function App() {
  const [view, setView] = useState('home')

  return (
    <>
      <Navbar setView={setView} />

      {view === 'home' && <Home />}
      {view === 'login' && <Login />}
      {view === 'register' && <Register />}

      <Footer />
    </>
  )
}

export default App