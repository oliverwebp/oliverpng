import './work.css';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import transition from './transition';


class Work extends React.Component {
    
    
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


    return <>
    <Navbar className="navy"/>
        <div className='work'>
            <div className='left'>
                <div className={this.state.show ? 'vertical-left' : 'vertical-left-tall'}></div>
            </div>
            <div className='topL'></div>
            <div className='topR'></div>
            <div className='right'>
                <div className={this.state.show ? 'vertical-right' : 'vertical-right-tall'}></div>
            </div>
            <div className='centerL'></div>
            <div className='centerR'></div>
            <div className='txtL'></div>
            <div className='txtR'></div>
        </div>
    <Footer/>
    </>
        
    }
    
}

export default transition(Work);