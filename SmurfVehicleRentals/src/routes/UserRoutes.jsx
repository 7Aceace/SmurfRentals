import React from 'react'
import Listings from '../pages/Listings'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Navbar from '../components/Navbar/Navbar'
import UserDashboard from '../pages/UserDashboard'
import AdminDashboard from '../pages/AdminDashboard'
import Rentals from '../pages/Rentals'
import FooterN from '../components/FooterN';
import Contact from '../pages/Contact'
import  FAQv  from '../pages/FAQV'
import  Blogs  from '../pages/BlogsPage'

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
    <Route path='ContactUs' element={<Contact/>}/>
    <Route path='/login' element = {<Login/>}/>
    <Route path='/*' element = {<Home/>}/>
    <Route path='/User' element={<UserDashboard/>}/>
    <Route path='/Rentals' element={<Rentals/>}/>
    <Route path='admin-dashboard' element={<AdminDashboard/>}/>
    <Route path='/FAQ' element={<FAQv/>}/>
    <Route path='/Blogs' element={<Blogs/>}/>
    </Routes>
   
    </>
  )
}
