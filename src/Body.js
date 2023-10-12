import './Body.css';
import React from 'react';
import TimePT from './TimePT.js'


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
  
    // <img src={Horse} alt='Horse' className='mainphoto'></img>
    render() {
    return <div className='Body'>
            <div className='top'></div>
            <div className='left'> 
                <div className={this.state.show ? 'vertical-left' : 'vertical-left-tall'}></div>
            </div>
            <div className='right'>
                <div className={this.state.show ? 'vertical-right' : 'vertical-right-tall'}></div>
            </div>
            <div className='center'>
                <h1 className='thick'>
                    Hello! I'm Oliver.
                </h1>
                <TimePT/>
            </div>

            
            <div className='txt'>
                <hr className='fullhr'></hr>
                <ul className='ind'>
                    <li>Undergraduate student at University of Washington Bothell</li>
                    <li>Born and raised in Seattle, Washington</li>
                </ul>
            </div>
        </div>
        
    }
    
}

export default Body;