import React from 'react';
import { StyleRoot } from 'radium';
import BlottyDetail from './BlottyDetail';

const Blotty = ({ loading, children, duration, size, loaderColor, backgroundColor, isFixed }) => {
  const key = `blotty${duration}${size}`;

  return loading ? (
    <StyleRoot key={key} style={{width: '100%', height: '100%'}}>
      <BlottyDetail loaderColor={loaderColor} backgroundColor={backgroundColor}
        duration={duration} size={size} isFixed={isFixed} />
    </StyleRoot>
  ) : children
}

export default Blotty;
