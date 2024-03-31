import React from 'react';
import './Navbar.css'
import logoword from '../../assets/Logocomplete.png'
import searchw from '../../assets/searchw.png'

const Navbar = () => {
 return (
    <div className='navbar'>
    <img src={logoword} alt='' className='logo'></img>
    <ul>
      <li>Home</li>
      <li>Vehicles</li>
      <li>Contact</li>
      <li>Book Now</li>
    </ul>
    
    <div className='search-box'>
      <input type='text' placeholder='Search'>
      </input>
      <img src={searchw} alt='' className='logosrchw'></img>
      
    </div>
  </div>
    );
};

export default Navbar;