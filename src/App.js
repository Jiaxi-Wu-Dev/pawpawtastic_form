import React from 'react';
import './App.css';
import Left from './components/Left'
import Right from './components/Right'

function App() {
  return (
    <div className="App">
      <div className="leftSide">
        <Left />
      </div>
      <div className='rightSide'>
        <Right />
      </div>
    </div>
  );
}

export default App;
