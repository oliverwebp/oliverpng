import React from "react";
import transition from "./transition";
import Footer from "./Footer";
import Navbar from "./Navbar";
import './About.css'

class About extends React.Component{

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
        <div className="About">
         <div className='top'></div>
                <div className='left'> 
                   
                   <div className={this.state.show ? 'vertical-left' : 'vertical-left-tall'}></div>
               </div>
               
               <div className='right'>
                
                   <div className={this.state.show ? 'vertical-right' : 'vertical-right-tall'}></div>
                   
               </div>
               <div className='center'>

               </div>
               <div className="txt">

               </div>
        </div>
        <Footer/>
        </>
    }
}

export default transition(About);
