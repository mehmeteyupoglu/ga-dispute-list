import React from 'react';
import './App.css';
import { Header, Disputes, NavBar } from './Components' 


function App(props) {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Disputes />
    </div>
  );
}

export default App;
