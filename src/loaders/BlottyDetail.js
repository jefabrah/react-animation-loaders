import React from 'react';
import ConfiguredRadium from '../ConfiguredRadium';
import Radium from 'radium';


const Blotty = ({ loading, children, duration, size, loaderColor }) => {
  // determine colors
  const colors = {
    loaderColor: '#797979'
  }

  if (loaderColor && typeof loaderColor === 'string') {
    colors.loaderColor = loaderColor;
  }
  
  // determine duration
  const animationDuration = duration ? duration : 1.5;

  // determine size
  let loaderSize = 50;
  let translateL = 2;
  let translateM = 6;
  let translateS = 9;

  if (size === 'sm') {
    loaderSize = 25;
    translateL = 1;
    translateM = 3;
    translateS = 4.5;
  }
  else if (size === 'lg') {
    loaderSize = 75;
    translateL = 3;
    translateM = 9;
    translateS = 13.5;
  }

  const blotLRKeyframes = Radium.keyframes({
    '25%, 75%': { transform: `translateX(${translateL}em) scale(0.75)` },
    '95%': { transform: 'translateX(0em) scale(1)' }
  }, 'BlotLR');

  const blotLLKeyframes = Radium.keyframes({
    '25%, 75%': { transform: `translateX(-${translateL}em) scale(0.75)` },
    '95%': { transform: 'translateX(0em) scale(1)' }
  }, 'BlotLL');

  const blotMRKeyframes = Radium.keyframes({
    '25%': { transform: `translateX(${translateL}em) scale(0.75)` },
    '50%, 75%': { transform: `translateX(${translateM}em) scale(0.6)` },
    '95%': { transform: 'translateX(0em) scale(1)' }
  }, 'BlotMR');

  const blotMLKeyframes = Radium.keyframes({
    '25%': { transform: `translateX(-${translateL}em) scale(0.75)` },
    '50%, 75%': { transform: `translateX(-${translateM}em) scale(0.6)` },
    '95%': { transform: 'translateX(0em) scale(1)' }
  }, 'BlotML');

  const blotSRKeyframes = Radium.keyframes({
    '25%': { transform: `translateX(${translateL}em) scale(0.75)` },
    '50%': { transform: `translateX(${translateM}em) scale(0.6)` },
    '75%': { transform: `translateX(${translateS}em) scale(0.5)` },
    '95%': { transform: 'translateX(0em) scale(1)' }
  }, 'BlotSR');

  const blotSLKeyframes = Radium.keyframes({
    '25%': { transform: `translateX(-${translateL}em) scale(0.75)` },
    '50%': { transform: `translateX(-${translateM}em) scale(0.6)` },
    '75%': { transform: `translateX(-${translateS}em) scale(0.5)` },
    '95%': { transform: 'translateX(0em) scale(1)' }
  }, 'BlotSL');


  const blottyBoxStyles = {
    height: '100%',
    width: '100%',
    position: 'relative',
    minHeight: '100px'
  }

  const blottyLRStyles = {
    height: `${loaderSize}px`,
    width: `${loaderSize}px`,
    position: 'absolute',
    margin: 'auto',
    top: '0px',
    bottom: '0px',
    right: '0px',
    left: '0px',
    borderRadius: '50%',
    backgroundColor: colors.loaderColor,
    transformOrigin: '50% 50%',
    animation: `x ${animationDuration}s infinite ease-in-out`,
    animationName: blotLRKeyframes,
  }

  const blottyLLStyles = {
    height: `${loaderSize}px`,
    width: `${loaderSize}px`,
    position: 'absolute',
    margin: 'auto',
    top: '0px',
    bottom: '0px',
    right: '0px',
    left: '0px',
    borderRadius: '50%',
    backgroundColor: colors.loaderColor,
    transformOrigin: '50% 50%',
    animation: `x ${animationDuration}s infinite ease-in-out`,
    animationName: blotLLKeyframes
  }

  const blottyMRStyles = {
    height: `${loaderSize / 1.25}px`,
    width: `${loaderSize / 1.25}px`,
    position: 'absolute',
    margin: 'auto',
    top: '0px',
    bottom: '0px',
    right: '0px',
    left: '0px',
    borderRadius: '50%',
    backgroundColor: colors.loaderColor,
    transformOrigin: '50% 50%',
    animation: `x ${animationDuration}s infinite ease-in-out`,
    animationName: blotMRKeyframes
  }

  const blottyMLStyles = {
    height: `${loaderSize / 1.25}px`,
    width: `${loaderSize / 1.25}px`,
    position: 'absolute',
    margin: 'auto',
    top: '0px',
    bottom: '0px',
    right: '0px',
    left: '0px',
    borderRadius: '50%',
    backgroundColor: colors.loaderColor,
    transformOrigin: '50% 50%',
    animation: `x ${animationDuration}s infinite ease-in-out`,
    animationName: blotMLKeyframes
  }

  const blottySRStyles = {
    height: `${Math.round(loaderSize / 1.666)}px`,
    width: `${Math.round(loaderSize / 1.666)}px`,
    position: 'absolute',
    margin: 'auto',
    top: '0px',
    bottom: '0px',
    right: '0px',
    left: '0px',
    borderRadius: '50%',
    backgroundColor: colors.loaderColor,
    transformOrigin: '50% 50%',
    animation: `x ${animationDuration}s infinite ease-in-out`,
    animationName: blotSRKeyframes
  }

  const blottySLStyles = {
    height: `${Math.round(loaderSize / 1.666)}px`,
    width: `${Math.round(loaderSize / 1.666)}px`,
    position: 'absolute',
    margin: 'auto',
    top: '0px',
    bottom: '0px',
    right: '0px',
    left: '0px',
    borderRadius: '50%',
    backgroundColor: colors.loaderColor,
    transformOrigin: '50% 50%',
    animation: `x ${animationDuration}s infinite ease-in-out`,
    animationName: blotSLKeyframes
  }

  return loading ? (

      <div style={blottyBoxStyles} >
        <div style={blottyLRStyles} />
        <div style={blottyLLStyles} />
        <div style={blottyMRStyles} />
        <div style={blottyMLStyles} />
        <div style={blottySRStyles} />
        <div style={blottySLStyles} />
      </div>

  ) : children


}

export default ConfiguredRadium(Blotty);
