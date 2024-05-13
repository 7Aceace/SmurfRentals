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
<<<<<<< HEAD

=======
import Bookings from '../pages/Bookings'
import TermsandConditions from '../components/component/TermsandConditions'
<<<<<<< HEAD
import { Blogs2 } from '../components/component/Blogs2'
import { Blogs3 } from '../components/component/Blogs3'
=======
>>>>>>> 1d922b656e1b670cb808d5994bc3887d2fe776c4
>>>>>>> e9510d802e39fc816813e7bfc24b9111641a2d2d
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
    <Route path='/Bookings' element ={<Bookings/>}/>
    <Route path='ContactUs' element={<Contact/>}/>
    <Route path='/login' element = {<Login/>}/>
    <Route path='/*' element = {<Home/>}/>
    <Route path='/User' element={<UserDashboard/>}/>
    <Route path='/Rentals' element={<Rentals/>}/>
    <Route path='admin-dashboard' element={<AdminDashboard/>}/>
    <Route path='/FAQ' element={<FAQv/>}/>
    <Route path='/Blogs' element={<Blogs/>}/>
    <Route path='/TermsandConditions' element={<TermsandConditions/>}/>
    <Route path='/TouristSpot:Cambugahay' element={<Blogs/>}/>
    <Route path='/TravelHacks' element={<Blogs2/>}/>
    <Route path='/Guide' element={<Blogs3/>}/>
    </Routes>
   
    </>
  )
}
