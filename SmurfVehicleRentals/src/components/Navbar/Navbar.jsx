import React from 'react';
import './Navbar.css'
import logoword from '../../assets/Logocomplete.png'
import searchw from '../../assets/searchw.png'
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { UserAuth } from '../../context/AuthContext';

import { Nav } from 'react-bootstrap';

const Navbar = ({children}) => {
  const {user} = UserAuth();

 return (

    <div className='navbar'>
  
      
          <img src={logoword} alt='' className='logo'></img>
          <ul>
            <li> <Link to = '/'>Home</Link></li>
            <li> <Link to = '/Vehicles'>Vehicles</Link></li>
            <li> <Link to='/ContactUs'>Contact Us</Link></li>
            <li>Book Now</li>
          </ul>
          
          <div className='search-box'>
            <input type='text' placeholder='Search'>
            </input>
            <img src={searchw} alt='' className='logosrchw'></img>
            
          </div>
          <div>
          <ul>
            <li> <Link to ='/Login'> Login</Link></li>
            <li><Link to ='/User'>User</Link></li>
            <li><Link to ='/Rentals'>R</Link></li>
            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'}>Admin Dashboard</Link>
            </li>}
          </ul>
         
          </div>
    
   
    {children}
    </div>
    
    
    );
};

export default Navbar;