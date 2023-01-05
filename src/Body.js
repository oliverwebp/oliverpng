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
        console.log(document.body.getBoundingClientRect())
        this.setState({
            scrollPos:document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > this.state.scrollPos
        })
    }
  
    render() {
    return <div className='Body'>
            <div className='top'></div>
            <div className='vertical-left'></div>
            <div className='vertical-right'></div>
            <div className='center'>
                <h1 className='thick'>
                    Hello! I'm Oliver.
                </h1>
            </div>
        </div>
    }
    
}

export default Body;