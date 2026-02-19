import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import About from './components/sections/About'
import Footer from './components/layout/Footer'
import Testimonials from './components/sections/Testimonials'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    <About />
    <Testimonials />
    <Footer />
    </>
  )
}

export default App
