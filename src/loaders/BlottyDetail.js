import React from 'react';
import ConfiguredRadium from '../ConfiguredRadium';
import Radium, { StyleRoot } from 'radium';


const Blotty = ({ loading, children }) => {

  const blotLRKeyframes = Radium.keyframes({
    '25%, 75%': { transform: 'translateX(2em) scale(0.75)' },
    '95%': { transform: 'translateX(0em) scale(1)' }
  }, 'BlotLR');

  const blotLLKeyframes = Radium.keyframes({
    '25%, 75%': { transform: 'translateX(-2em) scale(0.75)' },
    '95%': { transform: 'translateX(0em) scale(1)' }
  }, 'BlotLL');

  const blotMRKeyframes = Radium.keyframes({
    '25%': { transform: 'translateX(2em) scale(0.75)' },
    '50%, 75%': { transform: 'translateX(6em) scale(0.6)' },
    '95%': { transform: 'translateX(0em) scale(1)' }
  }, 'BlotMR');

  const blotMLKeyframes = Radium.keyframes({
    '25%': { transform: 'translateX(-2em) scale(0.75)' },
    '50%, 75%': { transform: 'translateX(-6em) scale(0.6)' },
    '95%': { transform: 'translateX(0em) scale(1)' }
  }, 'BlotML');

  const blotSRKeyframes = Radium.keyframes({
    '25%': { transform: 'translateX(2em) scale(0.75)' },
    '50%': { transform: 'translateX(6em) scale(0.6)' },
    '75%': { transform: 'translateX(9em) scale(0.5)' },
    '95%': { transform: 'translateX(0em) scale(1)' }
  }, 'BlotSR');

  const blotSLKeyframes = Radium.keyframes({
    '25%': { transform: 'translateX(-2em) scale(0.75)' },
    '50%': { transform: 'translateX(-6em) scale(0.6)' },
    '75%': { transform: 'translateX(-9em) scale(0.5)' },
    '95%': { transform: 'translateX(0em) scale(1)' }
  }, 'BlotSL');


  const blottyBoxStyles = {
    height: '100%',
    width: '100%',
    position: 'relative',
    minHeight: '100px'
  }

  const blottyLRStyles = {
    height: '50px',
    width: '50px',
    position: 'absolute',
    margin: 'auto',
    top: '0px',
    bottom: '0px',
    right: '0px',
    left: '0px',
    borderRadius: '50%',
    backgroundColor: '#797979',
    transformOrigin: '50% 50%',
    animation: 'x 1.5s infinite ease-in-out',
    animationName: blotLRKeyframes,
  }

  const blottyLLStyles = {
    height: '50px',
    width: '50px',
    position: 'absolute',
    margin: 'auto',
    top: '0px',
    bottom: '0px',
    right: '0px',
    left: '0px',
    borderRadius: '50%',
    backgroundColor: '#797979',
    transformOrigin: '50% 50%',
    animation: 'x 1.5s infinite ease-in-out',
    animationName: blotLLKeyframes
  }

  const blottyMRStyles = {
    height: '40px',
    width: '40px',
    position: 'absolute',
    margin: 'auto',
    top: '0px',
    bottom: '0px',
    right: '0px',
    left: '0px',
    borderRadius: '50%',
    backgroundColor: '#797979',
    transformOrigin: '50% 50%',
    animation: 'x 1.5s infinite ease-in-out',
    animationName: blotMRKeyframes
  }

  const blottyMLStyles = {
    height: '40px',
    width: '40px',
    position: 'absolute',
    margin: 'auto',
    top: '0px',
    bottom: '0px',
    right: '0px',
    left: '0px',
    borderRadius: '50%',
    backgroundColor: '#797979',
    transformOrigin: '50% 50%',
    animation: 'x 1.5s infinite ease-in-out',
    animationName: blotMLKeyframes
  }

  const blottySRStyles = {
    height: '30px',
    width: '30px',
    position: 'absolute',
    margin: 'auto',
    top: '0px',
    bottom: '0px',
    right: '0px',
    left: '0px',
    borderRadius: '50%',
    backgroundColor: '#797979',
    transformOrigin: '50% 50%',
    animation: 'x 1.5s infinite ease-in-out',
    animationName: blotSRKeyframes
  }

  const blottySLStyles = {
    height: '30px',
    width: '30px',
    position: 'absolute',
    margin: 'auto',
    top: '0px',
    bottom: '0px',
    right: '0px',
    left: '0px',
    borderRadius: '50%',
    backgroundColor: '#797979',
    transformOrigin: '50% 50%',
    animation: 'x 1.5s infinite ease-in-out',
    animationName: blotSLKeyframes
  }

  return loading ? (
    <StyleRoot>
      <div style={blottyBoxStyles} >
        <div style={blottyLRStyles} />
        <div style={blottyLLStyles} />
        <div style={blottyMRStyles} />
        <div style={blottyMLStyles} />
        <div style={blottySRStyles} />
        <div style={blottySLStyles} />
      </div>
    </StyleRoot>

  ) : children

}

export default ConfiguredRadium(Blotty);
