import React from 'react'
import '../index.css';
import '../components/hero'
import Home from '../pages/Home'
import Login from '../pages/Login'
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { NavigationBar } from '../components/component/navigation-bar'

export default function NonUserRoutes() {
  return (
    <>
<<<<<<< HEAD
    <NavigationBar/>
    <div className='container'>

    
=======
    <div className='container'> 
    <Navbar/>
>>>>>>> 1d922b656e1b670cb808d5994bc3887d2fe776c4
    </div>
   
    
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/*' element={<Navigate to='/login' />} /> 
  </Routes>


    </>
  )
}
