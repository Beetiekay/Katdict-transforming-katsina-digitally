import React from 'react'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Focusarea from './pages/Focusarea/Focusarea'
import Wedo from './components/Wedo'
import Allworks from './components/Allworks'
import Recent from './pages/Update/Recent'
import Ktlevelup from './components/Ktlevelup'
import Hakck from './components/Hakck'
import Eyeonkt from './components/Eyeonkt'
import Kdb from './components/Kdb'
import Katsinadts from './components/Katsinadts'
import Agpopup from './components/Agpopup'
import DarkTheme from './components/DarkTheme'
import Pageload from './components/Pageload'
import API from './components/Api'


export default function App() {
  return (
    <BrowserRouter>
    <DarkTheme/>
     <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/focus" element={<Focusarea/>}/>
          <Route path="/recent" element={<Recent/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/more" element={<Wedo/>}/>
          <Route path="/all works" element={<Allworks/>}/>
          <Route path="/eyeonkt" element={<Eyeonkt/>}/>
          <Route path="/ktdatasolution" element={<Katsinadts/>}/>
          <Route path="/kdb" element={<Kdb/>}/>
          <Route path="/levelup" element={<Ktlevelup/>}/>
          <Route path="/hackatsina" element={<Hakck/>}/>
          <Route path="/sample" element={<API/>}/>
     </Routes>
      <Pageload/>
     <Agpopup/>
   </BrowserRouter>
  )
}
