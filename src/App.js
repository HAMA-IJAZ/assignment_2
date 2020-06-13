import React, { useState } from 'react';
import './App.css';


function App() {
  let [count, setcount] = useState(1)
  let [isMorning, setMorning] = useState(false)
  return (
    <div className="App">
      <h1>To Quite From Bad Habbit </h1><br>
      <h2>Its Important To Make Up Your Mind </h2>
      <h3>So Lets Do A Simple Exercise </h3>
      <header className={`App-header ${isMorning ? 'daylight' : ''}`}>
        <img src={logo} className="App-logo" alt="logo" />
        <h3> {isMorning ? "Good Morning Saad Ali" : "Good Night Saad Ali"}</h3>
        
        
        <button onClick={() => setMorning(!isMorning)}>Update Day & Night</button>
      </header>
    </div>
  );
}

export default App;