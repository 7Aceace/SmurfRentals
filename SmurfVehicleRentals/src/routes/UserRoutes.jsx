import React from 'react'
import Listings from '../pages/Listings'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Navbar from '../components/Navbar/Navbar'
import UserDashboard from '../pages/UserDashboard'
import AdminDashboard from '../pages/AdminDashboard'


export default function UserRoutes() {
  return (
    <>
   
      <div className='container'>
      <h1>LOGGEDIN</h1>
      <Navbar/>
      </div>
    
    <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/Vehicles' element = {<Listings/>}/>
    <Route path='/login' element = {<Login/>}/>
    <Route path='/*' element = {<Home/>}/>
    <Route path='/User' element={<UserDashboard/>}/>
    <Route path='admin-dashboard' elemen0={<AdminDashboard/>}/>
    </Routes>
    </>
  )
}
