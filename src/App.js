import './App.css';
import Footer from './Footer.js';
import Body from './Body';
import Navbar from './Navbar';
import Opening from './Opening';
import React, { useEffect, useState } from 'react';


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
            <Body/>
            <Footer/>
         </div>
      }
    </div>
  );
}
export default App;
