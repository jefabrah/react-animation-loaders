import React from 'react';
import { StyleRoot } from 'radium';
import AMCDotsDetail from './AMCDotsDetail';

const AMCDots = ({ loading, children, duration, size, loaderColor, backgroundColor, isFixed }) => {
  const key = `AMCDots${duration}${size}`;

  return loading ? (
    <StyleRoot key={key} style={{width: '100%', height: '100%'}}>
      <AMCDotsDetail loaderColor={loaderColor} backgroundColor={backgroundColor}
        duration={duration} size={size} isFixed={isFixed} />
    </StyleRoot>
  ) : children
}

export default AMCDots;
