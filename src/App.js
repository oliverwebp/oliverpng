import './App.css';
import Footer from './Footer.js';
import Body from './Body';
import Navbar from './Navbar';
import About from './About';
import Opening from './Opening';
import React, { useEffect, useState, } from 'react';
import {Routes, Route} from 'react-router-dom';


function App() {
  const [Op, setOp] = useState(false);

  useEffect(()=> {
    setOp(true)
    setTimeout(()=> {
      setOp(false)
    }, 5000)
  }, [])
  
  return (
    <div>
      {
        Op ? 
          <Opening/> :
          <div className='poggywoggy'>
            <Navbar className="navy"/>
            <Routes>
              <Route path='/' element={<Body/>}/>
              <Route path='/About' element={<About/>}/>
            </Routes>
            <Footer/>
            
         </div>
      }
    </div>
  );
}
export default App;
