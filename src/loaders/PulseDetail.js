import React from 'react';
import ConfiguredRadium from '../ConfiguredRadium';
import Radium from 'radium';
import getDefaultDuration from '../demo_components/get_default_duration';


const PulseDetail = ({ loading, children, duration }) => {
  const animationDuration = duration ? duration : getDefaultDuration('Pulse')

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
    width: '12.5px',
    height: '33.3px',
    marginRight: '10px',
    background: '#efefef',
    animation: `x ${animationDuration}s infinite`,
    animationName: pulseKeyframes
  }

  const pulseCenterStyles = {
    width: '12.5px',
    height: '50px',
    animation: `x ${animationDuration}s infinite`,
    animationName: pulseKeyframes,
    animationDelay: `${animationDuration / 3}s`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const pulseRightStyles = {
    width: '12.5px',
    height: '33.3px',
    marginLeft: '10px',
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
