import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/hero'
import Services from './pages/Services'

function App() {
  return (
    <>
    <div className="min-h-screen bg-black text-white">
      
      <Navbar />
      <Hero />
      <Services />
    </div>
 
    </>
  )
}

export default App
