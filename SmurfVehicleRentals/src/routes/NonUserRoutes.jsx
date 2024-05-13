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
    <NavigationBar/>
    <div className='container'>

    
    </div>
   
    
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/*' element={<Navigate to='/login' />} /> 
  </Routes>


    </>
  )
}
