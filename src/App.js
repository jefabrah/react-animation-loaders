import React, { Component } from 'react';
import LoaderSelect from './demo_components/LoaderSelect';
import LoaderDurationInput from './demo_components/LoaderDurationInput';
import getDefaultDuration from './demo_components/get_default_duration';
import LoaderSize from './demo_components/LoaderSize';

import Blotty from './loaders/Blotty';
import GSpinner from './loaders/GSpinner';
import Pulse from './loaders/Pulse';
import AMCDots from './loaders/AMCDots';


class App extends Component {
  constructor () {
    super();
    this.handleActiveLoader = this.handleActiveLoader.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    const defaultLoader = 'AMCDots';

    this.state = {
      activeLoader: defaultLoader,
      activeDuration: getDefaultDuration(defaultLoader),
      activeSize: 'md'
    };
  }

  handleActiveLoader(activeLoader) {
    const activeDuration = getDefaultDuration(activeLoader);
    this.setState({ activeLoader, activeDuration });
  }


  handleSliderChange(e) {
    const activeDuration = e.target.value;
    this.setState({ activeDuration });
  }

  handleSizeChange(e) {
    const activeSize = e.target.value;
    this.setState({ activeSize });
  }

  render() {
    const activeLoader = this.state.activeLoader;
    const duration = this.state.activeDuration;

    return (
      <div className="App">
        <div className="App-header">
            <h1>React Animation Loaders</h1>
        </div>

        <LoaderSelect setLoader={this.handleActiveLoader}
          activeLoader={activeLoader}/>
        <LoaderDurationInput onDurationChange={this.handleSliderChange} 
          duration={duration} activeLoader={activeLoader}/>
        <LoaderSize setSize={this.handleSizeChange} size={this.state.activeSize} />


        {/* LOADERS */}
        <div className="loaders">

            {/* G Spinner */}
          <GSpinner loading={activeLoader === 'GSpinner'}
            duration={duration} size={this.state.activeSize}>
            <span></span>
          </GSpinner>

          {/* Blotty */}
          <Blotty loading={activeLoader === 'Blotty'}
            duration={duration} size={this.state.activeSize}>
            <span></span>
          </Blotty>

          {/* Pulse */}
          <Pulse loading={activeLoader === 'Pulse'}
            duration={duration} size={this.state.activeSize}>
            <span></span>
          </Pulse>

          {/* AMCDots */}
          <AMCDots loading={activeLoader === 'AMCDots'}
            duration={duration} size={this.state.activeSize}>
            <span></span>
          </AMCDots>

        </div>
      </div>
    )
  }
  
}

export default App;
