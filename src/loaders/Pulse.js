import React from 'react';
import { StyleRoot } from 'radium';
import PulseDetail from './PulseDetail';

const Pulse = ({ loading, children, duration, size, loaderColor, backgroundColor, isFixed }) => {
  const key = `pulse${duration}${size}`;

  return loading ? (
    <StyleRoot key={key} style={{width: '100%', height: '100%'}}>
      <PulseDetail loaderColor={loaderColor} backgroundColor={backgroundColor}
        duration={duration} size={size} isFixed={isFixed} />
    </StyleRoot>
  ) : children
}

export default Pulse;
