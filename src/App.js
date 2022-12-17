import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <header className='App-header'>
        <nav className='Nav-main'>
          <div className='Left-nav'><img src={logo} className="App-logo" alt="logo" /></div>
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
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
