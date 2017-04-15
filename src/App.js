import React, { Component } from 'react';
import LoaderSelect from './demo_components/LoaderSelect';
import LoaderDurationInput from './demo_components/LoaderDurationInput';

import Blotty from './loaders/Blotty';
import GSpinner from './loaders/GSpinner';
import Pulse from './loaders/Pulse';
import AMCDots from './loaders/AMCDots';


class App extends Component {
  constructor () {
    super();
    this.handleActiveName = this.handleActiveName.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);

    this.state = {
      activeLoader: 'blotty',
      duration: 1.75,
    };
  }

  handleActiveName(activeLoader) {
    this.setState({ activeLoader })
  }

  handleSliderChange(e) {
    const duration = e.target.value;
    console.log(duration);
    this.setState({ duration });
  }

  render() {
    const activeLoader = this.state.activeLoader;
    const duration = this.state.duration;

    return (
      <div className="App">
        <div className="App-header">
            <h1>React Animation Loaders</h1>
        </div>

        <LoaderSelect setLoader={this.handleActiveName}
          activeLoader={activeLoader}/>
        <LoaderDurationInput onDurationChange={this.handleSliderChange} 
          duration={duration} />


        {/* LOADERS */}
        <div className="loaders">

            {/* G Spinner */}
          <GSpinner loading={activeLoader === 'gspinner'}
            duration={duration}>
            <span></span>
          </GSpinner>

          {/* Blotty */}
          <Blotty loading={activeLoader === 'blotty'}
            duration={duration}>
            <span></span>
          </Blotty>

          {/* Pulse */}
          <Pulse loading={activeLoader === 'pulse'}
            duration={duration}>
            <span></span>
          </Pulse>

          {/* AMCDots */}
          <AMCDots loading={activeLoader === 'amcdots'}
            duration={duration}>
            <span></span>
          </AMCDots>

        </div>
      </div>
    )
  }
  
}

export default App;
