import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ownership from './components/Ownership'

function App() {


  return (
    <div className="App">
        <Ownership rent={1050}></Ownership>
    </div>
  );
}

export default App;
