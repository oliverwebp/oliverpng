import logo from './logo.svg';
import './App.css';
import './Footer.js';
import Footer from './Footer.js';
import Body from './Body';
import penrose from './penrose.png';

function App() {
  
  return (
    
    <div>
      <header className='App-header'>
        <nav className='Nav-main'>
          <div className='Left-nav'><img src={penrose} className="App-logo" alt="logo" /> <h2>Oliver Nguyen</h2></div>
          <div className='Right-nav'>
            <ol className='nav-bar'>
              <li>Home</li>
              <li>About Me</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ol>
          </div>
        </nav>
      </header>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
