import './Body.css';
import React from 'react';
import TimePT from './TimePT.js'
import transition from './transition';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import Footer from './Footer';


class Body extends React.Component {
    
    
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
        const container = {
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                staggerChildren: .5,
                duration: .5
              }
            }
          }
        const item = {
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1 }
        }
        

    return <>
    <Navbar className="navy"/>
        <motion.div variants={container} initial="hidden"
    animate="show" className='Body'>
                <div className='top'></div>
                
                <div className='left'> 
               
                    <div className={this.state.show ? 'vertical-left' : 'vertical-left-tall'}></div>
                </div>
                
                <div className='right'>
                 
                    <div className={this.state.show ? 'vertical-right' : 'vertical-right-tall'}></div>
                    
                </div>
                <div className='center'>
                    <motion.div variants={item} className='thick'>
                        Hello! I'm Oliver.
                    </motion.div>
                    <motion.div variants={item}>
                        <div className='TZ'>
                            <p>My local time&nbsp;</p>
                            <TimePT/>
                        </div>
                        <p>(GMT -7)</p>
                    </motion.div>
                </div>
                
                <div className='txt'>
                    <hr className='fullhr'></hr>
                    <ul className='ind'>
                        <li>Undergraduate student at University of Washington Bothell</li>
                        <li>Born and raised in Seattle, Washington</li>
                    </ul>
                </div>
            </motion.div>
            <Footer/>
        </>
        
    }
    
}

export default transition(Body);