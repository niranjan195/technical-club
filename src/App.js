import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>ISE TECHNICAL CLUB</h1>
      <header className="App-header">
        <h3>Submit your solutions:</h3>
        <form action="/action_page.php">
          Select a file: <input type="file" name="myFile" /><br /><br />
          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
