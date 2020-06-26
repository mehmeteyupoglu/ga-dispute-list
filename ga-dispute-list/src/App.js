import React from 'react';
import './App.css';
import { Header, Disputes, NavBar } from './Components'
import { StyledApp } from "./styles"

function App(props) {
  return (
    <StyledApp>
    <div className="App">
        <NavBar />
        <div className="below">
          <div className="side-bar"></div>
          <div className="main-body">
            <div className="bg-img"></div>
            <div className="disputes">
              <Header />
              <Disputes /> 
            </div>
          </div>
        </div>
    </div>
    </StyledApp>
  );
}

export default App;
