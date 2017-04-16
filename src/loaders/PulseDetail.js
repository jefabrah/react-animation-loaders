import React from 'react';
import ConfiguredRadium from '../ConfiguredRadium';
import Radium from 'radium';


const PulseDetail = ({ loading, children, duration, size }) => {
  const animationDuration = duration ? duration : 0.75;

  let pulseWidth = 12.5;
  let centerPulseHeight = 50;
  let sidePulseHeight = 33.3;
  let sidePulseMargin = 10;

  if (size === 'sm') {
    pulseWidth = 6.25;
    centerPulseHeight = 25;
    sidePulseHeight = 16.65;
    sidePulseMargin = 5;
  }
  else if (size === 'lg') {
    pulseWidth = 25;
    centerPulseHeight = 100;
    sidePulseHeight = 66.6;
    sidePulseMargin = 20;
  }

  const pulseKeyframes = Radium.keyframes({
    '0%, 10%': { background: '#efefef' },
    '50%': { background: '#5b5b5b' }
  }, 'pulse');

  const pulseBoxStyles = {
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const pulseLeftStyles = {
    width: `${pulseWidth}px`,
    height: `${sidePulseHeight}px`,
    marginRight: `${sidePulseMargin}px`,
    background: '#efefef',
    animation: `x ${animationDuration}s infinite`,
    animationName: pulseKeyframes
  }

  const pulseCenterStyles = {
    width: `${pulseWidth}px`,
    height: `${centerPulseHeight}px`,
    animation: `x ${animationDuration}s infinite`,
    animationName: pulseKeyframes,
    animationDelay: `${animationDuration / 3}s`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const pulseRightStyles = {
    width: `${pulseWidth}px`,
    height: `${sidePulseHeight}px`,
    marginLeft: `${sidePulseMargin}px`,
    background: '#efefef',
    animation: `x ${animationDuration}s infinite`,
    animationName: pulseKeyframes,
    animationDelay: `${animationDuration / 1.5}s`
  }
  

  return loading ? (

    <div style={pulseBoxStyles} >
      <div style={pulseLeftStyles} />
      <div style={pulseCenterStyles} />
      <div style={pulseRightStyles} />
    </div>
    
  ) : children
}

export default ConfiguredRadium(PulseDetail);
