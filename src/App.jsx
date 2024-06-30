import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes}  from "react-router-dom"
import  Home  from './views/Home/Home'
import { Landing } from './views/Landing/Landing'
import { NavBar } from './components/NavBar/NavBar'

function App() {

  return (
    <>
     <NavBar/>
        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/Nav" Component={NavBar}/>
        </Routes>
      
    </>
  )
}

export default App
