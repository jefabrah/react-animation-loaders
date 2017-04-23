import React from 'react';
import ConfiguredRadium from '../ConfiguredRadium';
import Radium from 'radium';


const AMCDotsDetail = ({ duration, size, loaderColor, backgroundColor }) => {
  // determine colors
  const colors = {
    loaderColor: '#222',
    backgroundColor: '#fff'
  };

  if (loaderColor && typeof loaderColor === 'string') {
    colors.loaderColor = loaderColor;
  }
  if (backgroundColor && typeof backgroundColor === 'string') {
    colors.backgroundColor = backgroundColor;
  }
  console.log(colors.backgroundColor);
  console.log(backgroundColor)
  // determine duration
  const animationDuration = duration ? duration : 1.5;

  // determine sizes
  let dotSize = 60;
  let dotMargin = 30;

  if (size) {
    if (size === 'sm') {
      dotSize = 30;
      dotMargin = 15;
    }
    else if (size === 'lg') {
      dotSize = 90;
      dotMargin = 45;
    }
  }



  const amcDotsKeyframes = Radium.keyframes({
    '0%': { transform: 'scale(0)' },
    '30%': { transform: 'scale(1)' },
    '60%, 100%': { transform: 'scale(0)' }
  }, 'AMCDotPulse');

  const amcDotsBoxStyles = {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor
  }

  const amcDotLeftStyles = {
    height: `${dotSize}px`,
    width: `${dotSize}px`,
    marginRight: `${dotMargin}px`,
    borderRadius: '50%',
    backgroundColor: colors.loaderColor,
    transform: 'scale(0)',
    animation: `x ${animationDuration}s ease-in-out infinite`,
    animationName: amcDotsKeyframes
  }

  const amcDotCenterStyles = {
    height: `${dotSize}px`,
    width: `${dotSize}px`,
    borderRadius: '50%',
    backgroundColor: colors.loaderColor,
    transform: 'scale(0)',
    animation: `x ${animationDuration}s ease-in-out infinite`,
    animationName: amcDotsKeyframes,
    animationDelay: `${animationDuration / 10}s`
  }

  const amcDotRightStyles = {
    height: `${dotSize}px`,
    width: `${dotSize}px`,
    marginLeft: `${dotMargin}px`,
    borderRadius: '50%',
    backgroundColor: colors.loaderColor,
    transform: 'scale(0)',
    animation: `x ${animationDuration}s ease-in-out infinite`,
    animationName: amcDotsKeyframes,
    animationDelay: `${animationDuration / 5}s`
  }

  return (

      <div style={amcDotsBoxStyles}>
        <div style={amcDotLeftStyles}/>
        <div style={amcDotCenterStyles}/>
        <div style={amcDotRightStyles}/>
      </div>

  )
  
}

export default ConfiguredRadium(AMCDotsDetail);
