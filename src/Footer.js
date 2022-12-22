import './Footer.css';
import githublogo from './githublogo.png';
import linkedinlogo from './linkedinlogo.webp';
import instagramlogo from './instagramlogo.png';

function Footer() {
    return (
        <footer className='MainFooter'>
            <ul className='inside'>
                <li>
                    <a href='https://github.com/oliverwebp' target='_blank' rel='noreferrer'><img className='icons' src={githublogo} alt='Github Logo'/></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/oliver-nguyen-74746719b/' target='_blank' rel='noreferrer'><img className='icons' src={linkedinlogo} alt='LinkedIn Logo' /></a>
                </li>
                <li>
                    <a href='https://www.instagram.com/ollie.ngu/' target='_blank' rel='noreferrer'><img className='icons' src={instagramlogo} alt='Instagram Logo' /></a>
                </li>
            </ul>
            <ul className='outside'>
                <li>
                    <p className='copyright'>	&#169;</p>
                </li>
                <li>
                    <h1>2022 Oliver Nguyen</h1>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;