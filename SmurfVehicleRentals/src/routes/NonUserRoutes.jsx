import React from 'react'
import '../index.css';
import '../components/hero'
import Home from '../pages/Home'
import Login from '../pages/Login'
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';


export default function NonUserRoutes() {
  return (
    <>
    <div className='container'>

    <Navbar/>
    </div>

    <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/*' element = {<Home/>}/>
    </Routes>
    


    </>
  )
}
