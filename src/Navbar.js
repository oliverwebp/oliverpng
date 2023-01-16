import penrose from './penrose.png'
import './Navbar.css';
import React from 'react';
import menuSVG from './menu_FILL0_wght400_GRAD0_opsz48.svg';
class Navbar extends React.Component{
    constructor() {
        super();
        this.state = {
            show:true,
            scrollPos: 0
        }
    }
    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll)
    }
    handleScroll = () => {
        
        this.setState({
            scrollPos:document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > this.state.scrollPos
        })
    }
  
    render() {
    return <header className={this.state.show ? 'active' : 'hidden'}>
            <nav className='Nav-main'>
                <div className='Left-nav'>
                    <img src={penrose} className="App-logo" alt="logo" />
                    <h2>Oliver Nguyen</h2>
                </div>
                <div className='Right-nav'>
                     <p>Home</p>
                     <p>About Me</p>
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