import './Footer.css';
import githublogo from './githublogo.png';
import linkedinlogo from './linkedinlogo.webp';
import instagramlogo from './instagramlogo.png';

function Footer() {
    return (
        <footer className='MainFooter'>
            <div className='inside'>
                <a href='https://github.com/oliverwebp' target='_blank' rel='noreferrer'><img className='icons' src={githublogo} alt='Github Logo'/></a>
                <a href='https://www.linkedin.com/in/oliver-nguyen-74746719b/' target='_blank' rel='noreferrer'><img className='icons' src={linkedinlogo} alt='LinkedIn Logo' /></a>
                <a href='https://www.instagram.com/ollie.ngu/' target='_blank' rel='noreferrer'><img className='icons' src={instagramlogo} alt='Instagram Logo' /></a>

            </div>
            <div className='outside'>
                <p className='copyright'> &#169;</p>
                <h1>2022 Oliver Nguyen. All Rights Reserved.</h1>
            </div>
        </footer>
    )
}

export default Footer;