import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/hero'


import Navbar from './components/Navbar/Navbar';
import reportWebVitals from './reportWebVitals';
import Cards from './cards';
import Footer from './components/Navbar/Footer';
import AppHero from './components/hero'
import LoginCard from './components/LoginCard'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <Navbar/>
    </div>
    <main>
      <AppHero/>
    </main>
    <LoginCard />
    <div className='cardcontainer'> 
      <Cards/>
    </div>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
