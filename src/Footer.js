import './Footer.css';
import React from 'react';
import {Link} from 'react-router-dom'


function Footer() {
    const [opacity, setOpacity] = React.useState(0);

    const handleMouseEnter = () => {
      setOpacity(1);
    };
  
    const handleMouseLeave = () => {
      setOpacity(0);
    };
  
    return (
        <footer className='MainFooter'>
            <div className='inside'>
                <div className='dire'>
                    <h1>Say Hello &#64;</h1>
                    <h2 className='hover-underline-animationF' onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} onClick={() => navigator.clipboard.writeText('oliverpngu@gmail.com')} >oliverpngu&#64;gmail.com</h2>
                    <div className='ctc' style={{opacity}}>Click to Copy</div>
                </div>
                <div className='lft'>
                    <ul>
                        <li className='opaqti'>Sitemap</li>
                        <li><br></br></li>
                        <li><Link className='hover-underline-animationF' to='/'>Home</Link></li>
                        <li><Link className='hover-underline-animationF' to='/About'>About</Link></li>
                    </ul>
                </div>
                <div className='social'>
                    <ul>
                        <li className='opaqti'>Socials</li>
                        <li><br></br></li>
                        <li><a href='https://github.com/oliverwebp' target="_blank" rel='noreferrer' className='hover-underline-animationF'>Github</a></li>
                        <li><a href='https://www.linkedin.com/in/oliver-nguyen-74746719b/' rel='noreferrer' target="_blank" className='hover-underline-animationF'>LinkedIn</a></li>
                        <li><a href='https://www.instagram.com/ollie.ngu/' target="_blank" rel='noreferrer' className='hover-underline-animationF'>Instagram</a></li>
                        <li><a href='https://twitter.com/notliver' target="_blank" rel='noreferrer' className='hover-underline-animationF'>Twitter</a></li>
                    </ul>
                </div>
                <div className='rft'>
                    <p>
                    Designed &#38; Developed
                    <br></br>
                    by Oliver Nguyen
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;