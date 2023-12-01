import './Footer.css';
import React from 'react';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'


function Footer() {
    const [opacity, setOpacity] = React.useState(0);

    const handleMouseEnter = () => {
      setOpacity(1);
    };
  
    const handleMouseLeave = () => {
      setOpacity(0);
    };
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
      const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
    const item = {
        hidden: { opacity: 0, y: 10 },
        visible
    }


    

  
    return (
        <motion.footer className='MainFooter'>
            <motion.div variants={container} className='inside'>
                <motion.div initial="hidden" animate="visible" exit={{opacity: 0, transition: {duration:1}}} variants={{visible: {transition: { staggerChildren:0.5}}}} className='dire'>
                    <motion.h1 variants={item}>Say Hello &#64;</motion.h1>
                    <motion.h2 variants={item} className='hover-underline-animationF' onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} onClick={() => navigator.clipboard.writeText('oliverpngu@gmail.com')} >oliverpngu&#64;gmail.com</motion.h2>
                    <div className='ctc' style={{opacity}}>Click to Copy</div>
                </motion.div>
                <div className='lft'>
                    <ul>
                        <li className='opaqti'>Sitemap</li>
                        <li><br></br></li>
                        <li><Link className='hover-underline-animationF' to='/'>Home</Link></li>
                        <li><Link className='hover-underline-animationF' to='/About'>About</Link></li>
                        <li><Link className='hover-underline-animationF' to='/Contact'>Contact</Link></li>
                        <li><Link className='hover-underline-animationF' to='/Work'>Work</Link></li>
                    </ul>
                </div>
                <div className='social'>
                    <ul>
                        <li className='opaqti'>Socials</li>
                        <li><br></br></li>
                        <li><a href='https://github.com/oliverwebp' target="_blank" rel='noreferrer' className='hover-underline-animationF'>Github</a></li>
                        <li><a href='https://www.linkedin.com/in/oliver-nguyen-74746719b/' rel='noreferrer' target="_blank" className='hover-underline-animationF'>LinkedIn</a></li>
                        <li><a href='https://www.instagram.com/ollie.ngu/' target="_blank" rel='noreferrer' className='hover-underline-animationF'>Instagram</a></li>
                        <li><a href='https://twitter.com/notliver' target="_blank" rel='noreferrer' className='hover-underline-animationF'>Twitter (X)</a></li>
                    </ul>
                </div>
                <div className='rft'>
                    <p>
                    Designed &#38; Developed
                    <br></br>
                    by Oliver Nguyen
                    </p>
                </div>
            </motion.div>
        </motion.footer>
    )
}

export default Footer;