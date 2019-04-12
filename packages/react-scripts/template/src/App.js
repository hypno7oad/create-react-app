import React from 'react';
import logo from './logo.svg';
import './App.css';

getUsername() {
  if (!process.env.USERNAME) {
    throw new Error('Please define `USERNAME` .env file');
  }

  return process.env.USERNAME;
}

function App() {
  const username = this.getUsername()
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
           Hello, { username }
        </p>
      </header>
    </div>
  );
}

export default App;
