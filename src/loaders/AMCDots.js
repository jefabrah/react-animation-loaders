import React from 'react';
import { StyleRoot } from 'radium';
import AMCDotsDetail from './AMCDotsDetail';

const AMCDots = ({ loading, children, duration, size, loaderColor }) => {
  const key = `AMCDots${duration}${size}`;

  return (
    <StyleRoot key={key}>
      <AMCDotsDetail loading={loading} loaderColor={loaderColor}
        duration={duration} size={size}>
        {children}
      </AMCDotsDetail>
    </StyleRoot>
  )
}

export default AMCDots;
