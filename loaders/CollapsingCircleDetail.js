import React from 'react';
import ConfiguredRadium from '../ConfiguredRadium';
import Radium from 'radium';


const CollapsingCircleDetail = ({ duration, size, loaderColor, backgroundColor, isFixed }) => {
  // determine colors
  const colors = {
    loaderColor: '#51ff20',
    backgroundColor: '#fff'
  }
  if (loaderColor && typeof loaderColor === 'string') {
    colors.loaderColor = loaderColor;
  }
  if (backgroundColor && typeof backgroundColor === 'string') {
    colors.backgroundColor = backgroundColor;
  }
  
  // determine duration
  const animationDuration = duration ? duration : 2;

  // determine size
  let circleWidth = 150;
  let circleHeight = 150;
  let leftWedgeWidth = 77.5;
  let leftWedgeHeight = 155;
  let rightWedgeWidth = 77.5;
  let rightWedgeHeight = 155;
  let circleBorderBoxShadow = 10;

  if (size) {
    if (size === 'sm') {
      circleWidth = 50;
      circleHeight = 50;
      leftWedgeWidth = 26;
      leftWedgeHeight = 52;
      rightWedgeWidth = 26;
      rightWedgeHeight = 52;
      circleBorderBoxShadow = 5;
    }
    else if (size === 'lg') {
      circleWidth = 200;
      circleHeight = 200;
      leftWedgeWidth = 110;
      leftWedgeHeight = 220;
      rightWedgeWidth = 110;
      rightWedgeHeight = 220;
      circleBorderBoxShadow = 15;
    }
  }

  const collapsingCircleKeyframes = Radium.keyframes({
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    }
  }, 'pulse');

  let collapsingCircleBoxStyles = {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: colors.backgroundColor
  }

  if (isFixed) {
    collapsingCircleBoxStyles = Object.assign(collapsingCircleBoxStyles, {
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px',
      position: 'fixed',
      zIndex: '2147483638'
    })
  }

  const collapsingCircleCircleStyles = {
    position: 'absolute',
    width: `${circleWidth}px`,
    height: `${circleHeight}px`,
    top: `calc(50% - ${circleWidth / 2}px)`,
    left: `calc(50% - ${circleWidth / 2}px)`,
    color: loaderColor,
    fontSize: '11px',
    boxShadow: `inset 0 0 0 ${circleBorderBoxShadow}px`,
    transform: 'translateZ(0)',
    borderRadius: '50%',
  }

  const collapsingCircleLeftWedgeStyles = {
    position: 'absolute',
    width: `${leftWedgeWidth}px`,
    height: `${leftWedgeHeight}px`,
    top: `calc(50% - ${leftWedgeWidth}px)`,
    left: `calc(50% - ${leftWedgeWidth}px)`,
    background: backgroundColor,
    borderRadius: `${leftWedgeWidth}px 0 0 ${leftWedgeWidth}px`,
    transformOrigin: `${leftWedgeWidth}px ${leftWedgeWidth}px`,
    animation: `x ${animationDuration}s infinite ease ${animationDuration * 0.75}s`,
    animationName: collapsingCircleKeyframes,
  }

  const collapsingCircleRightWedgeStyles = {
    position: 'absolute',
    width: `${rightWedgeWidth}px`,
    height: `${rightWedgeHeight}px`,
    top: `calc(50% - ${rightWedgeWidth}px)`,
    left: `50%`,
    background: backgroundColor,
    borderRadius: `0 ${rightWedgeWidth}px ${rightWedgeWidth}px 0`,
    transformOrigin: `0px ${rightWedgeWidth}px`,
    animation: `x ${animationDuration}s infinite ease`,
    animationName: collapsingCircleKeyframes,
  }
  

  return (

    <div style={collapsingCircleBoxStyles} >
      <div style={collapsingCircleCircleStyles} />
      <div style={collapsingCircleLeftWedgeStyles} />
      <div style={collapsingCircleRightWedgeStyles} />
    </div>
    
  )
}

export default ConfiguredRadium(CollapsingCircleDetail);
