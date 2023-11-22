import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import './About.css'
import transition from './transition'
import ParalText from "./ParalText.tsx";
import ParalTextR from "./ParalTextR.tsx";
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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <div className="About">
        <div className='left'> 
                   
                   <div className={this.state.show ? 'vertical-left' : 'vertical-left-tall'}></div>
               </div>
         <div className='topL'></div>
         <div className="topR"></div>
               
               <div className='right'>
                
                   <div className={this.state.show ? 'vertical-right' : 'vertical-right-tall'}></div>
                   
               </div>
               <div className='centerL'>

               </div>
               <div className="centerR"></div>
               <div className="txtL">

               </div>
               <div className="txtR"></div>
               <div className="al1">
                    <a href="https://open.spotify.com/user/31jsbvfzhlvfqalbiguqqrx7pane?si=474c8378ef56403d"  rel="noreferrer" target="_blank" className="blockm">
                        <p>Spotify</p>
                        <span className="material-symbols-outlined">north_east</span>
                    </a>
                </div>           
               <div className="al2">
                    <p className="tomorrow">
                    Music is more than just a source of entertainment or emotional expression.
                    To me, it's an essential part of my identity, a window into my soul&#8212;shaping and revealing the person I am today.
                    It would be an understatement to just call it a constant in my life;
                    In 2022, Spotify Wrapped revealed that I listened to 289,860 minutes of music.
                    
                    </p>
               </div>
               <div className="paral">
                    
                    <ParalText name1 = 'album1'></ParalText>
                    <br></br>
                    <br></br>
                    <br></br>
                    <ParalTextR name1= 'album2'></ParalTextR>
                </div>
                <div className="an1">
                    
                </div>
                <div className="an2">
                    <a href="https://myanimelist.net/profile/oliverpng"  rel="noreferrer" target="_blank" className="blockm">
                        <p>MyAnimeList</p>
                        <span className="material-symbols-outlined">north_east</span>
                    </a>
                </div>
                <div className="paral1">
                    <ParalText name1='anime1'></ParalText>
                    <br></br>
                    <br></br>
                    <br></br>
                    <ParalTextR name1='anime2'></ParalTextR>
                </div>
                <div className="hi1">
                    <a href="https://www.alltrails.com/members/oliver-nguyen-9"  rel="noreferrer" target="_blank" className="blockm">
                        <p>AllTrails</p>
                        <span className="material-symbols-outlined">north_east</span>
                    </a>
                </div>
                <div className="hi2">

                </div>
                <div className="paral2">
                    <ParalText name1='hike1'></ParalText>
                        <br></br>
                        <br></br>
                        <br></br>
                    <ParalTextR name1='hike2'></ParalTextR>
                </div>

        </div>
        <Footer/>
        </>
    }
}

export default transition(About);
