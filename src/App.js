import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoxReveal from './components/BoxReveal';
import Blotty from './components/Blotty';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <BoxReveal  delay={.5} duration={1}
                      color={'#fff'} name="header">
            <h2>React Loader Animations</h2>
          </BoxReveal>
        </div>
        <Blotty/>
      </div>
    );
  }
}

export default App;