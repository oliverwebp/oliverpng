import Home from './Home';
import Opening from './Opening';
import React, { useEffect, useState, } from 'react';
import './App.css'
import { AnimatePresence } from 'framer-motion';

function App() {
  const [Op, setOp] = useState(false);

  useEffect(()=> {
    setOp(true)
    setTimeout(()=> {
      setOp(false)
    }, 5000)
  }, [])
  
  return (
    <AnimatePresence mode='wait'>
        <div>
        {
          
          Op ? 
            <Opening/> :
            <Home/>
        }
      </div>
    </AnimatePresence>
  );
}
export default App;
