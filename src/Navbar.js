import penrose from './penrose.png'
import './Navbar.css';
import React from 'react';

import menuSVG from './menu_FILL0_wght400_GRAD0_opsz48.svg';
class Navbar extends React.Component{
    
  
    render() {
    return <header className='active'>
            <nav className='Nav-main'>
                <div className='Left-nav'>
                    <img src={penrose} className="App-logo" alt="logo" />
                    <h2 className="Font-Reverse">Oliver Nguyen</h2>
                </div>
                <div className='Right-nav'>
                     <p>Home</p>
                     <p>About</p>
                     <p>Portfolio</p>
                </div>
                <div className='mobile-right'>
                    <img src={menuSVG} className="menuIMG" alt='menu button'/>
                </div>
            </nav>
      </header>;
    }
}

export default Navbar;