import React, { Component } from 'react';
import LoaderSelect from './demo_components/LoaderSelect';
import LoaderDurationInput from './demo_components/LoaderDurationInput';
import getDefaultDuration from './demo_components/get_default_duration';
import getDefaultLoaderColors from './demo_components/get_default_loader_colors';
import LoaderSize from './demo_components/LoaderSize';
import LoaderColor from './demo_components/LoaderColor';
import BackgroundColor from './demo_components/BackgroundColor';
import LoaderFixed from './demo_components/LoaderFixed';
import LoaderSnippet from './demo_components/LoaderSnippet';

import { GSpinner,
         Blotty,
         Pulse,
         AMCDots
          } from '../../index.js';

class App extends Component {
  constructor () {
    super();
    this.handleActiveLoader = this.handleActiveLoader.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleLoaderColorChange = this.handleLoaderColorChange.bind(this);
    this.handleBackgroundColorChange = this.handleBackgroundColorChange.bind(this);
    this.handleFixed = this.handleFixed.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
    this.handlePreviewClick = this.handlePreviewClick.bind(this);

    const defaultLoader = 'GSpinner';
    
    this.state = {
      activeLoader: defaultLoader,
      activeDuration: getDefaultDuration(defaultLoader),
      activeSize: 'md',
      activeLoaderColor: getDefaultLoaderColors(defaultLoader)[0],
      activeBackgroundColor: '#ffffff',
      isFixed: 'true',
      preview: false
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

  handleFixed(e) {
    const isFixed = e.target.value;
    this.setState({ isFixed, preview: false });
  }

  handlePreview() {
    if (this.state.isFixed === 'false') {
      return;
    }
    this.setState({ preview: true });
    setTimeout(() => {
      if (this.state.preview) {
        this.setState({ preview: false });
      }
    }, 6000);
  }

  handlePreviewClick() {
    if (this.state.preview) {
      this.setState({ preview: false });
    }
  }

  render() {
    const {
      activeLoader, activeDuration, activeSize,
      activeBackgroundColor, activeLoaderColor,
      isFixed
    } = this.state;

    return (
      <div className="App">
        
        <h1 className="App-header">React Animation Loaders</h1>

        <LoaderSnippet name={activeLoader} size={activeSize}
          duration={activeDuration} isFixed={isFixed}
          loaderColor={activeLoaderColor}
          backgroundColor={activeBackgroundColor}/>

        <div className="preview-controller-wrapper">
          <div className="controls">
            <LoaderSelect setLoader={this.handleActiveLoader}
            activeLoader={activeLoader}/>
            <LoaderDurationInput onDurationChange={this.handleSliderChange} 
              duration={activeDuration} activeLoader={activeLoader}/>
            
            <LoaderSize setSize={this.handleSizeChange} size={activeSize} />

            <LoaderFixed setFixed={this.handleFixed} isFixed={isFixed} renderFixed={this.handlePreview}/>
            <div className="color-pickers">
              <div className="color-picker">
                <h3>Loader Color</h3>
                <LoaderColor setColor={this.handleLoaderColorChange} color={activeLoaderColor}/>
              </div>
              <div className="color-picker">
                <h3>Background Color</h3>
                <BackgroundColor setColor={this.handleBackgroundColorChange} color={activeBackgroundColor}/>
              </div>
            </div>
          </div>

          {/* LOADERS */}
          <div className="loaders" onClick={this.handlePreviewClick}>

              {/* G Spinner */}
            <GSpinner loading={activeLoader === 'GSpinner'}
              loaderColor={activeLoaderColor}
              isFixed={isFixed === 'true' && this.state.preview}
              backgroundColor={activeBackgroundColor}
              duration={activeDuration} size={activeSize}>
              <span></span>
            </GSpinner>

            {/* Blotty */}
            <Blotty loading={activeLoader === 'Blotty'}
              loaderColor={activeLoaderColor}
              isFixed={isFixed === 'true' && this.state.preview}
              backgroundColor={activeBackgroundColor}
              duration={activeDuration} size={activeSize}>
              <span></span>
            </Blotty>

            {/* Pulse */}
            <Pulse loading={activeLoader === 'Pulse'}
              loaderColor={activeLoaderColor}
              isFixed={isFixed === 'true' && this.state.preview}
              backgroundColor={activeBackgroundColor}
              duration={activeDuration} size={activeSize}>
              <span></span>
            </Pulse>

            {/* AMCDots */}
            <AMCDots loading={activeLoader === 'AMCDots'}
              loaderColor={activeLoaderColor}
              isFixed={isFixed === 'true' && this.state.preview}
              backgroundColor={activeBackgroundColor}
              duration={activeDuration} size={activeSize}>
              <span></span>
            </AMCDots>
            
          </div>
        </div>
      </div>
    )
  }
  
}

export default App;
