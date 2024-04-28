import React from 'react';
import '../index.css';
import '../components/hero'
import { Feature } from '../components/Feature';

import Navbar from '../components/Navbar/Navbar';
import Cards from '../cards';
import '../components/Navbar/Navbar.css';
import AppHero from '../components/hero';
import LoginCard from '../components/LoginCard';
import FooterN from '../components/FooterN';
const Home = () => {
 return (
    <>
   
    <main>
        <AppHero/>
    </main>
    <Feature /> 
    <div className='cardcontainer'> 
        <Cards/>
    </div>
    <FooterN/>
    </>
    );
};

export default Home;