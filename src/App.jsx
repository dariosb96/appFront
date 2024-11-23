import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes, useLocation}  from "react-router-dom"
import  Home  from './views/Home/Home'
import { Landing } from './views/Landing/Landing'
import { NavBar } from './components/NavBar/NavBar'
import Create from './views/Create/Create'
import Create_sell from './views/Create_Sell/create_sell'
import Login from './views/Login/Login'
import PrivateRoute from './PrivateRoute'
import Create_user from './views/Create_User/create_user'

function App() {
const location = useLocation();
  return (
    <>
     {location.pathname !== '/' && <NavBar />}
  
        <Routes>
          <Route  path="/" element={ <Login/>}/>
          <Route path="/home" element={<PrivateRoute> <Home/></PrivateRoute> }/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/create_sell" element={<Create_sell/>}/>
          <Route path="/create_user" element={<Create_user/>}/>
         
        </Routes>
    </>
  )
}

export default App
