import penrose from './penrose.png'
import './Navbar.css';
import React from 'react';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'


import menuSVG from './menu_FILL0_wght400_GRAD0_opsz48.svg';
const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

export function Navbar() {
    
  
    
    return  <motion.article
    initial="hidden"
    animate="visible"
    exit={{ opacity: 0, transition: { duration: 1 } }}
    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
  >
    <header className='active'>
            <nav className='Nav-main'>
                <div className='Left-nav'>
                    <motion.a variants={{
          hidden: { opacity: 0, y: -20 },
          visible
        }}>
                    <img src={penrose} className="App-logo" alt="logo" />
                    </motion.a>
                    <motion.a variants={{
          hidden: { opacity: 0, y: -20 },
          visible
        }}>
                    <a href='https://oliverpng.com/'className="Font-Reverse">Oliver Nguyen</a>
                    </motion.a>
                </div>
                <div className='Right-nav'>
                    <motion.a variants={itemVariants}>
                    <Link className='hover-underline-animation' to='/'>Home</Link>
                    </motion.a>
                    <motion.a variants={itemVariants}>
                    <Link className='hover-underline-animation' to='/About'>About</Link>
                    </motion.a>
                    <motion.a variants={itemVariants}>
                     <p>Portfolio</p>
                     </motion.a>
                </div>
                <div className='mobile-right'>
                    <img src={menuSVG} className="menuIMG" alt='menu button'/>
                </div>
            </nav>
      </header>;
      </motion.article>
    }


export default Navbar;