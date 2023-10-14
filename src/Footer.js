import './Footer.css';
import githublogo from './githublogo.png';
import linkedinlogo from './linkedinlogo.webp';
import instagramlogo from './instagramlogo.png';

function Footer() {
    return (
        <footer className='MainFooter'>
            <div className='inside'>
                <p href='https://github.com/oliverwebp' className='hover-underline-animation'>Github</p>
                <p href='https://www.linkedin.com/in/oliver-nguyen-74746719b/' className='hover-underline-animation'>LinkedIn</p>
                <p href='https://www.instagram.com/ollie.ngu/' className='hover-underline-animation'>Instagram</p>
                <p href='https://open.spotify.com/user/31jsbvfzhlvfqalbiguqqrx7pane?si=4d544de5c9c944f8'className='hover-underline-animation'>Spotify</p>
            </div>
            <div className='outside'>
                <p className='copyright'> &#169;</p>
                <h1>2022 Oliver Nguyen. All Rights Reserved.</h1>
            </div>
        </footer>
    )
}

export default Footer;