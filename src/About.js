import React from "react";
import transition from "./transition";
import Footer from "./Footer";
import Navbar from "./Navbar";
import arrowoutward from "./arrowoutward.svg";
import './About.css'
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
               <div className="paral">
                    <div>
                        <a href="https://open.spotify.com/user/31jsbvfzhlvfqalbiguqqrx7pane?si=474c8378ef56403d" rel="noreferrer" target="_blank">MyAnimeList</a>
                        <img src={arrowoutward} alt='arrow'></img>
                    </div>
                    <ParalText name1 = 'album1'></ParalText>
                    <br></br>
                    <br></br>
                    <br></br>
                    <ParalTextR name1= 'album2'></ParalTextR>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a href="https://myanimelist.net/profile/Lukellare" rel="noreferrer" target="_blank">Spotify</a>
                    <ParalText name1='anime1'></ParalText>
                    <br></br>
                    <br></br>
                    <br></br>
                    <ParalTextR name1='anime2'></ParalTextR>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a href="https://www.alltrails.com/members/oliver-nguyen-9" rel="noreferrer" target="_blank">AllTrails</a>
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
