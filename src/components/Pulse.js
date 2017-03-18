import React, { Component } from 'react';
import ConfiguredRadium from '../ConfiguredRadium';
import Radium from 'radium';


const Pulse = () => {
  
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
    animation: 'x 750ms infinite',
    animationName: pulseKeyframes
  }

  const pulseCenterStyles = {
    width: '12.5px',
    height: '50px',
    animation: 'x 750ms infinite',
    animationName: pulseKeyframes,
    animationDelay: '250ms',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const pulseRightStyles = {
    width: '12.5px',
    height: '33.3px',
    marginLeft: '10px',
    background: '#efefef',
    animation: 'x 750ms infinite',
    animationName: pulseKeyframes,
    animationDelay: '500ms'
  }
  

  return (
    <div style={pulseBoxStyles} >
      <div style={pulseLeftStyles} />
      <div style={pulseCenterStyles} />
      <div style={pulseRightStyles} />
    </div>
  )
}

export default ConfiguredRadium(Pulse);