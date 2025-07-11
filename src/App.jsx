import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/hero'
import Services from './pages/Services'
import About from './pages/About'

function App() {
  return (
    <>
    <div className="min-h-screen bg-black text-white">
      
      <Navbar />
      <Hero />
      <Services />
      <About />
    </div>
 
    </>
  )
}

export default App
