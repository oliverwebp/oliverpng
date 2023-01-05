import penrose from './penrose.png'
import './Navbar.css';
import React from 'react';
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
                <div className='Left-nav'><img src={penrose} className="App-logo" alt="logo" /> <h2>Oliver Nguyen</h2></div>
                <div className='Right-nav'>
                    <ol className='nav-bar'>
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Portfolio</li>
                    </ol>
                </div>
            </nav>
      </header>;
    }
}

export default Navbar;