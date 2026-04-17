import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Portfolio from './Pages/Portfolio'
import Pricing from './Pages/Pricing'
import Testimonials from './Pages/Testimonials'
import Blog from './Pages/Blog'
import BlogDetails from './Pages/BlogDetails'
import Teams from './Pages/Teams'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />  
      <main className='flex-1 pt-24 min-h-screen bg-gray-50 flex flex-col'>
        <div className="w-full h-full flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-details" element={<BlogDetails />} />
            <Route path="/team" element={<Teams />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App