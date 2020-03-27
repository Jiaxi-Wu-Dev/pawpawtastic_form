import React from 'react';
import './App.css';
import Left from './components/Left'

function App() {
  return (
    <div className="App">
      <div className="leftSide">
        <Left />
      </div>
      <div className='rightSide'></div>
    </div>
  );
}

export default App;
