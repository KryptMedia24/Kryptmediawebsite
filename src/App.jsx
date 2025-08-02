import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/hero'
import Services from './pages/Services'
import About from './pages/About'
import Testimonial from './pages/Testimonial'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <>
    <div className="min-h-screen bg-black text-white">
      
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Testimonial />
      <Contact />
    </div>
 
    </>
  )
}

export default App
