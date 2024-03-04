import Home from './Home';
import Opening from './Opening'
import React, { useEffect, useState, } from 'react';
import './App.css'
import { AnimatePresence } from 'framer-motion';

function App() {
  
  const [Op, setOp] = useState(false);

  useEffect(()=> {
    setOp(true)
    setTimeout(()=> {
      setOp(false)
    }, 6000)
  }, [])
  
  return (
    <AnimatePresence mode='wait'>
        <div className='desk'>
        {
          
          Op ? 
            <Opening/>:
            <Home/>
        }
      </div>
      <div className='mob'>
          <p className='toget'>Mobile Site WIP</p>
          <p> -visit on desktop or come back later!</p>
          <p> Oliver Nguyen</p>
      </div>
    </AnimatePresence>
  );
}

export default App;
