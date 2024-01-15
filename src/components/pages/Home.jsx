import React from 'react';
import "../style/Home.css"

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Salom, Dunyo!</h1>
        <p>Ushbu sahifa React va CSS yordamida yaratilgan.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          React haqida ko'proq o'qing
        </a>
      </header>
    </div>
  );
}

export default Home;
