import logo from './logo.svg';
import LoginButton from './components/login.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      <body className="App-body">
        <LoginButton />
      </body>
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
