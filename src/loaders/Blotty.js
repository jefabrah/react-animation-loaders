import React from 'react';
import { StyleRoot } from 'radium';
import BlottyDetail from './BlottyDetail';

const Blotty = ({ loading, children, duration, size, loaderColor }) => {
  const key = `blotty${duration}${size}`;

  return (
    <StyleRoot key={key}>
      <BlottyDetail loading={loading} loaderColor={loaderColor}
        duration={duration} size={size}>
        {children}
      </BlottyDetail>
    </StyleRoot>
  )
}

export default Blotty;
