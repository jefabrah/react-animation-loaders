import React, { Component } from 'react';
import LoaderSelect from './demo_components/LoaderSelect';
import LoaderDurationInput from './demo_components/LoaderDurationInput';
import getDefaultDuration from './demo_components/get_default_duration';

import Blotty from './loaders/Blotty';
import GSpinner from './loaders/GSpinner';
import Pulse from './loaders/Pulse';
import AMCDots from './loaders/AMCDots';


class App extends Component {
  constructor () {
    super();
    this.handleActiveLoader = this.handleActiveLoader.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);

    this.state = {
      activeLoader: 'Blotty',
      duration: 1.75
    };
  }

  handleActiveLoader(activeLoader) {
    const duration = getDefaultDuration(activeLoader);
    this.setState({ activeLoader, duration });
  }


  handleSliderChange(e) {
    const duration = e.target.value;
    this.setState({ duration })
  }

  render() {
    const activeLoader = this.state.activeLoader;
    const duration = this.state.duration;

    return (
      <div className="App">
        <div className="App-header">
            <h1>React Animation Loaders</h1>
        </div>

        <LoaderSelect setLoader={this.handleActiveLoader}
          activeLoader={activeLoader}/>
        <LoaderDurationInput onDurationChange={this.handleSliderChange} 
          duration={duration} activeLoader={activeLoader}/>


        {/* LOADERS */}
        <div className="loaders">

            {/* G Spinner */}
          <GSpinner loading={activeLoader === 'GSpinner'}
            duration={duration}>
            <span></span>
          </GSpinner>

          {/* Blotty */}
          <Blotty loading={activeLoader === 'Blotty'}
            duration={duration}>
            <span></span>
          </Blotty>

          {/* Pulse */}
          <Pulse loading={activeLoader === 'Pulse'}
            duration={duration}>
            <span></span>
          </Pulse>

          {/* AMCDots */}
          <AMCDots loading={activeLoader === 'AMCDots'}
            duration={duration}>
            <span></span>
          </AMCDots>

        </div>
      </div>
    )
  }
  
}

export default App;
