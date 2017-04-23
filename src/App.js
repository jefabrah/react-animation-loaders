import React, { Component } from 'react';
import LoaderSelect from './demo_components/LoaderSelect';
import LoaderDurationInput from './demo_components/LoaderDurationInput';
import getDefaultDuration from './demo_components/get_default_duration';
import getDefaultLoaderColors from './demo_components/get_default_loader_colors';
import LoaderSize from './demo_components/LoaderSize';
import LoaderColor from './demo_components/LoaderColor';
import BackgroundColor from './demo_components/BackgroundColor';

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
    this.handleLoaderColorChange = this.handleLoaderColorChange.bind(this);
    this.handleBackgroundColorChange = this.handleBackgroundColorChange.bind(this);
    const defaultLoader = 'Pulse';
    
    this.state = {
      activeLoader: defaultLoader,
      activeDuration: getDefaultDuration(defaultLoader),
      activeSize: 'md',
      activeLoaderColor: getDefaultLoaderColors(defaultLoader)[0],
      activeBackgroundColor: '#fff'
    };
  }

  handleActiveLoader(activeLoader) {
    const activeDuration = getDefaultDuration(activeLoader);
    const activeLoaderColor = getDefaultLoaderColors(activeLoader)[0];

    this.setState({ 
      activeLoader,
      activeDuration,
      activeLoaderColor
    });
  }


  handleSliderChange(e) {
    const activeDuration = e.target.value;
    this.setState({ activeDuration });
  }

  handleSizeChange(e) {
    const activeSize = e.target.value;
    this.setState({ activeSize });
  }

  handleLoaderColorChange(color) {
    let activeLoaderColor;
    if (color.rgb.a === 1) {
      activeLoaderColor = color.hex;
    } else {
      const { r, g, b, a } = color.rgb;
      activeLoaderColor = `rgba(${r},${g},${b},${a})`
    }
    this.setState({ activeLoaderColor });
  }

  handleBackgroundColorChange(color) {
    let activeBackgroundColor;
    if (color.rgb.a === 1) {
      activeBackgroundColor = color.hex;
    } else {
      const { r, g, b, a } = color.rgb;
      activeBackgroundColor = `rgba(${r},${g},${b},${a})`
    }
    this.setState({ activeBackgroundColor });
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
        <LoaderColor setColor={this.handleLoaderColorChange} color={this.state.activeLoaderColor}/>
        <BackgroundColor setColor={this.handleBackgroundColorChange} color={this.state.activeBackgroundColor}/>

        {/* LOADERS */}
        <div className="loaders">

            {/* G Spinner */}
          <GSpinner loading={activeLoader === 'GSpinner'}
            loaderColor={this.state.activeLoaderColor}
            backgroundColor={this.state.activeBackgroundColor}
            duration={duration} size={this.state.activeSize}>
            <span></span>
          </GSpinner>

          {/* Blotty */}
          <Blotty loading={activeLoader === 'Blotty'}
            loaderColor={this.state.activeLoaderColor}
            backgroundColor={this.state.activeBackgroundColor}
            duration={duration} size={this.state.activeSize}>
            <span></span>
          </Blotty>

          {/* Pulse */}
          <Pulse loading={activeLoader === 'Pulse'}
            loaderColor={this.state.activeLoaderColor}
            backgroundColor={this.state.activeBackgroundColor}
            duration={duration} size={this.state.activeSize}>
            <span></span>
          </Pulse>

          {/* AMCDots */}
          <AMCDots loading={activeLoader === 'AMCDots'}
            loaderColor={this.state.activeLoaderColor}
            backgroundColor={this.state.activeBackgroundColor}
            duration={duration} size={this.state.activeSize}>
            <span></span>
          </AMCDots>

        </div>
      </div>
    )
  }
  
}

export default App;
