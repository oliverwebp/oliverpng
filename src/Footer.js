import './Footer.css';
import React from 'react';


function Footer() {
    return (
        <footer className='MainFooter'>
            <div className='inside'>
                <a href='https://github.com/oliverwebp' target="_blank" rel='noreferrer' className='hover-underline-animationF'>Github</a>
                <a href='https://www.linkedin.com/in/oliver-nguyen-74746719b/' rel='noreferrer' target="_blank" className='hover-underline-animationF'>LinkedIn</a>
                <a href='https://www.instagram.com/ollie.ngu/' target="_blank" rel='noreferrer' className='hover-underline-animationF'>Instagram</a>
            </div>
        </footer>
    )
}

export default Footer;