import './Body.css';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import transition from './transition';
import {motion} from 'framer-motion'


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
        <motion.div variants={container} initial="hidden" animate="show" className='Body'>
            <div className='left'>         
               <div className={this.state.show ? 'vertical-left' : 'vertical-left-tall'}></div>
           </div>
                <div className='topL'>
                <motion.div variants={item} className='thick'>
                        Hello! I&apos;m Oliver.
                    </motion.div>
                </div>
                
                <div className='topR'>

                </div>
                
                <div className='right'>
                 
                    <div className={this.state.show ? 'vertical-right' : 'vertical-right-tall'}></div>
                    
                </div>
                <div className='centerL'>
                    <h1>1.</h1>
                    <h1>2.</h1>
                    <h1>3.</h1>
                    <h1>4.</h1>
                </div>
                <div className='centerR'>

                </div>
                
                <div className='txtL'>
                    <hr className='fullhr'></hr>
                    <ul>
                        <li>Undergraduate student at University of Washington Bothell</li>
                        <li>Born and raised in Seattle, Washington</li>
                    </ul>
                </div>

                <div className='txtR'>
                    <hr className='fullhr'></hr>
                </div>
            </motion.div>
            <Footer/>
        </>
        
    }
    
}

export default transition(Body);