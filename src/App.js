import React, { Component } from 'react';
import LoaderSelect from './demo_components/LoaderSelect';

import Blotty from './loaders/Blotty';
import GSpinner from './loaders/GSpinner';
import Pulse from './loaders/Pulse';
import AMCDots from './loaders/AMCDots';


class App extends Component {
  constructor () {
    super();
    this.handleActiveName = this.handleActiveName.bind(this);

    this.state = {
      activeLoader: 'amcdots'
    };
  }

  handleActiveName(activeLoader) {
    this.setState({ activeLoader })
  }

render() {
  const activeLoader = this.state.activeLoader;

 return (
   <div className="App">
    <div className="App-header">
        <h1>React Animation Loaders</h1>
    </div>

    <LoaderSelect setLoader={this.handleActiveName} activeLoader={activeLoader}/>

    {/* LOADERS */}
    <div className="loaders">

        {/* G Spinner */}
        <GSpinner loading={activeLoader === 'gspinner'}>
          <span></span>
        </GSpinner>

        {/* Blotty */}
        <Blotty loading={activeLoader === 'blotty'} >
          <span></span>
        </Blotty>

        {/* Pulse */}
        <Pulse loading={activeLoader === 'pulse'} >
          <span></span>
        </Pulse>

        {/* AMCDots */}
        <AMCDots loading={activeLoader === 'amcdots'} >
          <span></span>
        </AMCDots>      

    </div>
  </div>
 )
}
  
}

export default App;
