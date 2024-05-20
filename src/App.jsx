import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import Home from './pages/Home'


function App() {

  return (
   <div>
    <Header />
   <Home />
    <Footer />
   </div>
  )
}

export default App
