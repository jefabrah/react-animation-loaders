import React from 'react';
import ConfiguredRadium from '../ConfiguredRadium';
import Radium, { StyleRoot } from 'radium';


const AMCDots = ({ loading, children, duration }) => {
  const animationDuration = duration ? duration : 1.5;

  const amcDotsKeyframes = Radium.keyframes({
    '0%': { transform: 'scale(0)' },
    '30%': { transform: 'scale(1)' },
    '60%, 100%': { transform: 'scale(0)' }
  }, 'AMCDotPulse');

  const amcDotsBoxStyles = {
    height: '100px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const amcDotLeftStyles = {
    height: '60px',
    width: '60px',
    marginRight: '30px',
    borderRadius: '50%',
    backgroundColor: '#222',
    transform: 'scale(0)',
    animation: `x ${animationDuration}s ease-in-out infinite`,
    animationName: amcDotsKeyframes
  }

  const amcDotCenterStyles = {
    height: '60px',
    width: '60px',
    borderRadius: '50%',
    backgroundColor: '#222',
    transform: 'scale(0)',
    animation: `x ${animationDuration}s ease-in-out infinite`,
    animationName: amcDotsKeyframes,
    animationDelay: '0.15s'
  }

  const amcDotRightStyles = {
    height: '60px',
    width: '60px',
    marginLeft: '30px',
    borderRadius: '50%',
    backgroundColor: '#222',
    transform: 'scale(0)',
    animation: `x ${animationDuration}s ease-in-out infinite`,
    animationName: amcDotsKeyframes,
    animationDelay: '0.30s'
  }

  return loading ? (
    <StyleRoot>
      <div style={amcDotsBoxStyles}>
        <div style={amcDotLeftStyles}/>
        <div style={amcDotCenterStyles}/>
        <div style={amcDotRightStyles}/>
      </div>
    </StyleRoot>

  )  : children
  
}

export default ConfiguredRadium(AMCDots);