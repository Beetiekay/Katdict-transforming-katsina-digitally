import React from 'react'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <BrowserRouter>
     <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
     </Routes>
   </BrowserRouter>
  )
}
