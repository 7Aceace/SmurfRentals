import React from 'react';
import './index.css';
import './components/hero'

import Navbar from './components/Navbar/Navbar';

import Cards from './cards';
import AppHero from './components/hero'
import LoginCard from './components/LoginCard'
import FooterN from './components/FooterN'
import { Feature } from './components/Feature';

const App = () => {
 return (
    <div>
        <div className='container'>
            <Navbar/>
        </div>
        <main>
            <AppHero/>
        </main>
        <Feature /> 
        <div className='cardcontainer'> 
            <Cards/>
        </div>
        <FooterN/>
    </div>
    );
};

export default App;