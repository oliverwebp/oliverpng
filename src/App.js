import './App.css';
import Footer from './Footer.js';
import Body from './Body';
import Navbar from './Navbar';
import React from 'react';

function App() {
  
  return (
    <div className='poggywoggy'>
      <Navbar className="navy"/>
      <Body/>
      <Footer/>
    </div>
  );
}
export default App;
