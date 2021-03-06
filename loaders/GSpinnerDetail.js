import React from 'react';
import ConfiguredRadium from '../ConfiguredRadium';
import Radium from 'radium';

const GSpinnerDetail = ({ duration, size, loaderColor, backgroundColor, isFixed }) => {
  // determine colors
  const colors = {
    loaderColor: '#cecece',
    backgroundColor: '#fff'
  }

  if (loaderColor && typeof loaderColor === 'string') {
    colors.loaderColor = loaderColor;
  }
  if (backgroundColor && typeof backgroundColor === 'string') {
    colors.backgroundColor = backgroundColor;
  }
  
  // determine duration
  const animationDuration = duration ? duration : 4;

  // determine size
  let loaderSize = 40;
  if (size === 'sm') {
    loaderSize = 20;
  }
  else if (size === 'lg') {
    loaderSize = 80;
  }
  const translationHeight = loaderSize * 2;

  // ANIMATIONS
  const gSpinnerBoxRotate = Radium.keyframes({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  }, 'gSpinnerBoxRotate')

  const gSpinnerC1Animation = Radium.keyframes({
    '0%': {
      background: colors.loaderColor,
      transform: `translateY(-${translationHeight}px)`,
    },
    '24%': {
      background: colors.loaderColor,
    },
    '25%': {
      background: colors.loaderColor,
      transform: 'translateY(0px)',
    },
    '50%': {
      background: colors.loaderColor,
      transform: `translateY(-${translationHeight}px)`,
    },
    '55%': {
      background: colors.loaderColor,
      transform: `translateY(-${translationHeight}px)`,
    },
    '74%': {
      background: colors.loaderColor,
    },
    '75%': {
      background: colors.loaderColor,
      transform: 'translateY(0px)',
    },
    '100%': {
      background: colors.loaderColor,
      transform: `translateY(-${translationHeight}px)`
    }
  }, 'gSpinnerC1Animation');

  const gSpinnerC2Animation = Radium.keyframes({
    '0%': {
      background: colors.loaderColor,
      transform: `translateX(-${translationHeight}px)`,
    },
    '24%': {
      background: colors.loaderColor,
    },
    '25%': {
      background: colors.loaderColor,
      transform: 'translateX(0px)',
    },
    '50%': {
      background: colors.loaderColor,
      transform: `translateX(-${translationHeight}px)`,
    },
    '55%': {
      background: colors.loaderColor,
      transform: `translateX(-${translationHeight}px)`,
    },
    '74%': {
      background: colors.loaderColor,
    },
    '75%': {
      background: colors.loaderColor,
      transform: 'translateX(0px)',
    },
    '100%': {
      background: colors.loaderColor,
      transform: `translateX(-${translationHeight}px)`
    }
  }, 'gSpinnerC2Animation');

  const gSpinnerC3Animation = Radium.keyframes({
    '0%': {
      background: colors.loaderColor,
      transform: `translateY(${translationHeight}px)`,
    },
    '24%': {
      background: colors.loaderColor,
    },
    '25%': {
      background: colors.loaderColor,
      transform: 'translateY(0px)',
    },
    '50%': {
      background: colors.loaderColor,
      transform: `translateY(${translationHeight}px)`,
    },
    '55%': {
      background: colors.loaderColor,
      transform: `translateY(${translationHeight}px)`,
    },
    '74%': {
      background: colors.loaderColor,
    },
    '75%': {
      background: colors.loaderColor,
      transform: 'translateY(0px)',
    },
    '100%': {
      background: colors.loaderColor,
      transform: `translateY(${translationHeight}px)`
    }
  }, 'gSpinnerC3Animation');

  const gSpinnerC4Animation = Radium.keyframes({
    '0%': {
      background: colors.loaderColor,
      transform: `translateX(${translationHeight}px)`,
    },
    '24%': {
      background: colors.loaderColor,
    },
    '25%': {
      background: colors.loaderColor,
      transform: 'translateX(0px)',
    },
    '50%': {
      background: colors.loaderColor,
      transform: `translateX(${translationHeight}px)`,
    },
    '55%': {
      background: colors.loaderColor,
      transform: `translateX(${translationHeight}px)`,
    },
    '74%': {
      background: colors.loaderColor,
    },
    '75%': {
      background: colors.loaderColor,
      transform: 'translateX(0px)',
    },
    '100%': {
      background: colors.loaderColor,
      transform: `translateX(${translationHeight}px)`
    }
  }, 'gSpinnerC4Animation');


  // STYLING
  let gSpinnerWrapperStyles = {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: colors.backgroundColor
  }

  if (isFixed) {
    gSpinnerWrapperStyles = Object.assign(gSpinnerWrapperStyles, {
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px',
      position: 'fixed',
      zIndex: '2147483638'
    })
  }

  const gSpinnerBoxStyles = {
    height: `100px`,
    width: `100px`,
    position: 'absolute',
    top: `calc(50% - 50px)`,
    left: `calc(50% - 50px)`,
    animation: `x ${animationDuration / 2}s cubic-bezier(0.465, 0.183, 0.153, 0.946) infinite`,
    animationName: gSpinnerBoxRotate
  }

  const gSpinnerC1 = {
    
    height: `${loaderSize}px`,
    width: `${loaderSize}px`,
    position: 'absolute',
    borderRadius: '50%',
    background: colors.loaderColor,
    top: `calc(50% - ${loaderSize / 2}px)`,
    left: `calc(50% - ${loaderSize / 2}px)`,
    animation: `x ${animationDuration}s cubic-bezier(0.645, 0.045, 0.355, 1) infinite`,
    animationName: gSpinnerC1Animation
  }

  const gSpinnerC2 = {
    
    height: `${loaderSize}px`,
    width: `${loaderSize}px`,
    position: 'absolute',
    borderRadius: '50%',
    background: colors.loaderColor,
    top: `calc(50% - ${loaderSize / 2}px)`,
    left: `calc(50% - ${loaderSize / 2}px)`,    
    animation: `x ${animationDuration}s cubic-bezier(0.645, 0.045, 0.355, 1) infinite`,
    animationName: gSpinnerC2Animation
  }

  const gSpinnerC3 = {
    
    height: `${loaderSize}px`,
    width: `${loaderSize}px`,
    position: 'absolute',
    borderRadius: '50%',
    background: colors.loaderColor,
    top: `calc(50% - ${loaderSize / 2}px)`,
    left: `calc(50% - ${loaderSize / 2}px)`,    
    animation: `x ${animationDuration}s cubic-bezier(0.645, 0.045, 0.355, 1) infinite`,
    animationName: gSpinnerC3Animation
  }

  const gSpinnerC4 = {
    
    height: `${loaderSize}px`,
    width: `${loaderSize}px`,
    position: 'absolute',
    borderRadius: '50%',
    background: colors.loaderColor,
    top: `calc(50% - ${loaderSize / 2}px)`,
    left: `calc(50% - ${loaderSize / 2}px)`,    
    animation: `x ${animationDuration}s cubic-bezier(0.645, 0.045, 0.355, 1) infinite`,
    animationName: gSpinnerC4Animation
  }

  return (

    <div style={gSpinnerWrapperStyles}>
      <div style={gSpinnerBoxStyles}>
        <div style={gSpinnerC1} />
        <div style={gSpinnerC2} />
        <div style={gSpinnerC3} />
        <div style={gSpinnerC4} />
      </div>
    </div>

  )
}

export default ConfiguredRadium(GSpinnerDetail);
