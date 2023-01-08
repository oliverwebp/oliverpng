import './Body.css';
import React from 'react';

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
    return <div className='Body'>
            <div className='top'></div>
            
            <div className={this.state.show ? 'vertical-left' : 'vertical-left-tall'}></div>
            <div className={this.state.show ? 'vertical-right' : 'vertical-right-tall'}></div>
            <div className='center'>
                <h1 className='thick'>
                    Hello! I'm Oliver.
                </h1>
            </div>
            {/*
            <div className='txt'>
                <ul>
                    <li>Undergraduate student at University of Washington Bothell</li>
                    <li>Born and raised in Seattle, Washington</li>
                </ul>
            </div>
    */}
        </div>
    }
    
}

export default Body;