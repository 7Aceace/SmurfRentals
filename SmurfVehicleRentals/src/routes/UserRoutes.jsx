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
import Sitemapp from '../pages/Sitemap'
import Bookings from '../pages/Bookings'
import TermsandConditions from '../components/component/TermsandConditions'
import { Blogs2 } from '../components/component/Blogs2'
import { Blogs3 } from '../components/component/Blogs3'
import { NavigationBar } from '../components/component/navigation-bar'
import AboutUs from '../pages/AboutUs'
export default function UserRoutes() {
  return (
    <>
    
      <NavigationBar/>
    
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
    <Route path='/Sitemap' element = {<Sitemapp/>}/>
    <Route path='/AboutUs' element = {<AboutUs/>}/>
    </Routes>
   
    </>
  )
}
