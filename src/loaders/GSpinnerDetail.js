import React from 'react';
import ConfiguredRadium from '../ConfiguredRadium';
import Radium from 'radium';

const GSpinnerDetail = ({ loading, children, duration, size }) => {
  const animationDuration = duration ? duration : 4;
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
      background: '#4384F8',
      transform: `translateY(-${translationHeight}px)`,
    },
    '24%': {
      background: '#4384F8',
    },
    '25%': {
      background: '#FBBD06',
      transform: 'translateY(0px)',
    },
    '50%': {
      background: '#FBBD06',
      transform: `translateY(-${translationHeight}px)`,
    },
    '55%': {
      background: '#FBBD06',
      transform: `translateY(-${translationHeight}px)`,
    },
    '74%': {
      background: '#FBBD06',
    },
    '75%': {
      background: '#4384F8',
      transform: 'translateY(0px)',
    },
    '100%': {
      background: '#4384F8',
      transform: `translateY(-${translationHeight}px)`
    }
  }, 'gSpinnerC1Animation');

  const gSpinnerC2Animation = Radium.keyframes({
    '0%': {
      background: '#34A855',
      transform: `translateX(-${translationHeight}px)`,
    },
    '24%': {
      background: '#34A855',
    },
    '25%': {
      background: '#EA4436',
      transform: 'translateX(0px)',
    },
    '50%': {
      background: '#EA4436',
      transform: `translateX(-${translationHeight}px)`,
    },
    '55%': {
      background: '#EA4436',
      transform: `translateX(-${translationHeight}px)`,
    },
    '74%': {
      background: '#EA4436',
    },
    '75%': {
      background: '#34A855',
      transform: 'translateX(0px)',
    },
    '100%': {
      background: '#34A855',
      transform: `translateX(-${translationHeight}px)`
    }
  }, 'gSpinnerC2Animation');

  const gSpinnerC3Animation = Radium.keyframes({
    '0%': {
      background: '#FBBD06',
      transform: `translateY(${translationHeight}px)`,
    },
    '24%': {
      background: '#FBBD06',
    },
    '25%': {
      background: '#4384F8',
      transform: 'translateY(0px)',
    },
    '50%': {
      background: '#4384F8',
      transform: `translateY(${translationHeight}px)`,
    },
    '55%': {
      background: '#4384F8',
      transform: `translateY(${translationHeight}px)`,
    },
    '74%': {
      background: '#4384F8',
    },
    '75%': {
      background: '#FBBD06',
      transform: 'translateY(0px)',
    },
    '100%': {
      background: '#FBBD06',
      transform: `translateY(${translationHeight}px)`
    }
  }, 'gSpinnerC3Animation');

  const gSpinnerC4Animation = Radium.keyframes({
    '0%': {
      background: '#EA4436',
      transform: `translateX(${translationHeight}px)`,
    },
    '24%': {
      background: '#EA4436',
    },
    '25%': {
      background: '#34A855',
      transform: 'translateX(0px)',
    },
    '50%': {
      background: '#34A855',
      transform: `translateX(${translationHeight}px)`,
    },
    '55%': {
      background: '#34A855',
      transform: `translateX(${translationHeight}px)`,
    },
    '74%': {
      background: '#34A855',
    },
    '75%': {
      background: '#EA4436',
      transform: 'translateX(0px)',
    },
    '100%': {
      background: '#EA4436',
      transform: `translateX(${translationHeight}px)`
    }
  }, 'gSpinnerC4Animation');


  // STYLING
  const gSpinnerWrapperStyles = {
    position: 'relative',
    width: '100%',
    height: '220px',
  }

  const gSpinnerBoxStyles = {
    position: 'relative',
    margin: '0 auto',
    width: '220px',
    height: '220px',
    animation: `x ${animationDuration / 2}s cubic-bezier(0.465, 0.183, 0.153, 0.946) infinite`,
    animationName: gSpinnerBoxRotate
  }

  const gSpinnerC1 = {
    
    height: `${loaderSize}px`,
    width: `${loaderSize}px`,
    position: 'absolute',
    borderRadius: '50%',
    background: '#4384F8',
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
    background: '#4384F8',
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
    background: '#4384F8',
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
    background: '#4384F8',
    top: `calc(50% - ${loaderSize / 2}px)`,
    left: `calc(50% - ${loaderSize / 2}px)`,    
    animation: `x ${animationDuration}s cubic-bezier(0.645, 0.045, 0.355, 1) infinite`,
    animationName: gSpinnerC4Animation
  }

  return loading ? (

    <div style={gSpinnerWrapperStyles}>
      <div style={gSpinnerBoxStyles}>
        <div style={gSpinnerC1} />
        <div style={gSpinnerC2} />
        <div style={gSpinnerC3} />
        <div style={gSpinnerC4} />
      </div>
    </div>

  ) : children
}

export default ConfiguredRadium(GSpinnerDetail);
